"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import type { Categoria, Servicio } from "@/data/servicios";

type Props = {
    categoria: Categoria;
    servicios: Servicio[];
    onSelect: (s: Servicio) => void;
    open: boolean;
    onToggle: () => void;
};

export default function ServiceCategorySection({categoria,servicios,onSelect,open,onToggle,}: Props) {
    
    const contentId = `categoria-${categoria
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`;

    return (
        <section className={`flex flex-col ${open ? "min-h-0 flex-1" : "shrink-0"}`}>
        
        {/* Header — siempre visible, nunca se comprime */}
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                aria-controls={contentId}
                className="group h-12 flex w-full shrink-0 items-center justify-between gap-4 py-4 text-left transition-colors hover:bg-gray-50/60 sm:py-5"
            >
                <div className="flex items-baseline gap-3">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#E11D74] sm:text-2xl">
                    {categoria}
                </h3>
                <span className="text-xs font-medium text-gray-400 sm:text-sm">
                    {servicios.length}
                </span>
                </div>

                <span className= "flex h-9 w-9 shrink-0 items-center justify-center transition-all duration-300 sm:h-10 sm:w-10">
                    {open ? (
                        <Minus className="text-[#E11D74] h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
                    ) : (
                        <Plus className="text-[#E11D74] h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
                    )}
                </span>
            </button>

            {/* Contenido — scrollable cuando está abierto */}
            <div
                id={contentId}
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                open
                    ? "min-h-0 flex-1 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className={`min-h-0 ${open ? "overflow-y-auto" : "overflow-hidden"}`}>
                <div className="grid grid-cols-1 gap-5 pb-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
                    {servicios.map((srv) => (
                    
                    <button
                    key={srv.slug}
                    type="button"
                    onClick={() => onSelect(srv)}
                    className="group/card relative h-40 w-full overflow-hidden rounded-2xl text-left shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:ring-[#E11D74]/30 sm:h-44"
                    >
                        <Image
                            src={srv.img}
                            alt={srv.titulo}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-all duration-300 group-hover/card:from-black/90 group-hover/card:via-black/50" />

                        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                            <h4 className="mb-0.5 text-base font-semibold leading-tight drop-shadow-sm sm:text-lg">
                                {srv.titulo}
                            </h4>
                            <p className="line-clamp-1 text-xs text-white/80 sm:text-sm">
                                {srv.descripcion}
                            </p>
                        </div>  

                    </button>

                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}