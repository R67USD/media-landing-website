// src/components/Footer.tsx
import Image from "next/image";
import { t } from "@/utils/translation";
import { routesConfig } from "@/utils/config";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container py-10 w-full">
      <div className="mx-auto flex justify-between items-center">
        <Link href={routesConfig.home}>
          <Image
            src={"/images/logo.svg"}
            alt="Footer Logo"
            width={193}
            height={206}
          />
        </Link>
        <nav className="max-lg:hidden flex gap-10 text-orange-600">
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
