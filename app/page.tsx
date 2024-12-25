"use client";
import BlogPost from "@/components/blogPost";
import Circle from "@/components/circle";
import Help from "@/components/Help";
import React, { useState, useEffect, useRef } from "react";
import { FaEye, FaCode, FaDatabase } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import Loading from "./loading";

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
      subtitle: "مهندسین همیشه همراه شما",
      description:
        "تیم تومک با بهره گیری از بروزترین تکنولوژی ها راهکارهای افزایش بازدهی تمام قسمت های کسب و کار شما را فراهم می آورد.که با تیمی خلاق و جوان توانسته ایم کسب و کار های متعددی را در این حوضه پیش ببریم. ",

      btn: "درباره ما",
    },
    {
      image: "/assets/images/stable.mp4",
      icon: <FaCode className="text-yellow-500" />,
      title: "طراحی سایت و اپلیکیشن",
      subtitle: "ورود به دنیای دیجیتال",
      description:
        "با داشتن یک اپلیکیشن اختصاصی برای کسب و کار خود سرمایه ی خود را ذخیره کنید و از آینده باخبر باشید.",
      btn: "طراحی سایت و اپلیکیشن",
    },
    {
      image: "/assets/images/bahrevary.mp4",
      icon: <FaDatabase className="text-purple-500" />,
      title: " هوش مصنوعی و دیتابیس",
      subtitle: "آزادی حداکثر ظرفیت شما",
      description:
        "بهره وری کسب و کار خود را با استفاده از مدل های هوش مصنوعی به حداکثر برسانید.",

      btn: "هوش مصنوعی و دیتابیس",
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
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> // Show loading component while videos are loading
      ) : (
        <div className="bg-[#ffffff] py-4">
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
              ${activePaneIndex === index ? "active" : "blur-sm opacity-70"}
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

                  {/* Rest of the existing slide content */}
                  {/* Replace the existing background div with this conditional rendering */}
                  {pane.image.endsWith(".mp4") ? (
                    <div className="relative w-full h-full">
                      <video
                        className="absolute w-full h-full object-cover opacity-70 duration-700 ease-in-out scale-105 transition-all z-10"
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
                      <div className="absolute inset-0 bg-black z-20"></div>
                    </div>
                  )}

                  <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-3/4 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20">
                    <h1>
                      <span className="font-light text-white mx-4 p-2  text-3xl">
                        {pane.subtitle}
                      </span>
                    </h1>

                    <p className="text-white p-8 -mt-5 lg:mt-2 overflow-y-visible">
                      <span className="text-justify  text-xs  lg:text-xl ">
                        {pane.description}
                      </span>
                    </p>
                  </div>
                  <div className="absolute mb-3 lg:mr-2 bottom-0 duration-700 bg-white/10 lg:py-3 py-1 backdrop-blur-md rounded-2xl ease-in-out flex flex-row-reverse justify-between items-center label transition-all z-30 w-full px-4">
                    <div className="content flex flex-col justify-start items-end leading-tight text-white whitespace-pre h-full">
                      <div className="ease-in-out text-sm lg:text-base text-white hover:bg-white/5 py-2 mr-1 lg:py-3 bg-white/30 rounded-xl px-2 lg:px-4 font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">
                        <FaArrowUpRightDots className="inline text-blue-500" />
                        {pane.btn}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-900 lg:ml-3 ml-1 flex h-10 icon items-center justify-center rounded-full w-10">
                        {pane.icon}
                      </div>
                      <div className="content flex flex-col justify-start leading-tight text-white whitespace-pre h-full">
                        <div className="ease-in-out  text-sm lg:text-base font-bold duration-700 opacity-0 relative transform transition-all  translate-x-8">
                          {pane.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
          <Help />
          <Circle />
          {/* <BlogPost /> */}
        </div>
      )}
    </>
  );
};

export default Hero;
