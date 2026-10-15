import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { getImagePath } from "@/lib/image-path";

const NAV_LINKS = [
	{ href: "/", label: "Inicio" },
	{ href: "/servicios", label: "Servicios" },
	{ href: "/galeria", label: "Galería" },
	{ href: "/contacto", label: "Contacto" },
];

const SOCIAL_LINKS = [
	{href: "https://facebook.com/eventossao",label: "Facebook",icon: "/icon/facebook.png",},
	{href: "https://instagram.com/eventossao",label: "Instagram",icon: "/icon/instagram.png",},
	{href: "https://wa.me/5355555555",label: "WhatsApp",icon: "/icon/whatsapp.png",},
];

const CONTACT = {
	phone: "+53 5555 5555",
	phoneHref: "tel:+5355555555",
	email: "hola@eventossao.com",
	emailHref: "mailto:hola@eventossao.com",
	location: "La Habana, Cuba",
};

function Footer() {
    return (
		<footer className="w-full border-t border-gray-100 bg-gradient-to-b from-white to-rose-50/40">
			<div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
				
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
					{/* Columna 1: Logo + descripción */}
					<div className="flex flex-col items-center gap-4 sm:col-span-2 lg:col-span-1">
						<Image
							src={getImagePath("/icon/logo.png")}
							alt="Eventos Sao"
							width={160}
							height={60}
							className="h-8 w-auto"
						/>

						{/* Redes sociales */}
						<div className="w-full px-6 flex justify-around items-center gap-3 pt-2">
							{SOCIAL_LINKS.map(({ href, label, icon }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E11D74] hover:ring-[#E11D74]"
								>
									<Image
									src={getImagePath(icon)}
									alt=""
									width={40}
									height={40}
									className="h-7 w-7 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
									/>
								</a>
							))}
						</div>
					</div>

					{/* Columna 2: Navegación */}
					<div className="flex flex-col gap-4">
					<h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900">
						Navegación
					</h3>
					<ul className="flex flex-col gap-2.5">
						{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<Link
							href={link.href}
							className="text-sm text-gray-600 transition-colors hover:text-[#E11D74]"
							>
							{link.label}
							</Link>
						</li>
						))}
					</ul>
					</div>

					{/* Columna 3: Contacto */}
					<div className="flex flex-col gap-4">
					<h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900">
						Contacto
					</h3>
					<ul className="flex flex-col gap-3">
						<li>
						<a
							href={CONTACT.phoneHref}
							className="group flex items-center gap-2.5 text-sm text-gray-600 transition-colors hover:text-[#E11D74]"
						>
							<Phone className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-[#E11D74]" />
							{CONTACT.phone}
						</a>
						</li>
						<li>
						<a
							href={CONTACT.emailHref}
							className="group flex items-center gap-2.5 text-sm text-gray-600 transition-colors hover:text-[#E11D74]"
						>
							<Mail className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-[#E11D74]" />
							{CONTACT.email}
						</a>
						</li>
						<li className="flex items-center gap-2.5 text-sm text-gray-600">
						<MapPin className="h-4 w-4 shrink-0 text-gray-400" />
						{CONTACT.location}
						</li>
					</ul>
					</div>

					{/* Columna 4: CTA */}
					<div className="flex flex-col gap-4">
					<h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900">
						¿Listo para empezar?
					</h3>
					<p className="text-sm leading-relaxed text-gray-600">
						Cuéntanos tu idea y te ayudamos a hacerla realidad.
					</p>
					<Link
						href="/contacto"
						className="inline-flex w-fit items-center justify-center rounded-full bg-[#E11D74] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#c11565] hover:shadow-md"
					>
						Contáctanos
					</Link>
					</div>
				</div>

				{/* Línea inferior con copyright */}
				<div className="mt-12 flex flex-col items-center gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-between sm:gap-0">
					<p className="text-xs text-gray-500">
					© {new Date().getFullYear()}{" "}
					<span className="font-semibold text-gray-700">Eventos Sao</span>. Todos
					los derechos reservados.
					</p>
					<p className="text-xs text-gray-400">
					Hecho con ♥ en Cuba
					</p>
				</div>
			</div>
		</footer>
    );
}

export default Footer;