import Image from "next/image";


const styles={
    header: "w-full h-[90vh] mt-18  relative flex flex-col items-center justify-between text-white bg-white bg-cover bg-center bg-no-repeat text-black sm:h-[90vh]",

}

export default function HeroSection() {

    return (
        <header className={styles.header}>
            
            <Image
                    className="z-0 w-full h-full object-cover brightness-90" 
                    src="/images/beach.jpg"
                    alt="Foto de Evento" 
                    width={800} 
                    height={600}
                    priority={false}
            />

            <div className="absolute inset-0 bg-[#0000009c] not-visited:w-full h-full flex flex-col items-center justify-center">       
                <h1 className="w-full mt-4 px-4 text-[2.4rem] font-semibold text-shadow-[0rem_0rem_1rem_rgba(0,0,0,1)] sm:text-6xl" style={{fontFamily:  "playfair"}}>
                    Organización y Decoración de Eventos y Bodas en Cuba
                </h1>
            </div>   
        </header>
    );
}
