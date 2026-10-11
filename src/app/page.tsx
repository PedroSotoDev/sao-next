import MainHero from "../components/MainHero"
import About from "@/components/StepLine"
import Footer from "@/components/Footer"
import CardsMenu from "@/components/CardsMenu"
import Nosotros from "@/components/Nosotros";
import Polaroid from "@/components/Polaroid";
import Slider from "@/components/Slider";

const styles={
	main:"h-full w-full flex flex-col items-center justify-between bg-white",

}

export default function Home() {
	return (
		<main className={styles.main}>
			<MainHero/>
			<CardsMenu/>
			<Nosotros/>
			<About/>
			<Footer/>
		</main>
	);
}
