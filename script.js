/* ---------- menu ---------- */
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  menu.setAttribute("aria-hidden", !open);
  document.body.style.overflow = open ? "hidden" : "";
}

burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
menu.querySelectorAll(".menu-links a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

/* ---------- contact form ---------- */
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", e => {
  e.preventDefault();
  const name  = document.getElementById("f-name").value.trim();
  const email = document.getElementById("f-email").value.trim();
  const text  = document.getElementById("f-msg").value.trim();
  const ok    = document.getElementById("f-privacy").checked;
  msg.classList.remove("err");
  if (!name || !email || !text) { msg.textContent = i18n[lang].err_fields; msg.classList.add("err"); return; }
  if (!ok)                      { msg.textContent = i18n[lang].err_privacy; msg.classList.add("err"); return; }
  msg.textContent = i18n[lang].ok;
  form.reset();
});

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(es => {
  es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: .15 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
