"use client";
import Banner from "@/components/services/Banner";
import VideoAndText from "@/components/services/videoAndText";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import {
  FaRobot,
  FaIndustry,
  FaCogs,
  FaChartLine,
  FaMicrochip,
  FaNetworkWired,
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
  const features = [
    {
      icon: <FaRobot className="text-4xl text-blue-500" />,
      title: "اتوماسیون صنعتی",
      description: "پیاده‌سازی سیستم‌های اتوماسیون پیشرفته در صنایع مختلف",
      childFeatures: ["PLC", "SCADA", "DCS", "HMI"],
      bgImage: "url('/assets/images/industrial-automation.jpg')",
    },
    {
      icon: <FaIndustry className="text-4xl text-gray-800" />,
      title: "رباتیک صنعتی",
      description: "طراحی و پیاده‌سازی سیستم‌های رباتیک",
      childFeatures: [
        "برنامه‌نویسی ربات",
        "کنترل حرکت",
        "بینایی ماشین",
        "مونتاژ اتوماتیک",
      ],
      bgImage: "url('/assets/images/robotics.jpg')",
    },
    {
      icon: <FaCogs className="text-4xl text-green-500" />,
      title: "اتوماسیون فرآیند",
      description: "بهینه‌سازی فرآیندهای تولید و خط مونتاژ",
      childFeatures: ["کنترل فرآیند", "مانیتورینگ", "گزارش‌گیری", "بهینه‌سازی"],
      bgImage: "url('/assets/images/process.jpg')",
    },
    {
      icon: <FaChartLine className="text-4xl text-purple-500" />,
      title: "هوشمندسازی صنعتی",
      description: "پیاده‌سازی راهکارهای صنعت 4.0 و IoT صنعتی",
      childFeatures: ["IIoT", "Big Data", "هوش مصنوعی صنعتی", "پردازش ابری"],
      bgImage: "url('/assets/images/smart-industry.jpg')",
    },
    {
      icon: <FaMicrochip className="text-4xl text-orange-500" />,
      title: "سیستم‌های کنترل",
      description: "طراحی و پیاده‌سازی سیستم‌های کنترل هوشمند",
      childFeatures: ["کنترل پیشرفته", "کنترل فازی", "PID", "کنترل تطبیقی"],
      bgImage: "url('/assets/images/control.jpg')",
    },
  ];

  // Update the heading and description
  const HeadingSwichBox = "خدمات اتوماسیون صنعتی";
  const DescriptionSwichBox =
    "ارائه راهکارهای جامع اتوماسیون صنعتی با استفاده از تکنولوژی‌های پیشرفته برای افزایش بهره‌وری و کارایی در صنایع مختلف";

  useEffect(() => {
    document.title = " اتوماسیون سازمانی | خدمات تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "ارائه خدمات اتوماسیون صنعتی با استانداردهای جهانی برای صنایع مختلف"
      );
    }
  }, []);

  const blogData = {
    title: "اتوماسیون صنعتی | خدمات تومک",
    url: "/engineeringServicess/automation",
    images: ["/assets/images/automation-banner.jpg"],
    sections: [
      {
        heading: "اتوماسیون صنعتی پیشرفته",
        content:
          "ارائه خدمات اتوماسیون صنعتی با استانداردهای جهانی برای صنایع مختلف",
        lists: [
          "اتوماسیون خط تولید",
          "سیستم‌های کنترل پیشرفته",
          "رباتیک صنعتی",
          "مانیتورینگ هوشمند",
          "یکپارچه‌سازی سیستم‌ها",
        ],
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
          text="اتوماسیون صنعتی"
          category="خدمات مهندسی"
          description="طراحی و پیاده‌سازی سیستم‌های اتوماسیون صنعتی پیشرفته با استفاده از تکنولوژی‌های روز دنیا برای افزایش بهره‌وری و کارایی در صنایع مختلف"
        />

        <div className="mx-8">
          <VideoAndText
            heading="اتوماسیون صنعتی با تکنولوژی‌های پیشرفته"
            subText="با استفاده از پیشرفته‌ترین تکنولوژی‌های اتوماسیون صنعتی مانند PLC، SCADA، DCS و HMI، سیستم‌های هوشمند و کارآمد را برای صنعت شما پیاده‌سازی می‌کنیم. تیم متخصص ما با تمرکز بر طراحی دقیق، عملکرد پایدار و قابلیت اطمینان بالا، سیستم‌هایی را پیاده‌سازی می‌کند که نه تنها کارآمد هستند، بلکه انعطاف‌پذیر، ایمن و مقیاس‌پذیر نیز می‌باشند. این راهکارها به صنعت شما کمک می‌کند تا با افزایش بهره‌وری و کاهش هزینه‌ها، به استانداردهای صنعت 4.0 دست یابد."
            videoSrc={{
              "1080p": "/assets/videos/nlpvideo.mp4",
              "720p": "/assets/videos/nlpvideo.mp4",
              "480p": "/assets/videos/nlpvideo.mp4",
            }}
          />
        </div>
        <div className="mx-8">
          <DoubleText
            heading="مزایای اتوماسیون صنعتی برای کسب‌وکار شما"
            subText="با پیاده‌سازی سیستم‌های اتوماسیون صنعتی، کسب‌وکار شما به سطح جدیدی از بهره‌وری و کارایی دست می‌یابد. از کنترل دقیق فرآیندها و کاهش خطاهای انسانی تا بهینه‌سازی مصرف انرژی و منابع، همه با تمرکز بر نیازهای خاص صنعت شما طراحی می‌شود. تیم متخصص ما با تجربه عمیق در اتوماسیون صنعتی، راهکارهایی را ارائه می‌دهد که کاملاً با اهداف تولیدی شما همسو است. این راهکارها به شما امکان می‌دهند تا با افزایش سرعت تولید، بهبود کیفیت محصولات، کاهش هزینه‌های عملیاتی و ارتقای ایمنی، مزیت رقابتی خود را در صنعت تقویت نمایید."
          />
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
