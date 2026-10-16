import Hero from "@/components/Hero";
import Galery from "@/components/Galery";
import History from "@/components/History";
import MiniServices from "@/components/MiniServices";

const styles={
    main:"h-full w-full flex flex-col items-center justify-start bg-white",

}

export default function Infantil() {
    return (
        <main className={styles.main}>
            <Hero 
                title="Fiestas Infantiles" 
                text='Organizamos cumpleaños temáticos, baby showers y celebraciones familiares con la decoración, el entretenimiento y el catering que los más pequeños adoran. Tú solo apareces y sonríes.' 
                bg="/images/nina.jpg"
            />
            <MiniServices/>
            <Galery/>
            <History
                title="Nuevas Sonrisas"
                text="Desde el primer momento todo fue mágico. La decoración, la atención al detalle y la organización hicieron de nuestro día algo perfecto. Sin duda volveríamos a confiar."
                img="/images/gacebo.png"
            />

        </main>
    );
}