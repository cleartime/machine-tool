import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const outputRoot = path.join(root, "assets", "products");

const products = [
  ["Ultrasonic Food Cutting System Advanced Type KM-H20-C", "ultrasonic-food-cutting-system-km-h20-c", "equipment", "https://www.knmsonic.com/ultrasonic-food-cutting-system-km-h20-c/", "https://www.knmsonic.com/wp-content/uploads/2025/12/%E6%9C%AA%E5%91%BD%E5%90%8D1.jpg"],
  ["Ultrasonic Food Cutting Components Advanced Type KM-2000C", "ultrasonic-food-cutting-system-km-2000c", "equipment", "https://www.knmsonic.com/ultrasonic-food-cutting-system-km-2000c/", "https://www.knmsonic.com/wp-content/uploads/2025/12/%E6%9C%AA%E5%91%BD%E5%90%8D4.jpg"],
  ["Handheld Ultrasonic Food Cutter", "handheld-ultrasonic-food-cutter", "equipment", "https://www.knmsonic.com/handheld-ultrasonic-food-cutter/", "https://www.knmsonic.com/wp-content/uploads/2023/08/Handheld-type-Ultrasonic-Food-Cutter-370-370.jpg"],
  ["Ultrasonic Food Cutting System Economical Type", "full-wave-ultrasonic-food-cutting", "equipment", "https://www.knmsonic.com/full-wave-ultrasonic-food-cutting/", "https://www.knmsonic.com/wp-content/uploads/2022/08/ultrasonic-food-cutting-system-255mm-cutter.jpg"],
  ["Ultrasonic Food Cutting Components Advanced Type", "ultrasonic-food-cutting-components", "equipment", "https://www.knmsonic.com/ultrasonic-food-cutting-components/", "https://www.knmsonic.com/wp-content/uploads/2024/01/Ultrasonic-food-cutting-components-from-Knmtech.jpg"],
  ["Desktop Ultrasonic Food Cutting Machine", "desktop-cheese-slicer-machine", "equipment", "https://www.knmsonic.com/desktop-cheese-slicer-machine/", "https://www.knmsonic.com/wp-content/uploads/2023/12/Desptop-Ultrasonic-Food-Cutting-Machine-from-Knmtech.jpg"],
  ["Automatic Ultrasonic Cheesecake Slicer", "automatic-ultrasonic-cheesecake-slicer", "equipment", "https://www.knmsonic.com/automatic-ultrasonic-cheesecake-slicer/", "https://www.knmsonic.com/wp-content/uploads/2023/04/ultrasonic-Bread-Cake-cutting-machine-in-main-page.jpg"],
  ["Automatic Ultrasonic Marshmallow Cutting Machine", "automatic-marshmallow-cutting-machine", "equipment", "https://www.knmsonic.com/automatic-marshmallow-cutting-machine", "https://www.knmsonic.com/wp-content/uploads/2023/06/Automatic-Ultrasonic-Food-Cutting-Machine-in-main-page.jpg"],
  ["High-end Automatic Ultrasonic Food Cutting Machine", "hig-end-automatic-ultrasonic-food-cutting-machine", "equipment", "https://www.knmsonic.com/hig-end-automatic-ultrasonic-food-cutting-machine/", "https://www.knmsonic.com/wp-content/uploads/2023/08/High-end-Automatic-Ultrasonic-Food-Cutting-Machine.jpg"],
  ["Ultrasonic Food Cutter Blade 90mm for Cake Cutting", "ultrasonic-cake-food-cutter-90mm", "blade", "https://www.knmsonic.com/ultrasonic-cake-food-cutter-90mm/", "https://www.knmsonic.com/wp-content/uploads/2023/03/Ultrasonic-Food-Cutter-90mm-370-370.jpg"],
  ["Ultrasonic Cake Slicer Blade 160mm", "ultrasonic-cake-slicer-blade-160mm", "blade", "https://www.knmsonic.com/ultrasonic-cake-slicer-blade-160mm/", "https://www.knmsonic.com/wp-content/uploads/2023/03/160mm-ultrasonic-cutting-blade-2-370-370.jpg"],
  ["Ultrasonic Slicer Knife 200mm Half Wave for Food", "ultrasonic-slicer-blade-200mm-for-food", "blade", "https://www.knmsonic.com/ultrasonic-slicer-blade-200mm-for-food/", "https://www.knmsonic.com/wp-content/uploads/2023/03/200mm-ultrasonic-food-cutting-blade-2-370-370.jpg"],
  ["Ultrasonic Cutter Knife For Food 255mm", "ultrasonic-cutter-for-food-255mm-titanium-blade", "blade", "https://www.knmsonic.com/ultrasonic-cutter-for-food-255mm-titanium-blade/", "https://www.knmsonic.com/wp-content/uploads/2023/03/ultrasonic-food-cutting-blade-255mm-half-wave.jpg"],
  ["Ultrasonic Cutting Sonotrode for Food 300mm", "ultrasonic-cutting-sonotrode-for-food", "blade", "https://www.knmsonic.com/ultrasonic-cutting-sonotrode-for-food/", "https://www.knmsonic.com/wp-content/uploads/2023/03/300mm-ultrasonic-food-cutter-blade-6-370-370.jpg"],
  ["Ultrasonic Food Cutter 305mm Titanium Blade", "ultrasonic-food-cutter-305mm-titanium-blade", "blade", "https://www.knmsonic.com/ultrasonic-food-cutter-305mm-titanium-blade/", "https://www.knmsonic.com/wp-content/uploads/2023/03/ultrasonic-food-cutter-305mm-Titanium-Blade-for-cake-slicingjpg.jpg"],
  ["Automatic Ultrasonic Swiss Roll Cutting Machine", "standard-ultrasonic-food-cutting-machine", "equipment", "https://www.knmsonic.com/standard-ultrasonic-food-cutting-machine/", "https://www.knmsonic.com/wp-content/uploads/2023/06/ultrasonic-food-cutting-machine-for-Swiss-Roll-1.jpg"],
  ["Automatic Ultrasonic Sandwich Cutter With Conveyor", "ultrasonic-sandwich-cutter", "equipment", "https://www.knmsonic.com/ultrasonic-sandwich-cutter/", "https://www.knmsonic.com/wp-content/uploads/2023/06/Ultrasonic-Sandwich-Cutting-Machine-in-main-pages.jpg"],
  ["Automatic Toast peeling machine", "automatic-toast-peeling-machine", "equipment", "https://www.knmsonic.com/automatic-toast-peeling-machine/", "https://www.knmsonic.com/wp-content/uploads/2023/06/Automatic-Bread-skin-removing-machine-in-main-page.jpg"],
  ["Ultrasonic Cake Food Cutter With Three Blades", "ultrasonic-cake-food-cutter-with-three-blades", "equipment", "https://www.knmsonic.com/automatic-marshmallow-cutting-machine", "https://www.knmsonic.com/wp-content/uploads/2023/08/Ultrasonic-Food-Cutting-Machine-KM-AUS20300-series.jpg"],
  ["Ultrasonic Cutter Knife for Food 160mm Full Wave", "ultrasonic-cutter-for-food-160mm-full-wave", "blade", "https://www.knmsonic.com/ultrasonic-cutter-for-food-160mm-full-wave/", "https://www.knmsonic.com/wp-content/uploads/2023/03/ultrasonic-cutter-for-food-blade-cake-cutting.jpg"],
  ["Ultrasonic Food Cutter Knife 200mm Full Wave", "ultrasonic-food-cutter-200mm-full-wave", "blade", "https://www.knmsonic.com/ultrasonic-food-cutter-200mm-full-wave/", "https://www.knmsonic.com/wp-content/uploads/2023/03/ultrasonic-food-cutter-200mm-Full-Wave-for-bread-slicing.jpg"],
  ["Ultrasonic Sandwich Cutter Knife 305mm Full Wave", "ultrasonic-sandwich-cutter-knife-305mm-full-wave", "blade", "https://www.knmsonic.com/ultrasonic-sandwich-cutter-knife-305mm-full-wave/", "https://www.knmsonic.com/wp-content/uploads/2023/03/ultrasonic-Knife-305mm-Full-Wave-Food-cutting.jpg"]
];

