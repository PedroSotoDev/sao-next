import Image from "next/image";

interface HeroProps {
    title: string;
    text: string;
    bg: string;
    img1: string;
    img2: string;
    img3: string;
}


export default function Hero({title,text,bg,img1,img2,img3}:HeroProps) {
	return (
		<section className="w-full mt-18 flex flex-col items-center bg-[rgb(255,255,255)] text-black">
            <div className="relative w-full h-[84vh] sm:h-[24rem] overflow-hidden">
                <Image
                    className="w-full h-full object-cover brightness-70"
                    src={bg}
                    alt="Foto de Evento"
                    width={800}
                    height={600}
                />
                <div className="absolute inset-0 p-5 pt-10 flex flex-col sm:flex-row justify-between bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_40%,rgba(255,255,255,0.6)_70%,rgba(255,255,255,1)_100%)] sm:bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_40%,rgba(255,255,255,0.6)_70%,rgba(255,255,255,1)_100%)]">
                    
                    <div>
                        <h3 className="text-4xl text-rose-400 font-semibold mb-4">{title}</h3>
                        <p className="text-xl text-[rgb(255,255,255)] text-shadow-[0rem_0rem_1rem_0rem_rgba(0,0,0,1)]">{text}</p>
                    </div>

                    <div className="w-full mt-4 flex justify-center sm:ml-4">
                        
                        <div className="flex flex-row gap-4 h-[16rem] sm:h-[18rem]">
                            
                            {/* Imagen grande */}
                            <div className="h-full w-[9rem] flex-shrink-0">
                            <Image
                                className="w-full h-full object-cover brightness-80 rounded-lg shadow-lg"
                                src={img1}
                                alt="Foto de Evento"
                                width={800}
                                height={1200}
                            />
                            </div>

                            {/* Columna derecha */}
                            <div className="h-full w-[9rem] sm:w-[9rem] md:w-[10rem] lg:w-[12rem] flex flex-col gap-4">
                            
                            <div className="flex-1">
                                <Image
                                className="w-full h-full object-cover brightness-80 rounded-lg shadow-lg"
                                src={img2}
                                alt="Foto de Evento"
                                width={800}
                                height={600}
                                />
                            </div>

                            <div className="flex-1">
                                <Image
                                className="w-full h-full object-cover brightness-80 rounded-lg shadow-lg"
                                src={img3}
                                alt="Foto de Evento"
                                width={800}
                                height={600}
                                />
                            </div>

                            </div>

                        </div>

                    </div>
                    <div className="w-full flex flex-row justify-center items-center mt-4"> 
                        <a className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 via-red-400 to-pink-500 text-white font-semibold tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">Paquetes y Servicios</a>
                    </div>
                </div>
            </div>
            
        </section>
	);
}

