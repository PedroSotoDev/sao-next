
import Image from "next/image";

export default function Slider() {

    const styles={
        container: "w-full min-h-[100vh] mt-18 flex flex-col justify-left items-center bg-white text-black",
        tittle: "mx-6 mt-10 text-2xl text-left font-bold",
        photos: "flex w-100 mt-8 flex-col justify-center items-center",
    }

    return (

        <section className={styles.container}>

            <div className="relative w-full h-50 sm:w-[48%] lg:w-[30%] overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center">                           
                <Image
                        className="z-0 object-cover brightness-90" 
                        src="/images/gacebo.jpg"
                        alt="Foto de Evento" 
                        width={800} 
                        height={600}
                        priority={false}
                />            
                <div className="absolute w-full h-full p-8 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-4xl text-[rgb(255,123,185)] font-semibold mb-4">Contactanos</h3>
                    <p className="text-xl leading-relaxed">Escríbenos y atenderemos tu solicitud lo antes posible. </p>
                </div>
            </div>
            
            
            <address className="flex flex-col justify-between items-start not-italic">
                <p className="mx-6 mt-10 text-2xl text-left font-semibold" >
                    Informacion de contacto en La Habana:
                </p>

                <p className="mx-6 mb-2 mt-6 text-xl font-medium">Teléfono:</p>
                <a className="mx-6 mb-3 text-xl font-semibold text-pink-800" href="tel:+5359014403">+53 5 9014403</a>

                <p className="mx-6 mb-2 mt-6 text-xl font-medium">Correo:</p>
                <a className="mx-6 mb-3 text-xl font-semibold text-pink-800" href="mailto:pasoto.dev@gmail.com">pasoto.dev@gmail.com</a>

                <p className="mx-6 mb-2 mt-6 text-xl font-medium">Ubicación:</p>
                <a className="mx-6 mb-3 text-xl font-semibold text-pink-800" href="https://maps.google.com/?q=habana+cotorro+calle+123">Calle 71, 123 Cotorro, Habana </a>
            </address>
            
            <div className="w-full px-6 mt-3 mb-10">    
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4687832304717!2d-82.2495643!3d23.0432691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd7d0023b236bb%3A0xcc679d693f2d4ea5!2sEventos%20Sao!5e0!3m2!1ses!2scu!4v1770743884784!5m2!1ses!2scu" 
                    width="340" 
                    height="340" 
                    className="w-full rounded-md border-1 border-[rgb(128,63,101)] shadow-xl"
                    loading="lazy"
                    >
                </iframe>
            </div>

        </section>
    );
}