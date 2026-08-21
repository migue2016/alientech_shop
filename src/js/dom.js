import { generateProductWhatsAppLink, generateServiceWhatsAppLink } from './whatsapp.js';

export function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden';
  
  const availabilityClass = product.available 
    ? 'bg-green-100 text-green-800' 
    : 'bg-red-100 text-red-800';
  
  const availabilityText = product.available ? '✓ Disponible' : '✗ No disponible';
  const whatsappLink = generateProductWhatsAppLink(product);

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">${product.name}</h3>
      <p class="text-gray-600 text-sm mb-4">${product.description}</p>
      <div class="flex justify-between items-center mb-4">
        <span class="text-2xl font-bold text-blue-600">$${product.price.toLocaleString('es-CO')}</span>
        <span class="px-3 py-1 rounded text-xs font-semibold ${availabilityClass}">${availabilityText}</span>
      </div>
      <a href="${whatsappLink}" target="_blank" class="w-full block text-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Comprar por WhatsApp
      </a>
    </div>
  `;
  return card;
}

export function createServiceCard(service) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-lg shadow hover:shadow-lg transition p-6 text-center';
  
  const whatsappLink = generateServiceWhatsAppLink(service);

  card.innerHTML = `
    <div class="text-5xl mb-4">${service.icon}</div>
    <h3 class="text-xl font-bold mb-2">${service.name}</h3>
    <p class="text-gray-600 text-sm mb-4">${service.description}</p>
    <p class="text-lg font-bold text-blue-600 mb-4">${service.price}</p>
    <a href="${whatsappLink}" target="_blank" class="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
      Consultar
    </a>
  `;
  return card;
}

export function renderProducts(productsArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  productsArray.forEach(product => {
    container.appendChild(createProductCard(product));
  });
}

export function renderServices(servicesArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  servicesArray.forEach(service => {
    container.appendChild(createServiceCard(service));
  });
}

export function setupNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

export function setupMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!menuButton || !mobileMenu) return;
  
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}