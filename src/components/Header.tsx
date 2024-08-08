// src/components/Header.tsx
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white via-purple-500 to-purple-800 p-6 flex justify-between items-center">
      <Image src={logo} alt="Logo" width={103} height={110} />
      <nav className="flex gap-8 text-white text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
