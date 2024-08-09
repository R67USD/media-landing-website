"use client";
import { routesConfig } from "@/utils/config";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { t } from "@/utils/translation";
import { NavLinks } from "@/utils/constants";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <header className="container p-6 flex justify-between items-center">
      <span className="sm:hidden">
        <Link href={routesConfig.home}>
          <Image
            src={"/images/logo.svg"}
            alt="Logo"
            width={81}
            height={75.85}
          />
        </Link>
      </span>
      <span className="max-sm:hidden">
        <Link href={routesConfig.home}>
          <Image src={"/images/logo.svg"} alt="Logo" width={103} height={110} />
        </Link>
      </span>

      <div className="sm:hidden cursor-pointer">
        <Image src={"/images/ham-icon.svg"} alt="Logo" width={34} height={17} />
      </div>
      <nav className="max-sm:hidden flex gap-8 text-white text-sm">
        {NavLinks.map((link) => {
          return (
            <Link href={link.path} key={link.name}>
              <span
                className={`relative ${
                  activeLink === link.path ? "active" : ""
                }`}
                onClick={() => setActiveLink(link.path)}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <style jsx>{`
        .active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 2px;
          background-color: orange;
          width: 50%;
          margin: auto;
        }
      `}</style>
    </header>
  );
};

export default Header;
