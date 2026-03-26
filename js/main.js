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
  },
  fr: {
    'nav.about':'À propos','nav.experience':'Expérience','nav.skills':'Compétences','nav.education':'Formation','nav.certs':'Certif.','nav.contact':'Contact',
    'hero.desc':'Actuellement <strong>VP IT</strong> avec <strong>plus de 15 ans</strong> d\'expérience à construire et faire évoluer des équipes performantes aux États-Unis et au Mexique 🌎. A dirigé le développement de plateformes logicielles pour certains des <strong>plus grands casinos et chaînes hôtelières du monde</strong> 🎰, en concevant des <strong>solutions modernes d\'entrepôt de données</strong> 📊, en transformant des systèmes monolithiques en plateformes modulaires ⚙️ et en déployant des <strong>applications agentiques avancées pilotées par l\'IA</strong> 🤖. Bilan éprouvé en tant que fondateur et dirigeant technologique, aidant des startups à se développer en organisations d\'entreprise de <strong>plus de 90 personnes</strong> 🚀, tout en livrant des produits utilisés par <strong>des millions d\'utilisateurs</strong> 👥 et en soutenant <strong>des millions de dollars</strong> de volume de transactions 💰.'une startup de 5 personnes à un leader du secteur de&nbsp;<strong>100 personnes</strong>.',
    'hero.years':'Ans d\'exp.','hero.apps':'Apps créées','hero.downloads':'Télécharg.','hero.team':'Équipe jusqu\'à','hero.certs_count':'Certifications',
    'hero.btn_contact':'Me contacter →','hero.btn_portfolio':'Portfolio ↗','hero.btn_github':'GitHub ↗',
    'clients.label':'Approuvé par des marques hôtelières de renommée mondiale',
    'exp.label':'// carrière','exp.title':'Expérience',
    'exp.job1.role':'Vice-Président du Développement Technologique','exp.job2.role':'Architecte Senior IT','exp.job3.role':'Ingénieur Full Stack','exp.job4.role':'Co-Fondateur','exp.job5.role':'Maître de Conférences','exp.job6.role':'Webmaster & Support Technique','exp.job7.role':'Webmaster & Gestionnaire de Contenu',
    'skills.label':'// expertise','skills.title':'Compétences','skills.cloud':'Cloud & Infrastructure','skills.frontend':'Interfaces (Frontend)','skills.backend':'Backend & APIs','skills.mobile':'Développement Mobile','skills.ai':'IA & Science des Données','skills.blockchain':'Blockchain & Jeux Vidéo','skills.security':'Sécurité & DevOps','skills.leadership':'Leadership & Marketing',
    'edu.label':'// académique','edu.title':'Formation','edu.d1':'Master en Administration des Affaires (MBA)','edu.d2':'Master en Développement d\'Applications Mobiles','edu.d3':'Licence en Informatique',
    'certs.label':'// accréditations','certs.title':'Certifications','certs.more':'75+ certifications supplémentaires',
    'lang.label':'// linguistique','lang.title':'Langues','lang.spanish':'Espagnol','lang.english':'Anglais','lang.french':'Français','lang.german':'Allemand','lang.japanese':'Japonais','lang.native':'Natif / Bilingue','lang.native100':'Natif / Bilingue (100%)','lang.limited':'Professionnel Limité (65%)','lang.elementary':'Élémentaire (35%)',
    'contact.label':'// contact','contact.title':'Prenez Contact','contact.subtitle':'Ouvert aux rôles de direction senior, conseil et collaboration.','contact.linkedin':'LinkedIn · +6K abonnés','contact.form.name':'Nom','contact.form.name_ph':'Votre nom','contact.form.email':'E-mail','contact.form.email_ph':'vous@exemple.com','contact.form.message':'Message','contact.form.message_ph':'Qu\'avez-vous en tête ?','contact.form.submit':'Envoyer le message',
    'footer.built':'Fait avec ♥ &nbsp;·&nbsp; Edsson Madrigal © 2025 &nbsp;·&nbsp;'
  },
  de: {
    'nav.about':'Über mich','nav.experience':'Erfahrung','nav.skills':'Fähigkeiten','nav.education':'Ausbildung','nav.certs':'Zertif.','nav.contact':'Kontakt',
    'hero.desc':'Derzeit <strong>VP IT</strong> mit <strong>über 15 Jahren</strong> Erfahrung im Aufbau leistungsstarker Teams in den USA und Mexiko 🌎. Leitete die Entwicklung von Software-Plattformen für einige der <strong>weltweit größten Casinos und Hotelketten</strong> 🎰, entwarf moderne <strong>Data-Warehouse-Lösungen</strong> 📊, transformierte monolithische Systeme in modulare Plattformen ⚙️ und setzte fortschrittliche <strong>KI-gestützte agentische Anwendungen</strong> ein 🤖. Nachgewiesene Erfolgsgeschichte als Gründer und Technologiemanager, der Startups zu Unternehmensorganisationen von <strong>über 90 Mitarbeitern</strong> ausgebaut hat 🚀 — bei gleichzeitiger Lieferung von Produkten für <strong>Millionen von Nutzern</strong> 👥 und Unterstützung von <strong>Millionen Dollar</strong> im Transaktionsvolumen 💰.',
    'hero.years':'Jahre Erf.','hero.apps':'Apps erstellt','hero.downloads':'Downloads','hero.team':'Team skaliert auf','hero.certs_count':'Zertifizierungen',
    'hero.btn_contact':'Kontakt aufnehmen →','hero.btn_portfolio':'Portfolio ↗','hero.btn_github':'GitHub ↗',
    'clients.label':'Vertrauen führender Hospitality-Marken weltweit',
    'exp.label':'// karriere','exp.title':'Erfahrung',
    'exp.job1.role':'Vizepräsident für Technologieentwicklung','exp.job2.role':'Senior IT-Architekt','exp.job3.role':'Full Stack Ingenieur','exp.job4.role':'Mitgründer','exp.job5.role':'Gastdozent','exp.job6.role':'Webmaster & Technischer Support','exp.job7.role':'Webmaster & Content Manager',
    'skills.label':'// kompetenzen','skills.title':'Fähigkeiten','skills.cloud':'Cloud & Infrastruktur','skills.frontend':'Frontend','skills.backend':'Backend & APIs','skills.mobile':'Mobile Entwicklung','skills.ai':'KI & Data Science','skills.blockchain':'Blockchain & Game Dev','skills.security':'Sicherheit & DevOps','skills.leadership':'Führung & Marketing',
    'edu.label':'// akademisch','edu.title':'Ausbildung','edu.d1':'Master of Business Administration (MBA)','edu.d2':'MSc — Mobile Anwendungsentwicklung','edu.d3':'BSc — Informatik',
    'certs.label':'// qualifikationen','certs.title':'Zertifizierungen','certs.more':'75+ weitere Zertifizierungen',
    'lang.label':'// sprachen','lang.title':'Sprachen','lang.spanish':'Spanisch','lang.english':'Englisch','lang.french':'Französisch','lang.german':'Deutsch','lang.japanese':'Japanisch','lang.native':'Muttersprache / Zweisprachig','lang.native100':'Muttersprache / Zweisprachig (100%)','lang.limited':'Begrenzte Arbeitskenntnis (65%)','lang.elementary':'Grundkenntnisse (35%)',
    'contact.label':'// kontakt','contact.title':'Kontakt Aufnehmen','contact.subtitle':'Offen für leitende Positionen, Beratung und Zusammenarbeit.','contact.linkedin':'LinkedIn · +6K Follower','contact.form.name':'Name','contact.form.name_ph':'Ihr Name','contact.form.email':'E-Mail','contact.form.email_ph':'sie@beispiel.de','contact.form.message':'Nachricht','contact.form.message_ph':'Was liegt Ihnen am Herzen?','contact.form.submit':'Nachricht senden',
    'footer.built':'Erstellt mit ♥ &nbsp;·&nbsp; Edsson Madrigal © 2025 &nbsp;·&nbsp;'
  },
  ja: {
    'nav.about':'概要','nav.experience':'経験','nav.skills':'スキル','nav.education':'学歴','nav.certs':'資格','nav.contact':'連絡先',
    'hero.desc':'現在、米国およびメキシコで<strong>15年以上</strong>にわたりハイパフォーマンスなチームを構築・拡大してきた<strong>VP of IT</strong> 🌎。世界最大級の<strong>カジノおよびホテルチェーン</strong>を支えるソフトウェアプラットフォームの開発を主導し 🎰、最新の<strong>データウェアハウスソリューション</strong>を設計 📊、モノリシックシステムをモジュラープラットフォームへ変革 ⚙️、高度な<strong>AI駆動型エージェントアプリケーション</strong>を展開 🤖。創業者・技術経営者として実績を持ち、スタートアップを<strong>90名以上</strong>の規律あるエンタープライズ組織へと成長させ 🚀、<strong>数百万ユーザー</strong>に利用される製品を提供し 👥、<strong>数百万ドル</strong>のトランザクション量をサポート 💰。',
    'hero.years':'経験年数','hero.apps':'開発アプリ','hero.downloads':'ダウンロード数','hero.team':'チーム規模','hero.certs_count':'資格・認定数',
    'hero.btn_contact':'お問い合わせ →','hero.btn_portfolio':'ポートフォリオ ↗','hero.btn_github':'GitHub ↗',
    'clients.label':'世界クラスのホスピタリティブランドから信頼される',
    'exp.label':'// キャリア','exp.title':'経験',
    'exp.job1.role':'テクノロジー開発担当副社長','exp.job2.role':'シニア IT アーキテクト','exp.job3.role':'フルスタックエンジニア','exp.job4.role':'共同創業者','exp.job5.role':'准教授','exp.job6.role':'ウェブマスター・テクニカルサポート','exp.job7.role':'ウェブマスター・コンテンツマネージャー',
    'skills.label':'// 専門知識','skills.title':'スキル','skills.cloud':'クラウド・インフラ','skills.frontend':'フロントエンド','skills.backend':'バックエンド・API','skills.mobile':'モバイル開発','skills.ai':'AI・データサイエンス','skills.blockchain':'ブロックチェーン・ゲーム開発','skills.security':'セキュリティ・DevOps','skills.leadership':'リーダーシップ・マーケティング',
    'edu.label':'// 学歴','edu.title':'学歴','edu.d1':'経営学修士（MBA）','edu.d2':'理学修士 — モバイルアプリ開発','edu.d3':'理学士 — コンピュータサイエンス',
    'certs.label':'// 資格','certs.title':'資格・認定','certs.more':'75以上の追加資格',
    'lang.label':'// 言語','lang.title':'言語','lang.spanish':'スペイン語','lang.english':'英語','lang.french':'フランス語','lang.german':'ドイツ語','lang.japanese':'日本語','lang.native':'ネイティブ / バイリンガル','lang.native100':'ネイティブ / バイリンガル（100%）','lang.limited':'実務限定（65%）','lang.elementary':'初級（35%）',
    'contact.label':'// コネクト','contact.title':'お問い合わせ','contact.subtitle':'シニアリーダーシップ職、コンサルティング、協業を歓迎します。','contact.linkedin':'LinkedIn · 6K+ フォロワー','contact.form.name':'お名前','contact.form.name_ph':'お名前を入力','contact.form.email':'メールアドレス','contact.form.email_ph':'you@example.com','contact.form.message':'メッセージ','contact.form.message_ph':'ご用件をお聞かせください','contact.form.submit':'メッセージを送る',
    'footer.built':'♥ を込めて &nbsp;·&nbsp; Edsson Madrigal © 2025 &nbsp;·&nbsp;'
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
