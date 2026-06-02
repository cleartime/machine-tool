import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const outputRoot = path.join(root, "assets", "products");
const configPath = path.join(root, "products.config.json");
const baseUrl = "https://www.rincoultrasonics.com";
const categoryPath = "/zh-cn/products/ultrasonic-cutting-devices/";
const catalog = "ultrasonic-cutting-devices";

const englishFallbacks = {
  "ultrasonic-cutting-station-cs35": {
    name: "Ultrasonic cutting station CS35-3 and CS35-5",
    description: "The CS35 cutting station is a practical solution for fast, flexible and high-quality manual cutting of films and technical textiles."
  },
  "ultrasonic-hand-cutter-hc35-5-hc35-7": {
    name: "Ultrasonic hand cutters HC35-5 and HC35-7",
    description: "HC35-5 and HC35-7 hand cutters cut and seal textiles and fabrics with synthetic content in a single manual operation."
  }
};

function strip(value = "") {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function slugFromUrl(url) {
  return new URL(url).pathname.split("/").filter(Boolean).at(-1);
}

function extensionFromUrl(url) {
  const extension = path.extname(new URL(url).pathname).toLowerCase();
  return extension && extension.length <= 5 ? extension : ".jpg";
}

function bestFromSrcset(srcset) {
  if (!srcset) return null;
  const candidates = srcset.split(",").map((part) => {
    const [url, size = "0w"] = part.trim().split(/\s+/);
    return { url, width: Number(size.replace("w", "")) || 0 };
  });
  candidates.sort((a, b) => b.width - a.width);
  return candidates[0]?.url || null;
}

function uniquePush(list, item) {
  if (!list.includes(item)) list.push(item);
}

function imageSize(filePath) {
  const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", filePath], { encoding: "utf8" });
  return {
    width: Number(output.match(/pixelWidth:\s*(\d+)/)?.[1] || 0),
    height: Number(output.match(/pixelHeight:\s*(\d+)/)?.[1] || 0)
  };
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

async function download(url, destination) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  fs.writeFileSync(destination, Buffer.from(await response.arrayBuffer()));
}

function extractTitle(html) {
  return strip(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "");
}

function extractDescription(html) {
  return strip(html.match(/<meta name="description" content="([^"]*)"/i)?.[1] || "");
}

function inferSpecs(name, description) {
  const source = `${name} ${description}`;
  const frequency = source.match(/\b(20|35|40)\s?kHz\b/i)?.[0]?.replace(/khz/i, "kHz") || "custom";
  const power = source.match(/\b(400|800|1000|1200|1500|2000)\s?W\b/i)?.[0]?.replace(/w/i, "W") || "matched to generator";
  const certification = source.match(/\bIP69\b/i)?.[0];
  return certification ? { frequency, power, certification } : { frequency, power };
}

function inferApplications(name, description) {
  const text = `${name} ${description}`.toLowerCase();
  const apps = [];
  if (text.includes("food") || text.includes("食品")) apps.push("food cutting");
  if (text.includes("textile") || text.includes("纺织")) apps.push("technical textiles");
  if (text.includes("film") || text.includes("膜")) apps.push("films");
  if (text.includes("automation") || text.includes("自动")) apps.push("automation");
  if (text.includes("manual") || text.includes("手")) apps.push("manual cutting");
  if (!apps.length) apps.push("ultrasonic cutting");
  return [...new Set(apps)].slice(0, 4);
}

function extractImages(html) {
  const beforeAddress = html.split("rinco-ultrasonics-shanghai")[0] || html;
  const urls = [];
  for (const match of beforeAddress.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    const src = tag.match(/\ssrc="([^"]+)"/i)?.[1];
    const srcset = tag.match(/\ssrcset="([^"]+)"/i)?.[1];
    const candidate = bestFromSrcset(srcset) || src;
    if (!candidate) continue;
    const url = new URL(candidate.replaceAll("&amp;", "&"), baseUrl).href;
    if (!url.includes("rinco-ultrasonics.ams3.cdn.digitaloceanspaces.com/data/_transforms/Catalogue-Public/")) continue;
    if (url.includes("Product-Feature-Icons")) continue;
    if (url.includes("03_Website_general")) continue;
    if (!url.match(/_(512x512|512x768|512x770|AUTOx1024|256x256)_/)) continue;
    uniquePush(urls, url);
  }
  return urls.slice(0, 8);
}

