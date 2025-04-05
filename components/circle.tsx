"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const OlympicRings = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const rings = [
    {
      title: "تحقیق بازار",
      description: `  ما قبل از اینکه هر پروژه ای را شروع کنیم ابتدا یک تحقیق بازار
                  مفصل روش انجام میدیم که بهقمیم این بیزینس توی چه حوزه هایی قوی
                  تر از بقیس که اونا رو بیش تر نشون بدیم و اینکه ضعف هایی که
                  نمیشه درستش کرد را بپوشونیم علاوه بر اون توی این تحقیق بازار ا
                  مخاطب هدف شما را هم شناسایی میکنیم که بتونیم دقیق ترین رابط
                  کاربری براشون طراحی کنیم`,
      color: "#000000",
    },
    {
      title: "طراحی رابط کاربری",
      description: `         توی مرحله دوم اون رابطه کاربری که مناسب مخاطب هدف شما هست
                  براتون طراحی میکنیم این روند حداقل یک هفته الی ده روز زمان
                  میبره تا بتونیم یک رابط کاربری خلاقانه برای شما طراحی کنیم`,
      color: "#000000",
    },
    {
      title: "مهندسی داده و درخواست ها",
      description: `    این مرحله باعث میشه تمام کار های متفاوت تر از تمام رقبامون بشه
                  چرا که ما معماری دیتابیس وب اپلیکشن یا اپلیکشن شما را براساس
                  درخواست های هر لحظه کاربراتان برنامه ریزی و درست میکنیم این
                  باعث میشه که شما با بزرگتر شدن برنامتون و بیشتر شدن کاربراتون
                  هیچ مشکلی برای سرعت پردازش اپلیکیشن و وبسایتتون ایجاد نشه`,
      color: "#000000",
    },
    {
      title: "تست و دیباگ",
      description: `     بعد از ساخت کامل اپلیکشن ما با ربات های خودمون سعی میکنیم
                  بیشترین بار ممکن را بر روی اپلیکشین یا وب اپلیکشن شما پیاده
                  کنیم که ببینم ایا جایی به مشکل میخوره یا نه اگه همه چی اوکی
                  بود که تحویل شما میدیم به صورت کامل و خیال راحت اگر نبود انقدر
                  باز سازی میشه تا بتونه این فشار را تحل کنه`,
      color: "#000000",
    },
  ];

  return (
    <div className="flex bg-white flex-col items-center justify-center  text-black">
      <h3 className="text-3xl font-bold mb-12 text-center p-4 border-b-2">
        مراحل انجام پروژه
      </h3>
      <div className="flex flex-wrap justify-center  items-center gap-[6.5rem] lg:gap-[7.5rem] p-12">
        {rings.map((ring, index) => (
          <motion.div
            key={index}
            className="relative lg:w-72 lg:h-72 w-64 h-64 border  border-black bg-white hover:bg-black/80 transform rotate-45 overflow-hidden"
            style={{
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            initial={{
              scale: 1,
              rotate: 45,
              opacity: 0.7,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 45,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Rhombus Content */}
            <div className="absolute inset-0 -rotate-45 flex items-center justify-center">
              {/* Title */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 0 : 1,
                  y: hoveredIndex === index ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-black text-xl font-bold text-center"
              >
                {ring.title}
              </motion.div>

              {/* Description */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.3 }}
                  className="absolute text-white text-xs text-center p-1"
                >
                  {ring.description}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default OlympicRings;
