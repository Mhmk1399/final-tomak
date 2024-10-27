"use client";
import Link from "next/link";
import React from "react";

const DotSection = () => {
  const dots = [
    {
      label: "طراحی وبسایت",
      href: "/",
      color: "bg-blue-500",
      orbitDuration: "20s",
    },
    {
      label: "سئو",
      href: "/about",
      color: "bg-green-500",
      orbitDuration: "20s",
    },
    {
      label: "آنالیز داده",
      href: "/servicess/data-analyze",
      color: "bg-yellow-500",
      orbitDuration: "20s",
    },
    {
      label: "تولید محتوا",
      href: "/portfolio",
      color: "bg-purple-500",
      orbitDuration: "20s",
    },
    {
      label: "طراحی گرافیک",
      href: "/servicess/graphic-design",
      color: "bg-red-500",
      orbitDuration: "20s",
    },
  ];

  return (
    <section className="bg-primary text-white py-20 relative overflow-hidden h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl mt-4 font-extrabold">
          T o m a a k
        </h1>
      </div>

      <div className="flex justify-center items-center h-[60vh] relative">
        {/* Central "Sun" (Order) Dot */}

        <div className="absolute z-10 group">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer transition transform duration-300 group-hover:scale-110 ">
            <span className="text-xl md:text-2xl font-semibold text-white transition-opacity duration-300 group-hover:opacity-100 text-center">
              <Link href="#order">سفارش دهید</Link>
            </span>
          </div>
        </div>

        {/* Orbiting Dots */}

        {dots.map((dot, index) => (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              animation: `orbit ${dot.orbitDuration}`,
              // transform: `rotate(${(index * 360) / dots.length}deg)`,
            }}
          >
            <Link
              href={dot.href}
              className={`absolute w-20 h-20 md:w-24 md:h-24 ${dot.color} rounded-full flex items-center justify-center`}
              style={{
                transform: `rotate(${
                  (index * 360) / dots.length
                }deg) translateX(150px) rotate(${
                  (index * 360) / dots.length
                }deg)`,
                zIndex: 30,
              }}
            >
              <span className="text-xs md:text-sm font-semibold text-white text-center p-2">
                {dot.label}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default DotSection;
