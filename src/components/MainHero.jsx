"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const styles = {
    header: "w-full h-[90vh] mt-18 relative flex flex-col items-center justify-between text-white bg-white bg-cover bg-center bg-no-repeat text-black sm:h-[90vh]",
}

export default function MainHero() {
    const [index, setIndex] = useState(0)
    const [currentSrc, setCurrentSrc] = useState('/images/beach.jpg')
    const imagenes = [
        '/images/beach.jpg',
        '/images/bodaC.jpg', 
        '/images/beach.jpg', 
        '/images/bodaC.jpg'
        ]

    useEffect(() => {
        setTimeout(() => {
            setIndex((prev) => (prev + 1) % imagenes.length)
        }, 4000)
        setCurrentSrc(imagenes[index])
    }, [index])


    return (
        <header className={styles.header}>
            <div className="absolute inset-0">
                <Image
                    src={currentSrc}
                    alt="Foto de Evento"
                    fill
                    priority={false}
                    className={`object-cover brightness-90 saturate-120 transition-normal duration-5000 `}
                />
            </div>

            <div className="absolute inset-0 bg-[#0000009c] flex flex-col items-center justify-center">
                <h1 className="w-full mt-4 px-4 text-[2.4rem] font-semibold text-shadow-[0rem_0rem_1rem_rgba(0,0,0,1)] sm:text-6xl" style={{ fontFamily: "playfair" }}>
                    Organización y Decoración de <span className="text-rose-400">Eventos</span> y Bodas en Cuba
                </h1>
            </div>
        </header>
    );
}