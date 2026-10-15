"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceModal from "./modales/ServiceModal";
import servicios, { type Servicio } from "@/data/servicios";
import { getImagePath } from "@/lib/image-path";

// Filtra los destacados y limita a 4 máximo
const SERVICIOS_DESTACADOS = servicios.filter((s) => s.destacado).slice(0, 4);

export default function MiniServices() {
	const [preview, setPreview] = useState<Servicio | null>(null);

	return (
		<section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
		{/* Header */}
		<div className="mb-8 sm:mb-10">
			<h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
			Nuestros servicios
			</h2>
			<p className="mt-2 max-w-2xl text-base text-gray-600 sm:text-lg">
			Todo lo que necesitas para un evento inolvidable, en un solo lugar.
			</p>
		</div>

		{/* Grid de cards */}
		<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
			{SERVICIOS_DESTACADOS.map((srv) => (
			<button
				key={srv.slug}
				type="button"
				onClick={() => setPreview(srv)}
				className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E11D74]/30 hover:shadow-md sm:p-4"
			>
				{/* Imagen */}
				<div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
				<Image
					src={getImagePath(srv.img)}
					alt={srv.titulo}
					fill
					sizes="80px"
					className="object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				</div>

				{/* Texto */}
				<div className="min-w-0 flex-1">
				<h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-[#E11D74] sm:text-lg">
					{srv.titulo}
				</h3>
				<p className="mt-0.5 line-clamp-2 text-sm text-gray-500">
					{srv.descripcion}
				</p>
				</div>

				{/* Flecha */}
				<ArrowRight className="h-5 w-5 shrink-0 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#E11D74]" />
			</button>
			))}
		</div>

		{/* CTA */}
		<div className="mt-8 flex justify-center sm:mt-10">
			<Link
			href="/servicios"
			className="inline-flex items-center justify-center rounded-full bg-[#E11D74] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#c11565] hover:shadow-md sm:text-base"
			>
			Ver todos los servicios
			</Link>
		</div>

		{/* Modal compartido */}
		<ServiceModal service={preview} onClose={() => setPreview(null)} />
		</section>
	);
}