"use client";
import { routesConfig } from "@/utils/config";
import { NavLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>(pathname);
  const [isOpen, setIsOpen] = useState(false);

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

      <div
        className="sm:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
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

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed rounded-l-2xl px-12 flex flex-col w-[90%] right-0 inset-0 top-0 left-12 sm:w-[90%] h-full md:max-h-[748px] z-[5]  ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition ease-in-out duration-300 bg-custom-overlay backdrop-filter backdrop-blur-md`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="flex cursor-pointer justify-end ml-4 items-end mt-14"
        >
          <Image
            src={"/images/cross-icon.svg"}
            alt="Logo"
            width={16.97}
            height={16.26}
          />
        </div>
        <nav className="mt-4 flex flex-col gap-8 text-white text-sm">
          {NavLinks.map((link) => {
            return (
              <Link href={link.path} key={link.name}>
                <span
                  className={`relative text-lg ${
                    activeLink === link.path
                      ? "active-mobile text-primary-orange !text-[40px] leading-[48px]"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveLink(link.path);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

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
