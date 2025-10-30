"use client";
import { motion } from "motion/react";
import React from "react";

function FeatureCard({
  title,
  description,
  bgColor,
  gradientId,
  gradientColors,
  index,
}: {
  title: string;
  description: string;
  bgColor: string;
  gradientId: string;
  gradientColors: { start: string; end: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="rounded-[20px] p-6 space-y-4"
      style={{ backgroundColor: bgColor }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.2 + 0.3,
          type: "spring",
          stiffness: 200,
        }}
        className="relative w-[53px] h-[53px]"
      >
        <svg className="block size-full" fill="none" viewBox="0 0 53 53">
          <rect fill={`url(#${gradientId})`} height="53" rx="20" width="53" />
          <defs>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(26.5 26.5) rotate(90) scale(26.5)"
              gradientUnits="userSpaceOnUse"
              id={gradientId}
              r="1"
            >
              <stop stopColor={gradientColors.start} />
              <stop offset="1" stopColor={gradientColors.end} />
            </radialGradient>
          </defs>
        </svg>
        <img
          src="/d9c9198b6e21f81e7e5c04b3c8d3322b424c8f59.png"
          alt=""
          className="absolute inset-0 m-auto w-[30px] h-[30px] object-contain"
        />
      </motion.div>
      <h3 className="font-['Mona_Sans',_sans-serif] text-[20px] leading-[60px]">
        {title}
      </h3>
      <p className="font-['Mona_Sans',_sans-serif] text-[16px] leading-[28px]">
        {description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      title: "Community",
      description: "Connect with other players from around the world.",
      bgColor: "#cacfff",
      gradientId: "gradient1",
      gradientColors: { start: "#00CCFF", end: "#D6F3FF" },
    },
    {
      title: "AI Powered Feedback",
      description:
        "Get personalized and instant feedback when you upload your videos.",
      bgColor: "#fffbca",
      gradientId: "gradient2",
      gradientColors: { start: "#FF8000", end: "#FFAD5C" },
    },
    {
      title: "Absolutely Free!",
      description:
        "No hidden fees or subscription required. Upload your videos and get feedback from our AI powered feedback system",
      bgColor: "#ffcad7",
      gradientId: "gradient3",
      gradientColors: { start: "#B2FF00", end: "#FFAD5C" },
    },
  ];

  return (
    <section id="features" className="relative bg-white py-20 px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Mona_Sans',_sans-serif] font-black text-[36px] leading-[60px] mb-4">
            Powerful features to help you go pro!
          </h2>
          <p className="font-['Mona_Sans',_sans-serif] text-[16px] leading-[60px]">
            Everything you need to improve play.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
