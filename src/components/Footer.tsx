import Image from "next/image";

const styles = {
  footer:
    "w-full px-6 py-10 flex flex-col items-center gap-6 bg-gradient-to-t from-rose-100 to-white text-gray-700",

  logo: "w-18 opacity-90",

  nav:
    "flex flex-row flex-wrap justify-center items-center gap-6 text-sm font-medium",

  link:
    "hover:text-rose-500 transition-colors duration-300",

  socialMedia:
    "flex flex-row justify-center items-center gap-6 mt-2",

  icon:
    "w-6 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300",

  copy:
    "text-xs text-gray-500 mt-4 text-center",
};

function Footer() {
  return (
    <footer className={styles.footer}>
      
      <Image
        className={styles.logo}
        src="/icon/logo.png"
        alt="Eventos Sao"
        width={400}
        height={400}
      />


      {/* Redes sociales */}
      <div className={styles.socialMedia}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image
            className={styles.icon}
            src="/icon/facebook.png"
            alt="Facebook"
            width={400}
            height={400}
          />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image
            className={styles.icon}
            src="/icon/instagram.png"
            alt="Instagram"
            width={400}
            height={400}
          />
        </a>

        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <Image
            className={styles.icon}
            src="/icon/whatsapp.png"
            alt="WhatsApp"
            width={400}
            height={400}
          />
        </a>
      </div>

      {/* Navegación mínima */}
      <div className={styles.nav}>
        <a href="#" className={styles.link}>Inicio</a>
        <a href="#" className={styles.link}>Servicios</a>
        <a href="#" className={styles.link}>Galería</a>
        <a href="#" className={styles.link}>Contacto</a>
      </div>
      
      {/* Copyright */}
      <p className={styles.copy}>
        ©2026 <span className="font-semibold text-gray-700">Eventos Sao</span> · Todos los derechos reservados
      </p>

    </footer>
  );
}

export default Footer;