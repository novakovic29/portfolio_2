/* ---------- contact form ---------- */
const form      = document.getElementById("contactForm");
const msg       = document.getElementById("formMsg");
const submitBtn = form.querySelector("button[type=submit]");
const fName     = document.getElementById("f-name");
const fEmail    = document.getElementById("f-email");
const fMsg      = document.getElementById("f-msg");
const fPrivacy  = document.getElementById("f-privacy");

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRe  = /^[^\d]{3,}$/;

function isNameValid(v)  { return nameRe.test(v.trim()); }
function isEmailValid(v) { return emailRe.test(v.trim()); }

function isFormValid() {
  return isNameValid(fName.value) &&
    isEmailValid(fEmail.value) &&
    fMsg.value.trim() &&
    fPrivacy.checked;
}

function updateBtn() {
  submitBtn.disabled = !isFormValid();
}

[fName, fEmail, fMsg].forEach(el => {
  el.addEventListener("input", updateBtn);
  el.addEventListener("blur", () => {
    let invalid = false;
    if (el === fName)  invalid = !isNameValid(el.value);
    if (el === fEmail) invalid = !isEmailValid(el.value) || !el.value.trim();
    if (el === fMsg)   invalid = !el.value.trim();
    el.classList.toggle("is-invalid", invalid);
  });
  el.addEventListener("focus", () => el.classList.remove("is-invalid"));
});
fPrivacy.addEventListener("change", updateBtn);

form.addEventListener("submit", async e => {
  e.preventDefault();
  if (!isFormValid()) return;

  submitBtn.disabled = true;
  msg.textContent = "";

  try {
    const res = await fetch("./contact_form_mail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:    fName.value.trim(),
        email:   fEmail.value.trim(),
        message: fMsg.value.trim()
      })
    });

    const data = await res.json();

    if (res.ok && data.success) {
      msg.classList.remove("err");
      msg.textContent = i18n[lang].ok;
      form.reset();
    } else {
      msg.classList.add("err");
      msg.textContent = i18n[lang].err_fields;
    }
  } catch {
    msg.classList.add("err");
    msg.textContent = i18n[lang].err_fields;
  }

  updateBtn();
});
