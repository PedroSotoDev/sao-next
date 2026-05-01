import Image from "next/image";

interface HistoryProps {
    title: string;
    text: string;
    img: string;
}

export default function History({ title, text, img }: HistoryProps) {
    return (
        <section className="w-full max-w-5xl mx-auto px-5 mt-12 mb-6 text-black">

            <h4 className="text-3xl font-semibold tracking-wide mb-5 text-left">
                Historias recientes
            </h4>

            <div className="w-full h-[300px] md:h-[400px] mb-6 relative">
                <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>

            <div className="flex flex-col items-start">
                <p className="text-2xl md:text-3xl font-semibold mb-2">
                    {title}
                </p>
                <p className="text-xl leading-relaxed text-gray-800">
                    {text}
                </p>
            </div>
        </section>
    );
}