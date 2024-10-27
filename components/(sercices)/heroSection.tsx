import React, { useEffect, useState } from "react";
import Image from "next/image";
import TypingEffect from "./typingHeroSection";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="bg-gradient-to-t from-primary to-secondary text-white py-20 h-fit overflow-hidden">
      <div className="container mx-auto px-6 text-center mt-12">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          <TypingEffect
            pause={1500}
            words={[
              "چشم انداز خود را زنده کنید",
              "و آینده را تغییر دهید",
              "همین امروز شروع کنید!",
            ]}
            speed={100}
          />
        </div>

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
