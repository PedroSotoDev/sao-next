import Polaroid from "./Polaroid";
import Image from "next/image";
import Slider from "./Slider";

const styles={
    container: "w-full flex flex-col justify-between items-center bg-white text-black",
    tittle: "mx-10 text-3xl text-center font-bold",
    photos: "flex w-full mt-8 flex-col justify-center items-center",
}

function About() {
    return ( 
        <section className={styles.container}>

            <div className="mx-8 mb-8 flex flex-col justify-between items-start">
                <h3 className="text-3xl mb-6 text-center font-bold" style={{fontFamily:  "playfair"}}>
                    Todo empieza con una conversación:
                </h3>
                           
            </div>

            <div className="w-full flex flex-row justify-around items-center">

                <ol className="w-60 relative text-body border-s-8 border-pink-600">                  
                    <li className="mb-10 ms-7">            
                        <span className="absolute flex items-center justify-center w-7 h-7 bg-pink-600 text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">1</p>
                        </span>    
                        <h3 className="text-xl font-medium leading-tight">Charla Inicial</h3>
                        <p className="text-md">Escuchamos tu idea y expectativas.</p>
                    </li>
                    <li className="mb-10 ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">2</p>
                        </span>
                        <h3 className="text-xl font-medium leading-tight">Preparativos</h3>
                        <p className="text-md">Nos reunimos contigo para ver los detalles.</p>
                    </li>
                    <li className="mb-10 ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">3</p>
                        </span>
                        <h3 className="text-xl font-medium leading-tight">Ensayos</h3>
                        <p className="text-md">Coordinamos servicios y contactamos proveedores.</p>
                    </li>
                    <li className="ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">⭐</p>
                        </span>
                        <h3 className="text-2xl font-semibold">El Gran Dia</h3>
                    </li>
                </ol>
            </div>

            
            <Slider/>


            <div className="flex flex-col justify-between items-start">
                <h3 className={styles.tittle} style={{fontFamily:  "playfair"}}>
                    Sobre Nosotros
                </h3>
                <p className="mx-10 mb-14 mt-10 text-xl">
                    Contamos con un apasionado equipo de <span className="text-pink-600 font-bold ">expertos</span> y una red de proveedores de <span className="text-pink-600 font-bold ">confianza</span> para ofrecerte un servicio coordinado, con <span className="text-pink-600 font-bold ">garantia</span> y <span className="text-pink-600 font-bold">sin preocupaciones</span>.
                </p>
            </div>

            <Image
                    className="w-full mb-10 object-cover brightness-90" 
                    src="/images/port.jpg"
                    alt="fotografia de estilo" 
                    width={800} 
                    height={600}
                    priority={false}
            />

            <div className="flex flex-col justify-between items-start">
                <h3 className={styles.tittle} style={{fontFamily:  "playfair"}}>
                    Nuestro Lider
                </h3>
                <p className="mx-10 mb-14 mt-10 text-xl">
                    Nuestro lider y fundador <span className="text-black font-semibold ">Jorge Sao</span> es reconocido chef y experto en decoración, su <span className="text-pink-600 font-bold ">doble talento</span> es nuestro sello único.
                </p>
            </div>
           
            <div className={styles.photos}>    
                <Polaroid src="/images/cumple.jpg" dynamicStyle="w-56 mb-10 -rotate-3"/>
                <Polaroid src="/images/gacebo.jpg" dynamicStyle="w-56 mb-10 rotate-4"/>
                <Polaroid src="/images/piscina.jpg" dynamicStyle="w-56 mb-10 -rotate-2"/>  
            </div>

        </section>
     );
}

export default About;



                