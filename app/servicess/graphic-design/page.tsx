"use client";
import FormUsers from "@/components/(sercices)/FormUsers";
import Testimonials from "@/components/(sercices)/testimonial";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// Example animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const hoverEffect = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

// animation for hero section
const fadeInFromUp = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const bounceInFromUp = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
// animation for section two
const fadeInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, duration: 0.8 },
};
const portfolioItems = [
  {
    title: "Modern Logo Design",
    image: "/assets/images/figma.jpg",
  },
  {
    title: "Corporate Branding",
    image: "/assets/images/figma.jpg",
  },
  {
    title: "Creative Packaging",
    image: "/assets/images/figma.jpg",
  },
  {
    title: "Website UI/UX",
    image: "/assets/images/figma.jpg",
  },
];
const pricingPlans = [
  {
    title: "پکیج پایه",
    icon: "/assets/images/basic.png",
    description: "مناسب برای کسب‌وکارهایی که به طراحی اولیه و هویت بصری نیاز دارند.",
    price: "1۰,۰۰۰,۰۰۰ تومان",
    buttonText: "خرید پکیج",
    features: [
      { feature: "طراحی لوگو با هوش مصنوعی", included: true },
      { feature: "پالت رنگ اختصاصی برند", included: true },
      { feature: "۳ نمونه گرافیکی تبلیغاتی", included: true },
      { feature: "قالب‌های آماده برای رسانه‌های اجتماعی", included: false },
      { feature: "پشتیبانی ایمیلی", included: true },
      { feature: "دسترسی به مرکز راهنما", included: false },
    ],
  },
  {
    title: "پکیج استاندارد",
    icon: "/assets/images/standard.png",
    description: "مناسب برای کسب‌وکارهای متوسط با نیاز به طراحی حرفه‌ای برند و هویت بصری.",
    price: "15,۰۰۰,۰۰۰ تومان",
    buttonText: "خرید پکیج",
    features: [
      { feature: "طراحی لوگوی اختصاصی", included: true },
      { feature: "پالت رنگ و فونت سفارشی", included: true },
      { feature: "۱۰ نمونه گرافیکی تبلیغاتی", included: true },
      { feature: "طراحی کارت ویزیت", included: true },
      { feature: "قالب‌های آماده رسانه‌های اجتماعی", included: true },
      { feature: "پشتیبانی تلفنی و ایمیلی", included: true },
      { feature: "دسترسی به مرکز راهنما", included: true },
    ],
  },
  {
    title: "پکیج طلایی",
    icon: "/assets/images/gold.png",
    description: "پکیج کامل برای کسب‌وکارهایی که به یک هویت بصری کامل و طراحی‌های خاص نیاز دارند.",
    price: "3۰,۰۰۰,۰۰۰ تومان",
    buttonText: "خرید پکیج",
    features: [
      { feature: "طراحی حرفه‌ای لوگو و هویت بصری کامل", included: true },
      { feature: "پالت رنگ، فونت و نماد سفارشی", included: true },
      { feature: "۲۰ نمونه گرافیکی تبلیغاتی", included: true },
      { feature: "طراحی کارت ویزیت و اوراق اداری", included: true },
      { feature: "بروشور و کاتالوگ حرفه‌ای", included: true },
      { feature: "قالب‌های سفارشی رسانه‌های اجتماعی", included: true },
      { feature: "پشتیبانی ۲۴/۷ تلفنی و ایمیلی", included: true },
      { feature: "دسترسی به انجمن اختصاصی کاربران", included: true },
    ],
  },
];


const featureBox = [
  {
    title: "طراحی منحصر به فرد و سفارشی",
    description: "با توجه به نیازهای خاص برند شما، طرح‌هایی خیره‌کننده و خاص ایجاد می‌کنیم.",
    icon: "/assets/images/unique.png",
  },
  {
    title: "مفاهیم خلاقانه و ایده‌پردازی حرفه‌ای",
    description: "از ایده تا اجرا، با به‌کارگیری خلاقیت و هنر، برندی به‌یادماندنی می‌سازیم.",
    icon: "/assets/images/creative.png",
  },
  {
    title: "هویت بصری و برندسازی جامع",
    description: "کمک می‌کنیم تا از طریق طراحی‌های حرفه‌ای، هویت برندتان را تقویت کنید.",
    icon: "/assets/images/branding.png",
  },
];


