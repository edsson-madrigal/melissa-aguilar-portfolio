/* ═══════════════════════════════════════════════
   NEON VEGAS — main.js
   Edsson Madrigal Portfolio
═══════════════════════════════════════════════ */

/* ══════════════════════════════
   TRANSLATIONS
══════════════════════════════ */
const TRANSLATIONS = {
  en: {
    'nav.about':'About','nav.experience':'Experience','nav.skills':'Skills','nav.education':'Education','nav.certs':'Certs','nav.contact':'Contact',
    'hero.desc':'Currently <strong>VP of IT</strong> with <strong>15+ years</strong> of experience building and scaling high-performing teams across the USA and México 🌎. Led the development of software platforms powering some of the world\'s <strong>largest casinos and hotel chains</strong> 🎰, architecting modern <strong>data warehouse solutions</strong> 📊, transforming monolithic systems into modular platforms ⚙️, and deploying advanced <strong>AI-driven agentic applications</strong> 🤖. Proven track record as a founder and technology executive, helping startups grow into disciplined, scalable enterprise organizations of <strong>90+ people</strong> 🚀 — while delivering products used by <strong>millions of users</strong> 👥 and supporting <strong>millions of dollars</strong> in transaction volume 💰.'s biggest casinos</strong>, web portals visited by <strong>millions</strong>, and <strong>40+ mobile apps</strong> with 1.5M+ downloads. Currently scaling UrVenue from a 5-person startup to a&nbsp;<strong>100-person</strong> industry leader.',
    'hero.years':'Years exp.','hero.apps':'Apps built','hero.downloads':'Downloads','hero.team':'Team scaled to','hero.certs_count':'Certifications',
    'hero.btn_contact':'Get in touch →','hero.btn_portfolio':'Portfolio ↗','hero.btn_github':'GitHub ↗',
    'clients.label':'Built and scaled software platforms trusted by world-class enterprises.',
    'exp.label':'// career','exp.title':'Experience',
    'exp.job1.role':'Vice President of Technology Development','exp.job2.role':'Senior Information Technology Architect','exp.job3.role':'Full Stack Engineer','exp.job4.role':'Co-Founder','exp.job5.role':'Associate Professor','exp.job6.role':'Webmaster & Technical Support','exp.job7.role':'Webmaster & Content Manager',
    'skills.label':'// expertise','skills.title':'Skills','skills.cloud':'Cloud & Infrastructure','skills.frontend':'Frontend','skills.backend':'Backend & APIs','skills.mobile':'Mobile Development','skills.ai':'AI & Data Science','skills.blockchain':'Blockchain & Game Dev','skills.security':'Security & DevOps','skills.leadership':'Leadership & Marketing',
    'edu.label':'// academic','edu.title':'Education','edu.d1':'Master of Business Administration (MBA)','edu.d2':'MSc — Mobile Application Development','edu.d3':'BSc — Computer Science',
    'certs.label':'// credentials','certs.title':'Certifications','certs.more':'75+ additional certifications',
    'lang.label':'// linguistics','lang.title':'Languages','lang.spanish':'Spanish','lang.english':'English','lang.french':'French','lang.german':'German','lang.japanese':'Japanese','lang.native':'Native / Bilingual','lang.native100':'Native / Bilingual (100%)','lang.limited':'Limited Working (65%)','lang.elementary':'Elementary (35%)',
    'contact.label':'// connect','contact.title':'Get in Touch','contact.subtitle':'Open to senior leadership roles, consulting, and collaboration.','contact.linkedin':'LinkedIn · 6K+ followers','contact.form.name':'Name','contact.form.name_ph':'Your name','contact.form.email':'Email','contact.form.email_ph':'you@example.com','contact.form.message':'Message','contact.form.message_ph':'What\'s on your mind?','contact.form.submit':'Send Message',
    'footer.built':'Built with ♥ &nbsp;·&nbsp; Edsson Madrigal © 2025 &nbsp;·&nbsp;'
  },
  es: {
    'nav.about':'Sobre mí','nav.experience':'Experiencia','nav.skills':'Habilidades','nav.education':'Educación','nav.certs':'Certif.','nav.contact':'Contacto',
    'hero.desc':'Actualmente <strong>VP de TI</strong> con <strong>más de 15 años</strong> de experiencia construyendo y escalando equipos de alto rendimiento en EE.UU. y México 🌎. Lideró el desarrollo de plataformas de software que impulsan algunos de los <strong>casinos y cadenas hoteleras más grandes del mundo</strong> 🎰, arquitectando modernas <strong>soluciones de data warehouse</strong> 📊, transformando sistemas monolíticos en plataformas modulares ⚙️ y desplegando avanzadas <strong>aplicaciones agénticas con IA</strong> 🤖. Trayectoria comprobada como fundador y ejecutivo tecnológico, llevando startups a organizaciones empresariales de <strong>más de 90 personas</strong> 🚀, entregando productos usados por <strong>millones de usuarios</strong> 👥 y soportando <strong>millones de dólares</strong> en volumen de transacciones 💰.',
    'hero.years':'Años exp.','hero.apps':'Apps creadas','hero.downloads':'Descargas','hero.team':'Equipo escalado a','hero.certs_count':'Certificaciones',
    'hero.btn_contact':'Contáctame →','hero.btn_portfolio':'Portafolio ↗','hero.btn_github':'GitHub ↗',
    'clients.label':'Con la confianza de marcas líderes en hospitalidad',
    'exp.label':'// carrera','exp.title':'Experiencia',
    'exp.job1.role':'Vicepresidente de Desarrollo Tecnológico','exp.job2.role':'Arquitecto Senior de Tecnología','exp.job3.role':'Ingeniero Full Stack','exp.job4.role':'Cofundador','exp.job5.role':'Profesor Asociado','exp.job6.role':'Webmaster y Soporte Técnico','exp.job7.role':'Webmaster y Gestor de Contenidos',
    'skills.label':'// experiencia','skills.title':'Habilidades','skills.cloud':'Nube e Infraestructura','skills.frontend':'Interfaz (Frontend)','skills.backend':'Backend y APIs','skills.mobile':'Desarrollo Móvil','skills.ai':'IA y Ciencia de Datos','skills.blockchain':'Blockchain y Juegos','skills.security':'Seguridad y DevOps','skills.leadership':'Liderazgo y Marketing',
    'edu.label':'// académico','edu.title':'Educación','edu.d1':'Maestría en Administración de Empresas (MBA)','edu.d2':'Maestría en Desarrollo de Aplicaciones Móviles','edu.d3':'Licenciatura en Ciencias de la Computación',
    'certs.label':'// credenciales','certs.title':'Certificaciones','certs.more':'75+ certificaciones adicionales',
    'lang.label':'// lingüística','lang.title':'Idiomas','lang.spanish':'Español','lang.english':'Inglés','lang.french':'Francés','lang.german':'Alemán','lang.japanese':'Japonés','lang.native':'Nativo / Bilingüe','lang.native100':'Nativo / Bilingüe (100%)','lang.limited':'Trabajo Limitado (65%)','lang.elementary':'Elemental (35%)',
    'contact.label':'// conectar','contact.title':'Contáctame','contact.subtitle':'Abierto a roles de liderazgo senior, consultoría y colaboración.','contact.linkedin':'LinkedIn · +6K seguidores','contact.form.name':'Nombre','contact.form.name_ph':'Tu nombre','contact.form.email':'Correo','contact.form.email_ph':'tu@ejemplo.com','contact.form.message':'Mensaje','contact.form.message_ph':'¿En qué puedo ayudarte?','contact.form.submit':'Enviar mensaje',
    'footer.built':'Hecho con ♥ &nbsp;·&nbsp; Edsson Madrigal © 2025 &nbsp;·&nbsp;'
  }
};

