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
    "home.hero.eyebrow": "Miami's Trusted Auto Body Shop",
    "home.hero.title": "Luxury Auto Body Repair &",
    "home.hero.subtitle": "Collision Experts in Miami",
    "home.hero.description": "From bumper scratches to major collision work, we bring your vehicle back to factory condition — backed by honest estimates and clean, precise work.",
    "home.hero.cta": "Call for a Free Estimate",
    "home.hero.viewServices": "View Our Services",
    "home.hero.badges": "Free Estimates  ·  Insurance Claims Welcome  ·  Warranty Guaranteed",

    // Trust bar
    "home.trust.estimates": "Free Estimates",
    "home.trust.insurance": "Insurance Claim Assistance",
    "home.trust.collision": "Collision Repair",
    "home.trust.paint": "Paint & Body Work",
    "home.trust.miami": "Miami Based",

    "home.services.eyebrow": "What We Do",
    "home.services.title": "Repairs Done Right the First Time",
    "home.services.subtitle": "Every job gets the same attention to detail — whether it's a daily driver or a weekend exotic.",
    "home.services.collision": "Collision Repair",
    "home.services.collisionDesc": "Structural and panel repair that restores your car's safety and factory lines after an accident.",
    "home.services.paint": "Paint & Color Matching",
    "home.services.paintDesc": "Computerized color matching and a controlled paint booth for a seamless, factory finish.",
    "home.services.dent": "Dent & Scratch Repair",
    "home.services.dentDesc": "Paintless dent removal and scratch repair that makes damage disappear.",
    "home.services.quick": "Insurance Claim Help",
    "home.services.quickDesc": "We deal directly with your insurer so the claim process is one less thing to worry about.",
    "home.services.cta": "Get a Free Estimate",
    "home.services.viewAll": "See All Services",

    "home.beforeAfter.eyebrow": "Real Results",
    "home.beforeAfter.title": "Before & After",
    "home.beforeAfter.subtitle": "Drag to see the difference our team makes on real Miami repairs.",
    "home.beforeAfter.before": "Before",
    "home.beforeAfter.after": "After",

    "home.whyChoose.eyebrow": "By The Numbers",
    "home.whyChoose.title": "Why Drivers Trust L&M",
    "home.whyChoose.subtitle": "Two decades of bodywork, paint, and collision repair in Miami.",
    "home.whyChoose.cars": "Cars Repaired",
    "home.whyChoose.years": "Years in Miami",
    "home.whyChoose.satisfaction": "Customer Satisfaction",
    "home.whyChoose.technicians": "Expert Technicians",

    "home.testimonials.eyebrow": "Customer Reviews",
    "home.testimonials.title": "What Our Customers Say",
    "home.testimonials.subtitle": "Real reviews from drivers across Miami.",

    "home.finalCta.eyebrow": "Get Started Today",
    "home.finalCta.title": "Need Your Vehicle Repaired?",
    "home.finalCta.description": "Call today for a free estimate from L&M Luxury Auto Body Shop. No pressure, no hidden fees — just honest work.",
    "home.finalCta.cta": "Call for a Free Estimate",
    "home.finalCta.secondary": "Get Directions",

    "home.guarantee.title": "Our Guarantee",
    "home.guarantee.description": "We stand behind our work with a warranty guaranteed on all repairs.",
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

    // Testimonials (quotes)
    "home.t1": "Got rear-ended on I-95 and L&M handled everything with my insurance. Car came back looking better than before the accident.",
    "home.t2": "They color-matched the paint on my black sedan perfectly — you genuinely can't tell where the work was done.",
    "home.t3": "Honest pricing and they actually finished when they said they would. Hard to find in Miami. Highly recommend.",
    "home.t1.role": "Collision Repair, Brickell",
    "home.t2.role": "Paint & Body, Miami Lakes",
    "home.t3.role": "Bumper Repair, Hialeah",

    // About extra
    "about.hero.eyebrow": "Our Story",
    "about.story.eyebrow": "Family Owned · Miami Based",
    "about.values.eyebrow": "How We Work",
    "about.values.precision": "Precision Work",
    "about.values.precisionDesc": "We restore factory panel gaps, lines, and finishes — not just cover up the damage.",
    "about.values.honest": "Honest Estimates",
    "about.values.honestDesc": "Clear, written estimates with no surprise charges added at pickup.",
    "about.values.paintMatch": "Quality Paint Matching",
    "about.values.paintMatchDesc": "Computerized color matching for a finish that blends seamlessly with your car.",
    "about.values.customerFirst": "Customer-First Service",
    "about.values.customerFirstDesc": "We keep you updated through the whole repair and treat your car like our own.",
    "about.cta.title": "Bring Your Car to People Who Care",
    "about.cta.subtitle": "Stop by the shop or call for a free, no-pressure estimate.",

    // Services extra
    "services.intro.eyebrow": "Our Services",
    "services.intro.title": "Complete Auto Body & Collision Care",
    "services.intro.subtitle": "Every repair is handled in-house by technicians who treat your vehicle like their own.",
    "services.bumper.title": "Bumper Repair",
    "services.bumper.desc": "Cracked, scuffed, or hanging bumpers repaired and refinished to factory spec.",
    "services.bumper.feature1": "Crack & scuff repair",
    "services.bumper.feature2": "Bumper refinishing",
    "services.bumper.feature3": "Sensor recalibration",
    "services.bumper.feature4": "Full replacement",
    "services.body.title": "Auto Body Repair",
    "services.body.desc": "Panel, fender, and frame repair that brings your vehicle back to its original shape.",
    "services.body.feature1": "Panel replacement",
    "services.body.feature2": "Rust repair",
    "services.body.feature3": "Frame straightening",
    "services.body.feature4": "Welding & fabrication",

    // Cars extra
    "cars.intro.eyebrow": "Current Inventory",
    "cars.why.eyebrow": "The L&M Promise",

    // Contact extra
    "contact.hero.eyebrow": "Get In Touch",
    "contact.info.title": "Shop Information",

    // Footer
    "footer.company": "L&M Luxury",
    "footer.subtitle": "Auto Body Shop",
    "footer.description": "Miami's go-to shop for collision repair, paint, and bodywork. Family owned and trusted by South Florida drivers for over 20 years.",
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
    "home.hero.eyebrow": "Taller de Carrocería de Confianza en Miami",
    "home.hero.title": "Reparación de Carrocería de Lujo y",
    "home.hero.subtitle": "Expertos en Colisiones en Miami",
    "home.hero.description": "Desde rayones en el parachoques hasta trabajos mayores de colisión, devolvemos su vehículo a su condición de fábrica — con presupuestos honestos y trabajo limpio y preciso.",
    "home.hero.cta": "Llame para un Presupuesto Gratis",
    "home.hero.viewServices": "Ver Nuestros Servicios",
    "home.hero.badges": "Presupuestos Gratis  ·  Aceptamos Seguros  ·  Garantía Garantizada",

    // Trust bar
    "home.trust.estimates": "Presupuestos Gratis",
    "home.trust.insurance": "Ayuda con Reclamos de Seguro",
    "home.trust.collision": "Reparación de Colisiones",
    "home.trust.paint": "Pintura y Carrocería",
    "home.trust.miami": "Basados en Miami",

    "home.services.eyebrow": "Lo Que Hacemos",
    "home.services.title": "Reparaciones Bien Hechas a la Primera",
    "home.services.subtitle": "Cada trabajo recibe la misma atención al detalle — ya sea un auto diario o un exótico de fin de semana.",
    "home.services.collision": "Reparación de Colisiones",
    "home.services.collisionDesc": "Reparación estructural y de paneles que restaura la seguridad y las líneas de fábrica tras un accidente.",
    "home.services.paint": "Pintura e Igualación de Color",
    "home.services.paintDesc": "Igualación de color computarizada y cabina de pintura controlada para un acabado de fábrica.",
    "home.services.dent": "Abolladuras y Rayones",
    "home.services.dentDesc": "Reparación de abolladuras sin pintura y de rayones que hace desaparecer el daño.",
    "home.services.quick": "Ayuda con el Seguro",
    "home.services.quickDesc": "Tratamos directamente con su aseguradora para que el reclamo sea una preocupación menos.",
    "home.services.cta": "Obtener Presupuesto Gratis",
    "home.services.viewAll": "Ver Todos los Servicios",

    "home.beforeAfter.eyebrow": "Resultados Reales",
    "home.beforeAfter.title": "Antes y Después",
    "home.beforeAfter.subtitle": "Deslice para ver la diferencia que logra nuestro equipo en reparaciones reales de Miami.",
    "home.beforeAfter.before": "Antes",
    "home.beforeAfter.after": "Después",

    "home.whyChoose.eyebrow": "En Números",
    "home.whyChoose.title": "Por Qué Confían en L&M",
    "home.whyChoose.subtitle": "Dos décadas de carrocería, pintura y reparación de colisiones en Miami.",
    "home.whyChoose.cars": "Autos Reparados",
    "home.whyChoose.years": "Años en Miami",
    "home.whyChoose.satisfaction": "Satisfacción del Cliente",
    "home.whyChoose.technicians": "Técnicos Expertos",

    "home.testimonials.eyebrow": "Opiniones de Clientes",
    "home.testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "home.testimonials.subtitle": "Reseñas reales de conductores de todo Miami.",

    "home.finalCta.eyebrow": "Comience Hoy",
    "home.finalCta.title": "¿Necesita Reparar Su Vehículo?",
    "home.finalCta.description": "Llame hoy para un presupuesto gratis de L&M Luxury Auto Body Shop. Sin presión, sin cargos ocultos — solo trabajo honesto.",
    "home.finalCta.cta": "Llame para un Presupuesto Gratis",
    "home.finalCta.secondary": "Cómo Llegar",

    "home.guarantee.title": "Nuestra Garantía",
    "home.guarantee.description": "Respaldamos nuestro trabajo con una garantía garantizada en todas las reparaciones.",
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

    // Testimonials (quotes)
    "home.t1": "Me chocaron por detrás en la I-95 y L&M se encargó de todo con mi seguro. El auto quedó mejor que antes del accidente.",
    "home.t2": "Igualaron perfectamente la pintura de mi sedán negro — de verdad no se nota dónde se hizo el trabajo.",
    "home.t3": "Precios honestos y terminaron cuando dijeron que lo harían. Difícil de encontrar en Miami. Muy recomendado.",
    "home.t1.role": "Reparación de Colisión, Brickell",
    "home.t2.role": "Pintura y Carrocería, Miami Lakes",
    "home.t3.role": "Reparación de Parachoques, Hialeah",

    // About extra
    "about.hero.eyebrow": "Nuestra Historia",
    "about.story.eyebrow": "Negocio Familiar · Basado en Miami",
    "about.values.eyebrow": "Cómo Trabajamos",
    "about.values.precision": "Trabajo de Precisión",
    "about.values.precisionDesc": "Restauramos las separaciones, líneas y acabados de fábrica — no solo cubrimos el daño.",
    "about.values.honest": "Presupuestos Honestos",
    "about.values.honestDesc": "Presupuestos claros y por escrito, sin cargos sorpresa al recoger el auto.",
    "about.values.paintMatch": "Igualación de Pintura de Calidad",
    "about.values.paintMatchDesc": "Igualación de color computarizada para un acabado que se integra a la perfección con su auto.",
    "about.values.customerFirst": "Servicio Centrado en el Cliente",
    "about.values.customerFirstDesc": "Lo mantenemos informado durante toda la reparación y tratamos su auto como si fuera nuestro.",
    "about.cta.title": "Lleve Su Auto con Quienes lo Cuidan",
    "about.cta.subtitle": "Pase por el taller o llame para un presupuesto gratis y sin presión.",

    // Services extra
    "services.intro.eyebrow": "Nuestros Servicios",
    "services.intro.title": "Cuidado Completo de Carrocería y Colisiones",
    "services.intro.subtitle": "Cada reparación se realiza internamente por técnicos que tratan su vehículo como el suyo propio.",
    "services.bumper.title": "Reparación de Parachoques",
    "services.bumper.desc": "Parachoques agrietados, rayados o sueltos reparados y refinados a especificación de fábrica.",
    "services.bumper.feature1": "Reparación de grietas y rayones",
    "services.bumper.feature2": "Refinamiento de parachoques",
    "services.bumper.feature3": "Recalibración de sensores",
    "services.bumper.feature4": "Reemplazo completo",
    "services.body.title": "Reparación de Carrocería",
    "services.body.desc": "Reparación de paneles, guardabarros y chasis que devuelve su vehículo a su forma original.",
    "services.body.feature1": "Reemplazo de paneles",
    "services.body.feature2": "Reparación de óxido",
    "services.body.feature3": "Enderezamiento de chasis",
    "services.body.feature4": "Soldadura y fabricación",

    // Cars extra
    "cars.intro.eyebrow": "Inventario Actual",
    "cars.why.eyebrow": "La Promesa de L&M",

    // Contact extra
    "contact.hero.eyebrow": "Contáctenos",
    "contact.info.title": "Información del Taller",

    // Footer
    "footer.company": "L&M Luxury",
    "footer.subtitle": "Taller de Carrocería",
    "footer.description": "El taller de confianza en Miami para colisiones, pintura y carrocería. Negocio familiar al servicio de conductores del sur de Florida por más de 20 años.",
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