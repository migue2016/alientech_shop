export const products = [
  {
    id: 1,
    name: "Adaptador USB-C a Ethernet Gigabit",
    description: "Adaptador de red USB-C a RJ45 Gigabit",
    price: 45000,
    image: "/images/placeholder-1.svg",
    available: true
  },
  {
    id: 2,
    name: "Cable HDMI 2.1 Premium 3M",
    description: "Cable HDMI 2.1 alta velocidad 4K 120Hz",
    price: 65000,
    image: "/images/placeholder-2.svg",
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
    image: "/images/placeholder-4.svg",
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
    image: "/images/placeholder-7.svg",
    available: true
  },
  {
    id: 8,
    name: "Webcam Full HD",
    description: "Cámara 1080p 30fps con micrófono",
    price: 145000,
    image: "/images/placeholder-8.svg",
    available: false
  }
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}
