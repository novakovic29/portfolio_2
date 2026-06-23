/**
 * @fileoverview EN/DE translation strings and language-switching logic.
 */

/**
 * Translation map keyed by locale code.
 * @type {Record<string, Record<string, string>>}
 */
const i18n = {
  en: {
    nav_about:"About me",nav_skills:"Skills",nav_portfolio:"Portfolio",nav_references:"References",nav_contact:"Say Hi",
    hero_l1:"Frontend",hero_l2:"Developer",scroll:"Scroll Down",
    about_title:"About me",
    about_p:"Why am I passionate about coding? Because challenges drive me. I enjoy turning complex problems into clear, structured solutions. Analytical thinking, creativity and persistence are some of my strongest qualities and software development allows me to use them every day. Collaboration and a solution‑oriented mindset are equally important to me, because the best results are always achieved together.",
    about_loc:"Based in Meerbusch",about_remote:"Open to work",about_btn:"Let's talk",
    skills_title:"My skills",skills_q:"Don't see the skill you need?",skills_contact_verb:"Contact",skills_contact_obj:"me",skills_end:"I'm always ready to learn!",
    portfolio_title:"Portfolio",portfolio_sub:"Explore a selection of my work here — interact with projects to see my skills in action.",
    proj_live:"Live",proj_code:"GitHub",
    proj1_desc:"A jump-and-run browser game built with vanilla JavaScript using object-oriented programming principles.",
    proj2_desc:"A Kanban-based project management tool for teams — create, assign and track tasks in real time.",
    proj3_desc:"A real-time polling application built with Angular and TypeScript for live audience interaction.",
    references_title:"References",references_sub:"I thrive both independently and as part of a team. Here's what colleagues say about working with me.",
    role_partner:"Team Partner",role_engineer:"Frontend Engineer",
    ref_1:"\"Philipp kept lifting our spirits again and again. He motivated us to keep going and give it our all.\"",
    ref_2:"\"Philipp was always actively involved in the planning process and genuinely committed to the project. Working together was a very pleasant experience.\"",
    contact_title:"Say Hi!",contact_sub:"Want to discuss a new project?",contact_text:"Say hello! Let's discuss your ideas and make it happen.",
    ph_name:"Your name",ph_email:"Your email",ph_msg:"Your message",
    hint_name:"Min. 3 characters, no numbers allowed.",hint_email:"Must be a valid email address.",hint_msg:"Please describe your request.",
    privacy_pre:"I've read the ",privacy_link:"privacy policy",privacy_post:" and agree to the processing of my data as outlined.",
    send:"Send message",legal:"Legal notice",
    ok:"Thanks! Your message has been sent.",err_fields:"Please fill in all fields.",err_privacy:"Please accept the privacy policy.",
    ln_title:"Legal Notice",
    ln_imprint:"Imprint",ln_contact:"Contact",
    ln_contact_p:"Email: <a href=\"mailto:phil_novak@web.de\">phil_novak@web.de</a>",
    ln_terms:"Acceptance of terms",
    ln_terms_p:"By accessing and using Portfolio (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We may update or change the terms and conditions from time to time without notice.",
    ln_scope:"Scope and ownership of the product",
    ln_scope_p1:"Portfolio has been developed as part of a student project in a web development bootcamp at the <a href=\"https://developerakademie.com\" target=\"_blank\" rel=\"noopener\">Developer Akademie GmbH</a>. It has an educational purpose and is not intended for extensive personal &amp; business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.",
    ln_scope_p2:"The design of Portfolio is owned by the <a href=\"https://developerakademie.com\" target=\"_blank\" rel=\"noopener\">Developer Akademie GmbH</a>. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.",
    ln_prop:"Proprietary rights",
    ln_prop_p:"Aside from the design owned by Developer Akademie GmbH, we retain all proprietary rights in Portfolio, including any associated copyrighted material, trademarks, and other proprietary information.",
    ln_use:"Use of the product",
    ln_use_p:"Portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Portfolio for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Portfolio.",
    ln_disc:"Disclaimer of warranties and limitation of liability",
    ln_disc_p:"Portfolio is provided \"as is\" without warranty of any kind. In no event will we or the <a href=\"https://developerakademie.com\" target=\"_blank\" rel=\"noopener\">Developer Akademie</a> be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including loss of profits, goodwill, use, data, or other intangible losses, even if advised of the possibility of such damages.",
    ln_indem:"Indemnity",
    ln_indem_p1:"You agree to indemnify and hold harmless us and the <a href=\"https://developerakademie.com\" target=\"_blank\" rel=\"noopener\">Developer Akademie</a> from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of Portfolio and/or your breach of this Legal Notice.",
    ln_indem_p2:"For any questions or notices, please contact us at <a href=\"mailto:phil_novak@web.de\">phil_novak@web.de</a>.",
    ln_date:"Date: July 26, 2025"
  },
  de: {
    nav_about:"Über mich",nav_skills:"Skills",nav_portfolio:"Portfolio",nav_references:"Referenzen",nav_contact:"Kontakt",
    hero_l1:"Frontend",hero_l2:"Entwickler",scroll:"Runterscrollen",
    about_title:"Über mich",
    about_p:"Warum begeistert mich das Programmieren? Weil mich Herausforderungen antreiben. Es macht mir Freude, komplexe Probleme in klare, strukturierte Lösungen zu verwandeln. Analytisches Denken, Kreativität und Ausdauer gehören zu meinen größten Stärken – und die Softwareentwicklung ermöglicht es mir, sie täglich einzusetzen. Kollaboration und ein lösungsorientiertes Mindset sind mir dabei genauso wichtig, denn die besten Ergebnisse entstehen immer gemeinsam.",
    about_loc:"Standort Meerbusch",about_remote:"Offen für Arbeit",about_btn:"Lass uns reden",
    skills_title:"Meine Skills",skills_q:"Nicht die passende Fähigkeit dabei?",skills_contact_verb:"Schreib",skills_contact_obj:"mir",skills_end:"Ich lerne gerne dazu!",
    portfolio_title:"Portfolio",portfolio_sub:"Eine Auswahl meiner Projekte — interagiere mit ihnen, um meine Skills in Aktion zu sehen.",
    proj_live:"Live",proj_code:"GitHub",
    proj1_desc:"Ein Jump-and-Run-Browserspiel mit Vanilla JavaScript und objektorientierter Programmierung.",
    proj2_desc:"Ein Kanban-basiertes Projektmanagement-Tool für Teams — Aufgaben erstellen, zuweisen und in Echtzeit verfolgen.",
    proj3_desc:"Eine Echtzeit-Abstimmungsanwendung mit Angular und TypeScript für interaktive Live-Events.",
    references_title:"Referenzen",references_sub:"Ich arbeite eigenständig genauso gut wie im Team. Das sagen Kolleg:innen über die Zusammenarbeit mit mir.",
    role_partner:"Teampartner",role_engineer:"Frontend-Entwickler",
    ref_1:"\"Philipp hat uns immer wieder aufgebaut. Er hat uns angestachelt weiterhin dran zu bleiben und Gas zu geben.\"",
    ref_2:"\"Philipp war immer aktiv im Planungsprozess dabei und hat sich engagiert, an dem Projekt beteiligt. Das gemeinsame Projekt war somit sehr angenehm.\"",
    contact_title:"Sag Hallo!",contact_sub:"Lust auf ein neues Projekt?",contact_text:"Sag Hallo! Lass uns deine Ideen besprechen und umsetzen.",
    ph_name:"Dein Name",ph_email:"Deine E-Mail",ph_msg:"Deine Nachricht",
    hint_name:"Mind. 3 Zeichen, keine Zahlen erlaubt.",hint_email:"Muss eine gültige E-Mail-Adresse sein.",hint_msg:"Bitte beschreibe dein Anliegen.",
    privacy_pre:"Ich habe die ",privacy_link:"Datenschutzerklärung",privacy_post:" gelesen und stimme der Verarbeitung meiner Daten zu.",
    send:"Nachricht senden",legal:"Impressum",
    ok:"Danke! Deine Nachricht wurde gesendet.",err_fields:"Bitte fülle alle Felder aus.",err_privacy:"Bitte akzeptiere die Datenschutzerklärung.",
    ln_title:"Impressum",
    ln_imprint:"Impressum",ln_contact:"Kontakt",
    ln_contact_p:"E-Mail: <a href=\"mailto:phil_novak@web.de\">phil_novak@web.de</a>",
    ln_terms:"Nutzungsbedingungen",
    ln_terms_p:"Durch den Zugriff auf und die Nutzung von Portfolio (Produkt) erkennen Sie die folgenden Geschäftsbedingungen sowie alle Richtlinien, Leitlinien oder Änderungen, die Ihnen von Zeit zu Zeit vorgelegt werden können, an. Wir können die Bedingungen jederzeit ohne vorherige Ankündigung aktualisieren oder ändern.",
    ln_scope:"Umfang und Eigentumsrechte am Produkt",
    ln_scope_p1:"Portfolio wurde im Rahmen eines Studentenprojekts in einem Web-Development-Bootcamp der <a href=\"https://developerakademie.com\" target=\"_blank\" rel=\"noopener\">Developer Akademie GmbH</a> entwickelt. Es hat einen Bildungszweck und ist nicht für umfangreiche private oder geschäftliche Nutzung vorgesehen. Daher können wir keine konsistente Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder andere Qualitätsaspekte dieses Produkts garantieren.",
    ln_scope_p2:"Das Design von Portfolio ist Eigentum der <a href=\"https://developerakademie.com\" target=\"_blank\" rel=\"noopener\">Developer Akademie GmbH</a>. Unbefugte Nutzung, Vervielfältigung, Änderung, Verbreitung oder Nachahmung des Designs ist strengstens untersagt.",
    ln_prop:"Eigentumsrechte",
    ln_prop_p:"Abgesehen von dem der Developer Akademie GmbH gehörenden Design behalten wir alle Eigentumsrechte an Portfolio, einschließlich aller damit verbundenen urheberrechtlich geschützten Materialien, Markenzeichen und sonstiger proprietärer Informationen.",
    ln_use:"Nutzung des Produkts",
    ln_use_p:"Portfolio ist ausschließlich für rechtmäßige Zwecke bestimmt, in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften. Jede Nutzung für illegale Aktivitäten oder zur Belästigung, Schädigung, Bedrohung oder Einschüchterung einer anderen Person ist strengstens untersagt. Sie sind allein verantwortlich für Ihre Interaktionen mit anderen Nutzern von Portfolio.",
    ln_disc:"Haftungsausschluss",
    ln_disc_p:"Portfolio wird „so wie es ist\" ohne jegliche Garantie bereitgestellt. In keinem Fall haften wir oder die <a href=\"https://developerakademie.com\" target=\"_blank\" rel=\"noopener\">Developer Akademie</a> für direkte, indirekte, beiläufige, besondere oder Folgeschäden, einschließlich Gewinnverlust, Nutzungsausfall oder Datenverlust, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden.",
    ln_indem:"Schadloshaltung",
    ln_indem_p1:"Sie verpflichten sich, uns und die <a href=\"https://developerakademie.com\" target=\"_blank\" rel=\"noopener\">Developer Akademie</a> von und gegen alle Ansprüche, Verluste, Schäden, Kosten oder Verbindlichkeiten (einschließlich angemessener Anwaltsgebühren) schadlos zu halten, die sich aus Ihrer Nutzung von Portfolio und/oder Ihrem Verstoß gegen diesen rechtlichen Hinweis ergeben.",
    ln_indem_p2:"Für Fragen oder Mitteilungen kontaktieren Sie uns bitte unter <a href=\"mailto:phil_novak@web.de\">phil_novak@web.de</a>.",
    ln_date:"Datum: 26. Juli 2025"
  }
};

