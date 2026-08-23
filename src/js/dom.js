import { generateProductWhatsAppLink, generateServiceWhatsAppLink, generateGeneralWhatsAppLink } from './whatsapp.js';
import { formatPrice } from './format.js';
import { CONTACT_INFO, COMPANY, SOCIAL_MEDIA } from '../data/config.js';

const WA_ICON = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

function statusPill(available) {
  return available
    ? '<span class="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Disponible</span>'
    : '<span class="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500"><span class="h-1.5 w-1.5 rounded-full bg-red-400"></span>Agotado</span>';
}

function conditionPill(condition) {
  return condition === 'usado'
    ? '<span class="inline-flex shrink-0 items-center rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">Usado</span>'
    : '<span class="inline-flex shrink-0 items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">Nuevo</span>';
}

export function createProductCard(product) {
  const link = generateProductWhatsAppLink(product);
  const label = product.available ? 'Comprar por WhatsApp' : 'Consultar disponibilidad';
  return `
    <article class="card group reveal cursor-pointer" data-product-id="${product.id}" tabindex="0" aria-label="Ver detalles de ${product.name}">
      ${productMedia(product)}
      <div class="flex flex-1 flex-col p-5">
        <div class="flex items-start justify-between gap-3">
          <h3 class="font-semibold leading-snug text-slate-900 transition-colors group-hover:text-blue-700">${product.name}</h3>
        </div>
        <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">${product.description}</p>
        <div class="mt-auto pt-4">
          <div class="flex flex-wrap items-center gap-2">
            ${conditionPill(product.condition)}
            ${statusPill(product.available)}
          </div>
          <p class="mt-2 text-lg font-bold tracking-tight text-blue-600">${formatPrice(product.price)}</p>
          <a href="${link}" data-wa target="_blank" rel="noopener" class="btn-whatsapp mt-4 w-full !px-4 !py-2.5 !text-xs">${WA_ICON}${label}</a>
        </div>
      </div>
    </article>`;
}

function ensureModalRoot() {
  let root = document.getElementById('product-modal');
  if (root) return root;
  root = document.createElement('div');
  root.id = 'product-modal';
  root.className = 'fixed inset-0 z-[100] hidden';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.innerHTML = `
    <div data-overlay class="absolute inset-0 bg-slate-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-300"></div>
    <div class="pointer-events-none absolute inset-0 flex items-end justify-center sm:items-center sm:p-6">
      <div data-dialog class="pointer-events-auto relative max-h-[92vh] w-full max-w-3xl translate-y-8 scale-[0.98] overflow-y-auto overscroll-contain rounded-t-3xl bg-white opacity-0 shadow-2xl ring-1 ring-slate-900/5 transition-all duration-300 sm:translate-y-0 sm:rounded-3xl"></div>
    </div>`;
  document.body.appendChild(root);
  root.querySelector('[data-overlay]').addEventListener('click', closeProductModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });
  return root;
}

