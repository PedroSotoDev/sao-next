import Image from "next/image";

export default function Cards() {
    return (
        <section className="bg-white w-full px-5 pt-12 pb-12 flex flex-wrap gap-6 justify-center">

            <a href='/boda' className="relative w-full h-40 sm:w-[48%] lg:w-[22%] sm:h-55 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">
                
                <Image
                        className="z-0 object-cover" 
                        src="/images/bodaC.png"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />

                <div className="absolute w-full h-full px-7 py-4 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-3xl font-semibold text-shadow mb-2">Planes de Boda</h3>
                    <p className="text-xl text-[rgb(255,208,230)] leading-relaxed text-shadow">| Bodas</p>
                    <p className="text-xl text-[rgb(255,208,230)] leading-relaxed text-shadow">| Aniversarios </p>
                </div>

            </a>

            <a href='/quince' className="relative w-full h-40 sm:w-[48%] lg:w-[22%] sm:h-55 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">
                
                <Image
                        className="z-0 object-cover brightness-90" 
                        src="/images/quincea.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />

                <div className="absolute w-full h-full px-7 py-4 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-3xl font-semibold mb-2">Fiesta de Quince</h3>
                    <p className="text-xl text-[rgb(255,208,230)] leading-relaxed">| Quinceañeras</p>
                    <p className="text-xl text-[rgb(255,208,230)] leading-relaxed">| Cumpleaños</p>
                </div>

            </a>


            <a href='/infantil' className="relative w-full h-40 sm:w-[48%] lg:w-[22%] sm:h-55 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">
                
                <Image
                        className="z-0 object-center brightness-90" 
                        src="/images/nina.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />

                <div className="absolute w-full h-full px-7 py-4 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-3xl font-semibold text-shadow mb-2">Infantiles</h3>
                    <p className="text-xl text-[rgb(255,208,230)] leading-relaxed text-shadow">| Baby Shower</p>
                    <p className="text-xl text-[rgb(255,208,230)] leading-relaxed text-shadow">| Gender Review</p>
                </div>

            </a>

            <a href='/infantil' className="relative w-full h-40 sm:w-[48%] lg:w-[22%] sm:h-55 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">
                
                <Image
                        className="z-0 object-cover brightness-90" 
                        src="/images/gala.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />

                <div className="absolute w-full h-full px-7 py-4 flex flex-col justify-start  text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-3xl text-shadow-md font-semibold text-shadow mb-2">Galas</h3>
                    <p className="text-xl text-[rgb(255,208,230)] leading-relaxed text-shadow">| Cena de Empresa</p>
                    <p className="text-xl text-[rgb(255,208,230)] leading-relaxed text-shadow">| Ceremonias</p>
                </div>

            </a>

    </section>


    );
    }
