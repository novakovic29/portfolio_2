/** @fileoverview Burger menu toggle and scroll-reveal animations. */

const burger = document.getElementById("burger");
const menu   = document.getElementById("menu");

/**
 * Opens or closes the navigation menu.
 * @param {boolean} open
 */
function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  menu.setAttribute("aria-hidden", !open);
  document.body.style.overflow = open ? "hidden" : "";
}

/**
 * Closes the menu and navigates to the link's href.
 * @param {HTMLAnchorElement} link
 */
function closeAndNavigate(link) {
  setMenu(false);
  link.classList.remove("is-active");
  window.location.href = link.href;
}

/**
 * Switches the link from the underline phase to the frame phase,
 * then navigates after the frame animation finishes.
 * @param {HTMLAnchorElement} link
 */
function showFrame(link) {
  link.classList.replace("is-animating", "is-active");
  setTimeout(() => closeAndNavigate(link), 400);
}

/**
 * Plays the nav-link animation, then closes the menu and navigates.
 * On touch devices the full sequence (underline → frame) runs on tap;
 * on pointer devices hover already played the underline, so only the frame runs.
 * @param {HTMLAnchorElement} link
 */
function animateThenNavigate(link) {
  menu.querySelectorAll(".menu-links a").forEach(l => l.classList.remove("is-active", "is-animating"));
  const isTouchDevice = window.matchMedia("(hover: none)").matches;
  if (isTouchDevice) {
    link.classList.add("is-animating");
    setTimeout(() => showFrame(link), 700);
  } else {
    link.classList.add("is-active");
    setTimeout(() => closeAndNavigate(link), 400);
  }
}

burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
menu.querySelectorAll(".menu-links a").forEach(a => a.addEventListener("click", e => { e.preventDefault(); animateThenNavigate(a); }));
menu.querySelectorAll(".menu-hi-title").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

/**
 * Triggers entrance animations by adding "in" to each ".reveal" element
 * once it enters the viewport.
 * @type {IntersectionObserver}
 */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: .15 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
