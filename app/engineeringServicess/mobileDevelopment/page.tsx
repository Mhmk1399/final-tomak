"use client";
import Banner from "@/components/services/Banner";
import VideoAndText from "@/components/services/videoAndText";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import { FaMobile, FaAndroid, FaApple, FaCloud, FaTools } from "react-icons/fa";

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
      icon: <FaAndroid className="text-4xl text-green-500" />,
      title: "توسعه اندروید",
      description: "طراحی و توسعه اپلیکیشن‌های اندروید بومی",
      childFeatures: [
        {
          title: "Kotlin",
          description: "توضیح مختصر برای Kotlin",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Java",
          description: "توضیح مختصر برای Java",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Android SDK",
          description: "توضیح مختصر برای Android SDK",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Material Design",
          description: "توضیح مختصر برای Material Design",
          image: "/assets/images/4814017.jpg",
        },
      ],
      bgImage: "url('/assets/images/android.jpg')",
    },
    {
      icon: <FaApple className="text-4xl text-gray-800" />,
      title: "توسعه iOS",
      description: "ساخت اپلیکیشن‌های iOS با کیفیت بالا",
      childFeatures: [
        {
          title: "Swift",
          description: "توضیح مختصر برای Swift",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "SwiftUI",
          description: "توضیح مختصر برای SwiftUI",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "iOS SDK",
          description: "توضیح مختصر برای iOS SDK",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "App Store Connect",
          description: "توضیح مختصر برای App Store Connect",
          image: "/assets/images/4814017.jpg",
        },
      ],
      bgImage: "url('/assets/images/ios.jpg')",
    },
    {
      icon: <FaMobile className="text-4xl text-blue-500" />,
      title: "اپلیکیشن‌های هیبریدی",
      description: "توسعه اپلیکیشن‌های چند پلتفرمی",
      childFeatures: [
        {
          title: "React Native",
          description: "توضیح مختصر برای React Native",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Flutter",
          description: "توضیح مختصر برای Flutter",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Cross-Platform",
          description: "توضیح مختصر برای Cross-Platform",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Code Sharing",
          description: "توضیح مختصر برای Code Sharing",
          image: "/assets/images/4814017.jpg",
        },
      ],
      bgImage: "url('/assets/images/hybrid.jpg')",
    },
    {
      icon: <FaCloud className="text-4xl text-purple-500" />,
      title: "خدمات بک‌اند موبایل",
      description: "زیرساخت‌های قدرتمند برای اپلیکیشن‌های موبایل",
      childFeatures: [
        {
          title: "API Development",
          description: "توضیح مختصر برای API Development",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Push Notifications",
          description: "توضیح مختصر برای Push Notifications",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Data Sync",
          description: "توضیح مختصر برای Data Sync",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Cloud Storage",
          description: "توضیح مختصر برای Cloud Storage",
          image: "/assets/images/4814017.jpg",
        },
      ],
      bgImage: "url('/assets/images/backend-mobile.jpg')",
    },
    {
      icon: <FaTools className="text-4xl text-orange-500" />,
      title: "تست و بهینه‌سازی",
      description: "تضمین کیفیت و عملکرد اپلیکیشن",
      childFeatures: [
        {
          title: "UI Testing",
          description: "توضیح مختصر برای UI Testing",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Performance Testing",
          description: "توضیح مختصر برای Performance Testing",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Security Testing",
          description: "توضیح مختصر برای Security Testing",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "Analytics",
          description: "توضیح مختصر برای Analytics",
          image: "/assets/images/4814017.jpg",
        },
      ],
      bgImage: "url('/assets/images/testing.jpg')",
    },
  ];

  const HeadingSwichBox = "توسعه اپلیکیشن‌های موبایل";
  const DescriptionSwichBox =
    "طراحی و توسعه اپلیکیشن‌های موبایل حرفه‌ای برای پلتفرم‌های iOS و اندروید با استفاده از جدیدترین تکنولوژی‌ها";

  useEffect(() => {
    document.title = "توسعه اپلیکیشن‌های موبایل | خدمات طراحی اپلیکیشن‌ تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "طراحی و توسعه اپلیکیشن‌های موبایل حرفه‌ای برای پلتفرم‌های iOS و اندروید با استفاده از جدیدترین تکنولوژی‌ها"
      );
    }
  }, []);

  const blogData = {
    title: "توسعه اپلیکیشن موبایل | خدمات تومک",
    url: "/engineeringServicess/mobileDevelopment",
    images: ["/assets/images/mobile-development-banner.jpg"],
    sections: [
      {
        heading: "توسعه اپلیکیشن موبایل حرفه‌ای",
        content:
          "ارائه خدمات توسعه اپلیکیشن‌های موبایل با کیفیت بالا برای کسب و کارهای مدرن",
        lists: [
          "توسعه اندروید و iOS",
          "اپلیکیشن‌های هیبریدی",
          "رابط کاربری جذاب",
          "امنیت پیشرفته",
          "پشتیبانی مداوم",
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
          text="توسعه اپلیکیشن موبایل"
          category="خدمات مهندسی"
          description="طراحی و توسعه اپلیکیشن‌های موبایل حرفه‌ای برای پلتفرم‌های iOS و اندروید با بهترین تکنولوژی‌های روز دنیا برای رشد کسب و کار شما"
        />

        <div className="mx-8">
          <VideoAndText
            heading="توسعه اپلیکیشن موبایل با تکنولوژی‌های پیشرفته"
            subText="با استفاده از پیشرفته‌ترین تکنولوژی‌های توسعه موبایل مانند React Native، Flutter، Swift و Kotlin، اپلیکیشن‌های قدرتمند و کاربرپسند را برای کسب‌وکار شما توسعه می‌دهیم. تیم متخصص ما با تمرکز بر طراحی جذاب، عملکرد روان و امنیت بالا، اپلیکیشن‌هایی می‌سازد که نه تنها زیبا هستند، بلکه سریع، امن و مقیاس‌پذیر نیز می‌باشند. این راهکارها به کسب‌وکار شما کمک می‌کند تا حضور قدرتمندی در دنیای موبایل داشته و تجربه کاربری فوق‌العاده‌ای را برای مشتریان خود فراهم کند."
            videoSrc={{
              "1080p": "/assets/videos/nlpvideo.mp4",
              "720p": "/assets/videos/nlpvideo.mp4",
              "480p": "/assets/videos/nlpvideo.mp4",
            }}
          />
        </div>
        <div className="mx-8">
          <DoubleText
            heading="مزایای توسعه اپلیکیشن موبایل حرفه‌ای برای کسب‌وکار شما"
            subText="با پیاده‌سازی اپلیکیشن موبایل حرفه‌ای، کسب‌وکار شما به یک حضور قدرتمند در دنیای موبایل دست می‌یابد. از طراحی کاربرپسند و عملکرد روان تا بهینه‌سازی مصرف باتری و فضای ذخیره‌سازی، همه با تمرکز بر نیازهای خاص برند شما طراحی می‌شود. تیم متخصص ما با تجربه عمیق در توسعه موبایل، راهکارهایی را ارائه می‌دهد که کاملاً با اهداف کسب‌وکار شما همسو است. این راهکارها به شما امکان می‌دهند تا با افزایش تعامل کاربران، بهبود نرخ نصب و حفظ کاربر، و ارائه تجربه کاربری عالی، مزیت رقابتی خود را در بازار اپلیکیشن‌های موبایل تقویت نمایید."
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
