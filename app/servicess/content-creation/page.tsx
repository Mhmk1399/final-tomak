"use client";
import FormUsers from "@/components/(sercices)/FormUsers";
import Testimonials from "@/components/(sercices)/testimonial";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const packages = [
  {
    title: "پکیج پایه",
    description: "مناسب برای شروع تولید محتوا در شبکه‌های اجتماعی، شامل خدمات اولیه ویدیوگرافی و ایجاد محتوای ساده.",
    price: "۱۰۰,۰۰۰ تومان",
    features: [
      { feature: "5 ویدیوهای کوتاه با فرمت‌های مختلف", included: true },
      { feature: "تدوین اولیه ویدیوها", included: true },
      { feature: "پشتیبانی ایمیلی", included: true },
      { feature: "دسترسی به ابزارهای تحلیل عملکرد", included: false },
      { feature: "انتشار محتوا بر روی شبکه‌های اجتماعی", included: false },
      { feature: "مشاوره در مدیریت محتوا", included: false },
    ],
    icon: "/assets/images/basic.png",
  },
  {
    title: "پکیج استاندارد",
    description: "برای کسب‌وکارهایی که به تولید محتوای منظم و ویدیوهای جذاب نیاز دارند، این پکیج شامل تدوین و برنامه‌ریزی محتواست.",
    price: "۲۰۰,۰۰۰ تومان",
    features: [
      { feature: "10 ویدیوهای کوتاه بهینه‌شده", included: true },
      { feature: "تدوین حرفه‌ای و افکت‌گذاری", included: true },
      { feature: "پشتیبانی ایمیلی", included: true },
      { feature: "دسترسی به ابزارهای تحلیل عملکرد", included: true },
      { feature: "انتشار محتوا بر روی شبکه‌های اجتماعی", included: true },
      { feature: "مشاوره هفتگی در استراتژی محتوا", included: false },
    ],
    icon: "/assets/images/standard.png",
  },
  {
    title: "پکیج طلایی",
    description: "پکیج کامل برای برندسازی حرفه‌ای در شبکه‌های اجتماعی، شامل تولید ویدیوهای پیشرفته و برنامه‌ریزی استراتژیک محتوا.",
    price: "۳۰۰,۰۰۰ تومان",
    features: [
      { feature: "20 ویدیوهای تبلیغاتی و کوتاه", included: true },
      { feature: "تدوین حرفه‌ای ویدیوها با جلوه‌های ویژه", included: true },
      { feature: "پشتیبانی ایمیلی و تلفنی", included: true },
      { feature: "دسترسی کامل به ابزارهای تحلیل عملکرد", included: true },
      { feature: "مدیریت و انتشار محتوا", included: true },
      { feature: "جلسات مشاوره استراتژی محتوا و بازاریابی", included: true },
    ],
    icon: "/assets/images/gold.png",
  },
];

const ContentCreationPage = () => {
  useEffect(() => {
    document.title = "    تولید محتوا | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "در دنیای دیجیتال امروز، محتوا پادشاه است! تیم حرفه‌ای تومک با ایجاد محتوای خلاقانه و باکیفیت، به شما کمک می‌کند تا داستان برند خود را به بهترین شکل روایت کنید. "
      );
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  // Form submission handler
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);

    // Reset form data after submission

    setFormData({
      name: "",
      email: "",
      details: "",
    });

    alert("محتوای شما با موفقیت ثبت شد.");
  };

  return (
    <div className="bg-gray-100" dir="rtl">
      {/* Hero Section */}

      <section className="flex flex-col h-screen items-center justify-between xl:flex-row bg-gradient-to-r from-secondary to-primary py-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" mx-auto text-center "
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-32 lg:mt-0">
            تولید محتوای با کیفیت بالا
          </h1>
          <p className="text-base md:text-lg mb-6 p-2">
            محتوای حرفه ای متناسب با نیازهای کسب و کار شما
          </p>
          <motion.a
            href="#order-form"
            className="px-8 py-3 animate-pulse bg-secondary text-white rounded-lg shadow-lg hover:bg-primary transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            سفارش دهید
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/images/createcontent.png"
            alt="content-creation"
            width={400}
            height={500}
            className="w-full h-auto mx-auto lg:ml-12"
          />
        </motion.div>
      </section>

      {/* Package Section */}

      <section className="bg-gray-100 py-20 px-4">
        <motion.div className="text-center" initial="hidden" animate="visible">
          <h2 id="package" className="text-3xl font-bold mb-8 text-primary">
            پکیج های طراحی گرافیکی ما
          </h2>
        </motion.div>

        <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-primary rounded-2xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {packages.map((plan, index) => (
              <div
                style={{
                  animation: "spin-border 5s linear infinite",
                }}
                key={index}
                className="divide-y divide-gray-200 rounded-xl border-4 border-gray-200 shadow-sm animate-[spin-border_3s_linear_infinite]"
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

                <div className="p-6 sm:px-8 bg-blue-100">
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
            ))}{" "}
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}

      <section className="bg-primary text-white py-16">
        <h3 className="text-center text-xl font-bold mb-8 md:text-2xl p-2 lg:text-4xl">
          گالری محتوای حرفه ای با تولید محتوای با کیفیت بالا
        </h3>
        <div className="container-carousel gird grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="content">
              <h2>Jane Doe</h2>
              <span>UI & UX Designer</span>
            </div>
          </div>
          <div>
            <div className="content">
              <h2>Alex Smith</h2>
              <span>CEO Expert</span>
            </div>
          </div>
          <div>
            <div className="content">
              <h2>Emily New</h2>
              <span>Web Designer</span>
            </div>
          </div>
          <div>
            <div className="content">
              <h2>Lisa Boley</h2>
              <span>Marketing Coordinator</span>
            </div>
          </div>
        </div>
      </section>
      {/* Order Form Section */}

      <section id="order-form" className="py-16 bg-gray-100 px-2">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-primary">
            محتوای خود را سفارش دهید
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-primary p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2">
                نام شما
              </label>
              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 text-gray-700  rounded-lg focus:ring-4 ring-gray-400 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2">
                ایمیل شما
              </label>
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 text-gray-700  rounded-lg focus:ring-4 ring-gray-400 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2">
                جزئیات محتوا
              </label>
              <textarea
                value={formData.details}
                placeholder="جزئیات محتوا را وارد کنید"
                required
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                className="w-full px-3 py-2 text-gray-700  rounded-lg focus:ring-4 ring-gray-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-secondary text-white rounded-lg shadow-lg hover:bg-primary"
            >
              ثبت سفارش
            </button>
          </form>
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <FormUsers />
      </section>
    </div>
  );
};

export default ContentCreationPage;
