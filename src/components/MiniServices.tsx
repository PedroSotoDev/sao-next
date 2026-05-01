"use client";

import { useState } from "react";
import Image from "next/image";

type Servicio = {
    titulo: string;
    descripcion: string;
    detalle: string;
    img: string;
};

export default function MiniServices() {

    const services: Servicio[] = [
        { titulo: "Decoración premium", descripcion: "Diseños elegantes", detalle: "Creamos ambientes únicos adaptados a cada pareja, cuidando cada detalle para lograr una experiencia visual inolvidable.", img: "/images/beach.jpg" },
        { titulo: "Fotografía profesional", descripcion: "Captura cada momento", detalle: "Equipo especializado en fotografía de eventos, capturando emociones reales con estilo artístico y moderno.", img: "/images/beach.jpg" },
        { titulo: "Catering exclusivo", descripcion: "Experiencia gastronómica", detalle: "Menús personalizados con opciones gourmet, adaptados a diferentes gustos y estilos de celebración.", img: "/images/beach.jpg" },
        { titulo: "Iluminación LED", descripcion: "Ambiente visual moderno", detalle: "Iluminación dinámica que transforma cualquier espacio en una experiencia visual atractiva.", img: "/images/beach.jpg" },
    ];

    const [preview, setPreview] = useState<Servicio | null>(null);

    return (
        <section className="w-full  mx-auto px-4 flex flex-col gap-6 text-black">

            <h3 className="text-3xl md:text-4xl font-semibold tracking-wide">
                Servicios
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                {services.map((srv, i) => (
                    <div
                        key={i}
                        onClick={() => setPreview(srv)}
                        className="flex gap-3 items-center bg-black/10 hover:bg-black/15 transition rounded-xl p-3 cursor-pointer"
                    >

                        <div className="w-14 h-14 relative flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                                src={srv.img}
                                alt={srv.titulo}
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                quality={40}
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">{srv.titulo}</span>
                            <span className="text-xs text-black/60">{srv.descripcion}</span>
                        </div>

                    </div>
                ))}

            </div>

            {preview && (
                <div onClick={() => setPreview(null)} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">

                    <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md h-[65vh] rounded-2xl overflow-hidden">

                        <Image
                            src={preview.img}
                            alt={preview.titulo}
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            quality={80}
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"/>

                        <button
                            onClick={() => setPreview(null)}
                            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur text-white text-lg hover:bg-black/70 transition"
                        >
                            ×
                        </button>

                        <div className="absolute bottom-0 left-0 p-5 flex flex-col gap-2">
                            <h4 className="text-white text-xl font-semibold">{preview.titulo}</h4>
                            <p className="text-white/80 text-sm leading-relaxed">{preview.detalle}</p>
                        </div>

                    </div>

                </div>
            )}

            <div className="w-full flex justify-center mt-4"> 
                <a className="px-6 py-3 rounded-xl bg-rose-200 text-rose-600 font-medium tracking-wide hover:bg-rose-300 transition-all duration-300" href="servicios">
                    Más Servicios
                </a>
            </div>

        </section>
    );
}