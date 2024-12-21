"use client";
import FormUsers from "@/components/(sercices)/FormUsers";
import Testimonials from "@/components/(sercices)/testimonial";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DataAnalyzer = () => {
  useEffect(() => {
    document.title = "   آنالیز داده  | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "داده‌ها قلب تصمیم‌گیری‌های موفق کسب‌وکارها هستند. در تومک، ما با استفاده از تکنیک‌های پیشرفته آنالیز داده، به شما کمک می‌کنیم تا بینش‌های ارزشمند و کاربردی از داده‌های خود به دست آورید. "
      );
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const sectionTwo = [
    {
      title: "تجزیه و تحلیل داده ",
      image: "/assets/images/analyze1.png",
      description:
        "از داده های گذشته برای پیش بینی نتایج آینده برای تصمیم گیری بهتر استفاده میکنیم",
    },
    {
      title: "بینش در زمان واقعی",
      image: "/assets/images/analyze2.png",

      description:
        "فوراً اطلاعات به روز را دریافت کنید تا سریعتر روی داده ها تمرکز و تحلیل و در آخر عمل کنید",
    },
    {
      title: "گزارش  سفارشی",
      image: "/assets/images/analyze3.png",

      description:
        "گزارش های متناسب با نیازهای کسب و کار خود را می توانید از تیم ما به صورت منظم دریافت کنید",
    },
    {
      title: "امنیت داده ها",
      image: "/assets/images/analyze4.png",

      description:
        "اطمینان حاصل کنید که داده های شما همیشه در فضایی امن بوده و محافظت می شود",
    },
  ];
  const sectionThree = [
    {
      step: "جمع آوری",
      description: "ما داده های شما را جمع آوری می‌کنیم.",
      count: 1,
    },
    {
      step: "تحلیل",
      description: "ما داده‌های شما را دقیق تحلیل می‌کنیم.",
      count: 2,
    },
    {
      step: "گزارش",
      description: "ما گزارش‌های واضح و جامع ارائه می‌دهیم.",
      count: 3,
    },
  ];
  const packageSection = [
    {
      title: "پکیج پایه",
      description: "این پکیج یکی از پکیج های پایه و اولیه است",
      price: "100.000",
      features: [
        { feature: "10 users", included: true },
        { feature: "2GB of storage", included: true },
        { feature: "Email support", included: true },
        { feature: "Help center access", included: false },
        { feature: "Phone support", included: false },
        { feature: "Community access", included: false },
      ],
      icon: "/assets/images/basic.png",
    },
    {
      title: "پکیج استاندارد ",
      description: "این پکیج یکی از پکیج های استاندارد است",
      price: "200.000",
      features: [
        { feature: "20 users", included: true },
        { feature: "5GB of storage", included: true },
        { feature: "Email support", included: true },
        { feature: "Help center access", included: true },
        { feature: "Phone support", included: false },
        { feature: "Community access", included: false },
      ],
      icon: "/assets/images/standard.png",
    },
    {
      title: "پکیج طلایی ",
      description: "این پکیج یکی از پکیج های طلایی است",
      price: "300.000",
      features: [
        { feature: "50 users", included: true },
        { feature: "20GB of storage", included: true },
        { feature: "Email support", included: true },
        { feature: "Help center access", included: true },
        { feature: "Phone support", included: true },
        { feature: "Community access", included: true },
      ],
      icon: "/assets/images/gold.png",
    },
  ];

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
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
    <div dir="rtl" className="bg-background">
      {/* Hero Section */}

      <section className="h-fit bg-gradient-to-r from-secondary to-primary">
        <div className="flex flex-col items-center justify-between xl:flex-row rounded-2xl py-10 lg:py-20">
          <div className="text-center w-[50%]">
            <motion.h1
              className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 mt-24 xl:mt-0 p-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              با تحلیلگر داده، بینش‌های جدید را کشف کنید{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              className="text-base sm:text-lg mb-6 p-3"
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              این جمله به این معناست که با استفاده از ابزار تحلیل داده،
              می‌توانید اطلاعات ارزشمندی از داده‌های خود به دست آورید و از آنها
              برای بهبود تصمیم‌گیری و عملکرد کسب‌وکار استفاده کنید
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white text-blue-500 px-6 font-medium py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Link href="#package-form">درخواست سفارش ⬇</Link>
            </motion.button>
          </div>
          <div className="w-full xl:w-1/2">
            <Image
              src="/assets/images/bganalyze.png"
              width={500}
              height={500}
              alt="Web Development"
              className="w-full "
            />
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-2xl lg:text-4xl font-bold mb-10 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            ویژگی های کلیدی تجزیه و تحلیل داده های ما
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {sectionTwo.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                key={index}
                className="bg-white shadow-lg rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="group relative cursor-pointer overflow-hidden bg-transparent rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12">
                  <span className="absolute top-0 left-0 z-0 h-32 w-full rounded-full bg-gradient-to-r from-secondary to-primary opacity-75 transition-all duration-500 transform group-hover:scale-[20]">
                    <Image
                      src={feature.image}
                      alt="Feature"
                      width={5000}
                      height={5000}
                      className="w-full h-full group-hover:blur-sm transition-all duration-300"
                    />
                  </span>
                  <div className="relative z-10 mx-auto max-w-md">
                    <span className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-purple-700 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-blue-300">
                      <svg
                        className="h-12 w-12 text-white transition-all"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="space-y-6 pt-6 text-lg leading-8 text-primary transition-all duration-500 group-hover:text-white">
                      <p className="font-medium ">{feature.title}</p>
                    </div>
                    <div className="pt-6 text-lg leading-7">
                      <span className="text-gray-400 transition-all duration-500 group-hover:text-white">
                        {feature.description}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}

      <motion.h2
        className="text-3xl font-bold mb-2 text-secondary text-center p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        فرآیند تجزیه و تحلیل داده های ما
      </motion.h2>

      <section className="py-6 bg-analyze-custom" dir="rtl">
        <div className="max-w-6xl mx-auto px-6 text-center mt-72 lg:mt-80">
          <div className="grid gap-8 sm:grid-cols-3">
            {sectionThree.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-t from-primary to-secondary/60 hover:bg-gradient-to-t hover:from-black/80 hover:to-primary shadow-lg rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-8xl font-extrabold text-black/80 group hover:text-white">
                  {step.count}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {step.step}
                </h3>
                <p className="text-white/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}

      <section
        className="mt-[26rem] md:mt-0 bg-background py-20 px-4 rounded-3xl"
        id="package-form"
      >
        <div className=" mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-10 mt-5 p-4 text-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            برنامه خود را انتخاب کنید
          </motion.h2>
          <motion.p className="text-lg text-gray-700 mb-10 text-center">
            تجزیه و تحلیل داده های ما به شما امکان می دهد تا به سادگی داده های
            خود را دریافت کنید و آنها را به صورت سریع و آسان تجزیه و تحلیل کنید.
          </motion.p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 md:gap-8 bg-primary p-12 rounded-3xl">
            {packageSection.map((plan, index) => (
              <div
                style={{
                  animation: "spin-border 5s linear infinite",
                }}
                key={index}
                className="divide-y divide-gray-200 bg-primary rounded-xl border-4 border-gray-200 shadow-sm animate-[spin-border_3s_linear_infinite]"
              >
                <div className="p-6 sm:px-8 rounded-xl">
                  <div className="flex items-center justify-between rounded-xl">
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

      {/* Order Section */}

      <section className="py-16" id="order-form">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-10 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            همین الان سفارش خود را ثبت کنید
          </motion.h2>
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-lg font-bold mb-2 text-black/60">
                نام و نام خانوادگی :
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 focus:outline-none focus:ring-2 rounded-lg text-black"
                placeholder="نام کامل خود را وارد کنید"
              />
            </div>
            <div>
              <label className="block text-lg font-bold mb-2 text-black/60">
                آدرس ایمیل :
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 focus:outline-none focus:ring-2 rounded-lg text-black"
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>
            <div>
              <label className="block text-lg font-bold mb-2 text-black/60">
                بسته خدمات :
              </label>
              <select
                className="w-full p-3 focus:outline-none focus:ring-2 rounded-lg text-black"
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
              >
                <option>پایه</option>
                <option>استاندارد</option>
                <option>طلایی</option>
              </select>
            </div>
            <button
              className="w-full bg-gradient-to-r from-secondary to-primary text-white p-3 rounded-lg hover:font-bold transition duration-300"
              type="submit"
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
export default DataAnalyzer;
