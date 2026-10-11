"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Check } from "lucide-react";
import type { Servicio } from "@/data/servicios";

type Props = {
    service: Servicio | null;
    onClose: () => void;
};

export default function ServiceModal({ service, onClose }: Props) {
    useEffect(() => {
      if (!service) return;
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }, [service, onClose]);

    if (!service) return null;

    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={service.titulo}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl ring-1 ring-white/10"
        >
          {/* Imagen superior */}
          <div className="relative h-56 w-full sm:h-64">
            <Image
              src={service.img}
              alt={service.titulo}
              fill
              sizes="(max-width: 768px) 100vw, 512px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
          </div>

          {/* Cerrar */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70 active:scale-95"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Contenido */}
          <div className="relative -mt-8 px-6 pb-6 sm:px-8 sm:pb-8">
            {/* Categoría */}
            <span className="mb-3 inline-block rounded-full bg-[#E11D74]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E11D74]">
              {service.categoria}
            </span>

            <h3 className="mb-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              {service.titulo}
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-white/85 sm:text-base">
              {service.detalle}
            </p>

            {/* Beneficios */}
            {service.beneficios && service.beneficios.length > 0 && (
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/60">
                  Incluye
                </p>
                <ul className="flex flex-col gap-2">
                  {service.beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-white/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" strokeWidth={3} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}