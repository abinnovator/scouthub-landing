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

      <div className="flex flex-row gap-10">
        <Link href="#talent">Showcase Talent</Link>
        <Link href="#faq">FAQ</Link>
      </div>
      <div className="flex flex-row gap-3">
        <Button className="bg-gradient-to-b from-[#EBF3FA] to-[#DFEDFA] text-black shadow-md cursor-pointer">
          Sign Up
        </Button>
        <Button className="bg-gradient-to-b from-[#EBF3FA] to-[#DFEDFA] text-black shadow-md cursor-pointer">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
