import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar"
import Image from "next/image";

export const metadata: Metadata = {
	title: "Eventos Sao | Organizadores de Bodas y Fiestas en Cuba",
	description: "Eventos Sao organiza bodas y eventos personalizados en Cuba. Planificación a detalle y ...",
};

const bodyStyles = "min-h-screen";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="es">
		<body className={bodyStyles}>
			<NavBar/>
			
			<button className="fixed z-100 w-13 h-13 p-1 bottom-4 right-4 text-white rounded-[5rem] bg-[#25d366]">
				<Image
					className="z-0 object-cover opacity-90 scale-75 " 
					src="/icon/whatsapp.png"
					alt="Foto de Evento" 
					width={800} 
					height={600}
					priority={false}
				/>
			</button>
			
			{children}
		</body>
		</html>
	);
}
