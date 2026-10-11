import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
	href: string;
	image: string;
	title: string;
	subtitle: string;
	tags: string[];
};

export default function Card({ href, image, title, subtitle, tags }: Props) {
	return (
		<Link
		href={href}
		className="group relative block h-56 w-full overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl sm:h-80 lg:h-80"
		>
			<Image
				src={image}
				alt={title}
				fill
				sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
				className="object-cover transition-transform duration-500 group-hover:scale-105"
			/>

			<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-300 group-hover:from-black/90" />

			<div className="absolute inset-0 flex flex-col justify-end p-6 text-white sm:p-7 lg:p-8">
				
				<p className="mb-2 text-md font-semibold uppercase tracking-[0.15em] text-rose-200 sm:text-base lg:text-[16px]">
				{subtitle}
				</p>

				<h3 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl md:text-[40px] lg:text-3xl xl:text-4xl">
				{title}
				</h3>

				<p className="text-xl text-rose-100/95 sm:text-xl md:text-[22px] lg:text-xl">
				{tags.join(" · ")}
				</p>

				<div className="mt-4 flex items-center gap-1.5 text-base font-semibold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:text-lg">
				Ver más <ArrowRight className="h-5 w-5" />
				</div>

			</div>
		</Link>
	);
	}