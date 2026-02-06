import Image from "next/image";


const styles={
    header: "w-full h-[90vh] mt-18  relative flex flex-col items-center justify-between text-white bg-white bg-cover bg-center bg-no-repeat text-black sm:h-[90vh]",
    icon: "w-40",

}

export default function HeroSection() {

    return (
        <header className={styles.header} style={{backgroundImage: "url('/images/beach.jpg')"}}>
            <div className="w-full h-full backdrop-brightness-40 flex flex-col items-center justify-center">
                
                <div className="w-full pt-12 pl-4 pr-6 mb-24 flex flex-col items-start justify-left">   
                    <h1 className="w-full mt-4 text-[2.4rem] font-semibold text-shadow-[0rem_0rem_1rem_rgba(0,0,0,1)] sm:text-6xl" style={{fontFamily:  "playfair"}}>Organización y Decoración de Eventos y Bodas en Cuba</h1>
                </div>

                {/* <div className="w-full pb-14 px-6 flex flex-col justify-center items-center" >
                    
                        <p className="text-2xl mx-8  font-medium text-center text-shadow-[0rem_0rem_1rem_rgba(0,0,0,1)]" style={{fontFamily:  "playfair"}}>¿No sabes por donde empezar?</p>
                        <button style={{fontFamily:  "playfair"}} className="min-h-16 text-2xl mt-12 mb-12 px-4  border-3 shadow-2xl text-center text-white text-shadow-[0rem_0rem_1rem_rgba(0,0,0,1)] sm:text-3xl" type="button">Planemos Juntos</button>
                   
                </div>  */}
            </div>   
        </header>
    );
}