function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t[el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });
  localStorage.setItem('lang', lang);
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = lang;
}

/* ══════════════════════════════
   PARTICLE CANVAS SYSTEM
══════════════════════════════ */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  let mouseX = -9999, mouseY = -9999;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkParticle() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 1.2 + 0.4,
      a:  Math.random() * 0.55 + 0.15
    };
  }

  function init() {
    resize();
    particles = [];
    const count = Math.min(160, Math.floor((W * H) / 9000));
    for (let i = 0; i < count; i++) particles.push(mkParticle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      // Mouse warp — pull toward cursor
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 140 && dist > 0) {
        const force = (140 - dist) / 140 * 0.012;
        p.vx += dx / dist * force;
        p.vy += dy / dist * force;
      }

      // Speed limit
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 1.4) { p.vx = p.vx / speed * 1.4; p.vy = p.vy / speed * 1.4; }

      // Damping
      p.vx *= 0.992;
      p.vy *= 0.992;

      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < -10)     p.x = W + 10;
      if (p.x > W + 10)  p.x = -10;
      if (p.y < -10)     p.y = H + 10;
      if (p.y > H + 10)  p.y = -10;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,215,0,${p.a})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(255,215,0,0.5)';
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw connecting lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 80) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255,215,0,${(1 - d / 80) * 0.12})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', init, { passive: true });
  window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });

  init();
  draw();
})();

