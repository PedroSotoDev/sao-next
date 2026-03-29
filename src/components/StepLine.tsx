
const styles={
    container: "w-full flex flex-col justify-between items-center bg-white text-black",
    tittle: "mx-10 text-3xl text-center font-bold",
    photos: "flex w-full mt-8 flex-col justify-center items-center",
}

function StepLine() {
    return ( 
        <section className={styles.container}>
            <div className="mx-8 mb-8 flex flex-col justify-between items-start">
                <h3 className="text-3xl mb-6 text-center font-bold" style={{fontFamily:  "playfair"}}>
                    Todo empieza con una conversación:
                </h3>
                           
            </div>

            <div className="w-full flex flex-row justify-around items-center">

                <ol className="w-60 relative text-body border-s-8 border-pink-600">                  
                    <li className="mb-10 ms-7">            
                        <span className="absolute flex items-center justify-center w-7 h-7 bg-pink-600 text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">1</p>
                        </span>    
                        <h3 className="text-xl font-medium leading-tight">Charla Inicial</h3>
                        <p className="text-md">Escuchamos tu idea y expectativas.</p>
                    </li>
                    <li className="mb-10 ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">2</p>
                        </span>
                        <h3 className="text-xl font-medium leading-tight">Preparativos</h3>
                        <p className="text-md">Nos reunimos contigo para ver los detalles.</p>
                    </li>
                    <li className="mb-10 ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">3</p>
                        </span>
                        <h3 className="text-xl font-medium leading-tight">Ensayos</h3>
                        <p className="text-md">Coordinamos servicios y contactamos proveedores.</p>
                    </li>
                    <li className="ms-7">
                        <span className="absolute flex items-center justify-center w-7 h-7  bg-pink-600  text-pink-600 rounded-full -start-4 ring-4 ring-buffer">
                        <p className="text-white">⭐</p>
                        </span>
                        <h3 className="text-2xl font-semibold">El Gran Dia</h3>
                    </li>
                </ol>
            </div>
        </section>
     );
}

export default StepLine;



                