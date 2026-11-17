/* Bruno Arnaiz Santamaría — portfolio
   1) EN/ES: the English text lives in the HTML; Spanish lives here.
   2) Ink dots around the cursor (same as the StudyFlow cockpit).
   3) Reveal on scroll, hide past events, footer year. */
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  /* ── 1. language ─────────────────────────────────────────────── */
  var ES = {
    "skip": "Saltar al contenido",
    "nav.now": "Ahora",
    "nav.projects": "Proyectos",
    "nav.how": "Cómo construyo",
    "nav.stack": "Stack",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    "hero.label": "Agentic OS developer",
    "hero.lede": "Usuario avanzado de IA · construyendo sistemas operativos agénticos que ya usan pymes.",
    "hero.cta1": "Ver proyectos",
    "hero.cta2": "Contáctame",
    "hero.m1k": "Desde",
    "hero.m1v": "Madrid, España",
    "hero.m2k": "Estudio",
    "hero.m2v": "Ciencia e Ingeniería de Datos · URJC",
    "hero.m3k": "Estado",
    "hero.m3v": "Buscando fundadores técnicos",

    "now.title": "Ahora",
    "now.stamp": "Actualizado: nov. 2026",
    "now.k1": "Construyendo",
    "now.building": "Volcado en dos proyectos que por dentro son iguales y por fuera muy distintos: <strong>Neuvora</strong>, para empresas, y <strong>StudyFlow</strong>, para estudiantes. Mismo stack y misma arquitectura; distinto cliente.",
    "now.k2": "Explorando",
    "now.exploring": "El problema al que siempre vuelvo: hacer convivir agentes de IA, cuyas respuestas son impredecibles, con la trazabilidad y la pulcritud que exigen una base de datos y todos los canales conectados a ella. Alrededor de esa idea: fine-tuning de modelos open source, agentes dentro de Edge Functions de Supabase y estrategias para que un AOS crezca sin convertirse en un almacén caótico de información.",
    "now.k3": "Dónde encontrarme",
    "now.events": "Me encanta ir a eventos donde conocer gente que comparta mis ambiciones e intereses. Próximos:",
    "ev.indesia.date": "25–27 nov. 2026",
    "ev.indesia.what": "Hackathon de IA · ETSIT-UPM, Madrid",
    "now.noevents": "Pronto, nuevos eventos.",
    "now.meet": "¿Vas tú también? Escríbeme y nos vemos allí.",

    "proj.title": "Proyectos",
    "proj.intro": "Dos proyectos, una arquitectura. Los dos son privados; te los enseño en directo encantado.",
    "s.caption": "esquema ilustrativo",
    "s1.title": "Neuvora AOS: los departamentos del negocio alimentan una base de datos; los agentes leen y escriben en ella; encima, un panel de control con revisión humana.",
    "s1.d1": "captación",
    "s1.d2": "ventas",
    "s1.d3": "operaciones",
    "s1.d4": "atención",
    "s1.db": "base de datos",
    "s1.agents": "agentes",
    "s1.panel": "panel de control",
    "s1.human": "revisión humana",
    "p1.tag": "Sistemas operativos agénticos para negocios reales.",
    "p1.what": "Busco negocios y los analizo como una rueda, de principio a fin: desde la captación del cliente hasta la venta del producto. Automatizo todo lo posible hasta dejar solo unos pocos pasos de supervisión humana, y lo entrego como una aplicación.",
    "k.part": "Mi parte",
    "k.stack": "Stack",
    "k.result": "Resultado",
    "k.status": "Estado",
    "k.link": "Enlace",
    "p1.part": "Empiezo mapeando los departamentos del negocio y diseño la base de datos según dónde va a leer y escribir cada agente. Después construyo los agentes uno a uno, con especial cuidado en la trazabilidad de cada ejecución y en los guardarraíles de cada uno.",
    "p1.stack": "Supabase (Postgres + Edge Functions) · Vercel (deploy + AI Gateway) · Docker en Debian · Python · TypeScript",
    "p1.result": "En producción: plataforma privada de temario de oposiciones, hecha a medida para un cliente.",
    "p1.status": "Sistemas en producción y otros en desarrollo.",
    "p1.link": "Sistemas privados de clientes · demo en directo bajo petición →",
    "s2.title": "StudyFlow: el material del curso entra en una base de datos; LITS, el agente tutor, lo lee y responde por varios canales.",
    "s2.m1": "apuntes",
    "s2.m2": "guías docentes",
    "s2.m3": "ejercicios",
    "s2.tutor": "tutor",
    "s2.c3": "bloc",
    "p2.tag": "El aula virtual universitaria del futuro.",
    "p2.what": "Un aula virtual con la inteligencia artificial integrada de forma nativa. Llega lejos en muchos frentes: escritura a mano, redacción de apuntes, generación de ejercicios, seguimiento preciso del progreso y <strong>LITS</strong>, un agente que hace de profesor particular, accesible desde varios canales y con acceso inmediato a todo el material del curso: apuntes, guías docentes y ejercicios.",
    "p2.part": "Todo, de principio a fin.",
    "p2.stack": "El mismo stack que Neuvora · Supabase (Postgres + Edge Functions) · Vercel · Telegram",
    "p2.result": "Plan de negocio hecho. Objetivo: un piloto funcionando en una universidad en septiembre de 2027.",
    "p2.status": "En desarrollo, con usuarios de prueba reales (sin coste) que me ayudan a pulirlo.",
    "p2.link": "Todavía sin enlace público.",

    "how.title": "Cómo construyo",
    "how.p1": "Si has llegado hasta aquí, algo te ha llamado la atención. Esta es la idea de fondo: cómo funciona de verdad un sistema operativo agéntico diseñado desde el principio para integrar la IA de forma nativa.",
    "how.p2": "Primero se ordena sobre el papel toda la información que se va a manejar, hasta el dato menos significativo. Por otro lado, se listan todos los procesos que hoy hacen personas o programas y que de verdad puede hacer la IA. Con eso ya se pueden construir las tablas de la base de datos y los agentes que leen y escriben en ellas. Así, por mucho que crezca la base de datos o pase el tiempo, los agentes dejan rastro de su trabajo y la IA puede entender hacia dónde va el negocio, sus puntos fuertes y sus puntos débiles.",
    "how.p3": "Por eso Neuvora y StudyFlow son lo mismo a nivel técnico: mismo stack, misma estructura, distinto cliente. Neuvora busca empresarios; StudyFlow, estudiantes.",
    "how.pieces": "agentes ⇄ base de datos ⇄ panel de control",
    "f.t1": "una base de datos bien estructurada",
    "f.t2": "agentes que leen y escriben en ella",
    "f.t3": "reglas y trazabilidad",
    "f.t4": "un empleado de IA real",
    "how.rulesk": "Tres reglas con las que construyo",
    "r1": "Primero se planifica; después se escribe el código.",
    "r2": "Ningún agente sube a producción sin comprobar que la trazabilidad de sus ejecuciones es precisa.",
    "r3": "Commit, commit, commit: no dejes para mañana lo que puedas commitear hoy.",

    "stack.title": "Stack",
    "stack.intro": "Lo que uso de verdad, no todo lo que he tocado.",
    "st.k1": "Lenguajes",
    "st.v1": "Python <i>(agentes en local)</i> · TypeScript / JavaScript <i>(Edge Functions y web)</i> · SQL · R",
    "st.k2": "IA y agentes",
    "st.v2": "Modelos cerrados vía Vercel AI Gateway · modelos open source con Ollama <i>(Llama 3 8B, Qwen 8B)</i> · fine-tuning de modelos open source · orquestación multiagente · tool calling y MCP · guardarraíles y trazabilidad de ejecuciones",
    "st.k3": "Cómo trabajo",
    "st.v3": "Claude Code <i>(mi herramienta del día a día)</i> · Codex · Kimi Code · Hermes · OpenClaw · agentes propios",
    "st.k4": "Datos",
    "st.v4": "PostgreSQL · Supabase · pandas · NumPy · R + Quarto · modelos de regresión · optimización de procesos",
    "st.k5": "Infra y despliegue",
    "st.v5": "Supabase Edge Functions · Vercel · Docker · Debian / Linux · systemd · Railway · Git y GitHub",
    "st.k6": "Automatización y canales",
    "st.v6": "n8n · bots de Telegram · scraping · voz con Twilio, Deepgram y ElevenLabs",
    "st.k7": "Web",
    "st.v7": "Next.js · React · HTML, CSS y JavaScript",

    "about.title": "Sobre mí",
    "about.p1": "Soy de Madrid y estudio Ciencia e Ingeniería de Datos en la Universidad Rey Juan Carlos. Soy ambicioso y tengo hambre de nuevas experiencias profesionales.",
    "about.p2": "Busco gente con ganas de construir <em>y</em> de vender: gente dispuesta a formar equipo y a ir en serio hasta cumplir los objetivos.",
    "about.p3": "Más allá de lo técnico, me considero honesto, leal con mis amigos y serio, aunque divertido cuando toca.",

    "contact.title": "Contacto",
    "contact.lede": "Si te ha interesado lo que hago y tienes un perfil técnico con algo que aportar, escríbeme. Leo todos los mensajes.",
    "contact.free": "También acepto proyectos freelance rápidos y concretos: pymes pequeñas o una idea bien definida.",
    "foot.built": "Hecho a mano con HTML, CSS y JavaScript."
  };

  var META = {
    en: { desc: "Advanced AI user building agentic operating systems already in use at small businesses. Data Science & Engineering student in Madrid." },
    es: { desc: "Usuario avanzado de IA construyendo sistemas operativos agénticos que ya usan pymes. Estudiante de Ciencia e Ingeniería de Datos en Madrid." }
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var EN = {};
  nodes.forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (!(key in EN)) EN[key] = el.innerHTML;
  });

  function store(lang) { try { localStorage.setItem("lang", lang); } catch (e) {} }
  function stored() { try { return localStorage.getItem("lang"); } catch (e) { return null; } }

  function setLang(lang, save) {
    var dict = lang === "es" ? ES : EN;
    nodes.forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    root.setAttribute("lang", lang);
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", META[lang].desc);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    if (save) store(lang);
  }

  var fromUrl = (location.search.match(/[?&]lang=(en|es)\b/) || [])[1];
  var initial = fromUrl || stored() || "en";
  if (initial !== "en") setLang(initial, false);

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang"), true); });
  });

  /* ── 2. ink dots around the cursor ───────────────────────────── */
  var x = -999, y = -999, queued = false;
  function paint() { queued = false; root.style.setProperty("--mx", x + "px"); root.style.setProperty("--my", y + "px"); }
  window.addEventListener("pointermove", function (e) {
    if (e.pointerType === "touch") return;
    x = e.clientX; y = e.clientY;
    if (!queued) { queued = true; requestAnimationFrame(paint); }
  }, { passive: true });
  document.documentElement.addEventListener("mouseleave", function () { x = y = -999; paint(); });

  /* ── 3. reveal, events, year ─────────────────────────────────── */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  var today = new Date(); today.setHours(0, 0, 0, 0);
  var events = document.querySelectorAll(".event[data-end]");
  var upcoming = 0;
  events.forEach(function (ev) {
    var end = new Date(ev.getAttribute("data-end") + "T23:59:59");
    if (end < today) ev.hidden = true; else upcoming++;
  });
  var empty = document.querySelector(".events-empty");
  if (empty && events.length && !upcoming) empty.hidden = false;

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
