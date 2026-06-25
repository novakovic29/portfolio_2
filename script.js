/** @fileoverview Burger menu toggle and scroll-reveal animations. */

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

/**
 * Opens or closes the navigation menu.
 * @param {boolean} open - True to open, false to close.
 */
function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  menu.setAttribute("aria-hidden", !open);
  document.body.style.overflow = open ? "hidden" : "";
}

burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
menu.querySelectorAll(".menu-links a, .menu-hi-title").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

/**
 * Adds the "in" class to elements with class "reveal" once they
 * enter the viewport, triggering their CSS entrance animation.
 * @type {IntersectionObserver}
 */
const io = new IntersectionObserver(es => {
  es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: .15 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
