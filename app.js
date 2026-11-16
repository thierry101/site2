
const EXPERTISE_DOMAINS = [
  {
    id: 'travaux-publics',
    index: '01',
    title: 'Travaux Publics',
    category: 'gc_mines',
    categoryLabel: 'Génie Civil & Mines',
    summary: "Voiries, réseaux divers (VRD), aménagement de pistes rurales et ouvrages d'art.",
    deliverables: ['Reprofilage lourd et pistes rurales', 'Plateformes VRD et caniveaux béton', "Dalots, ponceaux et ouvrages d'art"],
    unitLabel: 'kilomètres linéaires / lots VRD',
    unitShort: 'km',
    minQty: 1, maxQty: 30, defaultQty: 5, stepQty: 1,
    baseUnitCostXof: 8500000, mobilizationBaseXof: 4500000, baseWeeks: 6,
  },
  {
    id: 'batiments',
    index: '02',
    title: 'Bâtiments',
    category: 'gc_mines',
    categoryLabel: 'Génie Civil & Mines',
    summary: 'Construction, réhabilitation et travaux de finition pour bâtiments publics et privés.',
    deliverables: ['Édifices administratifs et scolaires', 'Réhabilitation structurelle et toiture', 'Second œuvre complet et finitions'],
    unitLabel: 'surface bâtie estimée (m²)',
    unitShort: 'm²',
    minQty: 50, maxQty: 1500, defaultQty: 250, stepQty: 50,
    baseUnitCostXof: 195000, mobilizationBaseXof: 2500000, baseWeeks: 8,
  },
  {
    id: 'forage-hydraulique',
    index: '03',
    title: 'Forage & Hydraulique',
    category: 'energie_eau',
    categoryLabel: 'Énergie & Hydraulique',
    summary: "Installation d'équipements d'eau potable, pompes immergées et pompage solaire.",
    deliverables: ['Implantation et foration équipée', 'Pompes immergées et solaires', "Châteaux d'eau et bornes-fontaines"],
    unitLabel: "forages / points d'eau équipés",
    unitShort: 'ouvrages',
    minQty: 1, maxQty: 20, defaultQty: 3, stepQty: 1,
    baseUnitCostXof: 6800000, mobilizationBaseXof: 1800000, baseWeeks: 4,
  },
  {
    id: 'exploitation-miniere',
    index: '04',
    title: 'Exploitation Minière',
    category: 'gc_mines',
    categoryLabel: 'Génie Civil & Mines',
    summary: 'Terrassement, préparation de sols et appui logistique aux opérations minières.',
    deliverables: ['Décapage et terrassement grande masse', 'Plateformes de stockage et bassins', 'Appui logistique et transport matériaux'],
    unitLabel: 'hectares / campagnes',
    unitShort: 'ha',
    minQty: 1, maxQty: 40, defaultQty: 6, stepQty: 1,
    baseUnitCostXof: 7200000, mobilizationBaseXof: 5200000, baseWeeks: 5,
  },
  {
    id: 'electricite-industrielle',
    index: '05',
    title: 'Électricité Industrielle',
    category: 'energie_eau',
    categoryLabel: 'Énergie & Hydraulique',
    summary: 'Installations Haute/Basse Tension, postes de transformation et armoires électriques.',
    deliverables: ['Raccordements HTA/BT et lignes', 'Postes transformateurs et mise en service', 'Câblage TGBT et armoires de commande'],
    unitLabel: 'postes / lots HTA-BT',
    unitShort: 'lots',
    minQty: 1, maxQty: 15, defaultQty: 2, stepQty: 1,
    baseUnitCostXof: 9400000, mobilizationBaseXof: 2200000, baseWeeks: 5,
  },
  {
    id: 'mecanique-industrielle',
    index: '06',
    title: 'Mécanique Industrielle',
    category: 'energie_eau',
    categoryLabel: 'Énergie & Hydraulique',
    summary: 'Maintenance, réparation de motopompes, groupes électrogènes et engins de chantier.',
    deliverables: ['Révision de groupes électrogènes', 'Remise en état de motopompes', 'Maintenance préventive engins BTP'],
    unitLabel: 'unités industrielles',
    unitShort: 'unités',
    minQty: 1, maxQty: 25, defaultQty: 4, stepQty: 1,
    baseUnitCostXof: 2450000, mobilizationBaseXof: 950000, baseWeeks: 3,
  },
  {
    id: 'equipement-bureautique',
    index: '07',
    title: 'Équipement Bureautique',
    category: 'equipement_negoce',
    categoryLabel: 'Équipement & Négoce',
    summary: 'Fourniture de matériel informatique, imagerie multifonction et mobilier de bureau.',
    deliverables: ['Postes informatiques et onduleurs', 'Imagerie multifonction et consommables', 'Mobilier de direction et archivage'],
    unitLabel: 'postes complets équipés',
    unitShort: 'postes',
    minQty: 5, maxQty: 120, defaultQty: 20, stepQty: 5,
    baseUnitCostXof: 780000, mobilizationBaseXof: 450000, baseWeeks: 2,
  },
  {
    id: 'commerce-import-export',
    index: '08',
    title: 'Commerce Import-Export',
    category: 'equipement_negoce',
    categoryLabel: 'Équipement & Négoce',
    summary: 'Négoce général, approvisionnement de chantiers et fournitures industrielles diverses.',
    deliverables: ['Matériaux de construction et EPI', 'Pièces détachées et outillage industriel', 'Logistique import-export et livraison site'],
    unitLabel: "lots d'approvisionnement",
    unitShort: 'lots',
    minQty: 1, maxQty: 20, defaultQty: 4, stepQty: 1,
    baseUnitCostXof: 3600000, mobilizationBaseXof: 1100000, baseWeeks: 3,
  },
];

