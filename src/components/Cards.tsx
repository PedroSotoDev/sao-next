import Image from "next/image";

export default function Cards() {
    return (
        <section className="bg-white w-full px-5 pt-12 pb-12 flex flex-wrap gap-6 justify-center">

            <a href='/boda' className="relative w-full h-64 sm:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">
                
                <Image
                        className="z-0 object-cover" 
                        src="/images/quince/bodabb.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />

                <div className="absolute w-full h-full p-8 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-3xl text-[rgb(255,123,185)] font-semibold text-shadow mb-4">Planes de Boda</h3>
                    <p className="text-xl leading-relaxed text-shadow">Nuestros plaquetes cubren cada detalle de la planificación.</p>
                </div>

            </a>

            <a href='/quince' className="relative w-full h-64 sm:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">
                
                <Image
                        className="z-0 object-cover brightness-90" 
                        src="/images/quince/quince_verde.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />

                <div className="absolute w-full h-full p-8 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-3xl text-[rgb(255,123,185)] font-semibold mb-4">Fiesta de Quince</h3>
                    <p className="text-xl leading-relaxed">Nos encargamos de la decoración y el vestuario.</p>
                </div>

            </a>


            <a href='/infantil' className="relative w-full h-64 sm:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">
                
                <Image
                        className="z-0 object-cover brightness-90" 
                        src="/images/pinchos.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />

                <div className="absolute w-full h-full p-8 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-3xl text-[rgb(255,123,185)] font-semibold text-shadow mb-4">Fiesta Infantil</h3>
                    <p className="text-xl leading-relaxed text-shadow">Contamos con una selección exclusiva de lugares únicos.</p>
                </div>

            </a>

    </section>


    );
    }
