import Image from "next/image";

const styles = {
    container: "w-full px-6 flex flex-col sm:flex-row justify-between items-start bg-white text-black",
    tittle: "mx-10 text-3xl text-center font-bold",
    photos: "flex w-full mt-8 flex-col justify-center items-center",
    text:"px-6 pt-10 text-xl text-base leading-relaxed text-gray-800",

    ctaContainer: "sm:w-0 sm:invisible relative w-full h-[350px] mt-10",
    overlay: "absolute inset-0 bg-black/50 z-10",
    ctaContent: "absolute inset-0 z-20 flex flex-col justify-around items-center px-8 py-4",
    ctaText: " text-[1.35rem] md:text-xl max-w-2xl leading-relaxed",
    button: "mt-6 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
}

function StepLine() {
    return ( 
        <section className={styles.container}>
            <div className="px-4 mb-8 flex flex-col justify-between items-start">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
                    ¿Como trabajamos?
                </h3>
                <p className="text-gray-700 text-xl  leading-relaxed">
                    No trabajamos con paquetes cerrados, diseñamos cada evento desde cero
                    con los servicios que tú eliges.
                </p>           
            </div>

            <div className="w-full flex flex-col justify-around items-center">
                <h3 className="w-65 text-2xl font-semibold text-gray-900 mb-6 text-center">Todo comienza con una conversación</h3>
                <ol className="w-60 relative text-body border-s-8 border-pink-600">                  
                    <li className="mb-10 ms-7">            
                        <span className="absolute flex items-center justify-center w-7 h-7 bg-pink-600 text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">1</p>
                        </span>    
                        <h3 className="text-xl text-gray-900 font-medium leading-tight">Charla Inicial</h3>
                        <p className="text-md text-gray-800">Escuchamos tu idea y expectativas.</p>
                    </li>
                    <li className="mb-10 ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">2</p>
                        </span>
                        <h3 className="text-xl text-gray-900 font-medium leading-tight">Preparativos</h3>
                        <p className="text-md text-gray-800">Nos reunimos contigo para ver los detalles.</p>
                    </li>
                    <li className="mb-10 ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">3</p>
                        </span>
                        <h3 className="text-xl text-gray-900 font-medium leading-tight">Ensayos</h3>
                        <p className="text-md text-gray-800">Coordinamos servicios y contactamos proveedores.</p>
                    </li>
                    <li className="ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">⭐</p>
                        </span>
                        <h3 className="text-2xl text-gray-900 font-semibold">El Gran Dia</h3>
                    </li>
                </ol>
            </div>

            {/* <div className={styles.ctaContainer}>
                <Image
                    src="/images/bodag.jpg" 
                    alt="Servicios personalizados"
                    fill
                    className="object-cover brightness-40 saturate-50"
                    priority
                />

                <div className={styles.ctaContent}>
                    <p className={styles.ctaText}>
                        No trabajamos con paquetes cerrados, diseñamos cada evento desde cero
                        con los servicios que tú eliges.
                    </p>

                    <a className="px-6 py-3 rounded-xl bg-rose-200 text-rose-600 font-medium tracking-wide hover:bg-rose-300 transition-all duration-300" href="servicios">
                        Ver Servicios
                    </a>
                </div>
            </div> */}

        </section>
     );
}

export default StepLine;



                