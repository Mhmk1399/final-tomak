"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    if (
      path ===
      "/Text-Classifiers-in-Machine-Learning-A-Practical-Guide-in-persian"
    ) {
      router.replace(
        "/blogs/Text-Classifiers-in-Machine-Learning-A-Practical-Guide-in-persian"
      );
    } else if (
      path ===
      "/a-beginners-guide-about-what-is-regresion-and-when-does-it-used-in-persian-language"
    ) {
      router.replace(
        "/blogs/a-beginners-guide-about-what-is-regresion-and-when-does-it-used-in-persian-language"
      );
    }
  }, [router]);

  return (
    <div
      className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex mt-12 justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"
      dir="rtl"
    >
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl ">
                به نظر می رسد که دری به سوی هیچ چیز پیدا کرده اید
              </h1>
              <p className="mt-4 mb-9 text-gray-800">
                متاسفم برای این! لطفا از صفحه اصلی ما دیدن کنید تا به جایی که
                نیاز دارید برسید
              </p>
              <Link
                href="/"
                className="sm:w-full lg:w-auto my-6 border rounded-xl py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
              >
                منو ببر اونجا!
              </Link>
            </div>
          </div>
          <div>
            {/* SVG for 404 Image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="500"
              height="500"
            >
              <text
                x="50%"
                y="50%"
                fontSize="48"
                textAnchor="middle"
                fill="#4F46E5"
              >
                404 - صفحه مورد نظر پیدا نشد
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div>
        {/* SVG for additional illustration */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="500"
          height="500"
        >
          <circle cx="256" cy="256" r="200" fill="#E5E7EB" />
          <text
            x="50%"
            y="50%"
            fontSize="32"
            textAnchor="middle"
            fill="#374151"
          >
            Oops!
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Custom404;
