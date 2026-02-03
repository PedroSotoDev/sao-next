import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/homeview/NavBar"


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
			
			<button className="fixed z-100 w-12 h-12 bottom-4 right-4 text-white rounded-[5rem] bg-[#25d366]">
				W
			</button>
			
			{children}
		</body>
		</html>
	);
}