/* ══════════════════════════════
   CUSTOM CURSOR + TRAIL
══════════════════════════════ */
(function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let cx = 0, cy = 0; // ring (lagged)
  let tx = 0, ty = 0; // dot (immediate)
  let lastTrail = 0;

  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    dot.style.left = tx + 'px';
    dot.style.top  = ty + 'px';

    // Trail dots (throttled)
    const now = Date.now();
    if (now - lastTrail > 35) {
      lastTrail = now;
      const t = document.createElement('div');
      t.className = 'cursor-trail';
      t.style.left = tx + 'px';
      t.style.top  = ty + 'px';
      document.body.appendChild(t);
      setTimeout(() => t.remove(), 600);
    }
  }, { passive: true });

  // Smooth ring follow
  function animateRing() {
    cx += (tx - cx) * 0.14;
    cy += (ty - cy) * 0.14;
    ring.style.left = cx + 'px';
    ring.style.top  = cy + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover state on interactive elements
  const interactives = 'a, button, .btn-gold, .btn-outline-cyan, .btn-ghost, .skill-card, .cert-featured-card, .contact-card, select, input, textarea';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactives)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactives)) document.body.classList.remove('cursor-hover');
  });
})();

/* ══════════════════════════════
   PARALLAX — SCROLL LAYERS
══════════════════════════════ */
(function initParallax() {
  const layerFar = document.getElementById('layer-far');
  if (!layerFar) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    layerFar.style.transform = `translateY(${y * 0.28}px)`;
  }, { passive: true });
})();

/* ══════════════════════════════
   MAGNETIC BUTTONS
══════════════════════════════ */
(function initMagnetic() {
  function onMove(e, btn) {
    const rect = btn.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dx   = e.clientX - cx;
    const dy   = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const range = 80;
    if (dist < range) {
      const pull = (range - dist) / range;
      btn.style.transform = `translate(${dx * pull * 0.35}px, ${dy * pull * 0.35}px)`;
    }
  }

  function onLeave(btn) {
    btn.style.transform = '';
  }

  function attach() {
    document.querySelectorAll('.mag-btn').forEach(btn => {
      btn.addEventListener('mousemove', e => onMove(e, btn), { passive: true });
      btn.addEventListener('mouseleave', () => onLeave(btn));
    });
  }

  // Attach after a short delay so all elements exist
  setTimeout(attach, 300);
})();

/* ══════════════════════════════
   3D TILT ON SECTION TITLES
══════════════════════════════ */
(function initTilt() {
  const tiltEls = document.querySelectorAll('.sec-title');

  tiltEls.forEach(el => {
    const section = el.closest('section') || el.parentElement;
    section.addEventListener('mousemove', e => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      el.style.transform    = `perspective(600px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg)`;
      el.style.transition   = 'transform 0.1s ease';
      el.style.textShadow   = `${x * 6}px ${y * 4}px 25px rgba(255,215,0,0.25)`;
    }, { passive: true });

    section.addEventListener('mouseleave', () => {
      el.style.transform  = '';
      el.style.transition = 'transform 0.5s ease';
      el.style.textShadow = '';
    });
  });
})();

/* ══════════════════════════════
   HOLOGRAPHIC CARD SHIMMER
══════════════════════════════ */
(function initHolo() {
  document.querySelectorAll('.skill-card, .cert-featured-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
      const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
      const rx = ((parseFloat(y) - 50) / 8).toFixed(2);
      const ry = ((parseFloat(x) - 50) / 8).toFixed(2);
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
      card.style.setProperty('--rx', rx + 'deg');
      card.style.setProperty('--ry', ry + 'deg');
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
})();

/* ══════════════════════════════
   SCROLL REVEAL (general)
══════════════════════════════ */
(function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Stagger children in grids
  document.querySelectorAll('.skills-grid, .edu-grid, .certs-featured, .lang-grid, .contact-side').forEach(grid => {
    [...grid.children].forEach((child, i) => { child.style.transitionDelay = `${i * 60}ms`; });
  });
})();

/* ══════════════════════════════
   TIMELINE DEAL-IN ANIMATION
══════════════════════════════ */
(function initTimeline() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in-view'), 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.timeline-item').forEach(item => obs.observe(item));
})();

/* ══════════════════════════════
   EDUCATION / LANG / CERT REVEAL
══════════════════════════════ */
(function initCardReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.edu-card, .lang-card, .cert-featured-card').forEach(el => obs.observe(el));

  // Stagger edu-grid and lang-grid
  document.querySelectorAll('.edu-grid, .lang-grid, .certs-featured').forEach(grid => {
    [...grid.children].forEach((child, i) => {
      child.style.transitionDelay = `${i * 70}ms`;
    });
  });
})();

