"use client";

import Link from "next/link";
import { MessageCircle, Calendar, Sparkles, PartyPopper } from "lucide-react";

const STEPS = [
    {
        icon: MessageCircle,
        title: "Charla inicial",
        description: "Escuchamos tu idea, expectativas y presupuesto.",
    },
    {
        icon: Calendar,
        title: "Preparativos",
        description: "Nos reunimos para definir cada detalle del evento.",
    },
    {
        icon: Sparkles,
        title: "Ensayos y coordinación",
        description: "Contactamos proveedores y afinamos la logística.",
    },
    {
        icon: PartyPopper,
        title: "El gran día",
        description: "Tú disfrutas, nosotros nos encargamos del resto.",
        highlight: true,
    },
];

export default function StepLine() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* Encabezado */}
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">
                ¿Cómo trabajamos?
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                No trabajamos con paquetes cerrados. Diseñamos cada evento desde cero
                con los servicios que tú eliges.
            </p>
            </div>

            {/* Bloque "Todo comienza con una conversación" */}
            <div className="mx-auto max-w-2xl">
            <p className="mb-10 text-center text-xl font-semibold text-[#E11D74] sm:text-2xl">
                Todo comienza con una conversación
            </p>

            {/* Timeline */}
            <ol className="relative border-l-2 border-[#E11D74]/30 ml-4 space-y-8 sm:space-y-10">
                {STEPS.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === STEPS.length - 1;

                return (
                    <li key={step.title} className="relative pl-8 sm:pl-10">
                    {/* Círculo numerado / icono */}
                    <span
                        className={`absolute -left-[18px] top-0 flex h-9 w-9 items-center justify-center rounded-full ring-4 ring-white
                        ${isLast ? "bg-[#E11D74]" : "bg-white border-2 border-[#E11D74]"}`}
                    >
                        <Icon
                        className={`h-4 w-4 ${isLast ? "text-white" : "text-[#E11D74]"}`}
                        strokeWidth={2.2}
                        />
                    </span>

                    {/* Contenido */}
                    <div className={isLast ? "pt-0.5" : ""}>
                        <h3
                        className={`mb-1 leading-tight ${
                            isLast
                            ? "text-xl font-bold text-[#E11D74] sm:text-2xl"
                            : "text-lg font-semibold text-gray-900 sm:text-xl"
                        }`}
                        >
                        {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {step.description}
                        </p>
                    </div>
                    </li>
                );
                })}
            </ol>

            {/* CTA */}
            <div className="mt-12 flex flex-col items-center gap-4 sm:mt-16">
                <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full bg-[#E11D74] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#c11565] hover:shadow-md sm:text-base"
                >
                Ver servicios
                </Link>
                <p className="text-xs text-gray-500 sm:text-sm">
                Sin compromiso · Respuesta en menos de 24h
                </p>
            </div>
            </div>
        </div>
        </section>
    );
}