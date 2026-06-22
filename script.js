  /* ---------- i18n ---------- */
  const i18n = {
    en:{
      nav_about:"About me",nav_skills:"Skills",nav_portfolio:"Portfolio",nav_references:"References",nav_contact:"Say Hi",
      hero_l1:"Frontend",hero_l2:"Developer",scroll:"Scroll Down",
      about_title:"About me",
      about_p:"Why am I passionate about coding? Because challenges drive me. I enjoy turning complex problems into clear, structured solutions. Analytical thinking, creativity and persistence are some of my strongest qualities and software development allows me to use them every day. Collaboration and a solution‑oriented mindset are equally important to me, because the best results are always achieved together.",
      about_loc:"Based in Meerbusch",about_remote:"Open to work",about_btn:"Let's talk",
      skills_title:"My skills",skills_q:"Don't see the skill you need?",skills_contact:"Contact me",skills_end:"I'm always ready to learn!",
      portfolio_title:"Portfolio",portfolio_sub:"Explore a selection of my work here — interact with projects to see my skills in action.",
      proj_live:"Live",proj_code:"GitHub",
      references_title:"References",references_sub:"I thrive both independently and as part of a team. Here's what colleagues say about working with me.",
      role_partner:"Team Partner",role_engineer:"Frontend Engineer",
      ref_1:"\"Philipp kept lifting our spirits again and again. He motivated us to keep going and give it our all.\"",
      ref_2:"\"Philipp was always actively involved in the planning process and genuinely committed to the project. Working together was a very pleasant experience.\"",
      contact_title:"Say Hi!",contact_sub:"Want to discuss a new project?",contact_text:"Say hello! Let's discuss your ideas and make it happen.",
      ph_name:"Your name",ph_email:"Your email",ph_msg:"Your message",
      privacy_pre:"I've read the ",privacy_link:"privacy policy",privacy_post:" and agree to the processing of my data as outlined.",
      send:"Send message",legal:"Legal notice",
      ok:"Thanks! Your message has been sent.",err_fields:"Please fill in all fields.",err_privacy:"Please accept the privacy policy."
    },
    de:{
      nav_about:"Über mich",nav_skills:"Skills",nav_portfolio:"Portfolio",nav_references:"Referenzen",nav_contact:"Kontakt",
      hero_l1:"Frontend",hero_l2:"Entwickler",scroll:"Runterscrollen",
      about_title:"Über mich",
      about_p:"Warum begeistert mich das Programmieren? Weil mich Herausforderungen antreiben. Es macht mir Freude, komplexe Probleme in klare, strukturierte Lösungen zu verwandeln. Analytisches Denken, Kreativität und Ausdauer gehören zu meinen größten Stärken – und die Softwareentwicklung ermöglicht es mir, sie täglich einzusetzen. Kollaboration und ein lösungsorientiertes Mindset sind mir dabei genauso wichtig, denn die besten Ergebnisse entstehen immer gemeinsam.",
      about_loc:"Standort Meerbusch",about_remote:"Offen für Arbeit",about_btn:"Lass uns reden",
      skills_title:"Meine Skills",skills_q:"Nicht die passende Fähigkeit dabei?",skills_contact:"Schreib mir",skills_end:"Ich lerne gerne dazu!",
      portfolio_title:"Portfolio",portfolio_sub:"Eine Auswahl meiner Projekte — interagiere mit ihnen, um meine Skills in Aktion zu sehen.",
      proj_live:"Live",proj_code:"GitHub",
      references_title:"Referenzen",references_sub:"Ich arbeite eigenständig genauso gut wie im Team. Das sagen Kolleg:innen über die Zusammenarbeit mit mir.",
      role_partner:"Teampartner",role_engineer:"Frontend-Entwickler",
      ref_1:"\"Philipp hat uns immer wieder aufgebaut. Er hat uns angestachelt weiterhin dran zu bleiben und Gas zu geben.\"",
      ref_2:"\"Philipp war immer aktiv im Planungsprozess dabei und hat sich engagiert, an dem Projekt beteiligt. Das gemeinsame Projekt war somit sehr angenehm.\"",
      contact_title:"Sag Hallo!",contact_sub:"Lust auf ein neues Projekt?",contact_text:"Sag Hallo! Lass uns deine Ideen besprechen und umsetzen.",
      ph_name:"Dein Name",ph_email:"Deine E-Mail",ph_msg:"Deine Nachricht",
      privacy_pre:"Ich habe die ",privacy_link:"Datenschutzerklärung",privacy_post:" gelesen und stimme der Verarbeitung meiner Daten zu.",
      send:"Nachricht senden",legal:"Impressum",
      ok:"Danke! Deine Nachricht wurde gesendet.",err_fields:"Bitte fülle alle Felder aus.",err_privacy:"Bitte akzeptiere die Datenschutzerklärung."
    }
  };
  let lang = "en";
  function applyLang(l){
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const k = el.getAttribute("data-i18n");
      if(i18n[l][k]!==undefined) el.textContent = i18n[l][k];
    });
    document.querySelectorAll("[data-ph]").forEach(el=>{
      const k = el.getAttribute("data-ph");
      if(i18n[l][k]!==undefined) el.placeholder = i18n[l][k];
    });
    document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("is-active",b.dataset.lang===l));
  }
  document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));

  /* ---------- menu ---------- */
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  function setMenu(open){
    document.body.classList.toggle("menu-open",open);
    burger.setAttribute("aria-expanded",open);
    menu.setAttribute("aria-hidden",!open);
    document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click",()=>setMenu(!document.body.classList.contains("menu-open")));
  menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});

  /* ---------- contact form ---------- */
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const name=document.getElementById("f-name").value.trim();
    const email=document.getElementById("f-email").value.trim();
    const text=document.getElementById("f-msg").value.trim();
    const ok=document.getElementById("f-privacy").checked;
    msg.classList.remove("err");
    if(!name||!email||!text){msg.textContent=i18n[lang].err_fields;msg.classList.add("err");return;}
    if(!ok){msg.textContent=i18n[lang].err_privacy;msg.classList.add("err");return;}
    msg.textContent=i18n[lang].ok;
    form.reset();
  });

  /* ---------- reveal on scroll ---------- */
  const io=new IntersectionObserver(es=>{
    es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target);}});
  },{threshold:.15});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  applyLang("en");
