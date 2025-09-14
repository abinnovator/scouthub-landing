import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:flex md:flex-row flex flex-col gap-64 px-[100px] pb-11">
      <div className="flex flex-col pt-48 gap-5">
        <Badge variant="default" className="bg-[#7A8CF3]">
          Made by a athelete
        </Badge>
        <div className="flex flex-col gap-5">
          <h1 className="md:text-5xl text-3xl md:font-semibold text-center">
            Get Scouted,Go Pro
          </h1>
          <p className="max-w-[418px]">
            Upload your gameplay footage and connect with coaches and scouts
            from professional teams. Your talent deserves to be seen.
          </p>
          <div className="flex flex-row gap-8">
            <Button className="bg-[#7A8CF3] border-[#5B73F6] border-4 cursor-pointer">
              <Link href="https://scouthub.appwrite.network">
                Start Your Journey
              </Link>
            </Button>
            <Button className="bg-white text-black cursor-pointer border-[#5B73F6] border-4">
              <Link href="https://scouthub.appwrite.network">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </div>
      <Image
        src="/Rectangle 1 (1).png"
        alt="football img"
        width={591}
        height={494}
        className="pt-24 hidden md:flex"
      />
    </div>
  );
};

export default Hero;
