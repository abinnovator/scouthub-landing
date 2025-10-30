"use client";
import { TrendingUp, Video } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#96f1ff] to-[#a9eeff] py-24 px-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Mona_Sans',_sans-serif] font-black text-[48px] leading-[56px]"
        >
          Ready to Take Your Game to the Next Level?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-['Mona_Sans',_sans-serif] text-[18px] leading-[32px] max-w-2xl mx-auto"
        >
          Join thousands of athletes who are already using ScoutHub to connect
          with professional teams and scouts worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-5 rounded-full bg-black text-white hover:bg-black/80 transition-all shadow-lg"
          >
            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}sign-up`}>
              Get Started for Free
            </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-black/10 shadow-[1px_1px_1px_0px_inset_rgba(255,255,255,0.4),-1px_-1px_1px_0px_inset_rgba(255,255,255,0.25),-1px_-1px_1px_0px_inset_rgba(161,161,161,0.4),1px_1px_4px_0px_inset_rgba(255,255,255,0.6)] hover:bg-white/20 transition-all"
          >
            Watch Demo
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-8 pt-8"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span className="font-['Mona_Sans',_sans-serif] text-[14px]">
              No credit card required
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            <span className="font-['Mona_Sans',_sans-serif] text-[14px]">
              Free trial available
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
