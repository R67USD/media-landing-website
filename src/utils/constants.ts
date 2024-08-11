import { routesConfig } from "./config";
import { t } from "./translation";

export const NavLinks = [
  {
    name: "Home",
    path: routesConfig.home,
  },
  {
    name: "About Us",
    path: routesConfig.aboutUs,
  },
  {
    name: "Services",
    path: routesConfig.services,
  },
  {
    name: "Contact Us",
    path: routesConfig.contactUs,
  },
];

export const HomeMainInfoCards = [
  {
    title: t("home.main.info.1.title"),
    description: t("home.main.info.1.description"),
    image: "/images/bell-icon.svg",
  },
  {
    title: t("home.main.info.2.title"),
    description: t("home.main.info.2.description"),
    image: "/images/bell-icon.svg",
  },
  {
    title: t("home.main.info.3.title"),
    description: t("home.main.info.3.description"),
    image: "/images/bell-icon.svg",
  },
];
