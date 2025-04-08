"use client";
import Banner from "@/components/services/Banner";
import Options from "../../components/services/Options";
import KindOfServices from "@/components/services/KindOfServices";
import DoubleText from "@/components/services/doubleText";
import OlympicRings from "@/components/circle";
import VideoAndText from "@/components/services/videoAndText";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WhyUs from "@/components/why-us";

const servicesData = [
  {
    id: 1,
    title: "طراحی وب اپلیکیشن",
    href: "/engineeringServicess/webDevelopment",
    icon: "/assets/images/web-development-svgrepo-com2.svg",
    description: "راه‌حل‌های وب مدرن و کارآمد",
    gradient: "from-green-500 to-green-700",
    details: ["توسعه فول‌استک", "طراحی واکنش‌گرا", "امنیت بالا"],
    videosrc: "/assets/videos/webaplication.mp4",
  },
  {
    id: 2,
    title: "طراحی اپلیکیشن موبایل",
    href: "/engineeringServicess/mobileDevelopment",

    icon: "/assets/images/application-customer-mobile-svgrepo-com.svg",
    description: "اپلیکیشن‌های هوشمند و کاربردی",
    gradient: "from-purple-500 to-purple-700",
    details: ["توسعه iOS و Android", "تجربه کاربری عالی", "پشتیبانی مداوم"],
    videosrc: "/assets/videos/app.mp4",
  },
];

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    budget: "",
    projectType: "",
    name: "",
    phoneNumber: "",
    description: "",
  });

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch("/api/order", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("فرم با موفقیت ارسال شد");
        setCurrentStep(0);
        setFormData({
          budget: "",
          projectType: "",
          name: "",
          phoneNumber: "",
          description: "",
        });
      } else {
        alert("خطا در ارسال فرم");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("خطا در ارسال فرم");
    }
  };
  useEffect(() => {
    document.title = "تومک | توسعه اپلیکیشن های سفارشی";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "تومک یک تیم پویا و خلاق است که با تکیه بر دانش فنی و تخصص، خدمات حرفه‌ای و کاملی را در زمینه طراحی و توسعه وب، تولید محتوا، و تحلیل داده‌ها ارائه می‌دهد. "
      );
    }
  }, []);
  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 2));
  };
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            key="budget-step"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="flex flex-col items-center h-full space-y-6"
          >
            <h2 className="text-2xl font-bold text-blue-500 rounded-2xl p-5 shadow-md shadow-blue-500">
              بودجه ی خود را وارد کنید
            </h2>
            <input
              type="number"
              placeholder="میزان بودجه"
              className="p-2 rounded-xl border-blue-500 border text-black mx-auto text-center"
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
            />
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            key="project-type"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="flex flex-col items-center space-y-6"
          >
            <h2 className="text-2xl font-bold text-blue-500">
              نوع پروژه را انتخاب کنید
            </h2>
            <select
              className="p-2 rounded-xl border-blue-500 border text-black"
              onChange={(e) =>
                setFormData({ ...formData, projectType: e.target.value })
              }
            >
              <option value="">انتخاب کنید</option>
              <option value="web">طراحی وب</option>
              <option value="mobile">اپلیکیشن موبایل</option>
              <option value="ai">هوش مصنوعی</option>
            </select>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="contact-info"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="flex flex-col items-center space-y-6"
          >
            <h2 className="text-2xl font-bold text-blue-500">اطلاعات تماس</h2>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="p-2 rounded-xl border-blue-500 border text-black"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="شماره تماس"
              className="p-2 rounded-xl border-blue-500 border text-black"
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
            <textarea
              placeholder="توضیحات پروژه"
              className="p-2 rounded-xl border-blue-500 border text-black w-full"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </motion.div>
        );
    }
  };

  return (
    <div className="mx-8 my-32">
      <Banner
        src="/assets/images/heade-application-development-min-2048x725.jpg"
        text="توسعه نرم‌افزارهای سفارشی"
        category="خدمات برنامه‌نویسی و توسعه نرم‌افزار"
        description="تیم متخصص ما با استفاده از جدیدترین تکنولوژی‌ها، راهکارهای نرم‌افزاری هوشمند و کارآمد برای کسب‌وکار شما ارائه می‌دهد. از طراحی تا پیاده‌سازی و پشتیبانی، در کنار شما هستیم."
      />
      <VideoAndText
        heading="چگونه با استفاده از اپلیکیشن ها سود سالانه خود را چند برابر کنیم ؟"
        subText="
داشتن یک اپلیکیشن اختصاصی و متناسب با کسب و کار شما کلید چند برابر کردن سود سالانه شماست 
هدف ما آسون و چند برابر کردن سرعت رشد کسب و کار شما از طریق ساخت اپلیکیشن های مهندسی شده برای رفع نیاز های بیزینس تون هست 
داشتن یک سیستم اختصاصی باعث صرفه جویی در زمان و هزینه های کسب و کار شما میشه 
ما در این بخش از خدمات به شما ساخت وب اپلیکیشن ها و اپلیکیشن های موبایل را ارائه می دیدم 
برای دریافت  توضیحات جزئیات هر کدوم از  خدمات میتونید به صفحه مربوطه در وبسایت ما مراجعه کنید "
        videoSrc={{
          "1080p": "/assets/videos/fulengeneering.mp4",
          "720p": "/assets/videos/fulengeneering.mp4",
          "480p": "/assets/videos/fulengeneering.mp4",
        }}
      />

      <DoubleText
        heading={
          "آنچه می توانید با توسعه برنامه های کاربردی سفارشی به دست آورید"
        }
        subText={
          "توسعه برنامه‌های کاربردی سفارشی به شما امکان می‌دهد تا راه‌حل‌های منحصر به فردی برای کسب و کارتان داشته باشید. با این روش می‌توانید فرآیندهای کاری را خودکار کنید، بهره‌وری را افزایش دهید و تجربه کاربری بهتری را برای مشتریان خود فراهم کنید. برنامه‌های سفارشی همچنین به شما اجازه می‌دهند تا با جمع‌آوری و تحلیل داده‌ها، تصمیمات آگاهانه‌تری بگیرید و استراتژی‌های کسب و کار خود را بهبود بخشید. از مزایای دیگر می‌توان به امنیت بالاتر، انعطاف‌پذیری بیشتر و قابلیت مقیاس‌پذیری اشاره کرد که همگی به رشد و موفقیت کسب و کار شما کمک می‌کنند."
        }
      />
      <div className="mt-12">
        <Options />
      </div>

      <div className="">
        <KindOfServices
          servicesData={servicesData}
          title="خدمات ما"
          subtitle="راه‌حل‌های نوآورانه برای کسب و کار شما"
        />{" "}
      </div>
      <div className="mb-12">
        <WhyUs />
      </div>
      <OlympicRings />

      <div className="mt-20">
        {" "}
        <div
          dir="rtl"
          className=" mx-auto lg:w-1/2 flex flex-row items-center justify-center  text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-secondary ml-2"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div></div>
          <h2
            className="text-black text-sm lg:text-lg font-bold text-center"
            dir="rtl"
          >
            اگر دوست دارید که به صورت خصوصی کسب و کارتون آنالیز کنیم برامون این
            فرم کامل کنید
          </h2>
        </div>
        <div className=" flex w-full  flex-col lg:flex-row  items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white p-8 text-center">
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

            <div className="flex justify-between mt-8">
              {currentStep < 2 ? (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mx-1"
                >
                  بعدی
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 mx-1"
                >
                  ارسال
                </button>
              )}
              {currentStep > 0 && (
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 mx-1"
                >
                  قبلی
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-32"></div>
    </div>
  );
};

export default Page;
