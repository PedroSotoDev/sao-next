import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getImagePath } from "@/lib/image-path";

interface HistoryProps {
    title: string;
    text: string;
    img: string;
    categoria?: string;
    fecha?: string;
    href?: string;
}

export default function History({title,text,img,categoria = "Boda",fecha,href = "/historias",}: HistoryProps) {
    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
                {/* Imagen */}
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg lg:aspect-[5/4]">
                    <Image
                        src={getImagePath(img)}
                        alt={title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-800 backdrop-blur">
                        {categoria}
                    </span>

                </div>

                {/* Contenido */}
                <div className="flex flex-col">
                    {/* Eyebrow */}
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#E11D74]">
                        Historias recientes
                    </p>

                    {/* Fecha */}
                    {fecha && (
                        <div className="mb-4 flex items-center gap-2 text-xs text-gray-500 sm:text-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{fecha}</span>
                        </div>
                    )}

                    {/* Título */}
                    <h3 className="mb-4 text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                        {title}
                    </h3>

                    {/* Texto */}
                    <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                        {text}
                    </p>

                    {/* CTA */}
                    <Link
                        href={href}
                        className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E11D74] transition-colors hover:text-[#c11565] sm:text-base"
                    >
                        Ver más historias
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}