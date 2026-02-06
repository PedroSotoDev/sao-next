"use client";
import { useState } from "react";

export default function Slider() {

    const images = [
        "/images/beach.jpg",
        "/images/gacebo.jpg",
        "/images/beach.jpg",
        "/images/beach.jpg"
    ];

    const [index, setIndex] = useState(0);

    const prev = () => setIndex(index === 0 ? images.length - 1 : index - 1);
    const next = () => setIndex(index === images.length - 1 ? 0 : index + 1);

    return (

        <section className="w-full px-4 my-12 flex flex-col items-center">

            <div className="w-full overflow-hidden rounded-xl shadow-lg h-[350px] bg-cover bg-center flex justify-between items-center" style={{ backgroundImage: `url(${images[index]})` }}>

                <button onClick={prev} className="h-full w-[40%] text-shadow text-2xl font-bold text-[rgb(124,124,124)]">
                    ‹
                </button>

                <button onClick={next} className="h-full w-[40%] text-shadow text-2xl font-bold text-[rgb(131,131,131)]">
                    ›
                </button>

            </div>

            <div className="flex justify-around items-center gap-3 mt-2 px-2 h-4 w-26 rounded-xl  bg-[rgb(240,240,240)]">

                {images.map((_, i) => (
                    <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i === index ? "bg-[rgb(85,85,85)]" : "bg-[rgb(158,158,158)]"}`}></button>
                ))}

            </div>

        </section>
    );
}
