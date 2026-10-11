import Hero from "@/components/Hero";
import AllServices from "@/components/AllServices"
import { DividerDiamond } from "@/components/deco/DividerDiamond";
import Footer from "@/components/Footer"

const styles={
    main:"h-full w-full flex flex-col items-center justify-start bg-white",

}

export default function Quince() {
    return (
        <main className={styles.main}>
            <AllServices/>
            <DividerDiamond/>
			<Footer/>
        </main>
    );
}