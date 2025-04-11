"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
<div className="relative flex items-center justify-center w-full h-full">
  {/* Profile Image */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
    className="relative z-10 w-[250px] h-[250px] xl:w-[380px] xl:h-[380px] rounded-full overflow-hidden"
  >
    <Image
      src="/assets/photo.jpg"
      alt="Ujwal Reddy Image"
      priority
      quality={100}
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
      className="object-cover"
      fill
    />
  </motion.div>

  {/* Circular Animation */}
  <motion.svg
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[258px] h-[258px] xl:w-[388px] xl:h-[388px] z-0"
    fill="transparent"
    viewBox="0 0 506 506"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.circle
      cx="253"
      cy="253"
      r="250"
      stroke="#57ebd7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{
        strokeDasharray: "24 10 0 0",
      }}
      animate={{
        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
        rotate: [120, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  </motion.svg>
</div>

  );
};

export default Photo;