export function openProductModal(product) {
  const root = ensureModalRoot();
  const overlay = root.querySelector('[data-overlay]');
  const dialog = root.querySelector('[data-dialog]');
  const images = Array.isArray(product.images) && product.images.length ? product.images : [product.image];
  const soldOut = product.available === false;
  const mediaHtml = images.length > 1
    ? productMedia(product)
    : `<div class="relative aspect-[4/3] overflow-hidden bg-slate-100 p-2"><img src="${assetUrl(images[0])}" alt="${product.name}" draggable="false" class="h-full w-full rounded-lg bg-white object-contain ${soldOut ? 'grayscale opacity-75' : ''}">${soldOut ? soldOutBadge() : ''}</div>`;
  const link = generateProductWhatsAppLink(product);
  const waLabel = product.available ? 'Comprar por WhatsApp' : 'Consultar disponibilidad';
  dialog.innerHTML = `
    <button type="button" data-close aria-label="Cerrar detalles" class="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-600 shadow-md ring-1 ring-slate-200 backdrop-blur transition hover:text-slate-900">
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
    <div class="grid md:grid-cols-2">
      <div class="group relative">${mediaHtml}</div>
      <div class="flex flex-col gap-4 p-6 lg:p-8">
        <div class="flex flex-wrap items-center gap-2">
          ${conditionPill(product.condition)}
          ${statusPill(product.available)}
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-blue-600">Detalle del producto</p>
          <h3 class="mt-1 text-2xl font-bold leading-tight tracking-tight text-slate-900">${product.name}</h3>
        </div>
        <p class="text-3xl font-extrabold tracking-tight text-blue-600">${formatPrice(product.price)}</p>
        <div class="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
          <p class="text-sm font-semibold text-slate-900">Descripción</p>
          <p class="mt-1 whitespace-pre-line text-sm leading-relaxed text-slate-500">${product.description || 'Consúltanos por WhatsApp para más información.'}</p>
        </div>
        <a href="${link}" target="_blank" rel="noopener" class="btn-whatsapp mt-auto w-full">${WA_ICON}${waLabel}</a>
      </div>
    </div>`;
  dialog.querySelector('[data-close]').addEventListener('click', closeProductModal);
  dialog.querySelectorAll('[data-prev], [data-next]').forEach((btn) => btn.classList.remove('opacity-0'));
  root.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    overlay.classList.remove('opacity-0');
    dialog.classList.remove('opacity-0', 'translate-y-8', 'scale-[0.98]');
  });
  setupCarousels(dialog);
}

export function closeProductModal() {
  const root = document.getElementById('product-modal');
  if (!root || root.classList.contains('hidden')) return;
  const overlay = root.querySelector('[data-overlay]');
  const dialog = root.querySelector('[data-dialog]');
  overlay.classList.add('opacity-0');
  dialog.classList.add('opacity-0', 'translate-y-8', 'scale-[0.98]');
  window.setTimeout(() => {
    root.classList.add('hidden');
    document.body.style.overflow = '';
  }, 280);
}

export function setupProductModals(items) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const map = new Map(items.map((p) => [Number(p.id), p]));
  grid.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) return;
    const card = e.target.closest('[data-product-id]');
    if (!card) return;
    const product = map.get(Number(card.dataset.productId));
    if (product) openProductModal(product);
  });
  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    if (e.target.closest('a, button')) return;
    const card = e.target.closest('[data-product-id]');
    if (!card || document.activeElement !== card) return;
    const product = map.get(Number(card.dataset.productId));
    if (product) openProductModal(product);
  });
}

const SERVICE_ICONS = {
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  disc: '<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>',
  network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  camera: '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  printer: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  key: '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>'
};

function serviceIcon(key) {
  const path = SERVICE_ICONS[key];
  if (!path) return key;
  return `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

export function createServiceCard(service) {
  const link = generateServiceWhatsAppLink(service);
  return `
    <article class="card reveal p-6">
      <div class="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600" aria-hidden="true">${serviceIcon(service.icon)}</div>
      <h3 class="mt-4 font-semibold leading-snug text-slate-900">${service.name}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-500">${service.description}</p>
      <p class="mt-3 text-sm font-semibold text-blue-600">${service.price}</p>
      <a href="${link}" target="_blank" rel="noopener" class="btn-whatsapp mt-5 w-full !px-4 !py-2.5 !text-xs">${WA_ICON}Consultar</a>
    </article>`;
}

function soldOutBadge() {
  return `<div class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-12 select-none rounded-md bg-red-600 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg ring-1 ring-white/25">Agotado</div>`;
}

