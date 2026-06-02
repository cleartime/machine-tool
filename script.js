const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const navLinks = Array.from(document.querySelectorAll(".nav a"));

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

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

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const contact = String(data.get("contact") || "").trim();

  if (!name || !contact) {
    formNote.textContent = isEnglish ? "Please enter your name and contact details." : "请先填写姓名和联系方式。";
    return;
  }

  form.reset();
  formNote.textContent = isEnglish
    ? "Request recorded. This static demo does not send data yet; a backend or form service can be connected later."
    : "需求已记录。静态页面演示中不会真正发送，我们可继续接入后台或表单服务。";
});
