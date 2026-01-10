interface ProductDetails {
  description: string
  features: string[]
  gallery: string[]
}

export const productDetails: Record<string, ProductDetails> = {
  "1": {
    description:
      "Filtro de aceite premium diseñado específicamente para motores Hyundai. Fabricado con materiales de alta calidad que garantizan una filtración eficiente de partículas y contaminantes, protegiendo el motor y prolongando su vida útil. Cumple con las especificaciones originales del fabricante.",
    features: [
      "Elemento filtrante de alta eficiencia",
      "Válvula anti-retorno integrada",
      "Junta de caucho resistente al calor",
      "Capacidad de retención de partículas superior",
      "Intervalos de cambio recomendados: 10,000 km",
    ],
    gallery: ["/oil-filter-automotive-part.jpg", "/oil-filter-closeup-detail.jpg", "/oil-filter-installed-engine.jpg"],
  },
  "2": {
    description:
      "Pastillas de freno delanteras de alto rendimiento para vehículos Kia. Fabricadas con compuesto cerámico que ofrece excelente frenado, menor desgaste del disco y operación silenciosa. Ideales para uso urbano y en carretera.",
    features: [
      "Compuesto cerámico de alta fricción",
      "Bajo nivel de polvo de freno",
      "Operación silenciosa sin chirridos",
      "Resistencia a altas temperaturas",
      "Incluye indicador de desgaste",
    ],
    gallery: [
      "/brake-pads-automotive-ceramic.jpg",
      "/brake-pads-box-packaging.jpg",
      "/brake-pads-installed-caliper.jpg",
    ],
  },
  "3": {
    description:
      "Amortiguador trasero de repuesto para vehículos Hyundai. Diseñado para restaurar el confort de marcha y la estabilidad del vehículo. Tecnología de gas que garantiza respuesta consistente en todas las condiciones de manejo.",
    features: [
      "Tecnología de gas monotubo",
      "Vástago cromado de alta durabilidad",
      "Sellos de larga duración",
      "Respuesta progresiva al impacto",
      "Instalación directa sin modificaciones",
    ],
    gallery: [
      "/rear-shock-absorber-car-suspension.jpg",
      "/shock-absorber-detail-view.jpg",
      "/shock-absorber-mounting-hardware.jpg",
    ],
  },
  "4": {
    description:
      "Alternador de 12V y 90A de reemplazo para vehículos Kia. Unidad remanufacturada con componentes nuevos que garantiza la carga óptima de la batería y el funcionamiento correcto de todos los sistemas eléctricos del vehículo.",
    features: [
      "Salida de 90 amperios",
      "Regulador de voltaje integrado",
      "Rodamientos sellados de larga vida",
      "Prueba de funcionamiento al 100%",
      "Garantía de 12 meses",
    ],
    gallery: [
      "/car-alternator-electrical-automotive.jpg",
      "/alternator-pulley-detail.jpg",
      "/alternator-connector-view.jpg",
    ],
  },
  "5": {
    description:
      "Kit de embrague completo para vehículos SsangYong. Incluye disco de embrague, plato de presión y rodamiento de empuje. Todos los componentes son de calidad OEM para garantizar un acoplamiento suave y durabilidad.",
    features: [
      "Disco de embrague orgánico reforzado",
      "Plato de presión con resortes de diafragma",
      "Rodamiento de empuje sellado",
      "Kit completo listo para instalar",
      "Compatible con transmisión manual",
    ],
    gallery: ["/car-clutch-kit-transmission-parts.jpg", "/clutch-disc-detail.jpg", "/clutch-pressure-plate.jpg"],
  },
  "6": {
    description:
      "Espejo lateral derecho de reemplazo para Hyundai Tucson y Santa Fe. Réplica exacta del original con acabado de alta calidad. Incluye mecanismo de ajuste eléctrico y función de calefacción.",
    features: [
      "Ajuste eléctrico incluido",
      "Función de calefacción integrada",
      "Vidrio con antideslumbrante",
      "Carcasa con imprimación lista para pintar",
      "Conector plug & play",
    ],
    gallery: ["/car-side-mirror-right-automotive.jpg", "/side-mirror-back-view.jpg", "/side-mirror-connector.jpg"],
  },
  "7": {
    description:
      "Bomba de agua de repuesto para motores Daewoo/Chevrolet. Componente esencial del sistema de enfriamiento que garantiza la circulación adecuada del refrigerante. Fabricada con materiales resistentes a la corrosión.",
    features: [
      "Impulsor de alta eficiencia",
      "Sello mecánico de cerámica",
      "Cuerpo de aluminio fundido",
      "Rodamiento sellado de doble hilera",
      "Incluye junta de instalación",
    ],
    gallery: ["/water-pump-car-engine-cooling.jpg", "/water-pump-impeller-view.jpg", "/water-pump-gasket-included.jpg"],
  },
  "8": {
    description:
      "Discos de freno ventilados delanteros para Kia Sportage y Seltos. Diseño ventilado que mejora la disipación del calor para un frenado consistente incluso en condiciones exigentes. Superficies rectificadas de fábrica.",
    features: [
      "Diseño ventilado para mejor refrigeración",
      "Hierro fundido de alta calidad",
      "Balanceados de fábrica",
      "Superficie rectificada lista para usar",
      "Resistencia al alabeo térmico",
    ],
    gallery: [
      "/ventilated-brake-discs-rotors-automotive.jpg",
      "/brake-disc-vented-detail.jpg",
      "/brake-disc-hub-mounting.jpg",
    ],
  },
  "9": {
    description:
      "Juego de 4 bujías de encendido para motores Chevrolet Spark y Sail. Bujías de iridio que ofrecen mejor ignición, mayor eficiencia de combustible y vida útil extendida comparada con bujías convencionales.",
    features: [
      "Electrodo central de iridio",
      "Electrodo de masa de platino",
      "Vida útil de hasta 100,000 km",
      "Mejor respuesta del acelerador",
      "Arranque en frío mejorado",
    ],
    gallery: [
      "/spark-plugs-ignition-car-engine.jpg",
      "/spark-plug-electrode-detail.jpg",
      "/spark-plugs-set-packaging.jpg",
    ],
  },
  "10": {
    description:
      "Terminal de dirección de repuesto para vehículos Hyundai. Componente crítico del sistema de dirección que garantiza la respuesta precisa y segura. Fabricado con acero forjado y articulación esférica de alta calidad.",
    features: [
      "Acero forjado de alta resistencia",
      "Articulación esférica sellada",
      "Guardapolvo de caucho incluido",
      "Rosca estándar métrica",
      "Requiere alineación después de instalar",
    ],
    gallery: [
      "/tie-rod-end-steering-suspension-car.jpg",
      "/tie-rod-ball-joint-detail.jpg",
      "/tie-rod-boot-included.jpg",
    ],
  },
  "11": {
    description:
      "Faro delantero LED izquierdo para Kia Sportage 2019-2024. Unidad completa con tecnología LED que proporciona iluminación superior y apariencia moderna. Réplica exacta del faro original con todos los conectores incluidos.",
    features: [
      "Tecnología LED de alta luminosidad",
      "Lente de policarbonato resistente a UV",
      "Incluye módulo de luz diurna (DRL)",
      "Conectores originales incluidos",
      "Sellado hermético IP67",
    ],
    gallery: [
      "/led-headlight-car-front-light.jpg",
      "/headlight-led-module-detail.jpg",
      "/headlight-connector-wiring.jpg",
    ],
  },
  "12": {
    description:
      "Sensor de oxígeno (O2) para vehículos SsangYong. Sensor de 4 cables que monitorea los gases de escape para optimizar la mezcla aire-combustible. Esencial para el funcionamiento correcto del sistema de inyección electrónica.",
    features: [
      "Sensor de banda ancha de 4 cables",
      "Respuesta rápida de menos de 100ms",
      "Elemento cerámico de circonio",
      "Conector original incluido",
      "Calibrado de fábrica",
    ],
    gallery: ["/oxygen-sensor-o2-car-exhaust.jpg", "/o2-sensor-connector-detail.jpg", "/oxygen-sensor-tip-ceramic.jpg"],
  },
}
