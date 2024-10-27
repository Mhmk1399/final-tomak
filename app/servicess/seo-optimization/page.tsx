"use client";
import FormUsers from "@/components/(sercices)/FormUsers";
import Testimonials from "@/components/(sercices)/testimonial";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import {
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaBolt,
  FaHeadset,
} from "react-icons/fa";

const icons = {
  "توسعه وب سفارشی": <FaCode className="text-blue-600 w-8 h-8" />,
  "طراحی واکنشگرا": <FaMobileAlt className="text-blue-600 w-8 h-8" />,
  "بهینه سازی سئو": <FaSearch className="text-blue-600 w-8 h-8" />,
  "تمرکز بر عملکرد": <FaBolt className="text-blue-600 w-8 h-8" />,
  "پشتیبانی دائمی": <FaHeadset className="text-blue-600 w-8 h-8" />,
};

const features = [
  {
    title: "توسعه وب سفارشی",
    description: "وب سایت های متناسب با نیازهای خاص شما.",
  },
  {
    title: "طراحی واکنشگرا",
    description: "طرح های موبایل اول برای همه اندازه های صفحه نمایش.",
  },
  {
    title: "بهینه سازی سئو",
    description: "رتبه بندی جستجوی خود را با بهترین شیوه های ما بهبود بخشید.",
  },
  {
    title: "تمرکز بر عملکرد",
    description: "سرعت و کارایی در هر پروژه تعبیه شده است.",
  },
  {
    title: "پشتیبانی دائمی",
    description:
      "ما اطمینان می دهیم که وب سایت شما به روز و ایمن باقی می ماند.",
  },
];

export default function FeatureSection() {
  useEffect(() => {
    document.title = "  سئو سایت  | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        " تیم متخصص ما با استفاده از تکنیک‌های پیشرفته و تحلیل دقیق، استراتژی سئوی شما را طراحی و اجرا می‌کند تا به اهداف کسب‌وکارتان برسید. همین امروز برای شروع رشد پایدار و افزایش بازدید، با تومک همراه شوید!"
      );
    }
  }, []);
  return (
    <>
      <section className="bg-blue-600 text-white py-20 h-full flex flex-col lg:flex-row items-center justify-between" dir="rtl">
        <div className="max-w-3xl mx-auto text-center mt-36">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold p-2 transition-all ease-in-out duration-300"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            کسب و کار خود را با خدمات ما ارتقا دهید
          </motion.h1>
          <motion.p
            className="mt-4 text-base md:text-lg lg:text-xl p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            ما راه حل های درجه یک را متناسب با نیازهای شما ارائه می دهیم تا به
            شما در موفقیت آنلاین کمک کند.
          </motion.p>
          <motion.a
            href="#features"
            className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:text-white hover:bg-transparent transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            شروع کنید
          </motion.a>
        </div>
        <div>
        <Image
            src="/assets/images/seobg.png"
            alt="content-creation"
            width={400}
            height={500}
            className="w-full h-auto mx-auto lg:ml-12"
          />
        </div>
      </section>
      <section>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              {icons[feature.title as keyof typeof icons]}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              {feature.description}
            </p>
          </motion.div>
        ))}{" "}
      </section>
      <section
        className=" text-white py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/banner.webp')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            برای ارتقای کسب و کار خود آماده اید؟{" "}
          </motion.h2>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            برای شروع خدمات تخصصی ما همین امروز با ما تماس بگیرید.{" "}
          </motion.p>
          <motion.a
            href="/contact"
            className="mt-8 inline-block text-secondary bg-white px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* <Image
              src="/assets/images/banner.webp"
              width={500}
              height={500}
              alt="banner"
            /> */}
            Contact Us
          </motion.a>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <FormUsers />
      </section>
    </>
  );
}
