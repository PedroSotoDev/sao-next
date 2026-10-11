import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar"
import Image from "next/image";
import WaButton from "../components/modales/WaButton";

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
			
			{children}

			<WaButton/>
		</body>
		</html>
	);
}