const SCALE_CONFIG = {
  cible: { label: 'Intervention ciblée', multiplier: 1, durationMultiplier: 1 },
  envergure: { label: "Projet d'envergure", multiplier: 1.18, durationMultiplier: 1.25 },
  programme: { label: 'Programme multi-lots', multiplier: 1.35, durationMultiplier: 1.55 },
};

const ZONE_CONFIG = {
  'mbengue-poro': { label: "M'Bengué & Poro", multiplier: 1.0 },
  savanes: { label: 'District des Savanes', multiplier: 1.08 },
  interieur: { label: "Intérieur Côte d'Ivoire", multiplier: 1.16 },
  abidjan: { label: "District d'Abidjan", multiplier: 1.14 },
};

const MODE_CONFIG = {
  standard: { label: 'Exécution standard', multiplier: 1.0, extraWeeks: 0 },
  prioritaire: { label: 'Déploiement prioritaire', multiplier: 1.15, extraWeeks: -1 },
  'cle-en-main': { label: 'Clé en main + Maintenance', multiplier: 1.24, extraWeeks: 1 },
};

const state = {
  filter: 'all',
  domainId: EXPERTISE_DOMAINS[0].id,
  scaleId: 'envergure',
  quantity: EXPERTISE_DOMAINS[0].defaultQty,
  zoneId: 'mbengue-poro',
  modeId: 'standard',
  attachedQuote: null,
};

const formatXof = (v) => `${Math.round(v).toLocaleString('fr-FR')} F CFA`;

let toastTimer = null;
function showToast(message, isError = false) {
  const toastEl = document.getElementById('toast');
  const titleEl = document.getElementById('toast-title');
  const msgEl = document.getElementById('toast-message');
  if (!toastEl || !titleEl || !msgEl) return;

  toastEl.classList.toggle('error', isError);
  titleEl.textContent = isError ? 'Vérification requise' : 'Confirmation EKD SARL';
  msgEl.textContent = message;
  toastEl.hidden = false;

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toastEl.hidden = true; }, 5000);
}

