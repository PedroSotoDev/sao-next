import Hero from "@/components/Hero";
import Galery from "@/components/Galery";
import History from "@/components/History";
import MiniServices from "@/components/MiniServices";
import Footer from "@/components/Footer"
import { DividerDiamond } from "@/components/deco/DividerDiamond";

const styles={
	main:"h-full w-full flex flex-col items-center justify-start bg-white",

}

export default function Boda() {
	return (
		<main className={styles.main}>
			<Hero 
				title="Planes de Boda" 
				text='Diseñamos bodas únicas desde cero, con la estética, los proveedores y el ritmo que tú elijas. Tú disfrutas cada momento, nosotros nos ocupamos del resto.' 
				bg="/images/gacebo.png"

			/>
			<MiniServices/>
			<Galery/>
			<History
				title="La Boda del Siglo"
				text="Desde el primer momento todo fue mágico. La decoración, la atención al detalle y la organización hicieron de nuestro día algo perfecto. Sin duda volveríamos a confiar."
				img="/images/gacebo.png"
			/>

			<DividerDiamond/>
			<Footer/>

		</main>
	);
}