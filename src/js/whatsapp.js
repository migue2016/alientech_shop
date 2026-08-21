import { WHATSAPP_NUMBER } from '../data/config.js';
import { formatPrice } from './format.js';

function buildLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateProductWhatsAppLink(product) {
  const state = product.available ? 'Disponible 🟢' : 'Bajo pedido 🔴';
  const message = `Hola 👋 Vi en su página web el producto *${product.name}* (${formatPrice(product.price)}). Estado: ${state}. ¿Me pueden dar más información?`;
  return buildLink(message);
}

export function generateServiceWhatsAppLink(service) {
  const message = `Hola 👋 Me interesa el servicio de *${service.name}*. ¿Me pueden asesorar?`;
  return buildLink(message);
}

export function generateGeneralWhatsAppLink() {
  return buildLink('Hola 👋 Quiero recibir asesoría de Alientech.');
}
