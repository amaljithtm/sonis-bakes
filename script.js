// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Order form -> opens a pre-filled email to the bakery
const ORDER_EMAIL = "sonikakrishna5@gmail.com";

document.getElementById("order-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const item = form.item.value;
  const date = form.date.value;
  const details = form.details.value.trim();

  const subject = `Order request: ${item} — ${name}`;
  const bodyLines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Item: ${item}`,
    date ? `Date needed: ${date}` : null,
    "",
    "Details:",
    details,
  ].filter(Boolean);

  const mailto = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

  window.location.href = mailto;
});
