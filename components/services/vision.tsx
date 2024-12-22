import Image from "next/image";
import React from "react";

interface VisionProps {
  image: string;
  subTitle: string;
  title: string;
}

const Vision: React.FC<VisionProps> = ({ image, subTitle, title }) => {
  return (
    <div dir="rtl" className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-between items-center p-4">
        <div className="p-4">
          <span>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-500 mb-4 mt-2 size-10 inline ml-8"
            >
              <circle cx="28" cy="28" r="19.5" stroke="#0045E6" />
              <circle cx="28" cy="28" r="9.5" stroke="#0045E6" />
              <path d="M28 8V19" stroke="#0045E6" />
              <path d="M45.3203 18L35.794 23.5" stroke="#0045E6" />
              <path d="M28 37V48" stroke="#0045E6" />
              <path d="M20.2061 32.5L10.6798 38" stroke="#0045E6" />
              <path d="M10.6797 18L20.206 23.5" stroke="#0045E6" />
              <path d="M35.7939 32.5L45.3202 38" stroke="#0045E6" />
              <path d="M29.5 31L29.5 24" stroke="#0045E6" />
              <path d="M25.5 31L25.5 24" stroke="#0045E6" />
              <path d="M31.5 31L31.5 26" stroke="#0045E6" />
              <path d="M27.5 31L27.5 26" stroke="#0045E6" />
              <path d="M23.5 31L23.5 28" stroke="#0045E6" />
              <path d="M33.5 31L33.5 28" stroke="#0045E6" />
              <path d="M21.5 31L21.5 30" stroke="#0045E6" />
            </svg>
          </span>
          <h1 className="col-span-1 inline mb-4 text-black font-bold text-2xl text-center lg:text-right">
            {title}
          </h1>

          <p className="col-span-1 text-gray-600 text-justify">{subTitle}</p>
        </div>

        <Image
          width={1000}
          height={500}
          src={image}
          alt="vision"
          className=""
        />
      </div>
    </div>
  );
};

export default Vision;
