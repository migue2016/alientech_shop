import { generateProductWhatsAppLink, generateServiceWhatsAppLink, generateGeneralWhatsAppLink } from './whatsapp.js';
import { formatPrice } from './format.js';
import { CONTACT_INFO, COMPANY, SOCIAL_MEDIA } from '../data/config.js';

const WA_ICON = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

function statusPill(available) {
  return available
    ? '<span class="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Disponible</span>'
    : '<span class="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500"><span class="h-1.5 w-1.5 rounded-full bg-red-400"></span>Agotado</span>';
}

export function createProductCard(product) {
  const link = generateProductWhatsAppLink(product);
  const label = product.available ? 'Comprar por WhatsApp' : 'Consultar disponibilidad';
  const image = assetUrl(product.image);
  return `
    <article class="card group reveal">
      <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img src="${image}" alt="${product.name}" loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105">
      </div>
      <div class="flex flex-1 flex-col p-5">
        <div class="flex items-start justify-between gap-3">
          <h3 class="font-semibold leading-snug text-slate-900">${product.name}</h3>
        </div>
        <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">${product.description}</p>
        <div class="mt-auto pt-4">
          ${statusPill(product.available)}
          <p class="mt-2 text-lg font-bold tracking-tight text-blue-600">${formatPrice(product.price)}</p>
          <a href="${link}" target="_blank" rel="noopener" class="btn-whatsapp mt-4 w-full !px-4 !py-2.5 !text-xs">${WA_ICON}${label}</a>
        </div>
      </div>
    </article>`;
}

export function createServiceCard(service) {
  const link = generateServiceWhatsAppLink(service);
  return `
    <article class="card reveal p-6">
      <div class="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-2xl" aria-hidden="true">${service.icon}</div>
      <h3 class="mt-4 font-semibold leading-snug text-slate-900">${service.name}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-500">${service.description}</p>
      <p class="mt-3 text-sm font-semibold text-blue-600">${service.price}</p>
      <a href="${link}" target="_blank" rel="noopener" class="btn-whatsapp mt-5 w-full !px-4 !py-2.5 !text-xs">${WA_ICON}Consultar</a>
    </article>`;
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
