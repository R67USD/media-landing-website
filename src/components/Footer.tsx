// src/components/Footer.tsx
import Image from "next/image";
import footerLogo from "@/assets/logo-2.svg";
import { t } from "@/utils/translation";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-purple-800 py-10 mt-20">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={footerLogo} alt="Footer Logo" width={193} height={206} />
        <nav className="flex gap-10 text-orange-600">
          <a href="#">{t("footer.about")}</a>
          <a href="#"> {t("footer.features")} </a>
          <a href="#"> {t("footer.pricing")} </a>
          <a href="#"> {t("footer.gallery")} </a>
          <a href="#"> {t("footer.team")} </a>
        </nav>
        <p className="text-purple-800 text-2xl">{t("footer.letsDoIt")}</p>
        <button className="bg-orange-600 text-white py-2 px-6 rounded-md">
          {t("nav.contact")}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
