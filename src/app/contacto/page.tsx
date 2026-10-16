import Contacto from "@/components/Contacto"
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const styles={
    main:"h-full w-full flex flex-col items-center justify-start bg-white",

}

export default function Boda() {
    return (
        <main className={styles.main}>
            <Contacto/>
            <Footer/>
        </main>
    );
}