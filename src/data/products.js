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
    name: "BaterÃ­a Externa 20000mAh",
    description: "Powerbank USB-C carga rÃ¡pida",
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
    name: "Teclado MecÃ¡nico RGB",
    description: "Teclado mecÃ¡nico inalÃ¡mbrico RGB",
    price: 180000,
    image: "/images/placeholder-5.svg",
    available: true
  },
  {
    id: 6,
    name: "Mouse Gaming 7200 DPI",
    description: "Mouse Ã³ptico ergonÃ³mico 6 botones",
    price: 95000,
    image: "/images/placeholder-6.svg",
    available: true
  },
  {
    id: 7,
    name: "Hub USB 7 Puertos",
    description: "Hub USB 3.0 con alimentaciÃ³n externa",
    price: 120000,
    image: "/images/placeholder-7.svg",
    available: true
  },
  {
    id: 8,
    name: "Webcam Full HD",
    description: "CÃ¡mara 1080p 30fps con micrÃ³fono",
    price: 145000,
    image: "/images/placeholder-8.svg",
    available: false
  }
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}