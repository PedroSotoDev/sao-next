"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const styles={
	nav: "w-full h-14 absolute z-10 flex items-center justify-between bg-[rgb(250,250,250)]",
	icon: "w-8 ml-4",
	btn: "relative mr-4 md:hidden focus:outline-none",
	menu: "w-full h-[50vh] py-4 z-10 flex flex-col justify-between items-center absolute top-full shadow-2xl bg-[rgb(235,190,180)] text-black",
	wrapper: "w-full h-60 flex flex-col justify-around items-center text-lg font-medium",
	socialMedia: "w-full h-20 mt-6 flex flex-row justify-around items-center",
}

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className={styles.nav}>
			<Image 
				className={styles.icon} 
				src="/icon/fav-icon.png"
				alt="Logo" 
				width={400} 
				height={400}
				priority={false}
			/>

			{menuOpen && (
				<div className={styles.menu}>
					<div className={styles.wrapper}>
						<p>Inicio</p>
						<p>Galeria</p>
						<p>Contactos</p>
					</div>
					<div className={styles.socialMedia}>
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
							<Image 
								className={styles.icon} 
								src="/icon/mail.png"
								alt="Logo" 
								width={400} 
								height={400}
								priority={false}
							/>
						</a>
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
							<Image 
								className={styles.icon} 
								src="/icon/mail.png"
								alt="Logo" 
								width={400} 
								height={400}
								priority={false}
							/>
						</a>
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
							<Image 
								className={styles.icon} 
								src="/icon/mail.png"
								alt="Logo" 
								width={400} 
								height={400}
								priority={false}
							/>
						</a>
					</div>
				</div>
			)}

			<button className={styles.btn} onClick={toggleMenu}>
				<svg
					className="w-7 h-7 text-pink-600"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					viewBox="0 0 24 24"
				>
					{menuOpen ? (<path d="M6 18L18 6M6 6l12 12" />) 
						: (<path d="M3 12h18M3 6h18M3 18h18" />)}
				</svg>
			</button>
						
		</nav>
	);
}
