import SubMenu from "./SubMenu";

const styles= {
    container: "w-full text-center flex flex-col justify-left items-center bg-[rgb(255,150,180)]",
    tittle: "text-black text-xl font-bold",
    subTittle: "mx-6 text-black text-center text-lg",
    waveTest: "w-full h-14 flex flex-col justify-center items-center bg-white",
    form: "w-full pb-6 px-6 flex flex-col justify-between items-center bg-white",
    wrapper: "w-full mt-6 flex flex-row justify-between items-center",
    input: "w-33 h-10 p-4 text-black border text-md rounded-lg placeholder:text-[rgb(255,150,180)]",
    textArea: "w-full max-h-30 mt-6 text-black text-md placeholder:text-[rgb(255,150,180)] border rounded p-2",
    submit: "w-full h-8 mt-6 bg-pink-300 text-black rounded border",

}

function Form() {

    const services =[
            { id: 'catering', label: 'Catering', checked: false },
            { id: 'lugares', label: 'Lugares', checked: false },
            { id: 'decoracion', label: 'Decoración', checked: false },
            { id: 'fotografia', label: 'Fotografía', checked: false },
            { id: 'artistas', label: 'Artistas', checked: false },
            { id: 'pasteleria', label: 'Pasteleria', checked: false },
            { id: 'juegos', label: 'Juegos', checked: false },
        ]
    const partys =[
            { id: 'boda', label: 'Boda', checked: false },
            { id: 'cumleaños', label: 'Cumleaños', checked: false },
            { id: 'quinceañeras', label: 'Quinceañeras', checked: false },
            { id: 'graduacion', label: 'Graduacion', checked: false },
            { id: 'babyShower', label: 'Baby Shower', checked: false },
        ]

    return ( 
        <section className={styles.container}>
            <p className={styles.tittle}>Contactenos</p>
            <p className={styles.subTittle}>Rontactenos por nuestras redes o use hablemos directamente por el siguiente formulario.</p>        
            <svg 
                    viewBox="0 0 1200 100" 
                    preserveAspectRatio="none"
                    className={styles.waveTest}
                > 
                <path 
                    d="M0,80 C600,40 600,80 600,80 C700,40 1000,80 1200,80 L1200,0 L0,0 Z" 
                    fill="rgb(255,150,180)"
                ></path>
            </svg>

            <form className={styles.form}>
                <div className={styles.wrapper}>
                    <SubMenu  list={services} tittle={"Servicios"}/>
                    <SubMenu  list={partys} tittle={"Tipo"}/>
                </div>
                
                <div className={styles.wrapper}>
                    <input className={styles.input} type="text" name="name" id="name" placeholder="Nombre:"/>
                    <input className={styles.input} type="tel" name="number" id="number" placeholder="Teléfono:"/>
                </div>
                <textarea className={styles.textArea} name="text" id="text" cols={34} rows={10} placeholder='Que deseas en tu evento?'></textarea>
                <button className={styles.submit}type="button">Enviar</button>
            </form>
        </section>
     );
}

export default Form;