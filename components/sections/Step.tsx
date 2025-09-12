import Image from "next/image";
import React from "react";

const Step = () => {
  return (
    <div className="bg-[#5B73F6] flex flex-col px-8 py-16" id="#talent">
      <h1 className="text-center text-white text-4xl">
        Get started with Just 3 simple steps
      </h1>
      <div className="flex flex-col md:flex md:flex-row gap-16 pt-16">
        <div className="flex flex-col gap-10">
          <Image
            src="/Group 24.png"
            alt="firt image"
            width={418}
            height={421}
          />
          <h1 className="text-center text-white text-4xl">Sign Up</h1>
        </div>
        <div className="flex flex-col gap-10 ">
          <Image
            src="/Group 8 (2).png"
            alt="firt image"
            width={418}
            height={421}
          />
          <h1 className="text-center text-white text-4xl">Upload Videos</h1>
        </div>
        <div className="flex flex-col gap-10 ">
          <Image
            src="/Rectangle 1 (1).png"
            alt="firt image"
            width={418}
            height={421}
          />
          <h1 className="text-center text-white text-4xl">
            Get Feedback And Improve
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Step;
