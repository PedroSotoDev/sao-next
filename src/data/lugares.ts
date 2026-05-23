type Imagen = {
    src: string;
    titulo: string;
    datos: string;
};

type Categoria = {
    nombre: string;
    label: string;
    imagenes: Imagen[];
};

const categoria: Categoria[] = [
        {
            nombre: "salon",
            label: "Salones",
            imagenes: [
                { src: "/images/beach.jpg", titulo: "Hotel Tulipan", datos: "Vedado, Habana" },
                
            ]
        },
        {
            nombre: "rural",
            label: "Rurales",
            imagenes: [
                { src: "/images/beach.jpg", titulo: "Hosbone", datos: "Varadero, Matanzas" },
                { src: "/images/beach.jpg", titulo: "Palma Linda", datos: "Cotorro, Habana" }
            ]
        },
        {
            nombre: "costa",
            label: "Costas",
            imagenes: [
                { src: "/images/beach.jpg", titulo: "Casas con vista mar", datos: "Santa Fe, Playa" },
                { src: "/images/beach.jpg", titulo: "Marlin", datos: "Marina de Tarará" }
            ]
        }
    ];

export default categoria;