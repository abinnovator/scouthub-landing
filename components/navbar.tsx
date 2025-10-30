"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 md:px-[100px]">
        <div
          className={`max-w-7xl mx-auto flex flex-row justify-between border-2 border-black rounded-3xl md:py-5 py-2 px-2 md:px-5 items-center ${
            isScrolled && "border-none"
          }`}
        >
          <p>ScoutHub</p>

          <div className="md:flex md:flex-row md:gap-3 hidden">
            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}sign-up`}>
              <Button className="bg-gradient-to-b from-[#EBF3FA] to-[#DFEDFA] text-black shadow-md cursor-pointer">
                Sign Up
              </Button>
            </Link>

            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}sign-in`}>
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
                    <Link href="https://scouthub.appwrite.network">
                      Sign In
                    </Link>
                    <Link href="https://scouthub.appwrite.network">
                      Sign Up
                    </Link>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
