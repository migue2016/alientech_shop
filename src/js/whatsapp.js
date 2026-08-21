import { WHATSAPP_NUMBER } from '../data/config.js';

export function generateProductWhatsAppLink(product) {
  const message = `Hola, estoy interesado en el producto "${product.name}". ¿Está disponible?`;
  return generateWhatsAppLink(message);
}

export function generateServiceWhatsAppLink(service) {
  const message = `Hola, me interesa consultar sobre el servicio "${service.name}". ¿Cuál es el precio?`;
  return generateWhatsAppLink(message);
}

export function generateWhatsAppLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsApp(url) {
  window.open(url, '_blank');
}