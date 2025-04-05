"use client";
import Banner from "@/components/services/Banner";
import Options from "../../components/services/Options";
import KindOfServices from "@/components/services/KindOfServices";
import DoubleText from "@/components/services/doubleText";
import OlympicRings from "@/components/circle";
import VideoAndText from "@/components/services/videoAndText";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WhyUs from "@/components/why-us";
import Pricing from "@/components/pricing";
const servicesData = [
  {
    id: 1,
    title: "پردازش زبان طبیعی فارسی",
    href: "/aiServices/persian-natural-language-processing",
    icon: "/assets/images/nlp.svg",
    description: "راهکارهای هوشمند پردازش متن و گفتار فارسی با دقت بالا",
    gradient: "from-blue-500 to-blue-700",
    details: [
      "تحلیل احساسات متون فارسی",
      "چت‌بات‌های هوشمند فارسی‌زبان",
      "خلاصه‌سازی خودکار متون",
    ],
    videosrc: "/assets/videos/nlpvideo.mp4",
  },
  {
    id: 2,
    title: "یادگیری ماشین سفارشی",
    href: "/aiServices/custom-machine-learning",

    icon: "/assets/images/ml.svg",
    description: "توسعه مدل‌های یادگیری ماشین مختص کسب‌وکار شما",
    gradient: "from-green-500 to-green-700",
    details: [
      "پیش‌بینی رفتار مشتریان",
      "تشخیص الگوهای کسب‌وکار",
      "بهینه‌سازی فرآیندها",
    ],
    videosrc: "/assets/videos/llmvideo.mp4",
  },
];
const Page = () => {
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

  return (
    <>
      <div className="mt-36">
        <Banner
          src="/assets/images/heade-application-development-min-2048x725.jpg"
          text="راهکارهای هوش مصنوعی"
          category="هوش مصنوعی و یادگیری ماشین"
          description="با استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی و یادگیری ماشین، راهکارهای هوشمند و سفارشی برای کسب‌وکارهای فارسی‌زبان ارائه می‌دهیم."
        />{" "}
      </div>

      <div className="mx-8 my-16">
        <Toaster position="top-center" />
        <VideoAndText
          heading="چرا باید از هوش مصنوعی در کسب و کار خودتون استفاده کنید"
          subText="ما در شرکت تومک پیشرو در شخصی سازی و استفاده از مدل های هوش مصنوعی در کسب و کار های فارسی زبان هستیم
شما با استفاده از این تکنیک ها والگوریتم ها میتونید فرایند های کسب و کارتون را خودکار کنید و با تحلیل این داده ها تصمیمات بهتر و سریع تری را بگیرید 
خدمات متنوعی نسبت به پیچیدگی ها و مشکلات زبان فارسی و کسب و کار های کشور عزیزمون ایران برای شما اماده شده که شامل پردازش زبان های طبیعی ،یادگیری های شخصی سازی شده و پردازش تصاویر می باشد 
روند ساخت این نوع اپلیکیشن ها شامل تحقیق بازار ،طرح مسئله ،مهندسی داده ،تست و اشکال یابیست  که بتونیم با بالاترین کیفیت ممکن دیجیتال سازی کسب و کار شما را انجام دهیم  
برای اطلاعات بیشتر درمورد جزئیات خدمات میتونید به صفحه مربوطه در وبسایت ما مراجعه کنید 
به امید آینده ای دیجیتال برای کشور عزیزمون 
"
          videoSrc={{
            "1080p": "/assets/videos/fullai.mp4",
            "720p": "/assets/videos/fullai.mp4",
            "480p": "/assets/videos/fullai.mp4",
          }}
        />
        <DoubleText
          heading="مزایای استفاده از هوش مصنوعی در کسب‌وکار شما"
          subText="با بهره‌گیری از هوش مصنوعی و یادگیری ماشین، کسب‌وکار شما می‌تواند به سطح جدیدی از کارایی و هوشمندی دست یابد. از تحلیل داده‌های کلان و پیش‌بینی روندهای بازار گرفته تا اتوماسیون فرآیندها و خدمات مشتری هوشمند، همه با تمرکز ویژه بر نیازهای خاص بازار فارسی‌زبان. تیم متخصص ما با درک عمیق از چالش‌های زبان فارسی در هوش مصنوعی، راهکارهایی را توسعه می‌دهد که دقیقاً متناسب با نیازهای بومی شماست. این راهکارها به شما کمک می‌کنند تا تصمیمات هوشمندانه‌تری بگیرید، هزینه‌ها را کاهش دهید و مزیت رقابتی خود را در بازار افزایش دهید."
        />{" "}
        <div className="mt-12">
          <Options />
        </div>
        <KindOfServices
          servicesData={servicesData}
          title="خدمات ما"
          subtitle="راه‌حل‌های نوآورانه برای کسب و کار شما"
        />{" "}
        <WhyUs />
        <OlympicRings />
        <Pricing />
        <div className="mt-12 mb-64"></div>
        <div className="-mt-64">
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
    </>
  );
};

export default Page;
