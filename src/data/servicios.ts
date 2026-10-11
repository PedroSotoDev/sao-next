export type Categoria =
    | "Decoración"
    | "Gastronomía"
    | "Entretenimiento"
    | "Estilo & Recuerdos";

export type Servicio = {
    slug: string;
    titulo: string;
    categoria: Categoria;
    descripcion: string;
    detalle: string;
    beneficios?: string[];
    img: string;
    destacado?: boolean;
};

const servicios: Servicio[] = [
    // ── DECORACIÓN ────────────────────────────────────────
    {
        slug: "decoracion",
        titulo: "Decoración y ambientación",
        categoria: "Decoración",
        descripcion: "Ambientes únicos hechos a tu medida",
        detalle:
        "Transformamos cada espacio con una estética pensada para tu estilo. Desde la mesa principal hasta el último rincón, cuidamos la armonía visual para que todo se vea impecable y hable de ti.",
        beneficios: ["Diseño personalizado", "Montaje completo", "Coordinación con proveedores"],
        img: "/images/servicios/decoracion.jpg",
        destacado: true,
    },
    {
        slug: "iluminacion",
        titulo: "Iluminación y sonido",
        categoria: "Decoración",
        descripcion: "El ambiente visual perfecto",
        detalle:
        "Diseño de iluminación profesional y sonido de alta calidad que transforman cualquier espacio. Creamos la atmósfera exacta que imaginas: íntima, elegante o espectacular.",
        beneficios: ["Iluminación LED", "Audio profesional", "Diseño a medida"],
        img: "/images/servicios/iluminacion.jpg",
    },
    {
        slug: "papeleria",
        titulo: "Papelería e impresos",
        categoria: "Decoración",
        descripcion: "La primera impresión de tu evento",
        detalle:
        "Diseñamos invitaciones, menús, carteles y señalética con identidad propia. Cada pieza gráfica acompaña la estética de tu celebración y deja una primera impresión memorable.",
        beneficios: ["Invitaciones", "Menús y carteles", "Diseño exclusivo"],
        img: "/images/servicios/papeleria.jpg",
    },

    // ── GASTRONOMÍA ───────────────────────────────────────
    {
        slug: "catering",
        titulo: "Catering y picadera",
        categoria: "Gastronomía",
        descripcion: "Propuesta gastronómica a tu medida",
        detalle:
        "Menús personalizados con opciones gourmet y bocados pensados para cada paladar. Adaptamos la propuesta a diferentes gustos, culturas y estilos de celebración.",
        beneficios: ["Menú personalizado", "Opciones gourmet", "Servicio de meseros"],
        img: "/images/servicios/pinchos.jpg",
        destacado: true,
    },
    {
        slug: "buffet",
        titulo: "Buffet y cocina",
        categoria: "Gastronomía",
        descripcion: "Servicio completo de alimentos",
        detalle:
        "Estaciones de buffet con variedad de platos, atendidas por personal profesional. Nos adaptamos al número de invitados y al flujo natural de tu evento.",
        beneficios: ["Variedad de platos", "Estaciones temáticas", "Personal de servicio"],
        img: "/images/servicios/buffet.jpg",
    },
    {
        slug: "candy-bar",
        titulo: "Dulcería & Candy Bar",
        categoria: "Gastronomía",
        descripcion: "Mesa dulce que enamora",
        detalle:
        "Mesa de dulces y golosinas diseñada a juego con la estética de tu evento. Variedad de postres, chocolates y decoración temática que se convierte en protagonista.",
        beneficios: ["Variedad de dulces", "Decoración temática", "Diseño a juego con tu evento"],
        img: "/images/servicios/candy.jpg",
    },
    {
        slug: "coctel-bienvenida",
        titulo: "Cóctel de bienvenida",
        categoria: "Gastronomía",
        descripcion: "Recibe a tus invitados con estilo",
        detalle:
        "Dale la bienvenida a tus invitados con un cóctel preparado por profesionales. La primera impresión de tu celebración empieza por el vaso.",
        beneficios: ["Tinto de Verano", "Vino Tinto", "Mojito"],
        img: "/images/servicios/coctel.jpg",
    },
    {
        slug: "brindis",
        titulo: "Bebida para el brindis",
        categoria: "Gastronomía",
        descripcion: "El momento más especial, con la copa perfecta",
        detalle:
        "Seleccionamos las mejores bebidas para tu brindis: Champagne, Vino Espumoso o Sidra. Nos aseguramos de que cada copa esté servida en el momento exacto.",
        beneficios: ["Champagne", "Vino Espumoso", "Sidra"],
        img: "/images/servicios/brindis.jpg",
    },
    {
        slug: "barra-abierta",
        titulo: "Barra abierta",
        categoria: "Gastronomía",
        descripcion: "Coctelería profesional toda la noche",
        detalle:
        "Barman y maestros cocteleros a tu disposición para preparar los mejores tragos durante toda la celebración. Barra equipada y surtida con las opciones que elijas.",
        beneficios: ["Barman profesional", "Cócteles de autor", "Barra equipada"],
        img: "/images/servicios/barman.jpg",
    },

    // ── ENTRETENIMIENTO ───────────────────────────────────
    {
        slug: "dj-musica",
        titulo: "DJ & música en vivo",
        categoria: "Entretenimiento",
        descripcion: "La energía que tu fiesta necesita",
        detalle:
        "DJs profesionales y músicos en vivo para mantener a tus invitados bailando toda la noche. Adaptamos el repertorio a cada momento del evento.",
        beneficios: ["DJ profesional", "Música en vivo", "Equipo de audio incluido"],
        img: "/images/servicios/musica.jpg",
        destacado: true,
    },
    {
        slug: "mariachis",
        titulo: "Mariachis",
        categoria: "Entretenimiento",
        descripcion: "Música tradicional para momentos únicos",
        detalle:
        "Mariachis profesionales para sorprender a tus invitados con serenatas, entrada de novios o momentos especiales. Repertorio clásico y moderno.",
        beneficios: ["Serenatas", "Entrada de novios", "Repertorio variado"],
        img: "/images/servicios/mariachis.jpg",
    },
    {
        slug: "maestro-ceremonia",
        titulo: "Maestro de ceremonia",
        categoria: "Entretenimiento",
        descripcion: "La voz que guía tu celebración",
        detalle:
        "Locutor profesional que conduce tu evento con elegancia, coordinando cada momento y manteniendo a tus invitados conectados con la celebración.",
        beneficios: ["Conducción profesional", "Guion personalizado", "Coordinación de tiempos"],
        img: "/images/servicios/mc.jpg",
    },
    {
        slug: "payasos-magos",
        titulo: "Payasos, magos y animación",
        categoria: "Entretenimiento",
        descripcion: "Entretenimiento para los más pequeños",
        detalle:
        "Shows de payasos, magos, animadores y personajes que mantendrán a los niños entretenidos durante toda la fiesta. Actividades pensadas por edades.",
        beneficios: ["Shows de magia", "Animación infantil", "Personajes temáticos"],
        img: "/images/servicios/payasos.jpg",
    },

    // ── ESTILO & RECUERDOS ────────────────────────────────
    {
        slug: "estilista-maquillaje",
        titulo: "Estilista y maquillaje",
        categoria: "Estilo & Recuerdos",
        descripcion: "Belleza profesional para tu gran día",
        detalle:
        "Estilistas y maquilladores profesionales a tu disposición el día del evento. Realzamos tu belleza natural con técnicas actuales y productos de alta calidad.",
        beneficios: ["Maquillaje profesional", "Peinado a medida", "Prueba previa"],
        img: "/images/servicios/estilista.jpg",
    },
    {
        slug: "vestuario",
        titulo: "Alquiler de vestuario",
        categoria: "Estilo & Recuerdos",
        descripcion: "Looks para tu gran día",
        detalle:
        "Vestuario para novios, quinceañeras y padrinos con opciones clásicas y modernas. Te asesoramos para encontrar el look perfecto según la temática y el estilo de tu celebración.",
        beneficios: ["Asesoría de estilo", "Amplio catálogo", "Ajustes incluidos"],
        img: "/images/servicios/vestuario.jpg",
    },
    {
        slug: "fotografia",
        titulo: "Fotografía profesional",
        categoria: "Estilo & Recuerdos",
        descripcion: "Momentos que duran para siempre",
        detalle:
        "Fotógrafos especializados en eventos sociales, capturando emociones reales con estilo artístico y moderno. Entrega en alta resolución, lista para atesorar.",
        beneficios: ["Cobertura completa", "Edición profesional", "Entrega digital en alta resolución"],
        img: "/images/servicios/fotografia.jpg",
        destacado: true,
    },
];

export default servicios;

// Categorías en orden de aparición visual
export const CATEGORIAS: Categoria[] = [
    "Decoración",
    "Gastronomía",
    "Entretenimiento",
    "Estilo & Recuerdos",
];