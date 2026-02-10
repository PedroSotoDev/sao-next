import About from "@/components/contactview/About";
import Footer from "@/components/homeview/Footer";

export default function Contact() {
	return (
		<main className="h-full w-full flex flex-col items-center justify-between bg-white">
			<About/>
			<Footer/>
		</main>
	);
}
