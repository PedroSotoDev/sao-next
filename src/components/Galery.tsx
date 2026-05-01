"use client";

import { useState } from "react";
import Image from "next/image";

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

export default function Galery() {

    const categorias: Categoria[] = [
        {
            nombre: "hotel",
            label: "Hoteles",
            imagenes: [
                { src: "/images/beach.jpg", titulo: "Decoración elegante", datos: "Salon Clasico, Villa Clara" },
                { src: "/images/beach.jpg", titulo: "Ceremonia", datos: "Salon Clasico, Villa Clara" },
                { src: "/images/beach.jpg", titulo: "Recepción", datos: "Salon Clasico, Villa Clara" }
            ]
        },
        {
            nombre: "salon",
            label: "Salones",
            imagenes: [
                { src: "/images/beach.jpg", titulo: "Fiesta en la playa", datos: "Salon Clasico, Villa Clara" },
                { src: "/images/beach.jpg", titulo: "Decoración temática", datos: "Salon Clasico, Villa Clara" },
                { src: "/images/beach.jpg", titulo: "Ceremonia", datos: "Salon Clasico, Villa Clara" },
                { src: "/images/beach.jpg", titulo: "Recepción", datos: "Salon Clasico, Villa Clara" },
            ]
        },
        {
            nombre: "pinca",
            label: "Fincas",
            imagenes: [
                { src: "/images/beach.jpg", titulo: "Diversión total", datos: "Salon Clasico, Villa Clara" },
                { src: "/images/beach.jpg", titulo: "Colores y juegos", datos: "Salon Clasico, Villa Clara" }
            ]
        },
        {
            nombre: "playa",
            label: "Playas",
            imagenes: [
                { src: "/images/beach.jpg", titulo: "Ambiente dulce", datos: "Salon Clasico, Villa Clara" },
                { src: "/images/beach.jpg", titulo: "Detalles únicos", datos: "Salon Clasico, Villa Clara" }
            ]
        }
    ];

    const [categoriaActiva, setCategoriaActiva] = useState<Categoria>(categorias[0]);

    return (
        <section className="w-full mt-8 flex flex-col items-center bg-white text-black">

            <div className="px-5 w-full max-w-6xl flex justify-between items-end">
                <h4 className="text-3xl md:text-4xl font-semibold tracking-wide">Lugares para ti</h4>
                <a href="#" className="hidden md:block text-sm underline opacity-70 hover:opacity-100 transition">Explorar</a>
            </div>

            <div className="pb-6 pt-4 w-full max-w-6xl px-4">

                <div className="block md:hidden">
                    <select
                        value={categoriaActiva.nombre}
                        onChange={(e) => {
                            const seleccionada = categorias.find(cat => cat.nombre === e.target.value);
                            if (seleccionada) setCategoriaActiva(seleccionada);
                        }}
                        className="min-w-[6rem] p-2 text-lg font-medium border-black/10 focus:outline-none"
                    >
                        {categorias.map((cat) => (
                            <option key={cat.nombre} value={cat.nombre}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="hidden md:flex flex-wrap justify-center items-center gap-3">
                    {categorias.map((cat) => (
                        <button
                            key={cat.nombre}
                            onClick={() => setCategoriaActiva(cat)}
                            className={`px-5 py-2 rounded-full text-sm transition ${
                                categoriaActiva.nombre === cat.nombre
                                    ? "bg-black text-white"
                                    : "bg-black/5 text-black hover:bg-black/10"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-6xl pl-5">
                <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-3">

                    {categoriaActiva.imagenes.map((img, index) => (
                        <div key={index} className="min-w-[16rem] h-[22rem] flex-shrink-0 snap-start">

                            <div className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer">

                                <Image
                                    src={img.src}
                                    alt={img.titulo}
                                    fill
                                    className="object-cover brightness-75 group-hover:scale-110 transition duration-500"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"/>

                                <div className="absolute bottom-0 left-0 p-4 flex flex-col gap-1">
                                    <span className="text-white text-lg font-medium">{img.titulo}</span>
                                    <span className="text-white/70 text-sm">{img.datos}</span>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}