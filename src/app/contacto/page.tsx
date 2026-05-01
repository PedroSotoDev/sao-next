import Contacto from "@/components/Contacto"
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const styles={
    main:"h-full w-full flex flex-col items-center justify-start bg-white",

}

export default function Boda() {
    return (
        <main className={styles.main}>
            <Hero 
                            title="Planes de Boda" 
                            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et doloribus quisquam omnis sapiente eaque labore repudiandae.' 
                            bg="/images/bodaj.jpg"
                            img1="/images/quince/cake_azul_vert.jpg"
                            img2="/images/quince/candy_azul.jpg"
                            img3="/images/quince/cumple.jpg"
                        />
            <Contacto/>
            <Footer/>
        </main>
    );
}