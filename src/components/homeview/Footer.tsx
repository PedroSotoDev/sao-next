import Image from "next/image";

const styles={
	footer:"w-full px-10 py-4 flex flex-col items-center justify-around bg-[rgb(250,150,130)] text-center text-black",
    tittle: "text-2xl font-bold mb-6",
    wrapper: "w-full mb-4 flex flex-row justify-left items-center text-center text-lg",
    icon: "w-8 mr-8",
    socialMedia: "w-full h-20 mt-6 flex flex-row justify-center items-center",
    text: "text-black",

}

function Footer() {
    return ( 
        <footer className={styles.footer}>

            <Image className="w-20 ml-4" src="/icon/logo.png" alt="Logo" width={400} height={400} priority={false} />

            <div className={styles.wrapper}>
                <Image 
                    className={styles.icon} 
                    src="/icon/phone.png"
                    alt="Logo" 
                    width={400} 
                    height={400}
                    priority={false}
                />
                <p>+53 5 6789017</p>
            </div>

            <div className={styles.wrapper}>
                <Image 
                    className={styles.icon} 
                    src="/icon/mail.png"
                    alt="Logo" 
                    width={400} 
                    height={400}
                    priority={false}
                />
                <p className={styles.text}>eo@gmail.com</p>
            </div>

            <div className="w-full h-20 flex flex-row justify-center items-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Image 
                        className="w-8 mx-6" 
                        src="/icon/mail.png"
                        alt="Logo" 
                        width={400} 
                        height={400}
                        priority={false}
                    />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Image 
                        className="w-8 mx-6" 
                        src="/icon/mail.png"
                        alt="Logo" 
                        width={400} 
                        height={400}
                        priority={false}
                    />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Image 
                        className="w-8 mx-6" 
                        src="/icon/mail.png"
                        alt="Logo" 
                        width={400} 
                        height={400}
                        priority={false}
                    />
                </a>

            </div>

            <p>©2026 <span className="font-semibold">Eventos Sao</span> | Todos los derechos reservados</p>

        </footer>
     );
}

export default Footer;