import HeroSection from "../components/homeview/HeroSection"
import About from "@/components/homeview/About";
import Footer from "@/components/homeview/Footer";
import CardSecction from "@/components/homeview/CardSecction";

const styles={
	main:"h-full w-full flex flex-col items-center justify-between bg-white",

}

export default function Home() {
	return (
		<main className={styles.main}>
			 <HeroSection/>
			 <CardSecction/>
			 <About/>
			 <Footer/>
		</main>
	);
}
