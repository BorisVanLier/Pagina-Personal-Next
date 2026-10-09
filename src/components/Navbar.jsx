"use client";

import { useState } from "react";
import Link from "next/link";
import BotonNavbar from "./BotonNavbar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 flex flex-col items-center justify-between px-10 bg-[#292522] texto z-50">
        
        <h1
          className="text-4xl text-white "
        >
          PAGINA WEB
        </h1>

        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-2xl font-extrabold ">
            Inicio
          </Link>

          <Link href="/about" className="text-2xl font-extrabold">
            Sobre mí
          </Link>
          
        </div>

        <BotonNavbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

      </nav>

<div
  className={`fixed top-20 left-0 w-full z-50 md:hidden bg-[#292522] flex flex-col items-center gap-4 text-white text-xl
    overflow-hidden transition-all duration-300 ease-in-out
    ${isOpen ? "max-h-60 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}`}
>
  <Link href="/">Inicio</Link>
  <Link href="/about">Sobre mí</Link>

</div>
    </>
  );
}

export default Navbar;