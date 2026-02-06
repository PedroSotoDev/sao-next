export default function CardSecction() {
    return (
        <section className="bg-white max-w-6xl mx-auto px-4 py-16 flex flex-wrap gap-6 justify-center">

        <div className="relative w-full sm:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac)" }}>
            <div className="absolute inset-0 bg-[#0000009c]"></div>
            <div className="relative z-10 p-8 text-white">
                <h3 className="text-3xl text-[rgb(255,123,185)] font-semibold mb-4">Decoración y Vestuario</h3>
                <p className="text-xl leading-relaxed">Nos encargamos de la decoración temática y la selección de vestuario.</p>
            </div>
        </div>

        <div className="relative w-full sm:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519225421980-715cb0215aed)" }}>
            <div className="absolute inset-0 bg-[#0000009c]"></div>
            <div className="relative z-10 p-8 text-white">
                <h3 className="text-3xl text-[rgb(255,123,185)] font-semibold text-shadow mb-4">Gestión de Bodas</h3>
                <p className="text-xl leading-relaxed text-shadow">Nuestro plan ntegral de bodas cubre cada detalle de planificación.</p>
            </div>
        </div>

        <div className="relative w-full sm:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)" }}>
            <div className="absolute inset-0 bg-[#0000009c]"></div>
            <div className="relative z-10 p-8 text-white">
                <h3 className="text-3xl text-[rgb(255,123,185)] font-semibold text-shadow mb-4">Lugares Exclusivos</h3>
                <p className="text-xl leading-relaxed text-shadow">Contamos con una selección exclusiva de lugares únicos.</p>
            </div>
        </div>

    </section>


    );
    }