function renderExpertises() {
  const grid = document.getElementById('expertise-grid');
  if (!grid) return;

  const list = state.filter === 'all'
    ? EXPERTISE_DOMAINS
    : EXPERTISE_DOMAINS.filter((d) => d.category === state.filter);

  grid.innerHTML = list.map((d) => `
    <article class="expertise-card">
      <div>
        <div class="card-meta">
          <span class="mono accent-blue bold">${d.index}.</span>
          <span>${d.categoryLabel}</span>
        </div>
        <h3 class="card-title">${d.title}</h3>
        <p class="card-summary">${d.summary}</p>
        <ul class="card-list">${d.deliverables.map((item) => `<li>– ${item}</li>`).join('')}</ul>
      </div>
      <div class="card-footer">
        <span class="card-rate mono tabular">${formatXof(d.baseUnitCostXof)} / ${d.unitShort}</span>
        <button type="button" class="btn btn-secondary btn-sm" data-sim-domain="${d.id}">Simuler →</button>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('[data-sim-domain]').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectDomain(btn.getAttribute('data-sim-domain'));
      document.getElementById('simulateur')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderDomainButtons() {
  const container = document.getElementById('sim-domain-buttons');
  if (!container) return;

  container.innerHTML = EXPERTISE_DOMAINS.map((d) => `
    <button type="button" class="domain-pick-btn ${d.id === state.domainId ? 'active' : ''}" data-domain-pick="${d.id}">
      ${d.index}. ${d.title}
    </button>
  `).join('');

  container.querySelectorAll('[data-domain-pick]').forEach((btn) => {
    btn.addEventListener('click', () => selectDomain(btn.getAttribute('data-domain-pick')));
  });
}

function selectDomain(domainId) {
  const domain = EXPERTISE_DOMAINS.find((d) => d.id === domainId) || EXPERTISE_DOMAINS[0];
  state.domainId = domain.id;
  state.quantity = domain.defaultQty;

  const rangeEl = document.getElementById('sim-quantity');
  if (rangeEl) {
    rangeEl.min = String(domain.minQty);
    rangeEl.max = String(domain.maxQty);
    rangeEl.step = String(domain.stepQty);
    rangeEl.value = String(domain.defaultQty);
  }
  renderDomainButtons();
  updateSimulation();
}

function getSimulationResult() {
  const domain = EXPERTISE_DOMAINS.find((d) => d.id === state.domainId) || EXPERTISE_DOMAINS[0];
  const scale = SCALE_CONFIG[state.scaleId] || SCALE_CONFIG.envergure;
  const zone = ZONE_CONFIG[state.zoneId] || ZONE_CONFIG['mbengue-poro'];
  const mode = MODE_CONFIG[state.modeId] || MODE_CONFIG.standard;

  const qty = Math.max(domain.minQty, Math.min(domain.maxQty, Number(state.quantity)));
  const subtotal = qty * domain.baseUnitCostXof * scale.multiplier;
  const mobilization = domain.mobilizationBaseXof * zone.multiplier;

  const execution = Math.round((subtotal * 0.68 * mode.multiplier) / 50000) * 50000;
  const studies = Math.round((subtotal * 0.32 * mode.multiplier) / 50000) * 50000;
  const logistics = Math.round(mobilization / 50000) * 50000;

  const median = studies + execution + logistics;
  const min = Math.round((median * 0.9) / 50000) * 50000;
  const max = Math.round((median * 1.12) / 50000) * 50000;
  const weeks = Math.max(1, Math.round(domain.baseWeeks * scale.durationMultiplier + Math.floor((qty - domain.minQty) / Math.max(domain.stepQty * 2, 1)) + mode.extraWeeks));

  return { domain, scaleLabel: scale.label, zoneLabel: zone.label, qty, studies, execution, logistics, median, min, max, weeks };
}

function updateSimulation() {
  const res = getSimulationResult();
  document.getElementById('sim-qty-label').textContent = `3. Volume estimé (${res.domain.unitLabel})`;
  document.getElementById('sim-qty-value').textContent = `${res.qty} ${res.domain.unitShort}`;
  document.getElementById('sim-duration').textContent = `Délai est. ${res.weeks} sem.`;
  document.getElementById('sim-range-total').textContent = `${formatXof(res.min)} – ${formatXof(res.max)}`;
  document.getElementById('sim-median-total').textContent = formatXof(res.median);
  document.getElementById('sim-studies').textContent = formatXof(res.studies);
  document.getElementById('sim-execution').textContent = formatXof(res.execution);
  document.getElementById('sim-logistics').textContent = formatXof(res.logistics);
}

function renderAttachedQuote() {
  const box = document.getElementById('attached-quote-box');
  if (!box) return;
  if (!state.attachedQuote) { box.hidden = true; return; }
  const q = state.attachedQuote;
  document.getElementById('attached-quote-meta').textContent = `${q.domain.title} · ${q.scaleLabel} · ${q.qty} ${q.domain.unitShort} · ${q.zoneLabel}`;
  document.getElementById('attached-quote-amount').textContent = `${formatXof(q.min)} – ${formatXof(q.max)} (${q.weeks} sem. est.)`;
  box.hidden = false;
}

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  menuBtn?.addEventListener('click', () => {
    const isHidden = drawer.hidden;
    drawer.hidden = !isHidden;
    menuBtn.setAttribute('aria-expanded', String(isHidden));
  });
  drawer?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    drawer.hidden = true;
    menuBtn?.setAttribute('aria-expanded', 'false');
  }));

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.getAttribute('data-filter') || 'all';
      renderExpertises();
    });
  });

  const contactDomain = document.getElementById('contact-domain');
  if (contactDomain) {
    contactDomain.innerHTML = EXPERTISE_DOMAINS.map((d) => `<option value="${d.title}">${d.index}. ${d.title}</option>`).join('');
  }

  const legalSummary = [
    'FICHE LÉGALE — ENTREPRISE KONE DAOUDA (EKD SARL)',
    'Gérant Statutaire : M. KONE Daouda',
    "Capital & Siège : 1.000.000 F CFA — M'Bengué (Korhogo, Côte d'Ivoire)",
    'Immatriculation : RCCM CI-KGO-2011-B-139 | Greffe TPI N° 036/11',
    'Fondation Notariée : Étude de Me SOUTH-DIOP Yvette, Notaire (11/10/2011)',
  ].join('\n');

  document.getElementById('copy-legal-btn')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(legalSummary);
      showToast('Fiche légale copiée dans le presse-papiers.');
    } catch {
      showToast('Copie manuelle disponible dans le tableau réglementaire.');
    }
  });

  document.getElementById('download-legal-btn')?.addEventListener('click', () => {
    const blob = new Blob([legalSummary], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'EKD-SARL-Fiche-Legale.txt';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Fiche réglementaire téléchargée.');
  });

  document.querySelectorAll('.scale-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.scale-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.scaleId = btn.getAttribute('data-scale') || 'envergure';
      updateSimulation();
    });
  });

  document.getElementById('sim-quantity')?.addEventListener('input', (e) => {
    state.quantity = Number(e.target.value);
    updateSimulation();
  });
  document.getElementById('sim-zone')?.addEventListener('change', (e) => { state.zoneId = e.target.value; updateSimulation(); });
  document.getElementById('sim-mode')?.addEventListener('change', (e) => { state.modeId = e.target.value; updateSimulation(); });

  document.getElementById('transfer-quote-btn')?.addEventListener('click', () => {
    const sim = getSimulationResult();
    state.attachedQuote = sim;
    renderAttachedQuote();
    if (contactDomain) contactDomain.value = sim.domain.title;
    const subjectEl = document.getElementById('contact-subject');
    const messageEl = document.getElementById('contact-message');
    if (subjectEl) subjectEl.value = `Demande de devis — ${sim.domain.title} (${sim.qty} ${sim.domain.unitShort})`;
    if (messageEl && !messageEl.value.trim()) {
      messageEl.value = `Suite à la simulation budgétaire (${sim.scaleLabel}, ${sim.qty} ${sim.domain.unitShort}, zone ${sim.zoneLabel}, estimation ${formatXof(sim.min)} – ${formatXof(sim.max)}), je souhaite obtenir un devis détaillé.`;
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    showToast(`Estimation "${sim.domain.title}" transférée vers le formulaire de contact.`);
  });

  document.getElementById('detach-quote-btn')?.addEventListener('click', () => {
    state.attachedQuote = null;
    renderAttachedQuote();
  });

  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const msg = document.getElementById('contact-message').value.trim();

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length < 8 || msg.length < 10) {
      showToast('Veuillez compléter tous les champs obligatoires avec des informations valides.', true);
      return;
    }

    const ref = `EKD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const receiptEl = document.getElementById('form-receipt');
    if (receiptEl) {
      receiptEl.innerHTML = `<strong>Dossier enregistré — Référence ${ref}</strong><br>Votre demande a bien été transmise à ENTREPRISE KONE DAOUDA (EKD SARL).`;
      receiptEl.hidden = false;
    }
    showToast(`Demande transmise avec succès (Réf. ${ref}).`);
    e.target.reset();
    state.attachedQuote = null;
    renderAttachedQuote();
  });

  document.getElementById('toast-close')?.addEventListener('click', () => {
    document.getElementById('toast').hidden = true;
  });

  renderExpertises();
  renderDomainButtons();
  updateSimulation();
});