const GraphicDesignPage = () => {
  useEffect(() => {
    document.title = "  گرافیک و دیزاین   | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "از طراحی لوگو و هویت بصری تا گرافیک‌های تبلیغاتی و محتوای دیجیتال، با ما همراه شوید تا برند شما در ذهن مخاطبان ماندگار شود."
      );
    }
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      {/* Hero Section */}

      <section className="bg-gradient-to-r from-secondary to-primary flex flex-col lg:flex-row items-center justify-between text-white text-center lg:h-screen py-20 h-full">
        <div>
          <motion.h1
            className="text-2xl md:text-4xl font-bold mt-36 p-2"
            variants={fadeInFromUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            طراحی گرافیکی خیره کننده که مجذوب کننده است{" "}
          </motion.h1>
          <motion.p
            className="text-base md:text-xl mt-4 p-2"
            variants={fadeInFromUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ما تصاویری چشم نواز ایجاد می کنیم تا برند شما را ارتقا دهیم.{" "}
          </motion.p>
          <motion.div
            className="mt-8 p-2"
            variants={bounceInFromUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 1 }}
          >
            <Link href="#package">
              <span className="bg-white text-blue-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                شروع کنید
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div>
          <Image
            src="/assets/images/bgdesign.png"
            alt="content-creation"
            width={400}
            height={500}
            className="w-full h-auto mx-auto lg:ml-12"
          />
        </motion.div>
      </section>

      {/* Features Section */}

      <section className="py-20 px-4 border-2 mx-auto my-4 rounded-2xl bg-primary border-white max-w-[calc(100%-2rem)]">
        <motion.div
          className="mx-auto text-center"
          variants={fadeInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the section is in view
        >
          <h2 className="text-xl md:text-3xl font-bold mb-8 text-white">
            چرا خدمات طراحی ما را انتخاب کنید؟
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {featureBox.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-l text-center from-primary/10 to-secondary/70 border-r-4 border-orange-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Animation triggers when in view
              transition={{ delay: 0.1 * index }}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={50}
                height={50}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl text-white font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages Section */}

      <section className="bg-gray-100 py-20 px-4">
        <motion.div
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h2 id="package" className="text-3xl font-bold mb-8 text-primary">
            پکیج های طراحی گرافیکی ما
          </h2>
        </motion.div>

        <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-primary rounded-2xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                style={{
                  animation: "spin-border 5s linear infinite",
                }}
                key={index}
                className="divide-y divide-gray-200 rounded-2xl border-4 border-gray-200 shadow-sm animate-[spin-border_3s_linear_infinite]"
              >
                <div className="p-6 sm:px-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white ">
                      {plan.title}
                    </h2>
                    <Image
                      src={plan.icon}
                      alt={plan.title}
                      width={50}
                      height={40}
                      className=""
                    />
                  </div>

                  <p className="mt-2 text-gray-300">{plan.description}</p>

                  <p className="mt-2 sm:mt-4">
                    <span className="text-3xl text-white sm:text-4xl">
                      {plan.price}
                    </span>
                  </p>

                  <Link
                    className="mt-4 block rounded-2xl hover:font-bold border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                    href="#order-form"
                  >
                    سفارش دهید ←
                  </Link>
                </div>

                <div className="p-6 sm:px-8 bg-blue-100 rounded-lg">
                  <p className="text-lg font-medium text-gray-900 sm:text-xl">
                    این پکیج شامل موارد زیر می باشد:
                  </p>

                  <ul className="mt-2 space-y-2 sm:mt-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className={`size-5 ${
                            feature.included
                              ? "text-indigo-700"
                              : "text-red-700"
                          }`}
                        >
                          {feature.included ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          )}
                        </svg>
                        <span className="text-gray-700">{feature.feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Portfolio Section */}

      <section className="py-20 bg-primary rounded-2xl mx-4">
        <motion.div
          className="container mx-auto text-center hover:scale-95"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-white">
            نمونه کار طراحی ما
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-8 mt-12 items-center mx-2">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              variants={hoverEffect}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                objectFit="cover"
                height={500}
                className="w-full h-56 object-cover transition-all duration-300"
              />
              <div className="p-4">
                <motion.h3
                  className="text-lg text-center font-semibold text-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                >
                  {item.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}

      <section>
        <Testimonials />
      </section>

      {/* FormUsers Section */}

      <section>
        <FormUsers />
      </section>
    </div>
  );
};
export default GraphicDesignPage;
