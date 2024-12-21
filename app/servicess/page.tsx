"use client";
import React, { useEffect } from "react";
import Testimonials from "../../components/(sercices)/testimonial";
import ServicesSection from "../../components/(sercices)/servicesSection";
import DotSection from "@/components/(sercices)/DotSection";
import FormUsers from "@/components/(sercices)/FormUsers";

const Services = () => {
  useEffect(() => {
    document.title = "  خدمات  | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "در تومک، مجموعه‌ای گسترده از خدمات حرفه‌ای را برای رشد و موفقیت کسب‌وکار شما ارائه می‌دهیم. از طراحی و توسعه وب‌سایت گرفته تا تولید محتوا، تحلیل داده‌ها، و بهینه‌سازی تجربه کاربری"
      );
    }
  }, []);
  return (
    <>
      <div className="bg-background " dir="rtl">
        {/* section one (heroSection) */}

        {/* <HeroSection /> */}

        {/* section two dotSection */}

        <DotSection />

        {/* Services box Section  */}

        <ServicesSection />

        {/* Testimonials box Section */}

        <Testimonials />

        {/* FormUsers  */}

        <FormUsers />
      </div>
    </>
  );
};
export default Services;