/* ══════════════════════════════
   ROTATING JOB TITLE
══════════════════════════════ */
(function initRotatingTitle() {
  const TITLES = [
    'Chief Technology Officer (CTO)', 'Chief Information Officer (CIO)', 'Chief Digital Officer', 'Chief AI Officer',
    'Chief Data & AI Officer', 'Senior Vice President of Technology / Engineering', 'Senior Vice President of AI / Data',
    'Vice President of Engineering', 'Vice President of Technology', 'Vice President of IT',
    'Vice President of AI / Machine Learning', 'Vice President of Data & AI', 'Head of Engineering',
    'Head of Technology', 'Head of AI / Machine Learning', 'Head of Data & AI',
    'Senior Director of Engineering', 'Senior Director of AI / Machine Learning',
    'Director of Engineering', 'Director of AI / Machine Learning',
    'Director of Architecture / Platform', 'Director of Data Science / AI',
  ];

  // Shuffle
  for (let i = TITLES.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [TITLES[i], TITLES[j]] = [TITLES[j], TITLES[i]];
  }

  const rotEl       = document.getElementById('rotating-title');
  const rotElFooter = document.getElementById('rotating-title-footer');
  let rotIdx = 0;

  function rotate() {
    if (rotEl)       rotEl.classList.add('fade-out');
    if (rotElFooter) rotElFooter.classList.add('fade-out');
    setTimeout(() => {
      rotIdx = (rotIdx + 1) % TITLES.length;
      if (rotEl)       { rotEl.textContent       = TITLES[rotIdx]; rotEl.classList.remove('fade-out'); }
      if (rotElFooter) { rotElFooter.textContent = TITLES[rotIdx]; rotElFooter.classList.remove('fade-out'); }
    }, 450);
  }

  setInterval(rotate, 3000);
})();

/* ══════════════════════════════
   LANGUAGE SELECTOR
══════════════════════════════ */
(function initLang() {
  const saved = localStorage.getItem('lang') || 'en';
  applyLang(saved);
  const sel = document.getElementById('lang-select');
  if (sel) sel.addEventListener('change', () => applyLang(sel.value));
})();

/* ══════════════════════════════
   DAY / NIGHT THEME TOGGLE
══════════════════════════════ */
(function initTheme() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const html = document.documentElement;

  // Restore saved preference
  if (localStorage.getItem('theme') === 'light') {
    html.classList.add('light');
    btn.textContent = '🌙';
  }

  btn.addEventListener('click', () => {
    const isLight = html.classList.toggle('light');
    btn.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
})();

/* ══════════════════════════════
   MOBILE NAV
══════════════════════════════ */
(function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => links.classList.toggle('show'));

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('show'));
  });

  // Active nav on scroll
  const sections  = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
    navAnchors.forEach(a => {
      const isActive = a.getAttribute('href') === `#${current}`;
      a.classList.toggle('active', isActive);
    });
  }, { passive: true });
})();

/* ══════════════════════════════
   CONTACT FORM + TURNSTILE
══════════════════════════════ */
let turnstileToken = null;

function onTurnstileSuccess(token) {
  turnstileToken = token;
  const btn = document.getElementById('contact-submit');
  if (btn) btn.disabled = false;
}

function onTurnstileExpired() {
  turnstileToken = null;
  const btn = document.getElementById('contact-submit');
  if (btn) btn.disabled = true;
}

(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn    = document.getElementById('contact-submit');
    const status = document.getElementById('contact-status');
    if (!turnstileToken) return;

    const name    = document.getElementById('cf-name').value.trim();
    const email   = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();
    if (!name || !email || !message) return;

    const t = TRANSLATIONS[localStorage.getItem('lang') || 'en'];
    btn.disabled    = true;
    btn.textContent = '…';
    status.className = 'contact-form-status';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, token: turnstileToken })
      });

      if (res.ok) {
        status.textContent  = '✓ Message sent! I\'ll get back to you soon.';
        status.className    = 'contact-form-status success';
        form.reset();
        turnstileToken      = null;
        if (window.turnstile) window.turnstile.reset();
      } else {
        throw new Error('server');
      }
    } catch {
      status.textContent = '✕ Something went wrong. Please try again.';
      status.className   = 'contact-form-status error';
      btn.disabled       = false;
      btn.textContent    = (t && t['contact.form.submit']) || 'Send Message';
    }
  });
})();
