"use client";

import { useState } from "react";
import Image from "next/image";
import servicios from "@/data/servicios"

type Servicio = {
  titulo: string;
  descripcion: string;
  detalle: string;
  img: string;
};

export default function AllServices() {
  const services: Servicio[] = servicios

  const [preview, setPreview] = useState<Servicio | null>(null);

  return (
    <section className="w-full max-w-6xl mt-16 mx-auto px-4 py-12 flex flex-col gap-10 text-black">

      {/* HEADER */}
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-wide">
          Todos nuestros servicios
        </h2>
        <p className="text-black/60 max-w-xl mx-auto text-sm md:text-base">
          Diseñamos cada evento a medida. Tú eliges los servicios, nosotros creamos la experiencia.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {services.map((srv, i) => (
          <div
            key={i}
            onClick={() => setPreview(srv)}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-black/5 hover:bg-black/10 transition-all duration-300"
          >

            {/* IMAGE */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={srv.img}
                alt={srv.titulo}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col gap-1">
              <h4 className="text-base font-semibold">{srv.titulo}</h4>
              <p className="text-sm text-black/60" style={{ whiteSpace: 'pre-line' }}>{srv.descripcion}</p>
            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg h-[70vh] rounded-2xl overflow-hidden"
          >

            <Image
              src={preview.img}
              alt={preview.titulo}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <button
              onClick={() => setPreview(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white text-xl hover:bg-black/70 transition"
            >
              ×
            </button>

            <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-3">
              <h3 className="text-white text-2xl font-semibold">
                {preview.titulo}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                {preview.detalle}
              </p>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}