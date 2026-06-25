/** @fileoverview Contact form validation and submission. */

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
const btn = form.querySelector("button[type=submit]");
const fName = document.getElementById("f-name");
const fEmail = document.getElementById("f-email");
const fMsg = document.getElementById("f-msg");
const fPrivacy = document.getElementById("f-privacy");

/** @param {string} v @returns {boolean} */
const validName  = v => /^[^\d]{3,}$/.test(v.trim());

/** @param {string} v @returns {boolean} */
const validEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

/** @returns {boolean} True when all fields pass validation. */
const formOk = () => validName(fName.value) && validEmail(fEmail.value) && fMsg.value.trim() && fPrivacy.checked;

/**
 * Toggles the invalid state on a field after it loses focus.
 * @param {HTMLElement} el - The field to check.
 */
function markField(el) {
  const bad = (el === fName && !validName(el.value))
    || (el === fEmail && !validEmail(el.value))
    || (el === fMsg && !el.value.trim());
  el.classList.toggle("is-invalid", bad);
}

[fName, fEmail, fMsg].forEach(el => {
  el.addEventListener("input", () => btn.disabled = !formOk());
  el.addEventListener("blur", () => markField(el));
  el.addEventListener("focus", () => el.classList.remove("is-invalid"));
});
fPrivacy.addEventListener("change", () => btn.disabled = !formOk());

/**
 * Displays a status message below the form.
 * @param {string} text - Message to display.
 * @param {boolean} [err=false] - Whether to style it as an error.
 */
function showMsg(text, err = false) {
  msg.classList.toggle("err", err);
  msg.textContent = text;
}

/**
 * Sends the form data to the server and handles the response.
 * @returns {Promise<void>}
 */
async function send() {
  const res = await fetch("./contact_form_mail.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: fName.value.trim(), email: fEmail.value.trim(), message: fMsg.value.trim() })
  });
  const ok = res.ok && (await res.json()).success;
  if (ok) { form.reset(); showMsg(i18n[lang].ok); }
  else showMsg(i18n[lang].err_fields, true);
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  if (!formOk()) return;
  btn.disabled = true;
  msg.textContent = "";
  try { await send(); } catch { showMsg(i18n[lang].err_fields, true); }
  btn.disabled = !formOk();
});
