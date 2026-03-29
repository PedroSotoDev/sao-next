"use client";

import { useState } from "react";
import Image from "next/image";

type Imagen = {
    src: string;
    titulo: string;
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
                { src: "/images/beach.jpg", titulo: "Decoración elegante" },
                { src: "/images/beach.jpg", titulo: "Ceremonia" },
                { src: "/images/beach.jpg", titulo: "Recepción" }
            ]
        },
        {
            nombre: "salon",
            label: "Salones",
            imagenes: [
                { src: "/images/beach.jpg", titulo: "Fiesta en la playa" },
                { src: "/images/beach.jpg", titulo: "Decoración temática" },
                { src: "/images/beach.jpg", titulo: "Ceremonia" },
                { src: "/images/beach.jpg", titulo: "Recepción" },
            ]
        },
        {
            nombre: "pinca",
            label: "Fincas",
            imagenes: [
                { src: "/images/beach.jpg", titulo: "Diversión total" },
                { src: "/images/beach.jpg", titulo: "Colores y juegos" }
            ]
        },
        {
            nombre: "playa",
            label: "Playas",
            imagenes: [
                { src: "/images/beach.jpg", titulo: "Ambiente dulce" },
                { src: "/images/beach.jpg", titulo: "Detalles únicos" }
            ]
        }
    ];

    const [categoriaActiva, setCategoriaActiva] = useState<Categoria>(categorias[0]);

    return (
        <section className="w-full mt-5 flex flex-col items-center bg-white text-black">

            {/* TITULO */}
            <div className="px-5 w-full flex justify-start items-center">
                <h4 className="text-3xl font-semibold tracking-wide">Lugares para ti</h4>
            </div>

            {/* FILTROS */}
            <div className="py-5 w-full px-4">

                {/* MOBILE */}
                <div className="block md:hidden">
                    <select
                        value={categoriaActiva.nombre}
                        onChange={(e) => {
                            const seleccionada = categorias.find(cat => cat.nombre === e.target.value);
                            if (seleccionada) setCategoriaActiva(seleccionada);
                        }}
                        className="min-w-[6rem] p-1 text-xl font-semibold rounded-lg focus:outline-none"
                    >
                        {categorias.map((cat) => (
                            <option key={cat.nombre} value={cat.nombre}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* DESKTOP */}
                <div className="hidden md:flex flex-wrap justify-center items-start gap-4">
                    {categorias.map((cat) => (
                        <button
                            key={cat.nombre}
                            onClick={() => setCategoriaActiva(cat)}
                            className={`px-4 py-2 rounded-full border transition ${
                                categoriaActiva.nombre === cat.nombre
                                    ? "bg-pink-600 text-white"
                                    : "bg-white text-black hover:bg-pink-100"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* SLIDER */}
            <div className="w-full pl-5 pb-10">
                <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide">

                    {categoriaActiva.imagenes.map((img, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] max-w-[250px] flex-shrink-0 snap-center"
                        >
                            <div className="relative w-full h-[250px] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                                <Image
                                    src={img.src}
                                    alt={img.titulo}
                                    fill
                                    className="object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            <p className="mt-3 ml-2 text-left text-md font-semibold">
                                {img.titulo}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}