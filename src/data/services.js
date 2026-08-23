export const services = [
  {
    id: 1,
    icon: "wrench",
    name: "Mantenimiento de Computadores",
    description: "Limpieza y optimización de equipos",
    price: "Consultar"
  },
  {
    id: 2,
    icon: "disc",
    name: "Instalación de Sistemas",
    description: "Instalación de Windows, Linux o macOS",
    price: "Consultar"
  },
  {
    id: 3,
    icon: "network",
    name: "Configuración de Redes",
    description: "Instalación y optimización de redes",
    price: "Consultar"
  },
  {
    id: 4,
    icon: "shield",
    name: "Soporte Técnico Remoto",
    description: "Asistencia técnica vía remoto",
    price: "Consultar"
  },
  {
    id: 5,
    icon: "camera",
    name: "Instalación de Cámaras",
    description: "Sistemas de vigilancia con acceso remoto",
    price: "Consultar"
  },
  {
    id: 6,
    icon: "zap",
    name: "Optimización de Computadores",
    description: "Mejora del rendimiento y velocidad",
    price: "Consultar"
  },
  {
    id: 7,
    icon: "printer",
    name: "Configuración de Impresoras",
    description: "Instalación e integración en red",
    price: "Consultar"
  },
  {
    id: 8,
    icon: "database",
    name: "Recuperación de Datos",
    description: "Recuperación de discos y USB",
    price: "Consultar"
  },
  {
    id: 9,
    icon: "key",
    name: "Venta de Licencias",
    description: "Licencias originales de Windows, Office y antivirus",
    price: "Consultar"
  }
];

export function getServiceById(id) {
  return services.find(s => s.id === id);
}