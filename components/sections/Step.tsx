"use client";
import { Award, Upload, Users } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create an account",
      description:
        "Tell us about yourself so we can create your profile and match you with the right opportunities.",
      icon: Users,
      bgColor: "#cacfff",
    },
    {
      number: "02",
      title: "Upload your footage",
      description:
        "Share your best gameplay moments. Upload multiple videos to showcase your skills and versatility.",
      icon: Upload,
      bgColor: "#fffbca",
    },
    {
      number: "03",
      title: "Get Feedback",
      description:
        "Get instant feedback on your gameplay from our AI powered feedback system.",
      icon: Award,
      bgColor: "#ffcad7",
    },
  ];

  return (
    <section className="relative bg-[#96f1ff] py-20 px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-['Mona_Sans',_sans-serif] font-black text-[36px] leading-[60px] text-center mb-16"
        >
          How it works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-4"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-[20px] p-6 space-y-4"
                style={{ backgroundColor: step.bgColor }}
              >
                <div className="flex items-center justify-between">
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="font-['Mona_Sans',_sans-serif] font-black text-[48px] opacity-30"
                  >
                    {step.number}
                  </motion.span>
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>
                </div>
                <h3 className="font-['Mona_Sans',_sans-serif] font-black text-[24px] leading-[32px]">
                  {step.title}
                </h3>
                <p className="font-['Mona_Sans',_sans-serif] text-[16px] leading-[28px]">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
