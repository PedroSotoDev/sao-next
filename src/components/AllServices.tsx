"use client";

import { useState, useMemo, useCallback } from "react";
import ServiceModal from "./modales/ServiceModal";
import ServiceCategorySection from "./ServiceCategorySection";
import servicios, { CATEGORIAS, type Categoria, type Servicio } from "@/data/servicios";


export default function AllServices() {
	const [preview, setPreview] = useState<Servicio | null>(null);

	// ✅ Una sola categoría abierta a la vez
	const [openCategory, setOpenCategory] = useState<Categoria | null>(
		() => CATEGORIAS[0]
	);

	const toggleCategory = useCallback((cat: Categoria) => {
		setOpenCategory((prev) => (prev === cat ? null : cat));
	}, []);

	// Agrupar servicios por categoría (manteniendo orden de CATEGORIAS)
	const grouped = useMemo(() => {
		return CATEGORIAS.map((cat) => ({
		cat,
		items: servicios.filter((s) => s.categoria === cat),
		})).filter((g) => g.items.length > 0);
	}, []);

	return (
		<section className="mx-auto mt-12 flex h-[calc(100vh-2rem)] w-full max-w-5xl flex-col px-4 py-6 sm:px-6 sm:py-10">
			{/* Header — shrink-0 evita que se comprima */}
			<div className="mx-auto mb-6 max-w-2xl shrink-0 text-center sm:mb-10">
				<h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">
				Nuestros servicios
				</h2>
				<p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
				Diseñamos cada evento a la medida.{" "}
				<span className="font-medium text-gray-800">
					Tú eliges, nosotros lo hacemos realidad.
				</span>
				</p>
			</div>

			{/* Acordeón — orden fijo de CATEGORIAS */}
			<div className="flex min-h-0 flex-1 flex-col border-t border-gray-200">
				{grouped.map(({ cat, items }) => (
				<ServiceCategorySection
					key={cat}
					categoria={cat}
					servicios={items}
					onSelect={setPreview}
					open={openCategory === cat}
					onToggle={() => toggleCategory(cat)}
				/>
				))}
			</div>

			<ServiceModal service={preview} onClose={() => setPreview(null)} />
		</section>
	);
}