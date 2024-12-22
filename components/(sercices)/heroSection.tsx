import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="bg-gradient-to-t from-primary to-secondary text-white py-20 h-fit overflow-hidden">
      <div className="container mx-auto px-6 text-center mt-12">
        <Image
          src="/assets/images/dev.svg"
          alt="Web Development"
          width={1000}
          height={1000}
          className={`mx-auto md:mt-52 mt-44 lg:mt-44 ${
            animate ? "slide-in-right" : ""
          }`}
        />

        <p
          className={`text-xl my-10 md:text-center md:mr-20 text-center ${
            animate ? "slide-in-left" : ""
          }`}
        >
          با ما شریک شوید تا برنامه های کاربردی وب و موبایلی پیشرفته را متناسب
          با نیازهای کسب و کار شما توسعه دهیم
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
