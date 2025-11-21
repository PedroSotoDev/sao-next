"use client"
import Image from "next/image";
import { useState } from "react";

const styles={
	container: "w-full p-8 flex flex-col items-center text-black bg-[rgb(250,250,250)]",
	tittle: "text-3xl font-medium mb-4",
	servicesList: "w-full mb-4 flex flex-row justify-between items-center text-lg font-medium",
	galery: "w-full flex flex-wrap gap-4 justify-around",
	img: "w-full",

}

export default function Servicios() {

	return (
		<section className={styles.container}>
		<p className={styles.tittle}>Nuestros servicios</p>

		<div className={styles.servicesList}>
			<p>Catering</p>
		</div>

		</section>
	);
}
