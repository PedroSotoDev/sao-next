import Image from "next/image";

export default function CardSecction() {
    return (
        <section className="bg-white w-full px-4 pt-12 pb-12 flex flex-wrap gap-6 justify-center">

            <div className="relative w-full h-64 sm:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">
                
                <Image
                        className="z-0 object-cover brightness-90" 
                        src="/images/pinchos.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />

                <div className="absolute w-full h-full p-8 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-3xl text-[rgb(255,123,185)] font-semibold mb-4">Decoración y Vestuario</h3>
                    <p className="text-xl leading-relaxed">Nos encargamos de la decoración temática y la selección de vestuario.</p>
                </div>

            </div>

            <div className="relative w-full h-64 sm:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">
                
                <Image
                        className="z-0 object-cover brightness-90" 
                        src="/images/pinchos.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />

                <div className="absolute w-full h-full p-8 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-3xl text-[rgb(255,123,185)] font-semibold text-shadow mb-4">Gestión de Bodas</h3>
                    <p className="text-xl leading-relaxed text-shadow">Nuestro plan ntegral de bodas cubre cada detalle de planificación.</p>
                </div>

            </div>

            <div className="relative w-full h-64 sm:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">
                
                <Image
                        className="z-0 object-cover brightness-90" 
                        src="/images/pinchos.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />

                <div className="absolute w-full h-full p-8 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-3xl text-[rgb(255,123,185)] font-semibold text-shadow mb-4">Lugares Exclusivos</h3>
                    <p className="text-xl leading-relaxed text-shadow">Contamos con una selección exclusiva de lugares únicos.</p>
                </div>

            </div>

    </section>


    );
    }
