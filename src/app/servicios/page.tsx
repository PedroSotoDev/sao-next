import Hero from "@/components/Hero";
import AllServices from "@/components/AllServices"

const styles={
    main:"h-full w-full flex flex-col items-center justify-start bg-white",

}

export default function Quince() {
    return (
        <main className={styles.main}>
            <AllServices/>

        </main>
    );
}