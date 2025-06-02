"use client";
import Image from "next/image";
import hamburgerIcon from "../asset/icons/hamburger.png";
import Cross from "../asset/icons/cross.png";
import { useState, useEffect } from "react";
import LinkToPage from "./Link";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <>
      <div className="hidden max-sm:flex px-2">
        <Image
          src={isOpen ? Cross : hamburgerIcon}
          alt="hamburger"
          width={28}
          height={28}
          onClick={() => setIsOpen(!isOpen)}
          className={`cursor-pointer transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          } z-2`}
        />
      </div>

      <div
        className={`min-sm:hidden fixed top-0 right-0 z-1 bg-gray-950 w-full h-screen ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-300`}
      >
        <LinkToPage
          classname="flex flex-col space-y-12 text-amber-50 h-svh w-full p-16
          justify-center items-center text-3xl"
          link_class_name=""
        />
      </div>
    </>
  );
}
