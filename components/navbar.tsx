import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between  border-2 border-black rounded-3xl md:py-5 py-2 px-2 md:px-5 items-center ">
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
      <div className="md:flex md:flex-row md:gap-3 hidden">
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
      <div className="show md:hidden">
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>ScoutHub</SheetTitle>
              <div className="flex flex-col gap-3">
                <Link href="/">Home</Link>
                <Link href="/">Steps</Link>
                <Link href="https://scouthub.appwrite.network">Sign In</Link>
                <Link href="https://scouthub.appwrite.network">Sign Up</Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
