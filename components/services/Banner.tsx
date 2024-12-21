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
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] flex items-center rounded-lg overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={src}
          alt={text}
          fill
          className="object-cover brightness-50 opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-center gap-3 mb-4">
           
          <p className="text-lg font-medium uppercase tracking-wider ">
            {category}
          </p>
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          {text}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
