import Polaroid from "./Polaroid";
import Image from "next/image";

const styles={
    container: "w-full py-10 pt-14 flex flex-col justify-between items-center bg-[rgb(250,250,250)] text-black",
    tittle: "mx-10 text-4xl text-center font-medium",
    photos: "hidden w-100 mt-8 flex-col justify-center items-center sm:flex",

}

function About() {
    return ( 
        <section className={styles.container}>
            <div className="flex flex-col justify-between items-start">
                <h3 className={styles.tittle} style={{fontFamily:  "playfair"}}>Planeamos Sin Estres</h3>
                <p className="mx-10 mb-14 mt-14 text-xl">Entendemos esa mezcla de <span className="text-pink-600 font-bold ">emocion</span> y <span className="text-pink-600 font-bold ">dudas</span> al planificar.  Por eso, te organizamos un <span className="text-pink-600 font-bold ">evento perfecto</span> para que disfrutes sin estres del <span className="text-pink-600 font-bold">mejor dia de tu vida</span>.</p>
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
                <h3 className={styles.tittle} style={{fontFamily:  "playfair"}}>El Lugar Ideal</h3>
                <p className="mx-10 mb-14 mt-14 text-xl">Trabajamos con una <span className="text-pink-600 font-bold ">selección exclusiva</span> de fincas, salones, costas y sitios únicos, adaptados a todos los <span className="text-pink-600 font-bold ">estilos</span> y <span className="text-pink-600 font-bold ">presupuestos</span>.</p>
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
                <h3 className="mx-8 mb-14 mt-6 text-3xl text-center font-medium" style={{fontFamily:  "playfair"}}>Estaremos contigo en cada paso</h3>
                
            </div>

            <div className="w-full flex flex-row justify-around items-center">

                <ol className="relative text-body border-s-8 border-pink-600">                  
                    <li className="mb-10 ms-7">            
                        <span className="absolute flex items-center justify-center w-7 h-7 bg-pink-600 text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">1</p>
                        </span>    
                        <h3 className="text-xl font-medium leading-tight">Charla Inicial</h3>
                        <p className="text-md">Cuentanos tu Sueño</p>
                    </li>
                    <li className="mb-10 ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">2</p>
                        </span>
                        <h3 className="text-xl font-medium leading-tight">Preparativos</h3>
                        <p className="text-md">Escoge los servicios</p>
                    </li>
                    <li className="mb-10 ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">3</p>
                        </span>
                        <h3 className="text-xl font-medium leading-tight">Ensayos</h3>
                        <p className="text-md">Cuidamos cada detalle</p>
                    </li>
                    <li className="ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">⭐</p>
                        </span>
                        <h3 className="text-xl font-semibold">"El Gran Dia"</h3>

                    </li>
                </ol>

                <div className={styles.photos}>    
                    <Polaroid src="/images/cumple.jpg" dynamicStyle="w-56 mb-10 -rotate-3"/>
                    <Polaroid src="/images/gacebo.jpg" dynamicStyle="w-56 mb-10 rotate-4"/>
                    <Polaroid src="/images/piscina.jpg" dynamicStyle="w-56 mb-10 -rotate-2"/>  
                </div>

            </div>

        </section>
     );
}

export default About;



                