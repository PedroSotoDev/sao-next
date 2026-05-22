import Image from "next/image";

interface HeroProps {
    title: string;
    text: string;
    bg: string;
}


export default function Hero({title,text,bg}:HeroProps) {
	return (
		<section className="w-full mt-18 flex flex-col items-center bg-[rgb(255,255,255)] text-black">
            <div className="relative w-full h-[50vh] sm:h-[24rem] overflow-hidden">
                <Image
                    className="w-full h-full object-cover brightness-70"
                    src={bg}
                    alt="Foto de Evento"
                    width={800}
                    height={600}
                />
                <div className="absolute inset-0 p-5 pt-10 flex flex-col sm:flex-row justify-left bg-gradient-to-b from-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.1)] shadow-[inset_0_-10px_15px_-10px_rgba(225,225,225,1)]">
                    
                    <div>
                        <h3 className="text-4xl text-rose-400 font-semibold mb-6">{title}</h3>
                        <p className="text-xl mb-8 text-[rgb(255,255,255)] text-shadow-[0rem_0rem_1rem_0rem_rgba(0,0,0,1)]">{text}</p>
                    </div>
                    <div className="w-full flex flex-row justify-center items-center">
                        <a className="px-7 py-[0.6rem] rounded-xl bg-gradient-to-r from-rose-500 via-red-400 to-pink-500 text-white font-semibold tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
                            Planea Ahora
                        </a>    
                    </div>
                    
                </div>
            </div>
            
        </section>
	);
}

