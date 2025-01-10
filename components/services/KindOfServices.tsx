"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceItem {
  videosrc: any;
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
  videosrc?: string;
}
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const KindOfServices: React.FC<KindOfServicesProps> = ({
  servicesData,
  title,
  subtitle,
}) => {
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
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`
              relative overflow-hidden rounded-2xl shadow-2xl 
              transform transition-all duration-500
              bg-gradient-to-br ${service.gradient}
            `}
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
                  <h3 className="text-xl font-bold border-b pb-4 border-gray-200 text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-white text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-white text-xs space-y-2 list-disc pr-4">
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="relative pb-[56.25%] mt-2 h-0">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={`${service.videosrc}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default KindOfServices;
