"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { href: "/", label: "Inicio" },
    { href: "/boda", label: "Bodas" },
    { href: "/quince", label: "Quinceañeras" },
    { href: "/infantil", label: "Infantiles" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);

    // Cerrar con Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Bloquear scroll de fondo cuando el menú mobile está abierto
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {document.body.style.overflow = "";};
    }, [open]);

    return (
        <>
        {/* 📏 Espaciador para que el contenido no quede bajo el nav fijo */}
        <header className="fixed top-0 left-0 z-50 h-16 w-full border-b border-neutral-100 bg-white/90 backdrop-blur-md md:h-16">
            <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
            
                {/* Logo + hamburguesa (mobile) */}
                <div className="flex items-center gap-2">
                    <button
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={open}
                    className="rounded-full p-2 text-neutral-700 transition hover:bg-neutral-100 md:hidden"
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    <Link href="/" className="flex items-center" aria-label="Ir al inicio">
                        <Image
                            src="/icon/logo.png"
                            alt="Eventos Sao"
                            width={160}
                            height={60}
                            priority
                            className="h-6 w-auto md:h-10"
                        />
                    </Link>
                </div>

                {/* Links (desktop) */}
                <ul className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                        <Link
                        href={link.href}
                        className="relative text-sm font-medium text-neutral-700 transition-colors hover:text-[#E11D74]
                                    after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#E11D74]
                                    after:transition-all after:duration-300 hover:after:w-full"
                        >
                        {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>

                {/* <Link
                href="/contacto"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#E11D74] 
                            px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all 
                            hover:bg-[#c11565] hover:shadow-md 
                            sm:px-5 sm:py-2.5 sm:text-sm"
                >
                <span className="sm:inline">Planea tu evento</span>

                </Link> */}
            </nav>
        </header>

        {/* 📱 Menú mobile */}
        {/* Overlay */}
        <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden="true"
        />

        {/* Panel lateral */}
        <aside
            className={`fixed top-0 left-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
            open ? "translate-x-0" : "-translate-x-full"
            }`}
            aria-hidden={!open}
        >
            <div className="flex h-full flex-col">
            {/* Header del panel */}
            <div className="flex h-16 items-center justify-between border-b border-neutral-100 px-4">
                <Image
                src="/icon/logo.png"
                alt="Eventos Sao"
                width={120}
                height={45}
                className="h-9 w-auto"
                />
                <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="rounded-full p-2 text-neutral-700 transition hover:bg-neutral-100"
                >
                <X className="h-6 w-6" />
                </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                    <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-3 text-lg font-medium text-neutral-800 transition hover:bg-[#E11D74]/5 hover:text-[#E11D74]"
                    >
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>

            {/*footer del panel */}
            <div className="border-t border-neutral-100 p-6">
                <p className="mt-4 text-center text-xs text-neutral-500">
                © {new Date().getFullYear()} <span className="font-semibold">Eventos Sao</span>
                </p>
            </div>
            </div>
        </aside>
        </>
    );
}