import Slider from "@/components/Slider";

const styles = {
  section:
    "w-full max-w-6xl mx-auto px-6 pt-0 pb-12 flex flex-col sm:flex-row justify-between items-start gap-10",

  imageWrapper:
    "w-full md:w-1/2 h-[22rem] relative rounded-2xl overflow-hidden shadow-lg",

  image:
    "object-cover",

  content:
    "w-full px-4 md:w-1/2 flex flex-col gap-5 text-gray-700",

  title:
    "text-3xl md:text-4xl font-semibold text-gray-800",

  text:
    "text-xl text-base leading-relaxed",

  highlightBox:
    "mt-4 p-5 rounded-xl bg-rose-50 border border-rose-100",

  highlightText:
    "text-sm md:text-base font-medium text-gray-800",
};

function Nosotros() {
  return (
    <section className={styles.section}>


      {/* Contenido */}
      <article className={styles.content}>
        
        <h2 className={styles.title}>
          Sobre nosotros
        </h2>

        <p className={styles.text}>
          En <span className="font-semibold text-gray-800">Eventos Sao</span> creemos que cada celebración debe ser única. 
          Nuestro equipo trabaja de forma cercana contigo para entender tu idea y transformarla en una experiencia real, cuidando cada detalle con dedicación y estilo.
        </p>

      </article>

      <Slider/>

    </section>
  );
}

export default Nosotros;