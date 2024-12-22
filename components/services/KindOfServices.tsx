"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  id: number;
  title: string;
  icon: string;
  description: string;
  gradient: string;
  details: string[];
}

// Define props interface
interface KindOfServicesProps {
  servicesData: ServiceItem[];
  title?: string;
  subtitle?: string;
}

const KindOfServices: React.FC<KindOfServicesProps> = ({
  servicesData,
  title,
  subtitle,
}) => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen py-16 px-4" dir="rtl">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className={`
                relative overflow-hidden rounded-2xl shadow-2xl 
                transform transition-all duration-500
                ${
                  activeService === service.id
                    ? "md:col-span-1 bg-gradient-to-br " + service.gradient
                    : "bg-white md:col-span-1"
                }
              `}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <Image
                    src={service.icon}
                    width={60}
                    height={60}
                    alt={service.title}
                    className="ml-4 filter brightness-0 invert"
                  />
                  <h3
                    className={`
                    text-xl font-bold border-b pb-4 border-gray-200
                    ${
                      activeService === service.id
                        ? "text-white"
                        : "text-blue-900"
                    }
                  `}
                  >
                    {service.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="space-y-4"
                    >
                      <p className="text-white text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="text-white text-xs space-y-2 list-disc pr-4">
                        {service.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default KindOfServices;
