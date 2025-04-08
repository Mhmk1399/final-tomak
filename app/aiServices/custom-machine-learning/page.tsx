"use client";
import VideoAndText from "@/components/services/videoAndText";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import {
  FaRobot,
  FaBrain,
  FaChartLine,
  FaCogs
} from "react-icons/fa";

import DoubleText from "@/components/services/doubleText";
import { BlogSchema } from "@/components/schema/blogSchema";
import FeatureSection from "@/components/switchBox";
import WhyUs from "@/components/why-us";

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
  const HeadingSwichBox =
    "توسعه مدل‌های یادگیری ماشین سفارشی برای نیازهای خاص شما";
  const DescriptionSwichBox =
    "ما با استفاده از پیشرفته‌ترین تکنیک‌های هوش مصنوعی و یادگیری ماشین، راهکارهای سفارشی‌سازی شده برای کسب‌وکار شما ارائه می‌دهیم. از مدل‌سازی پیشرفته تا تحلیل‌های پیش‌بینانه، تمام خدمات ما با دقت و تخصص برای رفع نیازهای خاص شما طراحی شده‌اند.";

  const features = [
    {
      icon: <FaRobot className="text-4xl text-blue-500" />,
      title: "مدل‌سازی پیشرفته",
      description:
        "طراحی و پیاده‌سازی مدل‌های یادگیری ماشین سفارشی‌سازی شده با استفاده از آخرین تکنیک‌های هوش مصنوعی برای حل چالش‌های خاص کسب‌وکار شما",
      childFeatures: [
        {
          title: "یادگیری عمیق",
          description:
            "پیاده‌سازی شبکه‌های عصبی عمیق (DNN) برای پردازش داده‌های پیچیده. این شامل معماری‌های پیشرفته مانند شبکه‌های کانولوشنی (CNN) برای پردازش تصویر، شبکه‌های بازگشتی (RNN) برای داده‌های سری زمانی و ترنسفورمرها برای پردازش زبان طبیعی می‌شود. ما مدل‌ها را از پایه طراحی می‌کنیم یا از مدل‌های از پیش آموزش دیده (Pretrained) استفاده می‌کنیم.",
          image: "/assets/images/deep-learning-svgrepo-com.svg",
        },
        {
          title: "شبکه‌های عصبی",
          description:
            "توسعه شبکه‌های عصبی مصنوعی سفارشی برای کاربردهای خاص. این شامل طراحی معماری شبکه، انتخاب توابع فعال‌سازی مناسب، تنظیم نرخ یادگیری و پیاده‌سازی مکانیزم‌هایی برای جلوگیری از بیش‌برازش (Overfitting) می‌شود. ما شبکه‌های عصبی را برای کاربردهایی مانند تشخیص الگو، پیش‌بینی و طبقه‌بندی بهینه می‌کنیم.",
          image: "/assets/images/neural-network-svgrepo-com.svg",
        },
        {
          title: "الگوریتم‌های پیشرفته",
          description:
            "پیاده‌سازی و بهینه‌سازی الگوریتم‌های پیشرفته یادگیری ماشین مانند XGBoost، LightGBM و CatBoost برای دستیابی به بهترین عملکرد. ما این الگوریتم‌ها را با توجه به ماهیت داده‌های شما (ساختار یافته یا غیرساختار یافته) انتخاب و پارامترهای آنها را به دقت تنظیم می‌کنیم تا به بالاترین دقت ممکن دست یابیم.",
          image: "/assets/images/openai-svgrepo-com.svg",
        },
      ],
      bgImage: "url('/assets/images/ai.jpg')",
    },
    {
      icon: <FaBrain className="text-4xl text-green-500" />,
      title: "پردازش هوشمند داده",
      description:
        "تحلیل و پردازش خودکار داده‌های کسب و کار با استفاده از تکنیک‌های پیشرفته هوش مصنوعی و یادگیری ماشین برای استخراج بینش‌های ارزشمند",
      childFeatures: [
        {
          title: "پیش‌پردازش داده",
          description:
            "آماده‌سازی و پاکسازی داده‌های خام برای تحلیل‌های بعدی. این شامل مدیریت مقادیر گمشده، شناسایی و حذف داده‌های پرت، نرمال‌سازی داده‌ها، کدگذاری متغیرهای کیفی و کاهش ابعاد داده‌ها می‌شود. ما از تکنیک‌هایی مانند PCA، t-SNE و روش‌های پیشرفته دیگر برای بهبود کیفیت داده‌ها استفاده می‌کنیم.",
          image: "/assets/images/dataflow-02-svgrepo-com.svg",
        },
        {
          title: "تشخیص الگو",
          description:
            "شناسایی الگوها و روابط پنهان در داده‌های پیچیده با استفاده از الگوریتم‌های یادگیری نظارت شده و بدون نظارت. ما از روش‌هایی مانند خوشه‌بندی، قوانین انجمنی و الگوریتم‌های تشخیص ناهنجاری برای کشف بینش‌های ارزشمند از داده‌های شما استفاده می‌کنیم.",
          image: "/assets/images/detect-and-stop-advancing-threats-svgrepo-com.svg",
        },
        {
          title: "خوشه‌بندی هوشمند",
          description:
            "دسته‌بندی خودکار داده‌ها به گروه‌های همگن با استفاده از الگوریتم‌های پیشرفته مانند K-Means، DBSCAN و خوشه‌بندی سلسله مراتبی. این روش‌ها به شما کمک می‌کنند تا ساختار داده‌های خود را بهتر درک کنید و تصمیم‌گیری‌های بهتری داشته باشید.",
          image: "/assets/images/category-and-svgrepo-com.svg",
        },
      ],
      bgImage: "url('/assets/images/data-processing.jpg')",
    },
    {
      icon: <FaChartLine className="text-4xl text-yellow-500" />,
      title: "پیش‌بینی و تحلیل",
      description:
        "پیش‌بینی روندهای آینده و تحلیل رفتار با استفاده از الگوریتم‌های پیشرفته یادگیری ماشین برای کمک به تصمیم‌گیری‌های استراتژیک",
      childFeatures: [
        {
          title: "پیش‌بینی زمانی",
          description:
            "تحلیل سری‌های زمانی و پیش‌بینی روندهای آینده با استفاده از روش‌هایی مانند ARIMA، LSTM و Prophet. این مدل‌ها می‌توانند برای پیش‌بینی فروش، پیش‌بینی تقاضا، تحلیل بازار و سایر کاربردهای تجاری استفاده شوند.",
          image: "/assets/images/time-twenty-four-svgrepo-com.svg",
        },
        {
          title: "تحلیل رگرسیون",
          description:
            "مدل‌سازی روابط بین متغیرها و پیش‌بینی مقادیر پیوسته با استفاده از روش‌های رگرسیون خطی، رگرسیون لوجستیک و روش‌های پیشرفته‌تر مانند رگرسیون ریج و لاسو. ما این مدل‌ها را برای پیش‌بینی قیمت، تخمین هزینه‌ها و سایر کاربردهای تحلیلی به کار می‌گیریم.",
          image: "/assets/images/math-format-linear-svgrepo-com.svg",
        },
        {
          title: "تشخیص ناهنجاری",
          description:
            "شناسایی رفتارها و الگوهای غیرعادی در داده‌ها با استفاده از تکنیک‌هایی مانند Isolation Forest، One-Class SVM و شبکه‌های عصبی خودرمزگذار. این روش‌ها برای تشخیص تقلب، شناسایی خطاهای سیستمی و نظارت بر سلامت تجهیزات بسیار مفید هستند.",
          image: "/assets/images/anomaly-svgrepo-com.svg",
        },
      ],
      bgImage: "url('/assets/images/prediction.jpg')",
    },
    {
      icon: <FaCogs className="text-4xl text-pink-500" />,
      title: "بهینه‌سازی فرآیندها",
      description:
        "خودکارسازی و بهینه‌سازی فرآیندهای کسب و کار با استفاده از تکنیک‌های یادگیری ماشین برای افزایش کارایی و کاهش هزینه‌ها",
      childFeatures: [
        {
          title: "اتوماسیون هوشمند",
          description:
            "پیاده‌سازی سیستم‌های خودکار تصمیم‌گیری مبتنی بر هوش مصنوعی برای فرآیندهای تکراری و پیچیده. این شامل اتوماسیون فرآیندهای رباتیک (RPA)، سیستم‌های مدیریت هوشمند گردش کار و الگوریتم‌های بهینه‌سازی منابع می‌شود.",
          image: "/assets/images/automation-svgrepo-com.svg",
        },
        {
          title: "بهینه‌سازی منابع",
          description:
            "استفاده از الگوریتم‌های بهینه‌سازی و یادگیری تقویتی برای تخصیص بهینه منابع انسانی، مالی و فیزیکی. این روش‌ها به شما کمک می‌کنند تا هزینه‌ها را کاهش داده و بهره‌وری را به حداکثر برسانید.",
          image: "/assets/images/optimization-svgrepo-com.svg",
        },
        {
          title: "کاهش هزینه‌ها",
          description:
            "شناسایی فرصت‌های کاهش هزینه از طریق تحلیل داده‌های تاریخی و پیش‌بینی الگوهای هزینه. ما از تکنیک‌های پیشرفته یادگیری ماشین برای پیشنهاد راهکارهای عملی کاهش هزینه بدون تأثیر بر کیفیت خدمات استفاده می‌کنیم.",
          image: "/assets/images/cost-of-treatment-pain-injury-medical-bill-svgrepo-com.svg",
        },
      ],
      bgImage: "url('/assets/images/optimization.jpg')",
    },
   
  ];

  useEffect(() => {
    document.title = "یادگیری ماشین سفارشی";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "راهکارهای هوشمند یادگیری ماشین سفارشی برای کسب و کار شما با استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی"
      );
    }
  }, []);

  const blogData = {
    title: "یادگیری ماشین سفارشی | خدمات هوش مصنوعی تومک",
    url: "/aiServices/custom-machine-learning",
    images: ["/assets/images/heade-application-development-min-2048x725.jpg"],
    sections: [
      {
        heading: "یادگیری ماشین سفارشی با هوش مصنوعی",
        content:
          "توسعه مدل‌های یادگیری ماشین اختصاصی برای نیازهای خاص کسب و کار شما",
        lists: [
          "پیش‌بینی و تحلیل داده",
          "طبقه‌بندی هوشمند",
          "تشخیص الگو",
          "بهینه‌سازی فرآیندها",
          "پردازش تصویر سفارشی",
        ],
      },
      {
        heading: "مزایای یادگیری ماشین سفارشی",
        content:
          "با استفاده از مدل‌های سفارشی یادگیری ماشین، کسب‌وکار شما می‌تواند به راهکارهای منحصر به فرد و کاملاً اختصاصی دست یابد.",
      },
    ],
  };

  return (
    <div dir="rtl">
      <Toaster position="top-center" />
      <BlogSchema blogData={blogData} />

      <div className="mt-36">
        <div className="mx-8">
          <VideoAndText
            heading="یادگیری ماشین سفارشی با هوش مصنوعی پیشرفته"
            subText="با بهره‌گیری از جدیدترین الگوریتم‌های یادگیری ماشین و شبکه‌های عصبی عمیق، مدل‌های هوشمند سفارشی را برای کسب‌وکار شما توسعه می‌دهیم. سیستم‌های ما قادر به تحلیل داده‌های پیچیده، شناسایی الگوها، پیش‌بینی روندها و بهینه‌سازی فرآیندها به صورت خودکار هستند. این فناوری به کسب‌وکارها کمک می‌کند تا با استفاده از داده‌های خود، تصمیمات هوشمندانه‌تری بگیرند و عملکرد خود را به طور چشمگیری بهبود بخشند."
            videoSrc={{
              "1080p": "/assets/videos/nlpvideo.mp4",
              "720p": "/assets/videos/nlpvideo.mp4",
              "480p": "/assets/videos/nlpvideo.mp4",
            }}
          />
        </div>
        <div className="mx-8">
          <DoubleText
            heading="مزایای یادگیری ماشین سفارشی در کسب‌وکار شما"
            subText="با پیاده‌سازی راهکارهای یادگیری ماشین سفارشی، کسب‌وکار شما به قابلیت‌های پیشرفته تحلیلی و پیش‌بینی دست می‌یابد. از تشخیص الگوهای پیچیده در داده‌ها تا بهینه‌سازی خودکار فرآیندها و تصمیم‌گیری هوشمند، همه با تمرکز بر نیازهای خاص صنعت شما. تیم متخصص ما با تجربه عمیق در توسعه مدل‌های یادگیری ماشین، راهکارهایی را طراحی می‌کند که کاملاً با اهداف کسب‌وکار شما همسو است. این راهکارها به شما امکان می‌دهند تا با دقت بالاتر پیش‌بینی کنید، فرآیندها را خودکار کنید و با استفاده از قدرت هوش مصنوعی، مزیت رقابتی خود را در بازار تقویت نمایید."
          />
        </div>

        <div className="min-h-screen p-8 ">
          <FeatureSection
            features={features}
            heading={HeadingSwichBox}
            description={DescriptionSwichBox}
          />
          <WhyUs />

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
    </div>
  );
}