function productMedia(product) {
  const images = Array.isArray(product.images) && product.images.length ? product.images : [product.image];
  const soldOut = product.available === false;
  const imgState = soldOut ? 'grayscale opacity-75' : '';
  if (images.length === 1) {
    return `
      <div class="relative aspect-[4/3] overflow-hidden bg-slate-100 p-2">
        <img src="${assetUrl(images[0])}" alt="${product.name}" loading="lazy" class="h-full w-full rounded-lg bg-white object-contain transition-transform duration-500 group-hover:scale-105 ${imgState}">
        ${soldOut ? soldOutBadge() : ''}
      </div>`;
  }
  const slides = images
    .map((src, i) => `<img src="${assetUrl(src)}" alt="${product.name} — foto ${i + 1}" ${i ? 'loading="lazy"' : ''} draggable="false" class="h-full w-full shrink-0 bg-white object-contain ${imgState}">`)
    .join('');
  const dots = images
    .map((_, i) => `<button type="button" data-goto="${i}" aria-label="Ir a la foto ${i + 1}" class="h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}"></button>`)
    .join('');
  return `
    <div data-carousel class="relative aspect-[4/3] touch-pan-y overflow-hidden bg-slate-100">
      <div data-track class="flex h-full w-full transition-transform duration-300 ease-out">${slides}</div>
      <button type="button" data-prev aria-label="Foto anterior" class="absolute left-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition hover:bg-black/60 focus:opacity-100 group-hover:opacity-100">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button type="button" data-next aria-label="Foto siguiente" class="absolute right-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition hover:bg-black/60 focus:opacity-100 group-hover:opacity-100">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
      <div class="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5">${dots}</div>
      ${soldOut ? soldOutBadge() : ''}
    </div>`;
}

export function setupCarousels(root = document) {
  root.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-track]');
    const dots = [...carousel.querySelectorAll('[data-goto]')];
    if (!track || !dots.length) return;
    let index = 0;
    const total = dots.length;
    const go = (target) => {
      index = Math.max(0, Math.min(total - 1, target));
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, di) => {
        dot.classList.toggle('w-4', di === index);
        dot.classList.toggle('bg-white', di === index);
        dot.classList.toggle('w-1.5', di !== index);
        dot.classList.toggle('bg-white/50', di !== index);
      });
    };
    dots.forEach((dot) => dot.addEventListener('click', () => go(Number(dot.dataset.goto))));
    carousel.querySelector('[data-prev]')?.addEventListener('click', () => go(index - 1));
    carousel.querySelector('[data-next]')?.addEventListener('click', () => go(index + 1));
    let startX = null;
    carousel.addEventListener('pointerdown', (e) => { startX = e.clientX; });
    carousel.addEventListener('pointerup', (e) => {
      if (startX === null) return;
      const delta = e.clientX - startX;
      startX = null;
      if (Math.abs(delta) > 30) go(delta < 0 ? index + 1 : index - 1);
    });
  });
}

export function renderProducts(container, items) {
  if (!container) return;
  container.innerHTML = items.map(createProductCard).join('');
}

export function renderServices(container, items) {
  if (!container) return;
  container.innerHTML = items.map(createServiceCard).join('');
}

export function populateContact() {
  setText('contact-email', CONTACT_INFO.email);
  setText('contact-city', CONTACT_INFO.city);
  setText('contact-hours', `Lun a Vie: ${CONTACT_INFO.businessHours.weekday}`);
  setText('footer-email', `📧 ${CONTACT_INFO.email}`);
  setText('footer-city', `📍 ${CONTACT_INFO.city}`);
  setText('footer-hours', `🕒 Lun a Vie: ${CONTACT_INFO.businessHours.weekday}`);
  setHref('header-whatsapp', SOCIAL_MEDIA.whatsapp);
  setHref('hero-whatsapp', SOCIAL_MEDIA.whatsapp);
  setHref('contact-whatsapp', SOCIAL_MEDIA.whatsapp);
  const year = document.getElementById('year');
  if (year) year.textContent = COMPANY.year;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHref(id, value) {
  const el = document.getElementById(id);
  if (el) el.href = value;
}

export function assetUrl(path) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function setupMobileMenu() {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  if (!button || !menu) return;

  function setOpen(open) {
    menu.classList.toggle('hidden', !open);
    button.setAttribute('aria-expanded', String(open));
    iconOpen.classList.toggle('hidden', open);
    iconClose.classList.toggle('hidden', !open);
  }

  button.addEventListener('click', () => setOpen(menu.classList.contains('hidden')));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
}

export function setupHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const update = () => header.classList.toggle('shadow-lg', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

export function setupRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  elements.forEach((el) => observer.observe(el));
}
