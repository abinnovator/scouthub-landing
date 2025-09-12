import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between  border-2 border-black rounded-3xl py-5 px-5 items-center ">
      {/* <Image
        src="/logo_size.jpg"
        alt="scouthub logo"
        width={111}
        height={190}
      /> */}
      <p>ScoutHub</p>

      <div className="md:flex md:flex-row md:gap-10 hidden md:show">
        <Link href="#talent">Showcase Talent</Link>
        <Link href="#faq">FAQ</Link>
      </div>
      <div className="flex flex-row gap-3">
        <Link href="https://scouthub.appwrite.network">
          <Button className="bg-gradient-to-b from-[#EBF3FA] to-[#DFEDFA] text-black shadow-md cursor-pointer">
            Sign Up
          </Button>
        </Link>

        <Link href="https://scouthub.appwrite.network">
          <Button className="bg-gradient-to-b from-[#EBF3FA] to-[#DFEDFA] text-black shadow-md cursor-pointer">
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
