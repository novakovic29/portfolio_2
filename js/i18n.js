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
    proj1_desc:"A jump-and-run browser game built with JavaScript using object-oriented programming principles.",
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
    ln_date:"Date: July 26, 2025",
    pp_title:"Privacy Policy",
    pp_s1_h2:"1. Privacy at a Glance",pp_s1_h3a:"General Information",
    pp_s1_p1:"The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. For detailed information on data protection, please refer to the full privacy policy listed below.",
    pp_s1_h3b:"Data Collection on This Website",pp_s1_h4a:"Who is responsible for data collection on this website?",
    pp_s1_p2:"Data processing on this website is carried out by the website operator. You can find their contact details in the section \"Information about the Responsible Party\" in this privacy policy.",
    pp_s1_h4b:"How do we collect your data?",
    pp_s1_p3:"Some data is collected when you provide it to us — for example, data you enter into a contact form.",
    pp_s1_p4:"Other data is collected automatically or with your consent when you visit the website through our IT systems. This is primarily technical data (e.g. internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.",
    pp_s1_h4c:"What do we use your data for?",
    pp_s1_p5:"Some data is collected to ensure the error-free operation of the website. Other data may be used to analyse your browsing behaviour.",
    pp_s1_h4d:"What rights do you have regarding your data?",
    pp_s1_p6:"You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you may withdraw that consent at any time for the future. You also have the right to request the restriction of processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.",
    pp_s1_p7:"You may contact us at any time with questions about data protection.",
    pp_s2_h2:"2. General Information and Mandatory Disclosures",pp_s2_h3a:"Data Protection",
    pp_s2_p1:"The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with applicable data protection laws and this privacy policy.",
    pp_s2_p2:"When you use this website, various personal data is collected. Personal data is data by which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this takes place.",
    pp_s2_p3:"Please note that data transmission over the internet (e.g. communication by email) may be subject to security vulnerabilities. Complete protection of data from access by third parties is not possible.",
    pp_s2_h3b:"Information about the Responsible Party",pp_s2_p4:"The party responsible for data processing on this website is:",
    pp_s2_p5:"Philipp Novak<br>Bösingovenerstr. 41<br>40668 Meerbusch",
    pp_s2_p6:"Phone: +49 152 28625911<br>Email: <a href=\"mailto:phil_novak@web.de\">phil_novak@web.de</a>",
    pp_s2_p7:"The responsible party is the natural or legal person who, alone or jointly with others, decides on the purposes and means of processing personal data (e.g. names, email addresses).",
    pp_s2_h3c:"Retention Period",
    pp_s2_p8:"Unless a more specific retention period has been stated within this privacy policy, your personal data will remain with us until the purpose for which it was collected no longer applies. If you assert a justified request for deletion or withdraw your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing it.",
    pp_s2_h3d:"Legal Basis for Data Processing on This Website",
    pp_s2_p9:"If you have consented to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR. If processing is necessary for the performance of a contract or to take pre-contractual steps, we process your data on the basis of Art. 6(1)(b) GDPR. Where processing is required to fulfil a legal obligation, it is based on Art. 6(1)(c) GDPR.",
    pp_s2_h3e:"Withdrawal of Consent",
    pp_s2_p10:"Many data processing operations are only possible with your explicit consent. You may withdraw consent you have already given at any time. The lawfulness of processing carried out before the withdrawal is not affected.",
    pp_s2_h3f:"Right to Lodge a Complaint with a Supervisory Authority",
    pp_s2_p11:"In the event of breaches of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the member state of their habitual residence, place of work, or place of the alleged infringement. This right exists without prejudice to any other administrative or judicial remedy.",
    pp_s2_h3g:"Right to Data Portability",
    pp_s2_p12:"You have the right to receive data that we process automatically based on your consent or in fulfilment of a contract in a commonly used, machine-readable format, either for yourself or for transfer to a third party. Direct transfer to another controller will only take place where technically feasible.",
    pp_s2_h3h:"Access, Correction, and Deletion",
    pp_s2_p13:"Within the framework of applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipients, and the purpose of data processing, and, if applicable, the right to correct or delete this data. You may contact us at any time with questions about personal data.",
    pp_s2_h3i:"Right to Restrict Processing",
    pp_s2_p14:"You have the right to request the restriction of processing of your personal data. You may contact us at any time to exercise this right.",
    pp_s3_h2:"3. Data Collection on This Website",pp_s3_h3a:"Contact Form",
    pp_s3_p1:"If you send us enquiries via the contact form, your details from the form, including the contact information you provide, will be stored by us for the purpose of processing your request and in case of follow-up questions. We do not share this data without your consent.",
    pp_s3_p2:"Processing of this data is based on Art. 6(1)(b) GDPR if your request is related to the fulfilment of a contract or required to carry out pre-contractual measures. In all other cases, processing is based on our legitimate interest in effectively handling enquiries addressed to us (Art. 6(1)(f) GDPR) or on your consent (Art. 6(1)(a) GDPR) where this has been requested; consent may be withdrawn at any time.",
    pp_s3_p3:"The data you enter in the contact form will remain with us until you request deletion, withdraw your consent to storage, or the purpose for storing the data no longer applies (e.g. after your request has been fully processed). Mandatory statutory provisions — in particular retention periods — remain unaffected.",
    pp_s3_h3b:"Enquiries by Email or Phone",
    pp_s3_p4:"If you contact us by email or phone, your enquiry including all resulting personal data (name, enquiry) will be stored and processed by us for the purpose of handling your request. We do not share this data without your consent.",
    pp_s3_p5:"Processing is based on Art. 6(1)(b) GDPR if your enquiry is related to the fulfilment of a contract or required for pre-contractual measures. In all other cases, processing is based on our legitimate interest in effectively handling enquiries (Art. 6(1)(f) GDPR) or on your consent (Art. 6(1)(a) GDPR) where requested.",
    pp_s4_h2:"4. Plugins and Tools",pp_s4_h3a:"Web Fonts (Self-Hosted)",
    pp_s4_p1:"This website uses self-hosted web fonts (Overpass and Syne) for consistent typography. The font files are stored locally on our server. No connection to external font servers is established when you visit this website.",
    pp_s4_h3b:"LinkedIn",
    pp_s4_p2:"This website contains a link to the social network LinkedIn, operated by LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Ireland. The link is a simple hyperlink only. No LinkedIn plugins are embedded on this site, so no automatic connection to LinkedIn servers is established when you visit this website and no data is transmitted to LinkedIn.",
    pp_s4_h3c:"GitHub",
    pp_s4_p3:"This website contains links to GitHub, operated by GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. These are simple hyperlinks only. No GitHub plugins are embedded, so no automatic connection to GitHub servers is established when you visit this website and no data is transmitted to GitHub.",
    pp_date:"Source: <a href=\"https://www.e-recht24.de\" target=\"_blank\" rel=\"noopener\">e-recht24.de</a> &nbsp;·&nbsp; Last updated: July 2025"
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
    proj1_desc:"Ein Jump-and-Run-Browserspiel mit JavaScript und objektorientierter Programmierung.",
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
    ln_date:"Datum: 26. Juli 2025",
    pp_title:"Datenschutzerklärung",
    pp_s1_h2:"1. Datenschutz auf einen Blick",pp_s1_h3a:"Allgemeine Hinweise",
    pp_s1_p1:"Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.",
    pp_s1_h3b:"Datenerfassung auf dieser Website",pp_s1_h4a:"Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
    pp_s1_p2:"Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.",
    pp_s1_h4b:"Wie erfassen wir Ihre Daten?",
    pp_s1_p3:"Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
    pp_s1_p4:"Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.",
    pp_s1_h4c:"Wofür nutzen wir Ihre Daten?",
    pp_s1_p5:"Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.",
    pp_s1_h4d:"Welche Rechte haben Sie bezüglich Ihrer Daten?",
    pp_s1_p6:"Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
    pp_s1_p7:"Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.",
    pp_s2_h2:"2. Allgemeine Hinweise und Pflichtinformationen",pp_s2_h3a:"Datenschutz",
    pp_s2_p1:"Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
    pp_s2_p2:"Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.",
    pp_s2_p3:"Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
    pp_s2_h3b:"Hinweis zur verantwortlichen Stelle",pp_s2_p4:"Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
    pp_s2_p5:"Philipp Novak<br>Bösingovenerstr. 41<br>40668 Meerbusch",
    pp_s2_p6:"Telefon: +49 152 28625911<br>E-Mail: <a href=\"mailto:phil_novak@web.de\">phil_novak@web.de</a>",
    pp_s2_p7:"Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.",
    pp_s2_h3c:"Speicherdauer",
    pp_s2_p8:"Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.",
    pp_s2_h3d:"Rechtsgrundlagen der Datenverarbeitung auf dieser Website",
    pp_s2_p9:"Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Sofern die Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, verarbeiten wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Sofern eine Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, basiert die Verarbeitung auf Art. 6 Abs. 1 lit. c DSGVO.",
    pp_s2_h3e:"Widerruf Ihrer Einwilligung zur Datenverarbeitung",
    pp_s2_p10:"Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.",
    pp_s2_h3f:"Beschwerderecht bei der zuständigen Aufsichtsbehörde",
    pp_s2_p11:"Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.",
    pp_s2_h3g:"Recht auf Datenübertragbarkeit",
    pp_s2_p12:"Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.",
    pp_s2_h3h:"Auskunft, Löschung und Berichtigung",
    pp_s2_p13:"Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.",
    pp_s2_h3i:"Recht auf Einschränkung der Verarbeitung",
    pp_s2_p14:"Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden.",
    pp_s3_h2:"3. Datenerfassung auf dieser Website",pp_s3_h3a:"Kontaktformular",
    pp_s3_p1:"Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
    pp_s3_p2:"Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.",
    pp_s3_p3:"Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
    pp_s3_h3b:"Anfrage per E-Mail oder Telefon",
    pp_s3_p4:"Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
    pp_s3_p5:"Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.",
    pp_s4_h2:"4. Plugins und Tools",pp_s4_h3a:"Webfonts (selbst gehostet)",
    pp_s4_p1:"Diese Website verwendet selbst gehostete Webfonts (Overpass und Syne) für eine einheitliche Darstellung von Schriftarten. Die Schriftartdateien sind lokal auf unserem Server gespeichert. Beim Besuch dieser Website wird keine Verbindung zu externen Schriftarten-Servern hergestellt.",
    pp_s4_h3b:"LinkedIn",
    pp_s4_p2:"Diese Website enthält einen Link zum sozialen Netzwerk LinkedIn, betrieben von der LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland. Der Link ist ein einfacher Hyperlink. Es sind keine LinkedIn-Plugins eingebunden, daher wird beim Besuch dieser Website keine automatische Verbindung zu LinkedIn-Servern hergestellt und keine Daten an LinkedIn übermittelt.",
    pp_s4_h3c:"GitHub",
    pp_s4_p3:"Diese Website enthält Links zu GitHub, betrieben von GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Es handelt sich um einfache Hyperlinks. Es sind keine GitHub-Plugins eingebunden, daher wird beim Besuch dieser Website keine automatische Verbindung zu GitHub-Servern hergestellt und keine Daten an GitHub übermittelt.",
    pp_date:"Quelle: <a href=\"https://www.e-recht24.de\" target=\"_blank\" rel=\"noopener\">e-recht24.de</a> &nbsp;·&nbsp; Stand: Juli 2025"
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
/**
 * Applies all translations for the given locale to the current page
 * and persists the choice in localStorage.
 * @param {string} l - Locale code ("en" or "de").
 * @returns {void}
 */
function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  localStorage.setItem("lang", l);
  applyTextNodes(l);
  applyHtmlNodes(l);
  applyPlaceholders(l);
  updateLangButtons(l);
}

document.querySelectorAll(".lang button").forEach(b =>
  b.addEventListener("click", () => applyLang(b.dataset.lang))
);

applyLang(localStorage.getItem("lang") || "en");
