// components/ServicesSection.js
import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaMobileAlt,
  FaDatabase,
  FaConnectdevelop,
} from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { SiGooglemarketingplatform } from "react-icons/si";
import Link from "next/link";

// Sample services array
const services = [
  {
    title: "طراحی وب",
    description: "ما وب‌سایت‌های زیبا و کاربرپسند طراحی می‌کنیم.",
    image: "/assets/images/web.gif",
    icon: <FaConnectdevelop />,
    href: "/servicess/web-development",
  },
  {
    title: "سئو",
    description: "وب‌سایت شما را در موتورهای جستجو بهینه می‌کنیم.",
    icon: <FaArrowUpRightDots />,
    href: "/servicess/seo-optimization",
    image: "/assets/images/analyz.gif",
  },
  {
    title: " تولید محتوا",
    description: "کمک می‌کنیم تا برند شما آنلاین برجسته شود.",
    icon: <SiGooglemarketingplatform />,
    href: "/servicess/content-creation",
    image: "/assets/images/analyz1.gif",
  },
  {
    title: "طراحی گرافیک",
    description: "ما با طراحی های خلاقانه هویت برنو شما را دیجیتال می کنیم.",
    icon: <FaMobileAlt />,
    href: "/servicess/graphic-design",
    image: "/assets/images/graphic.gif",
  },
  {
    title: "پشتیبانی فنی",
    description: "پشتیبانی ۲۴/۷ برای رفع مشکلات شما ارائه می‌دهیم.",
    icon: <FaCogs />,
    href: "tel:02199999999",
    image: "/assets/images/suport.gif",
  },
  {
    title: "تحلیل داده",
    description: "با تحلیل داده‌ها، تصمیمات بهتری بگیرید.",
    icon: <FaDatabase />,
    href: "/servicess/data-analyzer",
    image: "/assets/images/analyz1.gif",
  },
  // Add more services as needed
];

const ServicesSection = () => {
  // Define animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.9,
      },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <section className="py-20 bg-gray-100" id="order">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center mb-16 text-primary mt-8">
          خدمات  ما
        </h3>
        <motion.div
          className="flex flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12"
              variants={itemVariantsLeft}
              whileHover={{ scale: 1.05 }}
            >
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${service.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className={`service-box ${
                  index % 2 === 0 ? "bg-primary" : "bg-secondary"
                } p-4 rounded-3xl duration-300 h-full flex flex-col shadow-2xl items-center justify-center shadow-gray-500 hover:shadow-2xl hover:shadow-secondary/40`}
              >
                <div className="absolute inset-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="flex text-4xl items-center justify-center mb-6 text-white">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-4 text-center">
                    {service.title}
                  </h4>
                  <p className="text-white opacity-90 text-center flex-grow">
                    {service.description}
                  </p>
                  <button className="mt-6 text-center items-center justify-center bg-white text-primary px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                    <Link href={service.href}>مشاهده←</Link>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}{" "}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
