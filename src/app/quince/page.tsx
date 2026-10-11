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
                text='Creamos una celebración que refleja su personalidad, su estilo y sus sueños. Decoración, música, fotografía y cada detalle pensado para que ella lo recuerde toda la vida.' 
                bg="/images/port.jpg"

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