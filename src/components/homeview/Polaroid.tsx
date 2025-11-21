import Image from "next/image";


interface polaroidProps{
    src: string,
    dynamicStyle: string,
};

function Polaroid({src,dynamicStyle}:polaroidProps) {

    const styles={
        wrapper: `p-1 ${dynamicStyle} rounded-xs bg-white transition-transform duration-300 hover:scale-105 active:scale-105 hover:rotate-0 active:rotate-0 shadow-[0rem_-0.04rem_0.4rem_0.2rem_rgba(0,0,0,0.5)]`,
        img: "w-full object-cover",
    
    }

    return ( 
        <div className={styles.wrapper}>            
            <Image 
				className={styles.img} 
				src={src}
				alt="foto" 
				width={800} 
				height={600}
				priority={false}
			/>
          </div>
     );
}

export default Polaroid;