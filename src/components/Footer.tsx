"use client";
import Image from "next/image";
import { t } from "@/utils/translation";
import { routesConfig } from "@/utils/config";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="container py-2 w-full font-sans">
      <div className="mx-auto flex justify-between items-center">
        <span className="max-sm:hidden">
          <Link href={routesConfig.home}>
            <Image
              src={"/images/logo.svg"}
              alt="Footer Logo"
              width={193}
              height={206}
            />
          </Link>
        </span>
        <span className="sm:hidden">
          <Link href={routesConfig.home}>
            <Image
              src={"/images/logo.svg"}
              alt="Footer Logo"
              width={111}
              height={119}
            />
          </Link>
        </span>
        <nav className="max-lg:hidden flex gap-10 text-orange-600">
          <Link href={routesConfig.home}>{t("footer.home")}</Link>
          <Link href={routesConfig.aboutUs}>{t("footer.about")}</Link>
          <Link href={routesConfig.services}>{t("footer.services")}</Link>
        </nav>
        <p className="text-purple-800 max-sm:text-sm text-2xl">
          {t("footer.letsDoIt")}
        </p>
        <button
          onClick={() => router.push(routesConfig.contactUs)}
          className="bg-orange-600 text-white max-sm:py-1 max-sm:px-4 py-2 px-6 rounded-md"
        >
          {t("nav.contact")}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