async function sourceProduct(slug) {
  const zhUrl = `${baseUrl}${categoryPath}${slug}/`;
  const enUrl = `${baseUrl}/en-us/products/${catalog}/${slug}/`;
  const [zhHtml, enResponse] = await Promise.all([
    fetch(zhUrl).then((res) => res.text()),
    fetch(enUrl)
  ]);
  const enHtml = enResponse.ok ? await enResponse.text() : "";
  const zhName = extractTitle(zhHtml);
  const zhDescription = extractDescription(zhHtml);
  const enName = enHtml ? extractTitle(enHtml) : "";
  const enDescription = enHtml ? extractDescription(enHtml) : "";
  const fallback = englishFallbacks[slug] || {};
  const imageUrls = extractImages(zhHtml);
  return {
    slug,
    category: slug.includes("converter") ? "converter" : slug.includes("head") ? "cutting-head" : slug.includes("hand") ? "handheld-device" : "cutting-device",
    catalog,
    name: fallback.name || (enName && !enName.includes("Oops") ? enName : zhName),
    names: {
      zh: zhName,
      en: fallback.name || (enName && !enName.includes("Oops") ? enName : zhName)
    },
    descriptions: {
      zh: zhDescription,
      en: fallback.description || (enDescription && enDescription !== "Error 404" ? enDescription : zhDescription)
    },
    sourceUrl: zhUrl,
    ...inferSpecs(`${zhName} ${fallback.name || enName}`, `${zhDescription} ${fallback.description || enDescription}`),
    applications: inferApplications(`${zhName} ${fallback.name || enName}`, `${zhDescription} ${fallback.description || enDescription}`),
    imageUrls
  };
}

fs.mkdirSync(outputRoot, { recursive: true });

const categoryHtml = await fetch(`${baseUrl}${categoryPath}`).then((res) => res.text());
const links = [
  ...new Set(
    [...categoryHtml.matchAll(/href="([^"]*\/zh-cn\/products\/ultrasonic-cutting-devices\/[^"]+)"/g)]
      .map((match) => new URL(match[1], baseUrl).href)
      .filter((url) => slugFromUrl(url) !== "ultrasonic-cutting-devices")
  )
];

const sourcedProducts = [];
for (const link of links) {
  const slug = slugFromUrl(link);
  console.log(`Syncing ${slug}`);
  const product = await sourceProduct(slug);
  const productDir = path.join(outputRoot, catalog, slug);
  fs.mkdirSync(productDir, { recursive: true });
  const images = [];
  const hashes = new Set();
  for (const [index, url] of product.imageUrls.entries()) {
    const filename = `${String(index + 1).padStart(2, "0")}${extensionFromUrl(url)}`;
    const destination = path.join(productDir, filename);
    await download(url, destination);
    const size = imageSize(destination);
    if (size.width < 96 || size.height < 240) continue;
    const hash = fileHash(destination);
    if (hashes.has(hash)) continue;
    hashes.add(hash);
    images.push(`products/${catalog}/${slug}/${filename}`);
  }
  sourcedProducts.push({
    ...product,
    image: images[0],
    images,
    imageUrls: undefined
  });
}

const productsConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));
productsConfig.categories = {
  ...productsConfig.categories,
  "cutting-device": { zh: "超声波切割设备", en: "Ultrasonic Cutting Devices" },
  "cutting-head": { zh: "切割头与焊头", en: "Cutting Heads and Sonotrodes" },
  "handheld-device": { zh: "手持式切割设备", en: "Handheld Cutting Devices" },
  converter: { zh: "食品切割换能器", en: "Food Cutting Converters" }
};
productsConfig.products = [
  ...productsConfig.products.filter((product) => product.catalog !== catalog),
  ...sourcedProducts
];

fs.writeFileSync(configPath, `${JSON.stringify(productsConfig, null, 2)}\n`);
console.log(`Synced ${sourcedProducts.length} RINCO ultrasonic cutting device products.`);
