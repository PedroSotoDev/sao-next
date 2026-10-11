import Slider from "@/components/Slider";

const styles = {
	section:
		"w-full max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col md:flex-row items-center gap-8 md:gap-12",

	content:
		"w-full md:w-1/2 flex flex-col gap-5 text-gray-700",

	title:
		"text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800",

	text:
		"text-base sm:text-lg leading-relaxed",

	sliderWrapper:
		"w-full md:w-1/2",
};

function Nosotros() {
	return (
		<section className={styles.section}>
			{/* Contenido — primero en móvil y desktop */}
			<article className={styles.content}>
				<h2 className={styles.title}>¿Quienes somos?</h2>

				<p className={styles.text}>
					<span className="font-semibold text-gray-800">Eventos Sao</span> es una casa
					organizadora de bodas y celebraciones en Cuba. Diseñamos experiencias a la
					medida, donde cada detalle está pensado para contar tu historia.
				</p>

				<p className={styles.text}>
					Porque los momentos que se recuerdan toda la vida no se improvisan:{" "}
					<span className="font-semibold text-gray-800">se diseñan con pasión</span>.
				</p>
				
				{/* Highlight destacado */}
				<div className="mt-6 flex items-start gap-4 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100/50 border border-rose-200 p-5">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E11D74] text-white">
						<span className="text-xl">✨</span>
					</div>
					<div>
						<p className="text-2xl font-bold text-gray-900 leading-tight">
						+10 años
						</p>
						<p className="text-sm text-gray-700 mt-0.5">
						CREANDO MOMENTOS INOLVIDABLES
						</p>
					</div>
				</div>

			</article>

			

			{/* Slider — segundo en móvil y desktop */}
			<div className={styles.sliderWrapper}>
				<Slider />
			</div>

		</section>
	);
}

export default Nosotros;