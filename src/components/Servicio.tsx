import Image from "next/image";
import Slider from "./Slider";

export default function Servicio() {

    // 🔥 DATA UNIFICADA (estructura pro)
    const servicios = [
        {
            categoria: "Decoración",
            items: [
                "🕌 Alquiler de local",
                "🎀 Decoración",
                "🪑 Mobiliario",
                "🧾 Papelería",
                "🎈 Inflables",
                "👗 Vestuario",
                "💄 Estilista",
                "📸 Fotografía y video"
            ]
        },
        {
            categoria: "Gastronomía",
            items: [
                "🎂 Cake y pastelería",
                "🌰 Fuente de chocolate",
                "🥞 Catering y tapas",
                "🍱 Buffet",
                "🍛 Cena criolla",
                "🍹 Cócteleria",
                "🤵‍♀️ Personal bartender",
                "🥃 Barra abierta",
                "🥂 Bebida para brindis",
            ]
        },
        {
            categoria: "Entretenimiento",
            items: [
                "🎛️ DJ",
                "🤵 Maestro de ceremonia",
                "🌌 Show de La Hora loca",
                "🌠 Show humorístico",
                "🪇 Mariachis",
                "🐻 Muñecones animados",
                "🪄 Mago",
                "🛻 Carro descapotable"
            ]
        }
    ];

    return (

        <section className="w-full min-h-[100vh] mt-18 flex flex-col items-center bg-[rgb(255,255,255)] text-black">

            {/* HERO */}
            <div className="relative w-full h-[55vh] sm:w-[48%] lg:w-[30%] overflow-hidden shadow-md hover:shadow-xl transition">
                <Image
                    className="w-full h-full object-cover brightness-90"
                    src="/images/gacebo.jpg"
                    alt="Foto de Evento"
                    width={800}
                    height={600}
                />
                <div className="absolute w-full h-full p-8 text-white inset-0 bg-[#0000009c]">
                    <h3 className="text-4xl text-[rgb(255,191,221)] font-semibold mb-4">
                        Paquetes y Servicios
                    </h3>
                    <p className="text-xl max-w-3xl">
                        Entendemos esa mezcla de emoción y dudas al planificar.
                    </p>
                    <p className="mb-14 mt-10 text-xl max-w-3xl">
                        Por eso, te ofrecemos un paquete personalizado con los servicios de tu preferencia.
                    </p>
                </div>
            </div>

            {/* CARDS */}
            <div className="w-full mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {servicios.map((categoria, index) => (
                    <div
                        key={index}
                        className="bg-white flex flex-col text-xl"
                    >

                        {/* TÍTULO */}
                        <h2 className="text-3xl font-bold text-black mt-8 text-center capitalize" style={{fontFamily:  "playfair"}}>
                            {categoria.categoria}
                        </h2>

                        <Slider/>

                        {/* LISTA */}
                        <div className="px-8 flex flex-col gap-2">
                            {categoria.items.map((item, i) => (
                                <p key={i} className="text-xl">
                                    {item}
                                </p>
                            ))}
                        </div>

                    </div>
                ))}

            </div>
                {/* CARD BUEN PARA Servicios */}
            {/* <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-6">
                        
                        
                        <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
                            <Image
                                src={img}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>
            
                        
                        <div className="flex flex-col justify-center p-6 md:w-1/2">
            
                            
                            <p className="text-2xl md:text-3xl font-semibold mb-4">
                                {title}
                            </p>
            
                            
                            <p className=" leading-relaxed">
                                {text}
                            </p>
            
                        </div>
                    </div> */}

        </section>
    );
}