/** @type {string} Currently active locale code. */
let lang = "en";

/**
 * Updates all `[data-i18n]` elements with plain-text translations.
 * @param {string} l - Locale code ("en" or "de").
 * @returns {void}
 */
function applyTextNodes(l) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (i18n[l][k] !== undefined) el.textContent = i18n[l][k];
  });
}

/**
 * Updates all `[data-i18n-html]` elements with HTML translations.
 * @param {string} l - Locale code ("en" or "de").
 * @returns {void}
 */
function applyHtmlNodes(l) {
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const k = el.getAttribute("data-i18n-html");
    if (i18n[l][k] !== undefined) el.innerHTML = i18n[l][k];
  });
}

/**
 * Updates placeholder attributes on `[data-ph]` form elements.
 * @param {string} l - Locale code ("en" or "de").
 * @returns {void}
 */
function applyPlaceholders(l) {
  document.querySelectorAll("[data-ph]").forEach(el => {
    const k = el.getAttribute("data-ph");
    if (i18n[l][k] !== undefined) el.placeholder = i18n[l][k];
  });
}

/**
 * Toggles the `is-active` class on language buttons to reflect the current locale.
 * @param {string} l - Locale code ("en" or "de").
 * @returns {void}
 */
function updateLangButtons(l) {
  document.querySelectorAll(".lang button").forEach(b =>
    b.classList.toggle("is-active", b.dataset.lang === l)
  );
}

/**
 * Applies all translations for the given locale to the current page.
 * @param {string} l - Locale code ("en" or "de").
 * @returns {void}
 */
function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  applyTextNodes(l);
  applyHtmlNodes(l);
  applyPlaceholders(l);
  updateLangButtons(l);
}

document.querySelectorAll(".lang button").forEach(b =>
  b.addEventListener("click", () => applyLang(b.dataset.lang))
);

applyLang("en");
