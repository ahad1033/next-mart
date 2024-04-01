"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
      <Link href="/">
        <Image src="/logo.webp" alt="logo" width={100} height={70} />
      </Link>
      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link href="/">Home</Link>
      </div>
      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <IoCartOutline />
          <p className="text-base-bold">Cart (0)</p>
        </Link>
        <IoMenu
          className="cursor-pointer lg:hidden w-6 h-6"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        <div className="absolute top-10 right-5 flex flex-col gap-2 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
          <Link href="/wishlist" className="hover:text-red-1">
            Wishlist
          </Link>
          <Link href="/orders" className="hover:text-red-1">
            Orders
          </Link>
        </div>

        <Link href="/signIn">
          <FaUser />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
