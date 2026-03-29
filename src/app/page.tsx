import MainHero from "../components/MainHero"
import About from "@/components/StepLine"
import Footer from "@/components/Footer"
import CardSecction from "@/components/Cards"

const styles={
	main:"h-full w-full flex flex-col items-center justify-between bg-white",

}

export default function Home() {
	return (
		<main className={styles.main}>
			 <MainHero/>
			 <CardSecction/>
			 <About/>
			 <Footer/>
		</main>
	);
}
