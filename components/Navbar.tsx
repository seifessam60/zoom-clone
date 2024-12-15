import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center z-50 w-full fixed bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"icons/logo.svg"}
          alt="Yoom Logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="font-bold text-2xl text-white max-sm:hidden">Yoom</p>
      </Link>
    </nav>
  );
};

export default Navbar;
