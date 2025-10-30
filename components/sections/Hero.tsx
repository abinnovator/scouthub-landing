"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      id="home"
      className="relative bg-[#a9eeff] min-h-screen pt-32 md:pt-40 pb-20 px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Mona_Sans',_sans-serif] font-black text-[64px] leading-[60px]"
          >
            Get Scouted,Go Pro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-['Mona_Sans',_sans-serif] max-w-md text-[16px] leading-[28px]"
          >
            Upload your gameplay footage and connect with coaches and scouts
            from professional teams. Your talent deserves to be seen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm shadow-[1px_1px_1px_0px_inset_rgba(255,255,255,0.4),-1px_-1px_1px_0px_inset_rgba(255,255,255,0.25),-1px_-1px_1px_0px_inset_rgba(161,161,161,0.4),1px_1px_4px_0px_inset_rgba(255,255,255,0.6)] hover:bg-white/20 transition-all"
            >
              <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}sign-up`}>
                Sign Up
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 rounded-full border-2 border-black/10 hover:bg-white/10 transition-all"
            >
              <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}sign-in`}>
                Sign In
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <img
            src="/Rectangle 1 (1).png"
            alt="Soccer players in action"
            className="w-full h-auto rounded-[20px] shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
