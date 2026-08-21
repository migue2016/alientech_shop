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
    image: "/images/placeholder-5.svg",
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
  }
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}
