import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.cars": "Cars for Sale",
    "nav.call": "Call for Free Estimate",
    "nav.callNow": "Call Now",

    // Home Page
    "home.hero.title": "Luxury Auto Body",
    "home.hero.subtitle": "Restoration Experts",
    "home.hero.description": "Professional collision repair and restoration with over 20 years of excellence",
    "home.hero.cta": "Call for Free Estimate",
    "home.hero.viewServices": "View Our Services",
    "home.hero.badges": "✓ Free Estimates ✓ Insurance Accepted ✓ Lifetime Warranty",
    
    "home.services.title": "Our Services",
    "home.services.subtitle": "Complete auto body repair and restoration services",
    "home.services.collision": "Collision Repair",
    "home.services.collisionDesc": "Expert collision repair with state-of-the-art equipment and techniques.",
    "home.services.paint": "Paint & Refinishing",
    "home.services.paintDesc": "Professional paint matching and refinishing for a flawless finish.",
    "home.services.dent": "Dent Removal",
    "home.services.dentDesc": "Paintless dent repair and traditional dent removal services.",
    "home.services.quick": "Quick Turnaround",
    "home.services.quickDesc": "Fast and efficient service without compromising quality.",
    "home.services.cta": "Get Free Estimate",
    
    "home.beforeAfter.title": "Before & After",
    "home.beforeAfter.subtitle": "See the transformation our expert team delivers",
    
    "home.whyChoose.title": "Why Choose Us",
    "home.whyChoose.subtitle": "Excellence backed by experience",
    "home.whyChoose.cars": "Cars Repaired",
    "home.whyChoose.years": "Years Experience",
    "home.whyChoose.satisfaction": "Customer Satisfaction",
    "home.whyChoose.technicians": "Expert Technicians",
    
    "home.testimonials.title": "What Our Clients Say",
    "home.testimonials.subtitle": "Real reviews from real customers",
    
    "home.guarantee.title": "Our Guarantee",
    "home.guarantee.description": "We stand behind our work with a lifetime warranty on all repairs. Your satisfaction is our priority.",
    "home.guarantee.cta": "Get Your Free Estimate Today",

    // Services Page
    "services.hero.title": "Our Services",
    "services.hero.subtitle": "Comprehensive auto body repair and restoration services for all makes and models",
    "services.hero.cta": "Get Free Estimate",
    
    "services.collision.title": "Collision Repair",
    "services.collision.desc": "Complete collision repair services using factory-certified techniques and genuine parts.",
    "services.collision.feature1": "Frame straightening",
    "services.collision.feature2": "Structural repairs",
    "services.collision.feature3": "Safety system recalibration",
    "services.collision.feature4": "Unibody repair",
    
    "services.paint.title": "Paint & Refinishing",
    "services.paint.desc": "Professional automotive painting with computerized color matching for a perfect finish.",
    "services.paint.feature1": "Custom paint jobs",
    "services.paint.feature2": "Color matching",
    "services.paint.feature3": "Clear coat protection",
    "services.paint.feature4": "Paintless options",
    
    "services.dent.title": "Dent Removal",
    "services.dent.desc": "Expert dent repair services including paintless dent removal (PDR) techniques.",
    "services.dent.feature1": "Paintless dent repair",
    "services.dent.feature2": "Hail damage repair",
    "services.dent.feature3": "Door ding removal",
    "services.dent.feature4": "Panel replacement",
    
    "services.detailing.title": "Detailing & Protection",
    "services.detailing.desc": "Premium detailing services to keep your vehicle looking showroom new.",
    "services.detailing.feature1": "Ceramic coating",
    "services.detailing.feature2": "Paint protection film",
    "services.detailing.feature3": "Interior detailing",
    "services.detailing.feature4": "Engine detailing",
    
    "services.insurance.title": "Insurance Claims",
    "services.insurance.desc": "We work directly with all major insurance companies to streamline your claim process.",
    "services.insurance.feature1": "Direct billing",
    "services.insurance.feature2": "Claims assistance",
    "services.insurance.feature3": "Rental coordination",
    "services.insurance.feature4": "All insurers accepted",
    
    "services.custom.title": "Custom Modifications",
    "services.custom.desc": "Personalize your vehicle with our custom modification and enhancement services.",
    "services.custom.feature1": "Body kit installation",
    "services.custom.feature2": "Custom graphics",
    "services.custom.feature3": "Performance upgrades",
    "services.custom.feature4": "Wheels & suspension",
    
    "services.showcase.title": "Our Work Speaks for Itself",
    "services.showcase.subtitle": "See the incredible transformations we achieve every day",
    "services.showcase.before": "Before",
    "services.showcase.beforeDesc": "Significant collision damage requiring extensive bodywork",
    "services.showcase.after": "After",
    "services.showcase.afterDesc": "Flawless restoration to factory-perfect condition",
    
    "services.process.title": "Our Process",
    "services.process.subtitle": "Simple, transparent, and designed for your convenience",
    "services.process.step1": "Free Estimate",
    "services.process.step1Desc": "Call us for a no-obligation free estimate on your repair",
    "services.process.step2": "Inspection",
    "services.process.step2Desc": "Thorough inspection and detailed repair plan development",
    "services.process.step3": "Repair Work",
    "services.process.step3Desc": "Expert technicians restore your vehicle to perfection",
    "services.process.step4": "Quality Check",
    "services.process.step4Desc": "Final inspection and quality assurance before delivery",
    
    "services.cta.title": "Ready to Restore Your Vehicle?",
    "services.cta.subtitle": "Get your free estimate today and experience the L&M difference",
    "services.cta.button": "Call Now for Free Estimate",

    // About Page
    "about.hero.title": "About L&M Luxury",
    "about.hero.subtitle": "Two decades of excellence in luxury auto body repair and restoration",
    "about.story.title": "Our Story",
    "about.story.p1": "Founded over 20 years ago, L&M Luxury Auto Body Shop began with a simple mission: to provide the highest quality auto body repair services with unmatched customer care.",
    "about.story.p2": "What started as a small family-owned shop has grown into one of the most trusted names in luxury auto body repair. Our commitment to excellence and continuous innovation has earned us a reputation for delivering results that exceed expectations.",
    "about.story.p3": "Today, we're proud to serve thousands of satisfied customers with our team of certified technicians, state-of-the-art equipment, and dedication to perfection. Every vehicle that enters our shop receives the same meticulous attention to detail and care that built our reputation.",
    "about.stats.title": "Our Track Record",
    "about.stats.subtitle": "Numbers that speak to our expertise",
    "about.stats.years": "Years in Business",
    "about.stats.customers": "Happy Customers",
    "about.stats.vehicles": "Vehicles Restored",
    "about.stats.technicians": "Certified Technicians",
    "about.values.title": "Our Values",
    "about.values.subtitle": "The principles that guide everything we do",
    "about.values.excellence": "Excellence",
    "about.values.excellenceDesc": "We never compromise on quality and strive for perfection in every repair.",
    "about.values.integrity": "Integrity",
    "about.values.integrityDesc": "Honest, transparent service with fair pricing and no hidden fees.",
    "about.values.customer": "Customer Focus",
    "about.values.customerDesc": "Your satisfaction is our top priority. We treat every car like our own.",
    "about.values.innovation": "Innovation",
    "about.values.innovationDesc": "Using the latest technology and techniques for superior results.",
    "about.cert.title": "Certifications & Partnerships",
    "about.cert.subtitle": "We maintain the highest industry standards through continuous training and certification",
    "about.cert.ase": "ASE Certified",
    "about.cert.icar": "I-CAR Gold",
    "about.cert.factory": "Factory Trained",
    "about.cert.insurance": "Insurance Approved",

    // Contact Page
    "contact.hero.title": "Contact Us",
    "contact.hero.subtitle": "Get in touch with our team for a free estimate or any questions",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hours": "Hours",
    "contact.hours.monFri": "Mon-Fri: 8:00 AM - 6:00 PM",
    "contact.hours.sat": "Sat: 9:00 AM - 4:00 PM",
    "contact.hours.sun": "Sun: Closed",
    "contact.visit.title": "Visit Our Shop",
    "contact.visit.description": "Stop by our state-of-the-art facility for a free in-person estimate. Our expert team is ready to assess your vehicle and provide you with detailed repair options.",
    "contact.visit.easy": "Easy to Find",
    "contact.visit.easyDesc": "Located on Auto Street with ample parking available",
    "contact.visit.call": "Call Ahead",
    "contact.visit.callDesc": "Schedule your visit for faster service",
    "contact.visit.cta": "Call for Free Estimate",
    "contact.cta.title": "Free Estimates Available",
    "contact.cta.subtitle": "No obligation, no hidden fees. Get an honest assessment of your vehicle's repair needs today.",
    "contact.cta.callNow": "Call Now",
    "contact.cta.email": "Email Us",

    // Cars for Sale Page
    "cars.hero.title": "Luxury Cars for Sale",
    "cars.hero.subtitle": "Premium pre-owned vehicles, all professionally inspected and serviced",
    "cars.hero.cta": "Call to Inquire",
    "cars.price": "Price",
    "cars.mileage": "miles",
    "cars.modelYear": "Model Year",
    "cars.features": "Key Features:",
    "cars.callToInquire": "Call to Inquire",
    "cars.why.title": "Why Buy From Us",
    "cars.why.subtitle": "More than just a car sale - a commitment to quality and service",
    "cars.why.inspected": "Thoroughly Inspected",
    "cars.why.inspectedDesc": "Every vehicle undergoes a comprehensive inspection by our expert technicians",
    "cars.why.history": "Service History",
    "cars.why.historyDesc": "Complete maintenance records and transparent vehicle history reports",
    "cars.why.guarantee": "Quality Guarantee",
    "cars.why.guaranteeDesc": "Limited warranty included and ongoing service support from our team",
    "cars.visit.title": "Visit Our Showroom",
    "cars.visit.subtitle": "Come see our current inventory in person. Schedule a test drive today!",
    "cars.visit.cta": "Call to Schedule",

    // Footer
    "footer.company": "L&M Luxury",
    "footer.subtitle": "Auto Body Shop",
    "footer.description": "Professional auto body repair and restoration with over 20 years of experience. Quality work guaranteed.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.hours": "Business Hours",
    "footer.hours.monFri": "Monday - Friday: 8:00 AM - 6:00 PM",
    "footer.hours.sat": "Saturday: 9:00 AM - 4:00 PM",
    "footer.hours.sun": "Sunday: Closed",
    "footer.copyright": "L&M Luxury Auto Body Shop. All rights reserved.",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "nav.cars": "Autos en Venta",
    "nav.call": "Llame para Presupuesto Gratis",
    "nav.callNow": "Llame Ahora",

    // Home Page
    "home.hero.title": "Reparación de Carrocería",
    "home.hero.subtitle": "de Lujo",
    "home.hero.description": "Reparación profesional de colisiones y restauración con más de 20 años de excelencia",
    "home.hero.cta": "Llame para Presupuesto Gratis",
    "home.hero.viewServices": "Ver Nuestros Servicios",
    "home.hero.badges": "✓ Presupuestos Gratis ✓ Se Acepta Seguro ✓ Garantía de Por Vida",
    
    "home.services.title": "Nuestros Servicios",
    "home.services.subtitle": "Servicios completos de reparación y restauración de carrocería",
    "home.services.collision": "Reparación de Colisiones",
    "home.services.collisionDesc": "Reparación experta de colisiones con equipo y técnicas de última generación.",
    "home.services.paint": "Pintura y Refinamiento",
    "home.services.paintDesc": "Igualación profesional de pintura y refinamiento para un acabado impecable.",
    "home.services.dent": "Eliminación de Abolladuras",
    "home.services.dentDesc": "Reparación de abolladuras sin pintura y servicios tradicionales de eliminación.",
    "home.services.quick": "Entrega Rápida",
    "home.services.quickDesc": "Servicio rápido y eficiente sin comprometer la calidad.",
    "home.services.cta": "Obtener Presupuesto Gratis",
    
    "home.beforeAfter.title": "Antes y Después",
    "home.beforeAfter.subtitle": "Vea la transformación que nuestro equipo experto entrega",
    
    "home.whyChoose.title": "Por Qué Elegirnos",
    "home.whyChoose.subtitle": "Excelencia respaldada por experiencia",
    "home.whyChoose.cars": "Autos Reparados",
    "home.whyChoose.years": "Años de Experiencia",
    "home.whyChoose.satisfaction": "Satisfacción del Cliente",
    "home.whyChoose.technicians": "Técnicos Expertos",
    
    "home.testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "home.testimonials.subtitle": "Reseñas reales de clientes reales",
    
    "home.guarantee.title": "Nuestra Garantía",
    "home.guarantee.description": "Respaldamos nuestro trabajo con una garantía de por vida en todas las reparaciones. Su satisfacción es nuestra prioridad.",
    "home.guarantee.cta": "Obtenga Su Presupuesto Gratis Hoy",

    // Services Page
    "services.hero.title": "Nuestros Servicios",
    "services.hero.subtitle": "Servicios completos de reparación y restauración de carrocería para todas las marcas y modelos",
    "services.hero.cta": "Obtener Presupuesto Gratis",
    
    "services.collision.title": "Reparación de Colisiones",
    "services.collision.desc": "Servicios completos de reparación de colisiones usando técnicas certificadas de fábrica y piezas genuinas.",
    "services.collision.feature1": "Enderezamiento de chasis",
    "services.collision.feature2": "Reparaciones estructurales",
    "services.collision.feature3": "Recalibración de sistemas de seguridad",
    "services.collision.feature4": "Reparación de monocasco",
    
    "services.paint.title": "Pintura y Refinamiento",
    "services.paint.desc": "Pintura automotriz profesional con igualación computarizada de color para un acabado perfecto.",
    "services.paint.feature1": "Trabajos de pintura personalizados",
    "services.paint.feature2": "Igualación de color",
    "services.paint.feature3": "Protección de capa transparente",
    "services.paint.feature4": "Opciones sin pintura",
    
    "services.dent.title": "Eliminación de Abolladuras",
    "services.dent.desc": "Servicios expertos de reparación de abolladuras incluyendo técnicas sin pintura (PDR).",
    "services.dent.feature1": "Reparación sin pintura",
    "services.dent.feature2": "Reparación de daños por granizo",
    "services.dent.feature3": "Eliminación de rayones de puerta",
    "services.dent.feature4": "Reemplazo de paneles",
    
    "services.detailing.title": "Detallado y Protección",
    "services.detailing.desc": "Servicios premium de detallado para mantener su vehículo como nuevo.",
    "services.detailing.feature1": "Recubrimiento cerámico",
    "services.detailing.feature2": "Película de protección de pintura",
    "services.detailing.feature3": "Detallado interior",
    "services.detailing.feature4": "Detallado de motor",
    
    "services.insurance.title": "Reclamos de Seguro",
    "services.insurance.desc": "Trabajamos directamente con todas las principales compañías de seguros para agilizar su proceso de reclamo.",
    "services.insurance.feature1": "Facturación directa",
    "services.insurance.feature2": "Asistencia con reclamos",
    "services.insurance.feature3": "Coordinación de alquiler",
    "services.insurance.feature4": "Todas las aseguradoras aceptadas",
    
    "services.custom.title": "Modificaciones Personalizadas",
    "services.custom.desc": "Personalice su vehículo con nuestros servicios de modificación y mejora personalizados.",
    "services.custom.feature1": "Instalación de kit de carrocería",
    "services.custom.feature2": "Gráficos personalizados",
    "services.custom.feature3": "Mejoras de rendimiento",
    "services.custom.feature4": "Ruedas y suspensión",
    
    "services.showcase.title": "Nuestro Trabajo Habla por Sí Solo",
    "services.showcase.subtitle": "Vea las increíbles transformaciones que logramos cada día",
    "services.showcase.before": "Antes",
    "services.showcase.beforeDesc": "Daño significativo por colisión que requiere trabajo extenso de carrocería",
    "services.showcase.after": "Después",
    "services.showcase.afterDesc": "Restauración impecable a condición perfecta de fábrica",
    
    "services.process.title": "Nuestro Proceso",
    "services.process.subtitle": "Simple, transparente y diseñado para su conveniencia",
    "services.process.step1": "Presupuesto Gratis",
    "services.process.step1Desc": "Llámenos para un presupuesto gratis sin obligación sobre su reparación",
    "services.process.step2": "Inspección",
    "services.process.step2Desc": "Inspección exhaustiva y desarrollo de plan de reparación detallado",
    "services.process.step3": "Trabajo de Reparación",
    "services.process.step3Desc": "Técnicos expertos restauran su vehículo a la perfección",
    "services.process.step4": "Control de Calidad",
    "services.process.step4Desc": "Inspección final y aseguramiento de calidad antes de la entrega",
    
    "services.cta.title": "¿Listo para Restaurar Su Vehículo?",
    "services.cta.subtitle": "Obtenga su presupuesto gratis hoy y experimente la diferencia de L&M",
    "services.cta.button": "Llame Ahora para Presupuesto Gratis",

    // About Page
    "about.hero.title": "Sobre L&M Luxury",
    "about.hero.subtitle": "Dos décadas de excelencia en reparación y restauración de carrocería de lujo",
    "about.story.title": "Nuestra Historia",
    "about.story.p1": "Fundado hace más de 20 años, L&M Luxury Auto Body Shop comenzó con una misión simple: proporcionar los servicios de reparación de carrocería de la más alta calidad con atención al cliente incomparable.",
    "about.story.p2": "Lo que comenzó como un pequeño taller familiar ha crecido hasta convertirse en uno de los nombres más confiables en reparación de carrocería de lujo. Nuestro compromiso con la excelencia y la innovación continua nos ha ganado una reputación por entregar resultados que superan las expectativas.",
    "about.story.p3": "Hoy, estamos orgullosos de servir a miles de clientes satisfechos con nuestro equipo de técnicos certificados, equipo de última generación y dedicación a la perfección. Cada vehículo que ingresa a nuestro taller recibe la misma atención meticulosa al detalle y cuidado que construyó nuestra reputación.",
    "about.stats.title": "Nuestro Historial",
    "about.stats.subtitle": "Números que hablan de nuestra experiencia",
    "about.stats.years": "Años en el Negocio",
    "about.stats.customers": "Clientes Felices",
    "about.stats.vehicles": "Vehículos Restaurados",
    "about.stats.technicians": "Técnicos Certificados",
    "about.values.title": "Nuestros Valores",
    "about.values.subtitle": "Los principios que guían todo lo que hacemos",
    "about.values.excellence": "Excelencia",
    "about.values.excellenceDesc": "Nunca comprometemos la calidad y nos esforzamos por la perfección en cada reparación.",
    "about.values.integrity": "Integridad",
    "about.values.integrityDesc": "Servicio honesto y transparente con precios justos y sin tarifas ocultas.",
    "about.values.customer": "Enfoque en el Cliente",
    "about.values.customerDesc": "Su satisfacción es nuestra máxima prioridad. Tratamos cada auto como si fuera nuestro.",
    "about.values.innovation": "Innovación",
    "about.values.innovationDesc": "Usando la última tecnología y técnicas para resultados superiores.",
    "about.cert.title": "Certificaciones y Asociaciones",
    "about.cert.subtitle": "Mantenemos los más altos estándares de la industria a través de capacitación y certificación continua",
    "about.cert.ase": "Certificado ASE",
    "about.cert.icar": "I-CAR Gold",
    "about.cert.factory": "Entrenado de Fábrica",
    "about.cert.insurance": "Aprobado por Seguros",

    // Contact Page
    "contact.hero.title": "Contáctenos",
    "contact.hero.subtitle": "Póngase en contacto con nuestro equipo para un presupuesto gratis o cualquier pregunta",
    "contact.phone": "Teléfono",
    "contact.email": "Correo Electrónico",
    "contact.address": "Dirección",
    "contact.hours": "Horario",
    "contact.hours.monFri": "Lun-Vie: 8:00 AM - 6:00 PM",
    "contact.hours.sat": "Sáb: 9:00 AM - 4:00 PM",
    "contact.hours.sun": "Dom: Cerrado",
    "contact.visit.title": "Visite Nuestro Taller",
    "contact.visit.description": "Pase por nuestras instalaciones de última generación para un presupuesto gratis en persona. Nuestro equipo experto está listo para evaluar su vehículo y proporcionarle opciones de reparación detalladas.",
    "contact.visit.easy": "Fácil de Encontrar",
    "contact.visit.easyDesc": "Ubicado en Auto Street con amplio estacionamiento disponible",
    "contact.visit.call": "Llame Antes",
    "contact.visit.callDesc": "Programe su visita para un servicio más rápido",
    "contact.visit.cta": "Llame para Presupuesto Gratis",
    "contact.cta.title": "Presupuestos Gratis Disponibles",
    "contact.cta.subtitle": "Sin obligación, sin tarifas ocultas. Obtenga una evaluación honesta de las necesidades de reparación de su vehículo hoy.",
    "contact.cta.callNow": "Llame Ahora",
    "contact.cta.email": "Envíenos un Correo",

    // Cars for Sale Page
    "cars.hero.title": "Autos de Lujo en Venta",
    "cars.hero.subtitle": "Vehículos usados premium, todos profesionalmente inspeccionados y revisados",
    "cars.hero.cta": "Llame para Consultar",
    "cars.price": "Precio",
    "cars.mileage": "millas",
    "cars.modelYear": "Año del Modelo",
    "cars.features": "Características Clave:",
    "cars.callToInquire": "Llame para Consultar",
    "cars.why.title": "Por Qué Comprar de Nosotros",
    "cars.why.subtitle": "Más que solo una venta de autos - un compromiso con la calidad y el servicio",
    "cars.why.inspected": "Completamente Inspeccionado",
    "cars.why.inspectedDesc": "Cada vehículo se somete a una inspección completa por nuestros técnicos expertos",
    "cars.why.history": "Historial de Servicio",
    "cars.why.historyDesc": "Registros completos de mantenimiento e informes transparentes del historial del vehículo",
    "cars.why.guarantee": "Garantía de Calidad",
    "cars.why.guaranteeDesc": "Garantía limitada incluida y soporte de servicio continuo de nuestro equipo",
    "cars.visit.title": "Visite Nuestro Salón de Exhibición",
    "cars.visit.subtitle": "¡Venga a ver nuestro inventario actual en persona. Programe una prueba de manejo hoy!",
    "cars.visit.cta": "Llame para Programar",

    // Footer
    "footer.company": "L&M Luxury",
    "footer.subtitle": "Taller de Carrocería",
    "footer.description": "Reparación y restauración profesional de carrocería con más de 20 años de experiencia. Trabajo de calidad garantizado.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.contact": "Contáctenos",
    "footer.hours": "Horario de Atención",
    "footer.hours.monFri": "Lunes - Viernes: 8:00 AM - 6:00 PM",
    "footer.hours.sat": "Sábado: 9:00 AM - 4:00 PM",
    "footer.hours.sun": "Domingo: Cerrado",
    "footer.copyright": "L&M Luxury Auto Body Shop. Todos los derechos reservados.",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};