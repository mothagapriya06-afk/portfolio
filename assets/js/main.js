const projects = {
  finance: {
    title: 'Financial Data Dashboard', kicker: '01 / FINTECH · DASHBOARD UX', image: 'assets/images/showcase/finance.webp',
    summary: 'A concept dashboard exploring how personal finance information can feel easier to scan, understand and act on.',
    role: 'UI/UX design, information hierarchy, dashboard layout and visual system.',
    problem: 'Financial products can present balances, transactions, budgets and trends as disconnected data. The challenge is to create a calm overview that helps users find the most useful information quickly.',
    approach: ['Prioritize total balance, monthly income and expenses at the top.', 'Use clear chart labels and a restrained colour system to distinguish categories.', 'Group transactions and savings goals into predictable, scannable modules.', 'Design reusable cards, chart styles, spacing and typography tokens.'],
    outcome: 'The concept proposes a more structured financial overview. Usability testing and validation with target users would be the next step.',
    tags: ['Dashboard UX', 'Data visualization', 'Design systems', 'Figma']
  },
  travelgo: {
    title: 'TravelGo', kicker: '02 / MOBILE PRODUCT · TRAVEL', image: 'assets/images/showcase/travelgo.webp',
    summary: 'A travel-planning concept that brings destination discovery and trip preparation into one welcoming mobile experience.',
    role: 'Product concept, mobile UI, navigation, components and prototyping direction.',
    problem: 'Travellers often move between inspiration, destination research and planning tools. A useful starting point should make discovery feel inviting while keeping the next action obvious.',
    approach: ['Lead with destination search and visually rich discovery cards.', 'Organize destinations around browseable categories and saved places.', 'Use consistent cards, clear navigation and visible search affordances.', 'Extend the concept toward itinerary planning, booking details and saved trips.'],
    outcome: 'The visual direction establishes a reusable starting point for a fuller prototype. Booking and itinerary flows should be validated with representative users.',
    tags: ['Mobile UX', 'Travel', 'Information architecture', 'Figma']
  },
  parcel: {
    title: 'Parcel & Delivery Tracker', kicker: '03 / MOBILE PRODUCT · SERVICE DESIGN', image: 'assets/images/showcase/parcel.webp',
    summary: 'A delivery-tracking concept focused on reducing uncertainty with clear status, location and next-step information.',
    role: 'User-flow planning, mobile interface design, tracking states and component exploration.',
    problem: 'When tracking information is scattered or vague, people have to work harder to understand where a parcel is and what happens next.',
    approach: ['Make shipment status and estimated delivery information easy to find.', 'Pair a simplified map with a readable chronological status timeline.', 'Use distinct status treatments for dispatched, in transit and out for delivery.', 'Plan supporting states for delayed shipments, failed delivery and notifications.'],
    outcome: 'The concept demonstrates the core tracking view. Live location, delivery estimates and carrier integrations would require real service data and further validation.',
    tags: ['Mobile UI', 'Service design', 'User flows', 'Figma']
  },
  nivora: {
    title: 'Nivora Architecture Studio', kicker: '04 / RESPONSIVE WEB · EDITORIAL', image: 'assets/images/nivora-studio.jpg',
    summary: 'A responsive website concept for a focused architecture and interiors studio, built around atmosphere, craft and selected work.',
    role: 'Art direction, responsive layout, typography, content hierarchy and UI design.',
    problem: 'An architecture studio needs imagery to communicate atmosphere while giving visitors enough context to understand the studio’s approach and explore projects.',
    approach: ['Use an editorial headline and large architectural photography to establish tone.', 'Give selected projects a strong visual hierarchy without crowding the page.', 'Pair expressive serif headlines with a clean sans-serif interface.', 'Adapt the project presentation and navigation for tablet and mobile.'],
    outcome: 'The concept creates a consistent visual direction across device sizes. Real project photography, content and stakeholder review would be needed before launch.',
    tags: ['Responsive web', 'Art direction', 'Typography', 'Figma']
  },
  lumora: {
    title: 'LUMORA Luxury Commerce', kicker: '05 / E-COMMERCE · MOBILE UI', image: 'assets/images/showcase/lumora.webp',
    summary: 'A luxury leather-goods shopping concept that balances editorial product storytelling with practical purchase controls.',
    role: 'Mobile commerce UI, product detail layout, visual direction and component styling.',
    problem: 'Premium product pages need to communicate material, colour and craftsmanship while keeping selection and purchase actions simple.',
    approach: ['Use warm neutral colours and product photography as the main visual focus.', 'Give price, colour selection and quantity clear hierarchy on the detail screen.', 'Keep the primary Add to Bag action prominent.', 'Use consistent cards, swatches and bottom navigation across screens.'],
    outcome: 'The concept explores a premium product-discovery and detail experience. Checkout usability and customer confidence should be tested before implementation.',
    tags: ['E-commerce UX', 'Mobile UI', 'Visual design', 'Figma']
  },
  invictus: {
    title: 'Invictus Technologies', kicker: '06 / BRAND SYSTEM · DIGITAL EXPERIENCE', image: 'assets/images/showcase/invictus.webp',
    summary: 'A technology-brand concept designed to communicate confidence, innovation and a scalable digital identity.',
    role: 'Visual identity exploration, website art direction, UI composition and design-system direction.',
    problem: 'A technology company needs to present complex services in a way that feels credible, accessible and coherent across multiple touchpoints.',
    approach: ['Build a dark navy foundation with controlled electric-blue highlights.', 'Use a distinctive geometric brand motif as a visual anchor.', 'Organize services into clear cards and a simple process sequence.', 'Define repeatable patterns for navigation, calls to action, icons and content sections.'],
    outcome: 'The concept presents a consistent direction for a technology services website. Brand strategy, stakeholder feedback and accessibility checks would be part of the next iteration.',
    tags: ['Visual identity', 'Web design', 'Design systems', 'Illustrator', 'Figma']
  }
};
const modal = document.getElementById('caseModal');
const modalContent = document.getElementById('modalContent');
function openCase(key) {
  const p = projects[key]; if (!p) return;
  modalContent.innerHTML = `
    <div class="modal-hero"><span class="modal-kicker">${p.kicker}</span><h2 id="modalTitle">${p.title}</h2><p>${p.summary}</p><img class="modal-image ${p.image.includes('showcase')?'is-cutout '+key:''}" src="${p.image}" alt="${p.title} project mockup"></div>
    <div class="modal-details">
      <article><h3>Role & focus</h3><p>${p.role}</p><div class="modal-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div></article>
      <article><h3>The challenge</h3><p>${p.problem}</p></article>
      <article><h3>Design approach</h3><ul>${p.approach.map(item => `<li>${item}</li>`).join('')}</ul></article>
      <article><h3>Reflection & next steps</h3><p>${p.outcome}</p></article>
      <div class="modal-disclaimer">Portfolio note: this is a self-initiated concept case study. The mockup is a visual presentation, not evidence of a launched product or measured outcomes.</div>
    </div>`;
  modal.showModal();
}
document.querySelectorAll('[data-project]').forEach(card => card.querySelector('button').addEventListener('click', () => openCase(card.dataset.project)));
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === btn));
  const filter = btn.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
}));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.open) modal.close(); });
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); }));
document.getElementById('year').textContent = new Date().getFullYear();
