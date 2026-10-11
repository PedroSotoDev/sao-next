"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "5355555555"; // sin +, sin espacios

export default function WaButton() {

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	// Autofocus al abrir
	useEffect(() => {
		if (open) {
			const t = setTimeout(() => textareaRef.current?.focus(), 50);
			return () => clearTimeout(t);
		}
	}, [open]);

	// Cerrar con Escape
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	// Bloquear scroll de fondo
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {document.body.style.overflow = "";};
	}, [open]);

	const handleSend = () => {
		const text = message.trim() || "Hola Eventos Sao 👋, me gustaría más información.";
		const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
		
		window.open(url, "_blank", "noopener,noreferrer");
		setOpen(false);
		setMessage("");
	};

	// Enter envía, Shift+Enter hace salto de línea
	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	return (

		<>
		{/* Botón flotante */}
		<button onClick={() => setOpen(true)} aria-label="Escribir por WhatsApp"
		className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
		>
			<span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
			<MessageCircle className="relative h-7 w-7" strokeWidth={2.2} />
		</button>

		{/* Modal respuesta rápida */}
		{open && (
			<div role="dialog" aria-modal="true" aria-label="Escribir mensaje por WhatsApp" onClick={() => setOpen(false)}
			className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
			>
				<div onClick={(e) => e.stopPropagation()}
				className="w-full max-w-sm overflow-hidden rounded-2xl bg-[#111B21] shadow-2xl ring-1 ring-white/10"
				>
					{/* Header */}
					<div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
						<div className="flex items-center gap-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
								<MessageCircle className="h-4 w-4 text-white" />
							</div>
							<div className="leading-tight">
								<p className="text-sm font-semibold text-white">Eventos Sao</p>
								<p className="text-[11px] text-green-400">en línea</p>
							</div>
						</div>

						<button onClick={() => setOpen(false)} aria-label="Cerrar"
						className="rounded-full p-1.5 text-gray-400 transition hover:bg-white/10 hover:text-white"
						>
							<X className="h-4 w-4" />
						</button>
					</div>

					{/* Burbuja con mensaje sugerido */}
					<div className="px-4 pt-4 pb-2">
						<div className="relative max-w-[85%] rounded-2xl rounded-tl-sm bg-[#202C33] px-3 py-2 text-sm text-gray-200 shadow">
							Hola 👋 Cuéntanos sobre tu evento y te ayudamos a hacerlo
							inolvidable ✨
							<span className="absolute -left-1 top-0 h-3 w-3 rounded-bl-full bg-[#202C33]" />
						</div>
					</div>

					{/* Input + botón enviar */}
					<div className="flex items-end gap-2 p-3">
						<textarea
							ref={textareaRef}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							onKeyDown={handleKeyDown}
							rows={1}
							placeholder="Escribe un mensaje..."
							className="max-h-32 min-h-[44px] flex-1 resize-none rounded-2xl bg-[#2A3942] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none ring-1 ring-transparent transition focus:ring-[#25D366]/50"
						/>
						
						<button onClick={handleSend} aria-label="Enviar por WhatsApp"
						className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:bg-[#1eb958] active:scale-95 disabled:opacity-50"
						>
							<Send className="h-5 w-5" strokeWidth={2.2} />
						</button>

					</div>

					{/* Hint */}
					<p className="px-4 pb-3 text-center text-[11px] text-gray-500">
						Se abrirá WhatsApp con tu mensaje listo para enviar
					</p>
				</div>

			</div>
		)}
		</>
	);
}