import Image from "next/image";

export default function Slider() {

    const styles={
        container: "w-full min-h-[100vh] mt-18 flex flex-col justify-left items-center bg-white text-black",
        tittle: "mx-6 mt-10 text-2xl text-left font-bold",
        photos: "flex w-100 mt-8 flex-col justify-center items-center",
    }

    return (

        <section className={styles.container}>

            <div className="relative w-full h-[55vh] sm:w-[48%] lg:w-[30%] overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">                           
                <Image
                        className="z-0 w-full h-full object-cover brightness-90" 
                        src="/images/gacebo.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />            
                <div className="absolute w-full h-full p-8 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-4xl text-[rgb(255,191,221)] font-semibold mb-4">Planes de Boda</h3>
                </div>
            </div>

            <p className="mx-8 mb-14 mt-10 text-xl">Entendemos esa mezcla de <span className="text-pink-600 font-bold ">emocion</span> y <span className="text-pink-600 font-bold ">dudas</span> al planificar.  Por eso, te organizamos un <span className="text-pink-600 font-bold ">boda perfecta</span> para que disfrutes sin estres del <span className="text-pink-600 font-bold">mejor dia de tu vida</span>.</p>



        </section>
    );
}