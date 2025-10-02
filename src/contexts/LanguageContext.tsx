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