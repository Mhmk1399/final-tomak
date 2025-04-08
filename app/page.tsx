"use client";
// import BlogPost from "@/components/blogPost";
import Circle from "@/components/circle";
import React, { useState, useEffect, useRef } from "react";
import { FaEye, FaCode, FaDatabase } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
// import Loading from "./loading";
import Link from "next/link";
import WhyUs from "@/components/why-us";
import BlogGrid from "@/components/BlogGrid";
import ServicesGrid from "../components/ServicesGrid";

const servicesData = [
  {
    name: "مهندسی",
    href: "/engineeringServicess",
    children: [
      { name: "طراحی سایت و وب اپلیکیشن", href: "/engineeringServicess" },
      { name: "طراحی اپلیکیشن موبایل", href: "/engineeringServicess" }
    ],
  },
  {
    name: "دیتا ",
    href: "/aiServices",
    children: [
      { name: "شخصی سازی هوش مصنوعی", href: "/aiServices" },
      { name: "جمع آوری و مرتب سازی داده ها", href: "/aiServices" },
    ],
  },
];
const blogPosts = [
  {
    id: "1",
    title: "راهنمای جامع طبقه‌بندی متون یا (text classification)",
    excerpt:
      "طبقه‌بندی‌کننده‌های متن ابزارهایی هستند که داده‌های متنی ورودی را تحلیل کرده و بر اساس معیارهای مشخص، به آن‌ها برچسب یا لیبل اختصاص می‌دهند. این فرآیند در پروژه‌هایی مانند پردازش زبان‌های طبیعی (NLP)، تحلیل احساسات (Sentiment Analysis) و تشخیص نیت (Intent Detection) بسیار حیاتی است. به عنوان مثال، در مواجهه با ۱۰,۰۰۰ پیام ورودی از مشتریان پس از یک کمپین تبلیغاتی، می‌توان نظرات را به دسته‌های 'خوب'، 'بد' و 'خنثی' تقسیم‌بندی کرد. جمله‌ای مانند 'من برند شما را خیلی دوست دارم' پس از تحلیل، برچسب 'خوب' را دریافت می‌کند.",
    coverImage: "/assets/images/textclassificationBanner.jpeg",
    category: "هوش مصنوعی",
    author: {
      name: "محمد حسین محمد خانی",
      avatar: "/assets/images/proftestimonial.png",
    },
    publishDate: "۲۰ تیر ۱۴۰۲",
    readTime: "۶",
    commentCount: 8,
    slug: "Text-Classifiers-in-Machine-Learning-A-Practical-Guide-in-persian",
  },
  {
    id: "2",
    title: "راهنمای جامع رگرسیون و انواع آن در تحلیل داده",
    excerpt:
      "رگرسیون یکی از پرکاربردترین تکنیک‌های تحلیل داده و یادگیری ماشین است که در پیش‌بینی و مدل‌سازی روابط بین متغیرها استفاده می‌شود. این تکنیک‌ها به کسب‌وکارها کمک می‌کنند تا روندها را پیش‌بینی کنند، ارتباطات را درک کنند و تصمیمات داده‌محور بگیرند.",
    coverImage: "/assets/images/whatIsregresion.jpeg",
    category: "هوش مصنوعی",
    author: {
      name: "محمد حسین محمد خانی",
      avatar: "/assets/images/proftestimonial.png",
    },
    publishDate: "۲۰ تیر ۱۴۰۲",
    readTime: "۶",
    commentCount: 8,
    slug: "a-beginners-guide-about-what-is-regresion-and-when-does-it-used-in-persian-language",
  },
];

