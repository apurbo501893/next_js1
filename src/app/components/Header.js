import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-gray-200 h-20">
      <div className="max-w-screen-xl mx-auto h-full flex items-center  justify-between">
        <Link href={"/"} className="text-base font-semibold uppercase">
          <span className="text-yellow-400">Apurbo</span> Tudu
        </Link>
        <div className="uppercase text-base flex items-center gap-x-6 font-medium">
          <Link
            href={"/about"}
            className="hover:text-sky-500 hover:font-bold duration-200"
          >
            About
          </Link>
          <Link
            href={"/contact "}
            className="hover:text-sky-500 hover:font-bold duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
