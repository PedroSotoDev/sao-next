import Hero from "@/components/Hero";
import Galery from "@/components/Galery";
import History from "@/components/History";
import MiniServices from "@/components/MiniServices";
import Footer from "@/components/Footer";

const styles={
    main:"h-full w-full flex flex-col items-center justify-start bg-white",

}

export default function Quince() {
    return (
        <main className={styles.main}>
            <Hero 
                title="Fiestas de Quince" 
                text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et doloribus quisquam omnis sapiente eaque labore repudiandae.' 
                bg="/images/quince/quince_verde2.jpg"
                img1="/images/quince/cake_azul_vert.jpg"
                img2="/images/quince/candy_azul.jpg"
                img3="/images/quince/cumple.jpg"
            />
            <MiniServices/>
            <Galery/>
            <History
                title="Quince Primaveras"
                text="Desde el primer momento todo fue mágico. La decoración, la atención al detalle y la organización hicieron de nuestro día algo perfecto. Sin duda volveríamos a confiar."
                img="/images/gacebo.jpg"
            />
            <Footer/>
        </main>
    );
}