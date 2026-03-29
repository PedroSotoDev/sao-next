import Image from "next/image";

export default function Slider() {

    const styles={
        container: "w-full min-h-[100vh] mt-18 flex flex-col justify-left items-center bg-white text-black",
        tittle: "mx-6 mt-10 text-2xl text-left font-bold",
        photos: "flex w-100 mt-8 flex-col justify-center items-center",
    }

    return (

        <section className={styles.container}>

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

        </section>
    );
}