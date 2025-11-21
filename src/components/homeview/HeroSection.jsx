import Image from "next/image";
import Polaroid from "./Polaroid";

const styles={
    header: "w-full h-100 mt-14 relative flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat sm:min-h-screen",
    logoWrapper: "w-50 h-auto flex flex-col justify-center items-center text-[rgb(255,220,0)] text-shadow-sm text-md font-bold",
    logo: "w-full h-auto brightness-160",
    btn: "relative z-5 bg-pink-600 hover:bg-pink-500 text-white font-semibold px-4 py-2 mt-8 rounded-full shadow-md transition-all duration-300 text-lg",
    waveTop: "w-full h-24 rotate-180",
    waveBottom: "w-full h-24",

}

export default function HeroSection() {

    return (
        <header className={styles.header} style={{backgroundImage: "url('/images/playa.jpg')"}}>
            
                <svg 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                    className={styles.waveTop}
                > 
                    <path 
                    d="M0,60 C150,30 350,90 500,50 C650,10 850,70 1200,30 L1200,120 L0,120 Z" 
                    className="opacity-50"
                    fill="rgb(250,250,250)"
                    ></path>

                    <path 
                    d="M0,80 C200,60 400,100 600,70 C800,40 1000,80 1200,60 L1200,120 L0,120 Z" 
                    className="opacity-60"
                    fill="rgb(250,250,250)"
                    ></path>

                    <path 
                    d="M0,90 C300,70 600,110 1200,90 L1200,120 L0,120 Z" 
                    fill="rgb(250,250,250)"
                    ></path>
                </svg>

                <div className={styles.logoWrapper}>
                    <Image 
                        className={styles.logo} 
                        src="/icon/logo.png"
                        alt="Logo" 
                        width={400} 
                        height={400}
                        priority={false}
                    />
                </div>

                <button className={styles.btn} type="button">
                    Planear tu Evento
                </button>

                <svg 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                    className={styles.waveBottom}
                > 
                    <path 
                    d="M0,60 C150,30 350,90 500,50 C650,10 850,70 1200,30 L1200,120 L0,120 Z" 
                    className="opacity-50"
                    fill="rgb(250,250,250)"
                    ></path>

                    <path 
                    d="M0,80 C200,60 400,100 600,70 C800,40 1000,80 1200,60 L1200,120 L0,120 Z" 
                    className="opacity-60"
                    fill="rgb(250,250,250)"
                    ></path>

                    <path 
                    d="M0,90 C300,70 600,110 1200,90 L1200,120 L0,120 Z" 
                    fill="rgb(250,250,250)"
                    ></path>
                </svg>
            
        </header>
    );
}
