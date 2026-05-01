import Image from "next/image";

export default function Slider() {
    return (
        <section className="w-full min-h-screen bg-white text-black flex flex-col items-center">

            {/* CONTENIDO PRINCIPAL */}
            <div className="w-full max-w-6xl px-6 mt-12 grid md:grid-cols-2 gap-10">

                {/* INFO */}
                <address className="not-italic flex flex-col justify-center bg-gray-50 p-6 rounded-xl shadow-md">
                    
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                        Información de contacto
                    </h2>

                    <div className="mb-4">
                        <p className="text-sm text-gray-500">Teléfono</p>
                        <a 
                            href="tel:+5359014403"
                            className="text-lg font-semibold text-pink-700 hover:underline"
                        >
                            +53 5 9014403
                        </a>
                    </div>

                    <div className="mb-4">
                        <p className="text-sm text-gray-500">Correo</p>
                        <a 
                            href="mailto:pasoto.dev@gmail.com"
                            className="text-lg font-semibold text-pink-700 hover:underline"
                        >
                            pasoto.dev@gmail.com
                        </a>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Ubicación</p>
                        <a 
                            href="https://maps.google.com/?q=habana+cotorro+calle+123"
                            className="text-lg font-semibold text-pink-700 hover:underline"
                        >
                            Calle 71, 123 Cotorro, La Habana
                        </a>
                    </div>

                </address>

                {/* MAPA */}
                <div className="w-full h-[22rem] md:h-full rounded-xl overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4687832304717!2d-82.2495643!3d23.0432691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd7d0023b236bb%3A0xcc679d693f2d4ea5!2sEventos%20Sao!5e0!3m2!1ses!2scu!4v1770743884784!5m2!1ses!2scu"
                        className="w-full h-full border-0"
                        loading="lazy"
                    ></iframe>
                </div>

            </div>

        </section>
    );
}