import '../styles/style.css';
import { products } from '../data/products.js';
import { services } from '../data/services.js';
import { renderProducts, renderServices, setupMobileMenu, setupHeaderScroll, setupRevealAnimations, populateContact, setupCarousels } from './dom.js';

function initializeApp() {
  renderProducts(document.getElementById('products-grid'), products);
  renderServices(document.getElementById('services-grid'), services);
  populateContact();
  setupCarousels(document.getElementById('products-grid'));
  setupMobileMenu();
  setupHeaderScroll();
  setupRevealAnimations();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
