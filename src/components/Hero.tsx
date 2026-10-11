import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
    title: string;
    text: string;
    bg: string;
    eyebrow?: string;
    ctaLabel?: string;
    ctaHref?: string;
}

export default function Hero({title,text,bg,eyebrow = "Eventos Sao · Bodas y celebraciones en Cuba",ctaLabel = "Planea tu evento",ctaHref = "/contacto",}: HeroProps) {
    return (
        <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden sm:min-h-[90vh]">
        {/* Imagen de fondo */}
        <Image
            src={bg}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
        />

        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        {/* Contenido */}
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-20 text-center sm:px-8">
            {/* Eyebrow */}
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-rose-200 sm:text-sm">
            {eyebrow}
            </p>

            {/* Título */}
            <h1 className="mb-6 max-w-3xl text-3xl font-semibold leading-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            {title}
            </h1>

            {/* Subtítulo */}
            <p className="mb-9 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
            {text}
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Link
                href={ctaHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E11D74] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#c11565] hover:shadow-xl sm:text-base"
            >
                {ctaLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:text-base"
            >
                Ver servicios
            </Link>
            </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
            <ChevronDown className="h-6 w-6" />
        </div>
        </section>
    );
}