"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface DoubleTextProps {
  heading: string;
  subText: string;
}

const DoubleText: React.FC<DoubleTextProps> = ({ heading, subText }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="my-8" 
      dir="rtl"
    >
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-center lg:justify-between p-4">
        <motion.h1 
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 text-black font-bold text-2xl text-center lg:text-right"
        >
          {heading}
        </motion.h1>
        <motion.p 
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-justify text-gray-500 px-5 border-r-2 border-blue-300 mt-4 lg:mt-0 md:mt-0"
        >
          {subText}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default DoubleText;
