"use client";
import Banner from "@/components/services/Banner";
import VideoAndText from "@/components/services/videoAndText";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import {
  FaLanguage,
  FaSearch,
  FaRobot,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import DoubleText from "@/components/services/doubleText";
import { BlogSchema } from "@/components/schema/blogSchema";
import FeatureSection from "@/components/switchBox";

export default function NLPPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 2));
  };

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
        toast.success("فرم با موفقیت ارسال شد", {
          style: {
            background: "#4CAF50",
            color: "#fff",
            direction: "rtl",
            borderRadius: "10px",
            padding: "16px",
            marginTop: "16px",
          },
          duration: 3000,
        });
        setCurrentStep(0);
        setFormData({
          budget: "",
          projectType: "",
          name: "",
          phoneNumber: "",
          description: "",
        });
      } else {
        toast.error("خطا در ارسال فرم", {
          style: {
            background: "#f44336",
            color: "#fff",
            direction: "rtl",
            borderRadius: "10px",
            padding: "16px",
            marginTop: "16px",
          },
          duration: 3000,
        });
      }
    } catch (error) {
      console.log(error);

      toast.error("خطا در ارسال فرم", {
        style: {
          background: "#f44336",
          color: "#fff",
          direction: "rtl",
          borderRadius: "10px",
          padding: "16px",
          marginTop: "16px",
        },
        duration: 3000,
      });
    }
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

  const [formData, setFormData] = useState({
    budget: "",
    projectType: "",
    name: "",
    phoneNumber: "",
    description: "",
  });
  const HeadingSwichBox = "پردازش زبان فارسی";
  const DescriptionSwichBox =
    "راهکارهای هوشمند برای تحلیل و پردازش متون فارسی با استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی";

  const features = [
    {
      icon: <FaLanguage className="text-4xl text-blue-500" />,
      title: "تحلیل متون فارسی",
      description:
        "شناسایی و تحلیل عمیق متون فارسی برای استخراج اطلاعات ارزشمند.",
      childFeatures: [
        {
          title: "تشخیص موجودیت‌های نام‌برده",
          description: "توضیح مختصر برای تشخیص موجودیت‌های نام‌برده",
          image: "/assets/images/ai.jpg",
        },
        {
          title: "تحلیل احساسات متن",
          description: "توضیح مختصر برای تحلیل احساسات متن",
          image: "/assets/images/ai.jpg",
        },
        {
          title: "تقسیم‌بندی جملات",
          description: "توضیح مختصر برای تقسیم‌بندی جملات",
          image: "/assets/images/ai.jpg",
        },
      ],
      bgImage: "url('/assets/images/ai.jpg')",
    },
    {
      icon: <FaSearch className="text-4xl text-green-500" />,
      title: "جستجوی معنایی",
      description: "امکان جستجوی هوشمند و دقیق بر اساس مفهوم و معنا.",
      childFeatures: [
        {
          title: "جستجوی موضوعی",
          description: "توضیح مختصر برای جستجوی موضوعی",
          image: "/assets/images/ai.jpg",
        },
        {
          title: "پیشنهاد کلمات مشابه",
          description: "توضیح مختصر برای پیشنهاد کلمات مشابه",
          image: "/assets/images/ai.jpg",
        },
        {
          title: "تحلیل معنایی متون",
          description: "توضیح مختصر برای تحلیل معنایی متون",
          image: "/assets/images/ai.jpg",
        },
      ],
      bgImage: "url('/assets/images/data.jpg')",
    },
    {
      icon: <FaRobot className="text-4xl text-purple-500" />,
      title: "چت‌بات هوشمند",
      description: "ساخت و مدیریت چت‌بات‌های فارسی برای تعاملات طبیعی و روان.",
      childFeatures: [
        {
          title: "پاسخ‌دهی خودکار",
          description: "توضیح مختصر برای پاسخ‌دهی خودکار",
          image: "/assets/images/ai.jpg",
        },
        {
          title: "تشخیص نیت کاربر",
          description: "توضیح مختصر برای تشخیص نیت کاربر",
          image: "/assets/images/ai.jpg",
        },
        {
          title: "مدیریت مکالمات پیچیده",
          description: "توضیح مختصر برای مدیریت مکالمات پیچیده",
          image: "/assets/images/ai.jpg",
        },
      ],
      bgImage: "url('/assets/images/ai.jpg')",
    },
    {
      icon: <FaChartLine className="text-4xl text-yellow-500" />,
      title: "تحلیل داده‌های زبانی",
      description: "ارائه گزارش‌های تحلیلی بر اساس داده‌های زبانی.",
      childFeatures: [
        {
          title: "تجزیه و تحلیل روندها",
          description: "توضیح مختصر برای تجزیه و تحلیل روندها",
          image: "/assets/images/ai.jpg",
        },
        {
          title: "گزارش‌های دوره‌ای",
          description: "توضیح مختصر برای گزارش‌های دوره‌ای",
          image: "/assets/images/ai.jpg",
        },
        {
          title: "مصورسازی داده‌ها",
          description: "توضیح مختصر برای مصورسازی داده‌ها",
          image: "/assets/images/ai.jpg",
        },
      ],
      bgImage: "url('/assets/images/data.jpg')",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-500" />,
      title: "امنیت داده‌ها",
      description: "حفاظت از حریم خصوصی و امنیت داده‌های کاربران.",
      childFeatures: [
        {
          title: "رمزگذاری اطلاعات",
          description: "توضیح مختصر برای رمزگذاری اطلاعات",
          image: "/assets/images/ai.jpg",
        },
        {
          title: "مدیریت دسترسی‌ها",
          description: "توضیح مختصر برای مدیریت دسترسی‌ها",
          image: "/assets/images/ai.jpg",
        },
        {
          title: "پایش امنیتی مداوم",
          description: "توضیح مختصر برای پایش امنیتی مداوم",
          image: "/assets/images/ai.jpg",
        },
      ],
      bgImage: "url('/assets/images/ai.jpg')",
    },
  ];

  useEffect(() => {
    document.title = "پردازش زبان فارسی";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "راهکارهای هوشمند برای تحلیل و پردازش متون فارسی با استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی"
      );
    }
  }, []);

  const blogData = {
    title: "پردازش زبان طبیعی فارسی | خدمات هوش مصنوعی تومک",
    url: "/aiServices/persian-natural-language-processing",
    images: ["/assets/images/heade-application-development-min-2048x725.jpg"],
    sections: [
      {
        heading: "پردازش زبان طبیعی فارسی با هوش مصنوعی",
        content:
          "راهکارهای هوشمند برای تحلیل و پردازش متون فارسی با استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی",
        lists: [
          "تحلیل متون فارسی",
          "جستجوی معنایی",
          "چت‌بات هوشمند",
          "تحلیل داده‌های زبانی",
          "امنیت داده‌ها",
        ],
      },
      {
        heading: "مزایای پردازش زبان طبیعی",
        content:
          "با بهره‌گیری از هوش مصنوعی و یادگیری ماشین، کسب‌وکار شما می‌تواند به سطح جدیدی از کارایی و هوشمندی دست یابد.",
      },
      {
        heading: "خدمات تخصصی پردازش زبان فارسی",
        content:
          "تیم متخصص ما با درک عمیق از چالش‌های زبان فارسی در هوش مصنوعی، راهکارهایی را توسعه می‌دهد که دقیقاً متناسب با نیازهای بومی شماست.",
      },
      {
        heading: "راهکارهای هوشمند کسب و کار",
        content:
          "این راهکارها به شما کمک می‌کنند تا تصمیمات هوشمندانه‌تری بگیرید، هزینه‌ها را کاهش دهید و مزیت رقابتی خود را در بازار افزایش دهید.",
      },
    ],
  };

  return (
    <>
      <Toaster position="top-center" />
      <BlogSchema blogData={blogData} />

      <div className="mt-36">
        <Banner
          src="/assets/images/heade-application-development-min-2048x725.jpg"
          text="پردازش زبان طبیعی فارسی"
          category="هوش مصنوعی"
          description="راهکارهای هوشمند برای تحلیل و پردازش متون فارسی با استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی"
        />
        <div className="mx-8">
          <VideoAndText
            heading="پردازش زبان طبیعی فارسی با هوش مصنوعی"
            subText="با استفاده از پیشرفته‌ترین الگوریتم‌های یادگیری ماشین و شبکه‌های عصبی عمیق، متون فارسی را تحلیل، پردازش و درک می‌کنیم. سیستم ما قادر به تشخیص احساسات، طبقه‌بندی موضوعی، استخراج کلمات کلیدی و ارائه خلاصه متن به صورت هوشمند است. این فناوری به کسب‌وکارها کمک می‌کند تا بینش‌های ارزشمندی از داده‌های متنی فارسی خود به دست آورند."
            videoSrc={{
              "1080p": "/assets/videos/nlpvideo.mp4",
              "720p": "/assets/videos/nlpvideo.mp4",
              "480p": "/assets/videos/nlpvideo.mp4",
            }}
          />
        </div>
        <div className="mx-8">
          <DoubleText
            heading="مزایای استفاده از هوش مصنوعی در کسب‌وکار شما"
            subText="با بهره‌گیری از هوش مصنوعی و یادگیری ماشین، کسب‌وکار شما می‌تواند به سطح جدیدی از کارایی و هوشمندی دست یابد. از تحلیل داده‌های کلان و پیش‌بینی روندهای بازار گرفته تا اتوماسیون فرآیندها و خدمات مشتری هوشمند، همه با تمرکز ویژه بر نیازهای خاص بازار فارسی‌زبان. تیم متخصص ما با درک عمیق از چالش‌های زبان فارسی در هوش مصنوعی، راهکارهایی را توسعه می‌دهد که دقیقاً متناسب با نیازهای بومی شماست. این راهکارها به شما کمک می‌کنند تا تصمیمات هوشمندانه‌تری بگیرید، هزینه‌ها را کاهش دهید و مزیت رقابتی خود را در بازار افزایش دهید."
          />{" "}
        </div>

        <div className="min-h-screen p-8 ">
          <FeatureSection
            features={features}
            heading={HeadingSwichBox}
            description={DescriptionSwichBox}
          />

          <div className="mt-12">
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
                اگر دوست دارید که به صورت خصوصی کسب و کارتون آنالیز کنیم برامون
                این فرم کامل کنید
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
        </div>
      </div>
    </>
  );
}