function inferSpecs(name, category) {
  const frequency = name.match(/\b(20|35)\s?kHz/i)?.[0]?.replace(/khz/i, "kHz") || (category === "blade" ? "20 kHz" : "custom");
  const bladeLength = name.match(/\b(90|160|200|255|300|305)mm\b/i)?.[0]?.replace(/mm/i, " mm");
  const power = name.match(/\b(800|1500|2000)\s?W\b/i)?.[0]?.replace(/w/i, "W") || (category === "equipment" ? "custom" : undefined);
  return { frequency, power, bladeLength };
}

function inferApplications(name, category) {
  const lower = name.toLowerCase();
  const apps = [];
  for (const [key, label] of [
    ["cake", "cake"],
    ["cheese", "cheese"],
    ["bread", "bread"],
    ["toast", "toast"],
    ["sandwich", "sandwich"],
    ["marshmallow", "marshmallow"],
    ["swiss", "swiss roll"]
  ]) {
    if (lower.includes(key)) apps.push(label);
  }
  if (!apps.length) apps.push(category === "blade" ? "food cutting" : "food processing");
  if (category === "equipment") apps.push("line integration");
  if (category === "blade") apps.push("blade replacement");
  return [...new Set(apps)].slice(0, 4);
}

function decodeEntities(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&#038;", "&").replaceAll("&quot;", '"');
}

