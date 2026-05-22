import Hero from "@/components/Hero";
import Galery from "@/components/Galery";
import History from "@/components/History";
import MiniServices from "@/components/MiniServices";

const styles={
	main:"h-full w-full flex flex-col items-center justify-start bg-white",

}

export default function Boda() {
	return (
		<main className={styles.main}>
			<Hero 
				title="Planes de Boda" 
				text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et doloribus quisquam omnis sapiente eaque labore repudiandae.' 
				bg="/images/boda_p.png"

			/>
			<MiniServices/>
			<Galery/>
			<History
				title="La Boda del Siglo"
				text="Desde el primer momento todo fue mágico. La decoración, la atención al detalle y la organización hicieron de nuestro día algo perfecto. Sin duda volveríamos a confiar."
				img="/images/gacebo.jpg"
			/>

		</main>
	);
}