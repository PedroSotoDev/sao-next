"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
    { src: "/images/team.jpg", alt: "Equipo de Eventos Sao" },
    { src: "/images/gacebo.jpg", alt: "Ceremonia en gacebo" },
    { src: "/images/beach.jpg", alt: "Boda en la playa" },
];

const AUTOPLAY_MS = 5000;

export default function Slider() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const total = IMAGES.length;

    const goTo = useCallback((i: number) => setIndex(i), []);
    const next = useCallback(() => setIndex((p) => (p + 1) % total), [total]);
    const prev = useCallback(() => setIndex((p) => (p - 1 + total) % total), [total]);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(next, AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [next, paused]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [prev, next]);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 50) prev();
        else if (delta < -50) next();
        touchStartX.current = null;
    };

    return (
        <div
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg
                    sm:aspect-[16/10] lg:aspect-[4/3]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Galería de eventos"
        >
        {/* Slides */}
        <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
        >
            {IMAGES.map((img, i) => (
            <div key={img.src} className="relative min-w-full h-full">
                <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-black/30" />
            </div>
            ))}
        </div>

        {/* Botones */}
        <button
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center
                    rounded-full bg-white/25 text-white backdrop-blur-md transition
                    hover:bg-white/35 active:scale-95 sm:left-4 sm:h-12 sm:w-12"
        >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <button
            onClick={next}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center
                    rounded-full bg-white/25 text-white backdrop-blur-md transition
                    hover:bg-white/35 active:scale-95 sm:right-4 sm:h-12 sm:w-12"
        >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Contador móvil */}
        <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md sm:hidden">
            {index + 1} / {total}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5
                        rounded-full bg-black/35 px-3.5 py-2.5 backdrop-blur-md">
            {IMAGES.map((_, i) => (
            <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                aria-current={i === index}
                className={`rounded-full transition-all duration-300 ${
                i === index
                    ? "h-2.5 w-7 bg-white"
                    : "h-2.5 w-2.5 bg-white/50 hover:bg-white/80"
                }`}
            />
            ))}
        </div>
        </div>
    );
}