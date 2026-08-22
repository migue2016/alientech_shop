export const products = [
  {
    id: 1,
    name: "Adaptador USB-C a Ethernet Gigabit",
    description: "Adaptador de red USB-C a RJ45 Gigabit",
    price: 45000,
    image: "/images/adaptador-rj45.png",
    available: true
  },
  {
    id: 2,
    name: "Cable HDMI 2.1 Premium 3M",
    description: "Cable HDMI 2.1 alta velocidad 4K 120Hz",
    price: 65000,
    image: "/images/cable_hdmi.png",
    available: true
  },
  {
    id: 3,
    name: "Batería Externa 20000mAh",
    description: "Powerbank USB-C carga rápida",
    price: 85000,
    image: "/images/placeholder-3.svg",
    available: true
  },
  {
    id: 4,
    name: "Monitor HDMI 24 pulgadas",
    description: "Monitor Full HD 1920x1080 IPS",
    price: 450000,
    images: ["/images/monitor-1.png", "/images/monitor-2.png"],
    available: false
  },
  {
    id: 5,
    name: "Teclado Mecánico RGB",
    description: "Teclado mecánico inalámbrico RGB",
    price: 180000,
    image: "/images/teclado-1.png",
    available: true
  },
  {
    id: 6,
    name: "Mouse Gaming 7200 DPI",
    description: "Mouse óptico ergonómico 6 botones",
    price: 95000,
    image: "/images/placeholder-6.svg",
    available: true
  },
  {
    id: 7,
    name: "Hub USB 7 Puertos",
    description: "Hub USB 3.0 con alimentación externa",
    price: 120000,
    image: "/images/hub-7-puertos.png",
    available: true
  },
  {
    id: 8,
    name: "Webcam Full HD",
    description: "Cámara 1080p 30fps con micrófono",
    price: 145000,
    image: "/images/placeholder-8.svg",
    available: false
  },
  {
    id: 9,
    name: "Audífonos Xiaomi",
    description: "Audífonos inalámbricos Xiaomi con Bluetooth",
    price: 99000,
    image: "/images/audifonos-xiaomi.png",
    available: true
  },
  {
    id: 10,
    name: "Monitor 22 pulgadas",
    description: "Monitor HD ideal para oficina y hogar",
    price: 320000,
    image: "/images/monitor2-1.png",
    available: true
  },
  {
    id: 11,
    name: "Mouse G1",
    description: "Mouse gaming G1 con luces RGB",
    price: 85000,
    images: ["/images/mouse-g1-3.png", "/images/mouse-g1-1.png", "/images/mouse-g1-2.png"],
    available: true
  },
  {
    id: 12,
    name: "Ratón Inalámbrico",
    description: "Ratón inalámbrico silencioso plug and play",
    price: 60000,
    images: ["/images/raton-1.png", "/images/raton-2.png"],
    available: true
  },
  {
    id: 13,
    name: "Hub USB 5 Puertos",
    description: "Hub USB de 5 puertos multipuerto",
    price: 90000,
    images: ["/images/hub5-2.png", "/images/hub5-1.png"],
    available: true
  },
  {
    id: 14,
    name: "iPhone",
    description: "Teléfono inteligente Apple iPhone",
    price: 1500000,
    image: "/images/iphone.png",
    available: true
  },
  {
    id: 15,
    name: "Kit Gamer",
    description: "Combo de accesorios para gamers",
    price: 250000,
    images: ["/images/gamer-1.png", "/images/gamer-2.png", "/images/gamer-3.png", "/images/gamer-4.png"],
    available: true
  },
  {
    id: 16,
    name: "Pasta Térmica",
    description: "Pasta térmica para procesadores",
    price: 25000,
    images: ["/images/pasta-termica-1.png", "/images/pasta-termica-2.png"],
    available: true
  },
  {
    id: 17,
    name: "Memoria USB",
    description: "Memoria USB de alta velocidad",
    price: 35000,
    images: ["/images/usb-1.png", "/images/usb-2.png", "/images/usb-3.png", "/images/usb-4.png", "/images/usb-5.png"],
    available: true
  },
  {
    id: 18,
    name: "Memoria RAM",
    description: "Memoria RAM para computador de mesa",
    price: 80000,
    images: ["/images/memoria-ram-1.png", "/images/memoria-ram-2.jpg", "/images/memoria-ram-3.png"],
    available: true
  },
  {
    id: 19,
    name: "Portátil Lenovo i3",
    description: "Portátil Lenovo con procesador Intel Core i3",
    price: 1500000,
    images: ["/images/lenovo-i3-1.png", "/images/lenovo-i3-2.png"],
    available: true
  },
  {
    id: 20,
    name: "Portátil ASUS Pentium Gold",
    description: "Portátil ASUS con procesador Intel Pentium Gold",
    price: 1400000,
    images: ["/images/asus-pentium-gold-1.png", "/images/asus-pentium-gold-2.png", "/images/asus-pentium-gold-3.png"],
    available: true
  },
  {
    id: 21,
    name: "Torre AMD",
    description: "Computador de mesa con procesador AMD",
    price: 1800000,
    images: ["/images/torre-amd-1.jpg", "/images/torre-amd-2.jpg"],
    available: true
  },
  {
    id: 22,
    name: "Impresora POS",
    description: "Impresora térmica para punto de venta",
    price: 450000,
    images: ["/images/impresora-pos-1.jpg", "/images/impresora-pos-2.jpg"],
    available: true
  }
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}
