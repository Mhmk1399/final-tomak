"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  text: string;
  category: string;
  description: string;
}

const Banner: React.FC<Props> = ({ src, text, category, description }) => {
  return (
    <div className="relative group h-[300px] md:h-[400px] lg:h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={src}
          alt={text}
          fill
          className="object-cover brightness-50 opacity-90 group-hover:brightness-[0.4] transition-all duration-300 ease-in-out "
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-center gap-3">
          <p className="lg:text-lg text-base font-medium uppercase tracking-wider ">
            {category}
          </p>
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold my-8">
          {text}
        </h1>
        <p className="lg:text-lg md:text-base  text-sm max-w-3xl mx-auto leading-relaxed text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