const Hero = () => {
  const [activePaneIndex, setActivePaneIndex] = useState(0);
  const progressBarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      image: "/assets/images/mohandesi.mp4",
      icon: <FaEye className="text-blue-500" />,
      title: "  ما کیم؟",
      subtitle: " توسعه فضای دیجیتال شما",

      description:
        "تیم تومک با بهره گیری از بروزترین تکنولوژی ها راهکارهای افزایش بازدهی تمام قسمت های کسب و کار شما را فراهم می آورد.که با تیمی خلاق و جوان توانسته ایم کسب و کار های متعددی را در این حوضه پیش ببریم. ",

      btn: "درباره ما",
      link: "/about",
    },
    {
      image: "/assets/images/stable.mp4",
      icon: <FaCode className="text-yellow-500" />,
      title: "طراحی سایت و اپلیکیشن",
      subtitle: "ورود به دنیای دیجیتال",
      description:
        "با داشتن یک اپلیکیشن اختصاصی برای کسب و کار خود سرمایه ی خود را ذخیره کنید و از آینده باخبر باشید.",
      btn: "طراحی سایت و اپلیکیشن",
      link: "/engineeringServicess",
    },
    {
      image: "/assets/images/bahrevary.mp4",
      icon: <FaDatabase className="text-purple-500" />,
      title: " هوش مصنوعی و دیتابیس",
      subtitle: "آزادی حداکثر ظرفیت شما",
      description:
        "بهره وری کسب و کار خود را با استفاده از مدل های هوش مصنوعی به حداکثر برسانید.",

      btn: "هوش مصنوعی و دیتابیس",
      link: "/aiServices",
    },
  ];

  const nextSlide = () => {
    setActivePaneIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start a new interval
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 15000);

    // Reset and animate progress bar
    const currentBar = progressBarRefs.current[activePaneIndex];
    if (currentBar) {
      currentBar.style.width = "0%";
      requestAnimationFrame(() => {
        currentBar.style.width = "100%";
        currentBar.style.transition = "width 15000ms linear";
      });
    }

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activePaneIndex]);

  const handleManualSlideChange = (index: number) => {
    setActivePaneIndex(index);
  };
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      console.log(isLoading);
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <Loading /> // Show loading component while videos are loading
      ) : ( */}
      <div className="bg-white py-4">
        <div
          className=" flex flex-col  items-stretch justify-center h-screen p-2  lg:flex-row sm:items-center"
          dir="rtl"
        >
          <div
            className="flex flex-col flex-grow items-stretch max-w-7xl min-w-md w-full lg:flex-row sm:h-[80vh] sm:overflow-hidden mt-24"
            dir="rtl"
          >
            {slides.map((pane, index) => (
              <div
                key={index}
                onClick={() => handleManualSlideChange(index)}
                className={`
                    cursor-pointer 
                    duration-700 
                    ease-in-out 
                    flex-grow 
                    m-2 
                    min-h-14 
                    min-w-14 
                    overflow-hidden 
                    pane 
                    relative 
                    transition-all
                    ${activePaneIndex === index ? "active" : ""}
                  `}
              >
                {/* Progress Bar */}
                <div className="absolute  w-[82%] lg:top-[28rem] mx-8 h-1 bg-white/30 lg:w-1/2  z-40">
                  <div
                    ref={(el: HTMLDivElement | null) => {
                      if (el) progressBarRefs.current[index] = el;
                    }}
                    className="h-full rounded-full bg-white/70 transition-all duration-15000 ease-linear"
                    style={{
                      width: activePaneIndex === index ? "100%" : "0%",
                      transition:
                        activePaneIndex === index
                          ? "width 15000ms linear"
                          : "none",
                    }}
                  ></div>
                </div>

                {/* a blur overlay div for inactive panes */}
                {activePaneIndex !== index && (
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/10 opacity-60 z-25"></div>
                )}

                {pane.image.endsWith(".mp4") ? (
                  <div className="relative w-full h-full">
                    <video
                      className={`absolute w-full h-full object-cover  duration-700 ease-in-out scale-105 transition-all z-10 ${
                        activePaneIndex === index
                          ? "opacity-90"
                          : "opacity-50 backdrop-blur-sm bg-white/10"
                      }`}
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={pane.image} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40 z-20"></div>
                  </div>
                ) : (
                  <div className="relative">
                    <div
                      className="absolute background opacity-70 bg-center bg-cover bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"
                      style={{
                        backgroundImage: `url('${pane.image}')`,
                      }}
                    />
                    <div className={`absolute inset-0 bg-black z-20`}></div>
                  </div>
                )}

                <div className="absolute bg-gradient-to-b bottom-0 duration-700 bg-black/10 p-2 rounded-md ease-in-out from-transparent h-3/4 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20">
                  <h1>
                    <span className="font-light text-white mx-4 p-2  text-3xl sm:text-justify ">
                      {pane.subtitle}
                    </span>
                  </h1>

                  <p className="text-white p-8 -mt-5 lg:mt-2 overflow-y-visible ">
                    <span className="text-justify  text-xs  lg:text-xl ">
                      {pane.description}
                    </span>
                  </p>
                </div>
                <div
                  className={`absolute mb-3 lg:mr-2 bottom-0 duration-700  lg:py-3 py-1   ease-in-out flex flex-row-reverse justify-between items-center label transition-all z-30 w-full px-4 ${
                    activePaneIndex === index
                      ? "backdrop-blur-md bg-white/10 "
                      : ""
                  }`}
                >
                  <div className="content flex flex-col justify-start items-end leading-tight text-white whitespace-pre h-full">
                    <div className="ease-in-out text-xs lg:text-base text-white hover:bg-white/5 py-2 mr-1 lg:py-3 bg-white/30 rounded-xl px-1.5 lg:px-4 font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">
                      <FaArrowUpRightDots className="inline text-blue-500" />
                      <Link href={pane.link} target="_blank">
                        {pane.btn}
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`bg-gray-950 lg:ml-3 ml-1 flex h-10 icon items-center justify-center rounded-full w-10 ${
                        activePaneIndex === index ? "" : "-mb-2"
                      }`}
                    >
                      {pane.icon}
                    </div>
                    <div className="content flex flex-col justify-start leading-tight text-white whitespace-pre h-full">
                      <div className="ease-in-out  text-xs lg:text-base font-bold duration-700 opacity-0 relative transform transition-all  translate-x-8">
                        {pane.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ServicesGrid services={servicesData} />
        <div className="mb-8">
          <WhyUs />
        </div>
        <div className="mb-8">
          <Circle />
        </div>
        <div className="mb-8">
          {/* <Pricing /> */}
        </div>
        <div className="mb-8">
          <BlogGrid
            posts={blogPosts}
            title="آخرین مقالات ما"
            subtitle="جدیدترین مطالب و مقالات آموزشی تومک را دنبال کنید"
            postsPerPage={3}
          />
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Hero;
