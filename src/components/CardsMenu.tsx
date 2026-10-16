import CategoryCard from "./Card";

const CATEGORIES = [
  {
    href: "/boda",
    image: "/images/gacebo.png",
    title: "Planes de Boda",
    subtitle: "Bodas",
    tags: ["Bodas", "Aniversarios"],
  },
  {
    href: "/quince",
    image: "/images/port.jpg",
    title: "Fiesta de Quince",
    subtitle: "Quinceañeras",
    tags: ["Quinceañeras", "Cumpleaños"],
  },
  {
    href: "/infantil",
    image: "/images/nina.jpg",
    title: "Fiestas Infantiles",
    subtitle: "Infantiles",
    tags: ["Baby Shower", "Gender Reveal"],
  },
  {
    href: "/ceremonias", // ⚠️ antes apuntaba a /infantil por error
    image: "/images/galaoro.jpg",
    title: "Ceremonias",
    subtitle: "Eventos formales",
    tags: ["Cena de Empresa", "Graduaciones"],
  },
];

export default function CardsMenu() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {CATEGORIES.map((cat) => (
          <CategoryCard key={cat.href} {...cat} />
        ))}
      </div>
    </section>
  );
}