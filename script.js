const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const navLinks = Array.from(document.querySelectorAll(".nav a"));
const productMenus = Array.from(document.querySelectorAll("[data-product-menu]"));

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    productMenus.forEach((menu) => menu.classList.remove("is-open"));
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

productMenus.forEach((menu) => {
  let closeTimer;
  const open = () => {
    window.clearTimeout(closeTimer);
    menu.classList.add("is-open");
  };
  const close = () => {
    closeTimer = window.setTimeout(() => menu.classList.remove("is-open"), 120);
  };

  menu.addEventListener("mouseenter", open);
  menu.addEventListener("mouseleave", close);
  menu.addEventListener("focusin", open);
  menu.addEventListener("focusout", close);
});

const sections = navLinks
  .map((link) => {
    const href = link.getAttribute("href");
    return href?.startsWith("#") ? document.querySelector(href) : null;
  })
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-30% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

const setFormNote = (message, state = "") => {
  if (!formNote) return;
  formNote.textContent = message;
  formNote.classList.remove("is-pending", "is-success", "is-error");
  if (state) formNote.classList.add(state);
};

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const isChinese = document.documentElement.lang.toLowerCase().startsWith("zh");
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const contact = String(data.get("contact") || "").trim();
  const submitButton = form.querySelector('button[type="submit"]');

  if (!name || !contact) {
    setFormNote(isChinese ? "请先填写姓名和联系方式。" : "Please enter your name and contact details.", "is-error");
    return;
  }

  submitButton.disabled = true;
  setFormNote(
    isChinese ? "正在提交，请稍候。" : "Submitting, please wait.",
    "is-pending"
  );

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12000);
  const payload = Object.fromEntries(data.entries());

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.message || "Form service error");

    form.reset();
    setFormNote(
      isChinese ? "提交成功，我们会尽快联系您。" : "Submitted successfully. We will contact you soon.",
      "is-success"
    );
  } catch (error) {
    setFormNote(
      isChinese
        ? "提交失败，请直接发送邮件到 ted@eurostarultrasonic.com。"
        : "Submission failed. Please email ted@eurostarultrasonic.com directly.",
      "is-error"
    );
  } finally {
    window.clearTimeout(timeout);
    submitButton.disabled = false;
  }
});

document.querySelectorAll("[data-product-gallery]").forEach((gallery) => {
  const main = gallery.querySelector("[data-gallery-main]");
  const thumbs = Array.from(gallery.querySelectorAll("[data-gallery-thumb]"));
  const prev = gallery.querySelector("[data-gallery-prev]");
  const next = gallery.querySelector("[data-gallery-next]");
  const counter = gallery.querySelector("[data-gallery-counter]");
  let active = 0;

  const setActive = (index) => {
    if (!main || !thumbs.length) return;
    active = (index + thumbs.length) % thumbs.length;
    const thumbImage = thumbs[active].querySelector("img");
    main.classList.add("is-switching");
    main.src = thumbImage.src;
    main.alt = thumbImage.alt.replace(" thumbnail", "");
    if (counter) counter.textContent = `${active + 1} / ${thumbs.length}`;
    thumbs.forEach((thumb, thumbIndex) => thumb.classList.toggle("is-active", thumbIndex === active));
    window.setTimeout(() => main.classList.remove("is-switching"), 160);
  };

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => setActive(index));
  });

  prev?.addEventListener("click", () => setActive(active - 1));
  next?.addEventListener("click", () => setActive(active + 1));
});
