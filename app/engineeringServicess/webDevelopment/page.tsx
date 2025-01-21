"use client";
import Banner from "@/components/services/Banner";
import VideoAndText from "@/components/services/videoAndText";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import {
  FaCode,
  FaMobile,
  FaDesktop,
  FaDatabase,
  FaLaptopCode,
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
 const HeadingSwichBox = "طراحی وب اپلیکیشن"
 const DescriptionSwichBox = "طراحی و توسعه وب اپلیکیشن های مدرن و واکنش‌گرا با استفاده از فریم‌ورک های محبوب مانند React.js، Next.js، Vue.js و غیره."
  const features = [
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: "توسعه فرانت‌اند",
      description: "طراحی و توسعه رابط کاربری مدرن و واکنش‌گرا",
      childFeatures: ["React.js", "Next.js", "Vue.js", "UI/UX پیشرفته"],
      bgImage: "url('/assets/images/frontend.jpg')",
    },
    {
      icon: <FaDatabase className="text-4xl text-green-500" />,
      title: "توسعه بک‌اند",
      description: "پیاده‌سازی سرور و API های قدرتمند و مقیاس‌پذیر",
      childFeatures: ["Node.js", "Python", "RESTful APIs", "GraphQL"],
      bgImage: "url('/assets/images/backend.jpg')",
    },
    {
      icon: <FaMobile className="text-4xl text-yellow-500" />,
      title: "طراحی واکنش‌گرا",
      description: "توسعه وب‌سایت‌های سازگار با تمام دستگاه‌ها",
      childFeatures: [
        "Responsive Design",
        "Mobile First",
        "Cross-Browser Support",
      ],
      bgImage: "url('/assets/images/responsive.jpg')",
    },
    {
      icon: <FaDesktop className="text-4xl text-pink-500" />,
      title: "بهینه‌سازی عملکرد",
      description: "بهینه‌سازی سرعت و کارایی وب‌سایت",
      childFeatures: ["SEO", "Core Web Vitals", "Performance Optimization"],
      bgImage: "url('/assets/images/performance.jpg')",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-red-500" />,
      title: "امنیت و نگهداری",
      description: "تامین امنیت و پشتیبانی مداوم از وب‌سایت",
      childFeatures: ["Security Audits", "Maintenance", "Updates & Backups"],
      bgImage: "url('/assets/images/security.jpg')",
    },
  ];

  useEffect(() => {
    document.title = "توسعه وب | خدمات طراحی وب‌سایت تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "طراحی و توسعه وب‌سایت‌های مدرن و کاربرپسند با جدیدترین تکنولوژی‌ها"
      );
    }
  }, []);

  const blogData = {
    title: "توسعه وب | خدمات طراحی وب‌سایت تومک",
    url: "/engineeringServicess/webDevelopment",
    images: ["/assets/images/web-development-banner.jpg"],
    sections: [
      {
        heading: "توسعه وب حرفه‌ای",
        content:
          "طراحی و توسعه وب‌سایت‌های مدرن و کاربرپسند با جدیدترین تکنولوژی‌ها",
        lists: [
          "طراحی واکنش‌گرا",
          "توسعه فرانت‌اند",
          "توسعه بک‌اند",
          "بهینه‌سازی SEO",
          "امنیت پیشرفته",
        ],
      },
      {
        heading: "مزایای توسعه وب حرفه‌ای",
        content:
          "با استفاده از خدمات توسعه وب ما، کسب‌وکار شما صاحب یک وب‌سایت مدرن، سریع و امن خواهد شد.",
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
          text="توسعه و طراحی وب"
          category="خدمات مهندسی"
          description="طراحی و توسعه وب‌سایت‌های مدرن، سریع و واکنش‌گرا با استفاده از جدیدترین تکنولوژی‌های روز دنیا برای رشد کسب و کار شما"
        />

        <div className="mx-8">
          <VideoAndText
            heading="توسعه وب حرفه‌ای با تکنولوژی‌های مدرن"
            subText="با استفاده از پیشرفته‌ترین تکنولوژی‌های توسعه وب مانند React، Next.js و Node.js، وب‌سایت‌های قدرتمند و کاربرپسند را برای کسب‌وکار شما توسعه می‌دهیم. تیم متخصص ما با تمرکز بر طراحی واکنش‌گرا، بهینه‌سازی عملکرد و امنیت بالا، پلتفرم‌های وبی می‌سازد که نه تنها زیبا هستند، بلکه سریع، امن و مقیاس‌پذیر نیز می‌باشند. این راهکارها به کسب‌وکار شما کمک می‌کند تا حضور آنلاین قدرتمندی داشته و تجربه کاربری فوق‌العاده‌ای را برای مشتریان خود فراهم کند."
            videoSrc={{
              "1080p": "/assets/videos/nlpvideo.mp4",
              "720p": "/assets/videos/nlpvideo.mp4",
              "480p": "/assets/videos/nlpvideo.mp4",
            }}
          />
        </div>
        <div className="mx-8">
          <DoubleText
            heading="مزایای طراحی و توسعه وب حرفه‌ای برای کسب‌وکار شما"
            subText="با پیاده‌سازی وب‌سایت حرفه‌ای، کسب‌وکار شما به یک حضور آنلاین قدرتمند و تأثیرگذار دست می‌یابد. از طراحی واکنش‌گرا و سازگار با تمام دستگاه‌ها تا بهینه‌سازی موتورهای جستجو و سرعت بارگذاری، همه با تمرکز بر نیازهای خاص برند شما. تیم متخصص ما با تجربه عمیق در توسعه وب، راهکارهایی را طراحی می‌کند که کاملاً با اهداف کسب‌وکار شما همسو است. این راهکارها به شما امکان می‌دهند تا با افزایش ترافیک وب‌سایت، بهبود نرخ تبدیل و ارائه تجربه کاربری عالی، مزیت رقابتی خود را در فضای دیجیتال تقویت نمایید."
          />
        </div>

        <div className="min-h-screen p-8 ">
          <FeatureSection features={features} heading={HeadingSwichBox} description={DescriptionSwichBox} />

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
