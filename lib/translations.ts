export type Locale = "en" | "es" | "pt";

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];

export const translations = {
  en: {
    nav: { philosophy: "Philosophy", services: "Services", gallery: "Gallery", visit: "Visit", book: "Book Now" },
    hero: {
      eyebrow: "Vale de Cambra, Portugal",
      title1: "Beauty,",
      title2: "made with",
      title3: "care.",
      sub: "A beauty institute where hair, nails and skin are treated with the same quiet attention — every detail considered before it is applied.",
      cta: "Reserve your appointment",
      scroll: "Scroll",
    },
    chapters: {
      one: { index: "Chapter I", title: "Our Philosophy", body: "More than a beauty studio, Glamour Haven is built on years of trust. Every appointment begins with a conversation, not a menu — and ends with you feeling like yourself, only more so." },
      two: { index: "Chapter II", title: "The Craft", body: "Nail design since 2014, alongside hair, makeup, lashes and skincare — trained hands, medical-grade sterilisation, and a warm, welcoming space you'll want to return to." },
    },
    services: {
      eyebrow: "What we do",
      title: "Services, considered.",
      list: [
        { name: "Nail Design", desc: "Our specialty since 2014 — shape, structure and finish, sculpted with precision." },
        { name: "Hair Styling", desc: "Cut, colour and styling tailored to you, from everyday to occasion." },
        { name: "Makeup", desc: "Natural to full glam, for events, photoshoots or a well-deserved treat." },
        { name: "Lash Extensions", desc: "Volume and length that frames your eyes without ever looking heavy." },
        { name: "Skin Cleansing", desc: "A slow, thorough facial focused on clarity and calm skin." },
        { name: "Body Treatments", desc: "Restorative therapies designed to help you slow down and reset." },
        { name: "Spa Pedicure", desc: "A restorative ritual for tired feet — soak, scrub, massage, polish." },
        { name: "Tattoos & Piercings", desc: "Fine, considered work in a clean, professional studio setting." },
      ],
    },
    gallery: { eyebrow: "Inside the studio", title: "A space to slow down in." },
    booking: {
      eyebrow: "Reservations",
      title: "Sit with us.",
      body: "Book directly through Fresha — choose your treatment, your technician, and your time.",
      cta: "Book on Fresha",
    },
    footer: {
      visitUs: "Visit us",
      hoursTitle: "Hours",
      hours: [
        ["Monday – Saturday", "9:00 – 20:00"],
        ["Sunday", "Closed"],
      ],
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: { philosophy: "Filosofía", services: "Servicios", gallery: "Galería", visit: "Visítanos", book: "Reservar" },
    hero: {
      eyebrow: "Vale de Cambra, Portugal",
      title1: "Belleza,",
      title2: "hecha con",
      title3: "cuidado.",
      sub: "Un instituto de belleza donde cabello, uñas y piel se tratan con la misma atención serena — cada detalle pensado antes de aplicarse.",
      cta: "Reserva tu cita",
      scroll: "Desplázate",
    },
    chapters: {
      one: { index: "Capítulo I", title: "Nuestra Filosofía", body: "Más que un estudio de belleza, este espacio está construido sobre años de confianza. Cada cita comienza con una conversación, no con un menú — y termina haciéndote sentir más tú misma que nunca." },
      two: { index: "Capítulo II", title: "El Oficio", body: "Diseño de uñas desde 2014, junto con cabello, maquillaje, pestañas y cuidado de la piel — manos formadas, esterilización de grado médico y un espacio cálido al que querrás volver." },
    },
    services: {
      eyebrow: "Lo que hacemos",
      title: "Servicios, con criterio.",
      list: [
        { name: "Diseño de Uñas", desc: "Nuestra especialidad desde 2014 — forma, estructura y acabado, esculpidos con precisión." },
        { name: "Peluquería", desc: "Corte, color y peinado a tu medida, del día a día a la ocasión especial." },
        { name: "Maquillaje", desc: "De lo natural al glam total, para eventos, sesiones o un capricho merecido." },
        { name: "Extensión de Pestañas", desc: "Volumen y largo que enmarca la mirada sin parecer cargado." },
        { name: "Limpieza Facial", desc: "Un facial pausado y minucioso enfocado en claridad y calma." },
        { name: "Tratamientos de Cuerpo", desc: "Terapias reparadoras pensadas para bajar el ritmo y reiniciar." },
        { name: "Pedicura Spa", desc: "Un ritual reparador para pies cansados — remojo, exfoliación, masaje, esmalte." },
        { name: "Tatuajes y Piercings", desc: "Trabajo fino y cuidado en un estudio limpio y profesional." },
      ],
    },
    gallery: { eyebrow: "Dentro del estudio", title: "Un espacio para ir más despacio." },
    booking: {
      eyebrow: "Reservas",
      title: "Siéntate con nosotras.",
      body: "Reserva directamente en Fresha — elige tu tratamiento, tu técnica y tu horario.",
      cta: "Reservar en Fresha",
    },
    footer: {
      visitUs: "Visítanos",
      hoursTitle: "Horario",
      hours: [
        ["Lunes – Sábado", "9:00 – 20:00"],
        ["Domingo", "Cerrado"],
      ],
      rights: "Todos los derechos reservados.",
    },
  },
  pt: {
    nav: { philosophy: "Filosofia", services: "Serviços", gallery: "Galeria", visit: "Visite-nos", book: "Reservar" },
    hero: {
      eyebrow: "Vale de Cambra, Portugal",
      title1: "beleza,",
      title2: "feita com",
      title3: "cuidado.",
      sub: "Um instituto de beleza onde cabelo, unhas e pele são tratados com a mesma atenção serena — cada detalhe pensado antes de ser aplicado.",
      cta: "Marque a sua sessão",
      scroll: "Deslize",
    },
    chapters: {
      one: { index: "Capítulo I", title: "A Nossa Filosofia", body: "Mais do que um estúdio de beleza, este espaço é construído sobre anos de confiança. Cada marcação começa com uma conversa, não com um menu — e termina fazendo-a sentir-se mais ela mesma." },
      two: { index: "Capítulo II", title: "O Ofício", body: "Nail designer desde 2014, a par de cabeleireiro, maquilhagem, pestanas e cuidados de pele — mãos experientes, esterilização de grau médico e um espaço acolhedor ao qual vai querer voltar." },
    },
    services: {
      eyebrow: "O que fazemos",
      title: "Serviços, com critério.",
      list: [
        { name: "Nail Designer", desc: "A nossa especialidade desde 2014 — forma, estrutura e acabamento, esculpidos com precisão." },
        { name: "Cabeleireiro", desc: "Corte, cor e penteado à sua medida, do dia a dia à ocasião especial." },
        { name: "Maquilhagem", desc: "Do natural ao glam total, para eventos, sessões fotográficas ou um mimo merecido." },
        { name: "Pestanas", desc: "Volume e comprimento que emolduram o olhar sem nunca parecer pesado." },
        { name: "Limpeza de Pele", desc: "Uma facial demorada e minuciosa, focada em clareza e calma." },
        { name: "Tratamentos de Corpo", desc: "Terapias reparadoras pensadas para abrandar e recomeçar." },
        { name: "Pedicure Spa", desc: "Um ritual reparador para pés cansados — imersão, esfoliação, massagem, verniz." },
        { name: "Tatuagens e Piercings", desc: "Trabalho fino e cuidado, num studio limpo e profissional." },
      ],
    },
    gallery: { eyebrow: "Dentro do studio", title: "Um espaço para abrandar." },
    booking: {
      eyebrow: "Marcações",
      title: "Sente-se connosco.",
      body: "Marque diretamente pela Fresha — escolha o tratamento, a técnica e o horário.",
      cta: "Marcar na Fresha",
    },
    footer: {
      visitUs: "Visite-nos",
      hoursTitle: "Horário",
      hours: [
        ["Segunda – Sábado", "9:00 – 20:00"],
        ["Domingo", "Encerrado"],
      ],
      rights: "Todos os direitos reservados.",
    },
  },
} as const;

export const SITE = {
  name: "Glamour Haven",
  address: "1238-5698 Jersey Porto",
  phone: "+351 869 585 6",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jersey+Porto",
  // Replace with your real Fresha booking page URL
  freshaUrl: "https://www.fresha.com/",
};
