import '../styles/style.css';
import { products } from '../data/products.js';
import { services } from '../data/services.js';
import { renderProducts, renderServices, setupNavigation, setupMobileMenu } from './dom.js';

function initializeApp() {
  console.log('🚀 Inicializando Alientech...');
  renderProducts(products, 'products-grid');
  renderServices(services, 'services-grid');
  setupNavigation();
  setupMobileMenu();
  console.log('✅ Alientech iniciada');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}