"use client";
import Image from 'next/image';
import { useState } from "react";

export default function Navbar() {
  	const [open, setOpen] = useState(false);

  	return (
    	<nav className="relative w-full h-18 flex items-center justify-between px-4 bg-white shadow">

            <div className="flex items-center justify-center">
                <button onClick={() => setOpen(!open)} className="focus:outline-none">
                    <svg className="w-7 h-7"fill="none"stroke="#525252"strokeWidth={2}viewBox="0 0 24 24">	
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
                        )}
                    </svg>
                </button>

                <Image className="w-20 ml-4" src="/icon/logo.png" alt="Logo" width={400} height={400} priority={false} />
            </div>

            <div className="h-9 w-27 bg-gradient-to-r rounded from-[rgb(255,0,76)] via-[rgb(255,174,0)] to-[rgb(255,136,0)] flex items-center justify-center">
                <button className="h-8 w-26 text-xs rounded font-semibold shadow-[0px_0px_15px_0px_rgb(255,0,76)] text-center text-white bg-[rgb(39,0,12)]" type="button">
                        Planea ahora
                </button>
            
            </div>            

            <div className={`absolute z-100 top-full left-0 w-full h-[100vh] bg-[rgba(0,0,0,0)] flex flex-row justify-between gap-6 transition-all duration-300 ease-out origin-left text-black text-lg font-medium
                    ${open
                        ? "opacity-100 scale-x-100 translate-x-0"
                        : "opacity-0 scale-x-0 -translate-x-4 pointer-events-none"
                    }
                `}
            >
                <div className="px-8 py-4 h-full w-[85%] flex flex-col items-start bg-white text-xl">
                    <a className="font-semibold text-[rgb(255,0,76)]">Inicio</a>
                    <a>Galería</a>
                    <a>Contacto</a>   
                    <br/>
                    <p>©2026 <span className="font-semibold">Eventos Sao</span> | Todos los derechos reservados</p>
                </div>

            </div>
        </nav>
  );
}
