import Hero from "@/components/Hero";
import MainServices from "@/components/MainServices"

const styles={
    main:"h-full w-full flex flex-col items-center justify-start bg-white",

}

export default function Quince() {
    return (
        <main className={styles.main}>
            <MainServices/>

        </main>
    );
}