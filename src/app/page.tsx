import HeroSection from "../components/homeview/HeroSection"
import About from "@/components/homeview/About";
import Servicios from "@/components/homeview/Servicios";
import Form from "@/components/homeview/Form";
import ServiceMenu from "@/components/homeview/SubMenu";
import Footer from "@/components/homeview/Footer";

const styles={
	main:"h-full w-full flex flex-col items-center justify-between bg-[rgb(250,170,150)]",

}

export default function Home() {
	return (
		<main className={styles.main}>
			 <HeroSection/>
			 <About/>
			 <Footer/>
		</main>
	);
}
