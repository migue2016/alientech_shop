// ============================================================
//  ALIENTECH_SHOP — LISTA DE PRODUCTOS
// ============================================================
//
//  COMO CAMBIAR UNA FOTO SIN TOCAR CODIGO:
//    Guarda la imagen nueva en  public/images/  con el MISMO
//    nombre que ya usa el producto. Listo, nada mas.
//
//  COMO AGREGAR MAS FOTOS A UN PRODUCTO (carrusel):
//    Usa  images: [ ... ]  con varias rutas separadas por coma.
//    La PRIMERA es la que se muestra de primera.
//    Ejemplo: images: ["/images/mi-foto-1.png", "/images/mi-foto-2.png"]
//
//  ORDEN DE LOS DATOS:
//    name        = nombre visible en la tarjeta
//    description = texto corto bajo el nombre
//    price       = precio en pesos colombianos (solo numeros)
//    condition   = "nuevo" o "usado"  (etiqueta de la tarjeta)
//    available   = true (Disponible) / false (Agotado)
//
// ============================================================

export const products = [
  // ---------- ADAPTADOR USB-C ----------
  {
    id: 1,
    name: "Adaptador USB-C a Ethernet Gigabit",
    description: "Adaptador USB C a Ethernet, USB 3.0 a RJ45 Gigabit LAN 1000 Mbps de red cableada, adaptador USB a Ethernet para portátiles/tableta, compatible con Windows XP, MAC OS, Linux, Vista 7 8 10 11",
    price: 45000,
    condition: "nuevo",
    image: "/images/adaptador-rj45.png",
    available: true
  },

  // ---------- CABLE HDMI ----------
  {
    id: 2,
    name: "Cable HDMI ",
    description: "Cable HDMI 2.1 alta velocidad 4K 120Hz",
    price: 10000,
    condition: "nuevo",
    image: "/images/cable_hdmi.png",
    available: true
  },

 
  // ---------- MONITOR ACER (carrusel de 2 fotos) ----------
  {
    id: 4,
    name: "Monitor HDMI 24 pulgadas",
    description: "Monitor Full HD 1920x1080 IPS con AMD Freesynccon taza de refresco de 165 hz el monitor es de 24 pulgadas pantalla curva",
    price: 620000,
    condition: "usado",
    images: ["/images/monitor-1.png", "/images/monitor-2.png"],
    available: true
  },

  // ---------- TECLADO MECANICO ----------
  {
    id: 5,
    name: "Teclado Mecánico RGB",
    description: "Teclado mecánico inalámbrico RGB Formato 60% con dimensiones de 29.2 cm de ancho que libera espacio en el escritorio para movimientos amplios del ratón,Interruptores Gateron Red lineales que requieren menor fuerza de actuación para pulsaciones rápidas y fluidas,tecnología anti-ghosting que permite el registro simultáneo de múltiples teclas durante secuencias complejas.",
    price: 120000,
    condition: "nuevo",
    image: "/images/teclado-1.png",
    available: true
  },

  

  // ---------- HUB 7 PUERTOS ----------
  {
    id: 7,
    name: "Hub USB 7 Puertos",
    description: "Aluminio 7 en 1 USB C y USB Hub con USB 3.0, puertos USB 2.0 para PC/portátiles/MacBook Pro/Air/iMac/iPad y más dispositivos",
    price: 120000,
    condition: "nuevo",
    image: "/images/hub-7-puertos.png",
    available: true
  },


  // ---------- AUDIFONOS XIAOMI ----------
  {
    id: 9,
    name: "Audífonos Xiaomi",
    description: "Audífonos inalámbricos Xiaomi con Bluetooth color negros,5 modos de ecualización,Batería de duración ultralarga de 36 horas,Reducción de ruido por IA para llamadas",
    price: 99000,
    condition: "nuevo",
    image: "/images/audifonos-xiaomi.png",
    available: true
  },

  // ---------- MONITOR GENERICO 22 ----------
  {
    id: 10,
    name: "Monitor 22 pulgadas",
    description: "Monitor HD ideal para oficina y hogar",
    price: 280000,
    condition: "usado",
    image: "/images/monitor2-1.png",
    available: false
  },

  // ---------- MOUSE G1 (carrusel de 3 fotos) ----------
  {
    id: 11,
    name: "Mouse G1",
    description: "Mouse gaming G1 con luces RGB",
    price: 85000,
    condition: "nuevo",
    images: ["/images/mouse-g1-3.png", "/images/mouse-g1-1.png", "/images/mouse-g1-2.png"],
    available: true
  },

  // ---------- RATON INALAMBRICO (carrusel de 2 fotos) ----------
  {
    id: 12,
    name: "Ratón Inalámbrico",
    description: "Ratón inalámbrico silencioso plug and play",
    price: 60000,
    condition: "nuevo",
    images: ["/images/raton-1.png", "/images/raton-2.png"],
    available: true
  },

  // ---------- HUB 5 PUERTOS (carrusel de 2 fotos) ----------
  {
    id: 13,
    name: "Hub USB 5 Puertos",
    description: "Hub USB de 5 puertos multipuerto",
    price: 90000,
    condition: "nuevo",
    images: ["/images/hub5-2.png", "/images/hub5-1.png"],
    available: true
  },

  // ---------- IPHONE ----------
  {
    id: 14,
    name: "iPhone",
    description: "Teléfono inteligente Apple iPhone",
    price: 1500000,
    condition: "nuevo",
    image: "/images/iphone.png",
    available: true
  },

  // ---------- KIT GAMER (carrusel de 4 fotos) ----------
  {
    id: 15,
    name: "Kit Gamer",
    description: "Combo de accesorios para gamers",
    price: 250000,
    condition: "nuevo",
    images: ["/images/gamer-1.png", "/images/gamer-2.png", "/images/gamer-3.png", "/images/gamer-4.png"],
    available: true
  },

  // ---------- PASTA TERMICA (carrusel de 2 fotos) ----------
  {
    id: 16,
    name: "Pasta Térmica",
    description: "Pasta térmica para procesadores",
    price: 25000,
    condition: "nuevo",
    images: ["/images/pasta-termica-1.png", "/images/pasta-termica-2.png"],
    available: true
  },

  // ---------- MEMORIA USB (carrusel de 5 fotos) ----------
  {
    id: 17,
    name: "Memoria USB",
    description: "Memoria USB de alta velocidad",
    price: 35000,
    condition: "nuevo",
    images: [
      "/images/usb-1.png",
      "/images/usb-2.png",
      "/images/usb-3.png",
      "/images/usb-4.png",
      "/images/usb-5.png"
    ],
    available: true
  },

  // ---------- MEMORIA RAM ----------
  {
    id: 18,
    name: "Memoria RAM",
    description: "Memoria RAM para computador de mesa",
    price: 80000,
    condition: "open box",
    image: "/images/ram-1.jpg",
    available: true
  },

  // ---------- PRODUCTO U1 ----------
  {
    id: 23,
    name: "Producto U1",
    description: "Consulta disponibilidad por WhatsApp",
    price: 50000,
    condition: "nuevo",
    image: "/images/u1.png",
    available: true
  },

  // ---------- MONITOR SAMSUNG 22 ----------
  {
    id: 24,
    name: "Monitor Samsung 22 Pulgadas",
    description: "Monitor Samsung 22 pulgadas Full HD",
    price: 350000,
    condition: "usado",
    image: "/images/monitor-samsung-22.png",
    available: true
  },

  // ---------- PORTATIL LENOVO I3 (carrusel de 3 fotos) ----------
  {
    id: 19,
    name: "Portátil Lenovo i3",
    description: "Portátil Lenovo con procesador Intel Core i3",
    price: 1500000,
    condition: "usado",
    images: ["/images/lenovo-i3-1.jpg", "/images/lenovo-i3-2.jpg", "/images/lenovo-i3-3.jpg"],
    available: true
  },

  // ---------- PORTATIL ASUS PENTIUM GOLD (carrusel de 3 fotos) ----------
  {
    id: 20,
    name: "Portátil ASUS Pentium Gold",
    description: "Portátil ASUS con procesador Intel Pentium Gold",
    price: 1400000,
    condition: "usado",
    images: ["/images/asus-pentium-gold-1.jpg", "/images/asus-pentium-gold-2.jpg", "/images/asus-pentium-gold-3.jpg"],
    available: true
  },

  // ---------- TORRE AMD (carrusel de 2 fotos) ----------
  {
    id: 21,
    name: "Torre AMD",
    description: "Computador de mesa con procesador AMD",
    price: 1800000,
    condition: "usado",
    images: ["/images/torre-amd-1.jpg", "/images/torre-amd-2.jpg"],
    available: true
  },

  // ---------- IMPRESORA POS (carrusel de 2 fotos) ----------
  {
    id: 22,
    name: "Impresora POS",
    description: "Impresora térmica para punto de venta",
    price: 450000,
    condition: "usado",
    images: ["/images/impresora-pos-1.jpg", "/images/impresora-pos-2.jpg"],
    available: true
  }
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}
