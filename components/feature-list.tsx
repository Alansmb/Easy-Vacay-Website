"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Feature Item Component with Fade Up Animation
function FeatureItem({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      className="flex gap-6 items-start"
    >
      <Image src={icon} alt={title} width={70} height={70} />
      <div>
        <h3 className="text-xl md:text-2xl text-gray-900 font-semibold text-[23.88px] leading-[31.83px] tracking-[0.1px]">
          {title}
        </h3>
        <p className="text-gray-700 mt-2 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Feature List Component
export function FeatureList() {
  const features = [
    {
      icon: "/like.svg",
      title: "Seamless Payments",
      description:
        "Collect and make payments effortlessly; manage all your trip expenses in just a few easy steps with Easy Vacay.",
      delay: 0.1,
    },
    {
      icon: "/heart.svg",
      title: "Smooth User Experience",
      description:
        "Enjoy a clean and simple interface designed to make your travel planning smooth and stress-free.",
      delay: 0.2,
    },
    {
      icon: "/icon1.svg",
      title: "Smart Trip Management",
      description:
        "Plan, organize, and track your trips with ease; everything you need, all in one place.",
      delay: 0.3,
    },
    {
      icon: "/heart.svg",
      title: "Stay Connected",
      description:
        "Keep in touch and share updates with your travel partners anytime, anywhere.",
      delay: 0.4,
    },
  ];

  return (
    <div className="flex flex-col gap-8 self-center md:pb-12">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          delay={feature.delay}
        />
      ))}
    </div>
  );
}