function bestFromSrcset(srcset) {
  if (!srcset) return null;
  const candidates = srcset.split(",").map((part) => {
    const bits = part.trim().split(/\s+/);
    return { url: bits[0], width: Number((bits[1] || "").replace("w", "")) || 0 };
  });
  candidates.sort((a, b) => b.width - a.width);
  return candidates[0]?.url || null;
}

function extractImages(html, fallback) {
  const beforeRelated = html.split('id="pd7Section13"')[0] || html;
  const urls = new Set([fallback]);
  for (const match of beforeRelated.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    const src = tag.match(/\ssrc="([^"]+)"/i)?.[1];
    const srcset = tag.match(/\ssrcset="([^"]+)"/i)?.[1];
    const best = bestFromSrcset(srcset ? decodeEntities(srcset) : "");
    const candidate = decodeEntities(best || src || "");
    if (!candidate.includes("/wp-content/uploads/")) continue;
    if (candidate.includes("cropped-KNMTECH")) continue;
    if (candidate.includes("service-team")) continue;
    if (candidate.includes("/flags/")) continue;
    if (candidate.match(/-(18|150)x(8|12|150)\./)) continue;
    urls.add(new URL(candidate, "https://www.knmsonic.com").href);
  }
  return [...urls].slice(0, 8);
}

function uniquePush(list, item) {
  if (!list.includes(item)) list.push(item);
}

function extensionFromUrl(url) {
  const clean = new URL(url).pathname;
  return path.extname(clean).toLowerCase() || ".jpg";
}

async function download(url, destination) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(destination, Buffer.from(arrayBuffer));
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

fs.mkdirSync(outputRoot, { recursive: true });

const synced = [];
for (const [name, slug, category, sourceUrl, listImage] of products) {
  console.log(`Syncing ${slug}`);
  const html = await fetch(sourceUrl).then((res) => res.text());
  const rawGalleryUrls = extractImages(html, listImage);
  const galleryUrls = [];
  for (const url of rawGalleryUrls) {
    const pathname = new URL(url).pathname.toLowerCase();
    if (pathname.includes("qrcode") || pathname.includes("qr-code") || pathname.includes("wechat") || pathname.includes("whatsapp")) continue;
    uniquePush(galleryUrls, url);
  }
  const productDir = path.join(outputRoot, slug);
  fs.mkdirSync(productDir, { recursive: true });
  const images = [];
  const hashes = new Set();
  for (const [index, url] of galleryUrls.entries()) {
    const filename = `${String(index + 1).padStart(2, "0")}${extensionFromUrl(url)}`;
    const destination = path.join(productDir, filename);
    await download(url, destination);
    const size = imageSize(destination);
    if (size.width <= 320 && size.height <= 320) {
      continue;
    }
    const hash = fileHash(destination);
    if (hashes.has(hash)) {
      continue;
    }
    hashes.add(hash);
    images.push(`products/${slug}/${filename}`);
  }
  synced.push({
    slug,
    category,
    name,
    sourceUrl,
    image: images[0],
    images,
    ...inferSpecs(name, category),
    applications: inferApplications(name, category)
  });
}

const config = {
  categories: {
    equipment: { zh: "食品切割设备", en: "Food Cutting Equipment" },
    blade: { zh: "食品切割刀具", en: "Food Cutter Blades" }
  },
  products: synced
};

fs.writeFileSync(path.join(root, "products.config.json"), `${JSON.stringify(config, null, 2)}\n`);
console.log(`Synced ${synced.length} products.`);
