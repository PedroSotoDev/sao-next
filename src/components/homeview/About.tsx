import Polaroid from "./Polaroid";

const styles={
    container: "w-full px-8 flex flex-col justify-left items-center bg-[rgb(250,250,250)] text-black",
    tittle: "w-full text-3xl text-pink-600 font-semibold text-center mb-4 mt-2",
    text: "text-2xl text-center font-medium mb-4",
    photos: "w-full mt-6 flex flex-row justify-center items-center",

}

function About() {
    return ( 
        <section className={styles.container}>
            <h1 className={styles.tittle}>Eventos Sao</h1>
            <h2 className={styles.text}>Organizamos todas tus eventos y hacemos de tu celebración una recuerdo inolvidable.</h2>
            <div className={styles.photos}>
                <Polaroid src="/images/cumple.jpg" dynamicStyle="w-60 -rotate-2"/>
                
            </div>
        </section>
     );
}

export default About;