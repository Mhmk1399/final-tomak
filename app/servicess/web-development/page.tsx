"use client";
import FormUsers from "@/components/(sercices)/FormUsers";
import OrderForm from "@/components/(sercices)/orderForm";
import Testimonials from "@/components/(sercices)/testimonial";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const WebDevelopment = () => {
  useEffect(() => {
    document.title = "  طراحی سایت  | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "در تومک، طراحی سایت تنها به زیبایی محدود نمی‌شود؛ ما با تمرکز بر تجربه کاربری، سرعت بارگذاری، و بهینه‌سازی برای موتورهای جستجو، وب‌سایت‌هایی می‌سازیم که کسب‌وکار شما را به سطحی جدید ارتقا می‌دهد."
      );
    }
  }, []);
  const services = [
    {
      imageSrc: "/assets/images/develoop.webp",
      title: "توسعه سفارشی",
      description:
        "تیم ما وب‌سایت‌ها و برنامه‌های کاربردی سفارشی را متناسب با نیازهای شما توسعه می‌دهد.",
    },
    {
      imageSrc: "/assets/images/cutomcode.webp",
      title: "     (سایت خودتان را بسازید!)",
      description:
        "ما بهترین طراحی‌های خلاقانه را برای وب‌سایت شما ارائه می‌دهیم تا تجربه کاربری منحصر به فردی ایجاد کنیم.",
    },
    {
      imageSrc: "/assets/images/seoweb.webp",
      title: "بهینه‌سازی سئو",
      description:
        "با بهینه‌سازی سئو، وب‌سایت شما در رتبه‌های برتر گوگل قرار خواهد گرفت.",
    },
  ];
  const packages = [
    {
      title: "پکیج پایه",
      icon: "/assets/images/basic.png",
      description: "مناسب برای کسب‌وکارهای نوپا که به دنبال طراحی اولیه وب‌سایت جهت شروع فعالیت خود هستند.",
      price: "۲۰,۰۰۰,۰۰۰ تومان",
      buttonText: "خرید پکیج",
      features: [
        { feature: "طراحی لوگو با هوش مصنوعی", included: true },
        { feature: "تحلیل و تحقیق بازار", included: true },
        { feature: "۱,۰۰۰ کلمه کلیدی مرتبط", included: true },
        { feature: "قابلیت ذخیره سازی کاربران", included: true },
        { feature: "پنل ادمین اختصاصی", included: true },
        { feature: "1 گیگابایت فضای ذخیره‌سازی", included: true },
        { feature: "یک ماه پشتیبانی رایگان", included: true },
      ],
    },
    {
      title: "پکیج استاندارد",
      icon: "/assets/images/standard.png",
      description: "پکیجی مناسب برای کسب‌وکارهای متوسط با امکانات و پشتیبانی بیشتر برای توسعه پایدار.",
      price: "۶۰,۰۰۰,۰۰۰ تومان",
      buttonText: "خرید پکیج",
      features: [
        { feature: "طراحی لوگو اختصاصی", included: true },
        { feature: "تحلیل و تحقیق پیشرفته بازار", included: true },
        { feature: "۵,۰۰۰ کلمه کلیدی مرتبط", included: true },
        { feature: "قابلیت ذخیره سازی کاربران", included: true },
        { feature: "پنل ادمین اختصاصی", included: true },
        { feature: "۵ گیگابایت فضای ذخیره‌سازی", included: true },
        { feature: "سه ماه پشتیبانی رایگان", included: true },
        { feature: "بهینه‌سازی اولیه سئو", included: true },
        { feature: "پشتیبانی ۲۴/۷ ایمیلی", included: true },
        { feature: "بخش آموزش و راهنمایی", included: true },
      ],
    },
    {
      title: "پکیج طلایی",
      icon: "/assets/images/gold.png",
      description: "پکیج کامل برای کسب‌وکارهایی که به دنبال یک وب‌سایت با امکانات پیشرفته و پشتیبانی ممتاز هستند.",
      price: "۸۰,۰۰۰,۰۰۰ تومان",
      buttonText: "خرید پکیج",
      features: [
        { feature: "طراحی لوگوو هویت بصری برند پیشرفته", included: true },
        { feature: "تحلیل و تحقیق پیشرفته بازار", included: true },
        { feature: "۱۰,۰۰۰ کلمه کلیدی مرتبط", included: true },
        { feature: "قابلیت ذخیره سازی کاربران پیشرفته", included: true },
        { feature: "پنل ادمین کامل و پیشرفته", included: true },
        { feature: "۲۰ گیگابایت فضای ذخیره‌سازی", included: true },
        { feature: "شش ماه پشتیبانی رایگان", included: true },
        { feature: "بهینه‌سازی کامل سئو", included: true },
        { feature: "پشتیبانی ۲۴/۷ تلفنی و ایمیلی", included: true },
        { feature: "دسترسی به انجمن اختصاصی کاربران", included: true },
        { feature: "آموزش‌های ویدئویی و وبینار", included: true },
        { feature: "سرعت‌بهینه و امنیت پیشرفته", included: true },
      ],
    },
  ];
  


  return (
    <section className="bg-background py-20 " dir="rtl">
      <div className="mx-auto px-6 mt-5">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center justify-between xl:flex-row bg-gradient-to-r from-secondary to-primary rounded-2xl py-10 lg:py-20">
            <div className="lg:mr-auto w-full">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                خدمات توسعه وب
              </h1>
              <p className="text-base mt-4 text-gray-200 lg:text-lg text-center p-2">
                در تومک، طراحی وب‌سایت فراتر از زیبایی‌شناسی است. ما به شما کمک
                می‌کنیم تا یک وب‌سایت کاربرپسند و حرفه‌ای ایجاد کنید که نه تنها
                جذاب به نظر برسد بلکه عملکرد بی‌نظیری نیز داشته باشد.
              </p>
              <button className="bg-primary mt-4 text-center text-white px-4 py-3 md:px-7 md:py-4 rounded-full hover:bg-secondary transition duration-300">
                <Link href="#order-form">شروع کنید</Link>
              </button>
            </div>
            <Image
              src="/assets/images/webRight.png"
              width={1000}
              height={1000}
              alt="Web Development"
              className="w-full"
            />
          </div>
        </motion.div>

        <h2 className="font-bold text-primary text-center my-6 text-4xl">
          خدمات ما
        </h2>

        {/* What We Offer Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white shadow-xl hover:scale-95 transition
              duration-700 rounded-lg p-8 hover:shadow-lg hover:shadow-secondary/50 group"
            >
              <Image
                src={service.imageSrc}
                width={1000}
                height={1000}
                alt={service.title}
                className="mx-auto mb-6 rounded-xl w-full border-r-8 border-secondary"
              />
              <Image
                src={service.imageSrc}
                width={1000}
                height={1000}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <h3 className="text-2xl font-semibold text-center text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Packages Section */}

        <section className="bg-primary py-16 rounded-lg my-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-8 p-2">
              پکیج‌های توسعه وب ما
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 md:gap-8">
              {packages.map((plan, index) => (
                <div
                  style={{
                    animation: "spin-border 5s linear infinite",
                  }}
                  key={index}
                  className="divide-y divide-gray-200 rounded-2xl border-4 mx-4 border-gray-200 shadow-sm animate-[spin-border_3s_linear_infinite]"
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
                          <span className="text-gray-700">
                            {feature.feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
        <div>
          <OrderForm />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <FormUsers />
        </div>
      </div>
    </section>
  );
};
export default WebDevelopment;
