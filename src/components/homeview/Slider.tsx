"use client";
import { useState } from "react";
import Image from "next/image";

export default function Slider() {

    const images = [
        "/images/beach.jpg",
        "/images/gacebo.jpg",
        "/images/beach.jpg",
        "/images/gacebo.jpg"
    ];

    const [index, setIndex] = useState(0);

    const prev = () => setIndex(index === 0 ? images.length - 1 : index - 1);
    const next = () => setIndex(index === images.length - 1 ? 0 : index + 1);

    return (

        <section className="w-full px-4 my-12 flex flex-col items-center">

            <div className="relative w-full h-[350px] overflow-hidden rounded-xl shadow-lg">

                <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>

                    {images.map((src, i) => (
                        <div key={i} className="relative min-w-full h-full">
                            <Image
                                src={src}
                                alt="fotografia de estilo"
                                fill
                                className="object-cover brightness-90"
                                priority={i === 0}
                            />
                        </div>
                    ))}

                </div>

                <button onClick={prev} className="absolute left-0 top-0 h-full w-[40%] text-shadow text-2xl font-bold text-white">
                    ‹
                </button>

                <button onClick={next} className="absolute right-0 top-0 h-full w-[40%] text-shadow text-2xl font-bold text-white">
                    ›
                </button>

            </div>

            <div className="flex justify-around items-center gap-3 mt-3 px-3 h-4 rounded-xl bg-[rgb(240,240,240)]">

                {images.map((_, i) => (
                    <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i === index ? "bg-[rgb(85,85,85)]" : "bg-[rgb(158,158,158)]"}`}></button>
                ))}

            </div>

        </section>
    );
}