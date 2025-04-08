"use client";
import Banner from "@/components/services/Banner";
import VideoAndText from "@/components/services/videoAndText";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import {
  FaChartLine,
  FaCode,
  FaDesktop,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaServer,
  FaShieldAlt,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";

import DoubleText from "@/components/services/doubleText";
import { BlogSchema } from "@/components/schema/blogSchema";
import FeatureSection from "@/components/switchBox";
import DevelopmentProcess from "@/components/(sercices)/DevelopmentProcess";
import WhyChooseUs from "@/components/(sercices)/WhyChooseUs";
import { WorksShowcase } from "@/components/(sercices)/WorksCard";
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
    "برای داشتن یک وبسایت حرفه ای باید به چه نکاتی توجه کرد ؟";
  const DescriptionSwichBox = "برای مطالعه بیشتر روی هر بخش کلیک کتید";
  const features = [
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: "طراحی و توسعه وب‌سایت‌های سفارشی",
      description:
        "طراحی و توسعه وب‌سایت‌های حرفه‌ای با معماری مدرن و فناوری‌های روز دنیا مانند React.js، Next.js، Vue.js و Node.js که کاملاً منطبق بر نیازهای خاص کسب‌وکار شماست.",
      childFeatures: [
        {
          title: "طراحی UI/UX اختصاصی",
          description:
            "تیم ما با انجام تحقیقات کاربری دقیق و ایجاد وایرفریم‌های تعاملی، رابط کاربری منحصر به فردی طراحی می‌کند که هم از نظر زیبایی‌شناسی جذاب باشد و هم از نظر کاربرپسندی بهینه شده باشد. ما بر اصول طراحی مینیمال، سلسله مراتب بصری و روانشناسی رنگ‌ها مسلط هستیم تا نرخ تبدیل شما را افزایش دهیم. طراحی‌های ما کاملاً واکنش‌گرا و سازگار با تمام دستگاه‌ها از موبایل تا دسکتاپ می‌باشد.",
          image: "/assets/images/ui-china-svgrepo-com.svg",
        },
        {
          title: "توسعه فرانت‌اند پیشرفته",
          description:
            "با استفاده از جدیدترین کتابخانه‌های جاوااسکریپت مانند React.js و Vue.js، رابط کاربری پویا و تعاملی ایجاد می‌کنیم که عملکردی روان و بدون تأخیر دارد. ما از تکنیک‌های پیشرفته مانند Virtual DOM، State Management و Component-Based Architecture استفاده می‌کنیم تا اپلیکیشن‌های وب سریع و قابل نگهداری بسازیم. همچنین از بهترین شیوه‌های توسعه مانند Code Splitting و Lazy Loading برای بهینه‌سازی بارگذاری استفاده می‌کنیم.",
          image: "/assets/images/web-browsing-svgrepo-com.svg",
        },
        {
          title: "توسعه بک‌اند قدرتمند",
          description:
            "سیستم‌های بک‌اند ما با فناوری‌های مدرن مانند Node.js، Django و Laravel پیاده‌سازی می‌شوند که از امنیت بالا، مقیاس‌پذیری و عملکرد عالی برخوردار هستند. ما APIهای RESTful یا GraphQL طراحی می‌کنیم که به خوبی مستندسازی شده و برای ادغام با سیستم‌های دیگر آماده هستند. پایگاه داده‌ها را بهینه‌سازی می‌کنیم و از تکنیک‌های کش‌گذاری برای بهبود عملکرد استفاده می‌نماییم.",
          image: "/assets/images/server-square-cloud-svgrepo-com.svg",
        },
      ],
      bgImage: "url('/assets/images/custom-web-dev.jpg')",
    },
    {
      icon: <FaRocket className="text-4xl text-purple-500" />,
      title: "بهینه‌سازی عملکرد و سئو",
      description:
        "بهینه‌سازی سرعت، عملکرد و سئو وب‌سایت برای بهبود تجربه کاربری و افزایش رتبه در موتورهای جستجو",
      childFeatures: [
        {
          title: "بهینه‌سازی سرعت بارگذاری",
          description:
            "ما با انجام بهینه‌سازی‌های فنی پیشرفته مانند فشرده‌سازی تصاویر (WebP format)، فعال‌سازی کش مرورگر، بهینه‌سازی کدهای CSS/JS و استفاده از CDN، زمان بارگذاری صفحات شما را به حداقل می‌رسانیم. سرعت بارگذاری صفحات را با ابزارهایی مانند Google PageSpeed Insights و Lighthouse به دقت اندازه‌گیری و بهبود می‌دهیم تا تجربه کاربری بی‌نظیری ارائه شود که منجر به کاهش نرخ پرش و افزایش تبدیل می‌شود.",
          image: "/assets/images/speed-svgrepo-com.svg",
        },
        {
          title: "سئو فنی و محتوایی",
          description:
            "تیم سئو ما با اجرای کامل تکنیکال سئو شامل بهینه‌سازی ساختار URL، پیاده‌سازی داده‌های ساختار یافته (Schema.org)، ایجاد نقشه سایت XML و بهبود معماری لینک‌های داخلی، پایه‌های قوی برای رتبه‌بندی بهتر ایجاد می‌کند. همچنین با تحلیل کلمات کلیدی، بهینه‌سازی متا تگ‌ها و تولید محتوای ارزشمند، استراتژی محتوایی مؤثری طراحی می‌کنیم که ترافیک ارگانیک شما را به طور پیوسته افزایش می‌دهد.",
          image: "/assets/images/seo-3-svgrepo-com.svg",
        },
        {
          title: "تحلیل و مانیتورینگ مداوم",
          description:
            "ما با نصب و پیکربندی پیشرفته ابزارهای تحلیلی مانند Google Analytics 4، Google Tag Manager و Hotjar، رفتار کاربران را به دقت رصد می‌کنیم. این تحلیل‌ها شامل بررسی مسیرهای کاربری، شناسایی نقاط اصطکاک، اندازه‌گیری نرخ تبدیل و تحلیل عملکرد صفحات می‌شود. گزارش‌های ماهانه مفصلی ارائه می‌دهیم که حاوی بینش‌های ارزشمند و پیشنهادات عملی برای بهبود مستمر وب‌سایت شماست.",
          image: "/assets/images/analyze-svgrepo-com.svg",
        },
      ],
      bgImage: "url('/assets/images/performance-bg.jpg')",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-500" />,
      title: "امنیت و حفاظت از داده‌ها",
      description:
        "پیاده‌سازی لایه‌های امنیتی پیشرفته برای محافظت از وب‌سایت و اطلاعات کاربران در برابر تهدیدات سایبری",
      childFeatures: [
        {
          title: "رمزنگاری و پروتکل‌های امنیتی",
          description:
            "ما با پیاده‌سازی SSL/TLS با رمزنگاری 256 بیتی، استفاده از پروتکل HTTPS و تنظیم دقیق هدرهای امنیتی مانند CSP، HSTS و X-Frame-Options، لایه‌های محافظتی قوی ایجاد می‌کنیم. همچنین سیستم‌های احراز هویت چندعاملی (MFA) و مدیریت نشست‌های امن را پیاده‌سازی می‌کنیم تا از دسترسی‌های غیرمجاز جلوگیری شود. گواهی‌های امنیتی را به طور منظم تمدید و پیکربندی می‌نماییم.",
          image: "/assets/images/password-svgrepo-com.svg",
        },
        {
          title: "محافظت در برابر حملات",
          description:
            "با استفاده از فایروال‌های نرم‌افزاری پیشرفته (WAF)، سیستم‌های تشخیص نفوذ (IDS) و تکنیک‌های پیشرفته مانند ورودی‌سازی داده‌ها (Input Sanitization)، از وب‌سایت شما در برابر انواع حملات سایبری مانند DDoS، SQL Injection، XSS، CSRF و Brute Force محافظت می‌کنیم. تست‌های امنیتی منظم انجام می‌دهیم و وصله‌های امنیتی را بلافاصله اعمال می‌نماییم.",
          image: "/assets/images/ninja-fight-attack-mask-svgrepo-com.svg",
        },
        {
          title: "پشتیبان‌گیری خودکار",
          description:
            "سیستم پشتیبان‌گیری ما به صورت روزانه، هفتگی و ماهانه اجرا می‌شود و نسخه‌های پشتیبان در مکان‌های امن و جداگانه ذخیره می‌شوند. ما از تکنیک Point-in-Time Recovery استفاده می‌کنیم که امکان بازگردانی داده‌ها تا دقیقه‌ای قبل از خرابی را فراهم می‌کند. همچنین تست‌های بازیابی منظم انجام می‌دهیم تا از صحت نسخه‌های پشتیبان اطمینان حاصل کنیم.",
          image: "/assets/images/backup-svgrepo-com.svg",
        },
      ],
      bgImage: "url('/assets/images/security-bg.jpg')",
    },
    {
      icon: <FaTools className="text-4xl text-yellow-500" />,
      title: "پشتیبانی و نگهداری مستمر",
      description:
        "خدمات پشتیبانی فنی و به‌روزرسانی مداوم برای حفظ امنیت و عملکرد بهینه وب‌سایت",
      childFeatures: [
        {
          title: "پشتیبانی فنی 24/7",
          description:
            "تیم پشتیبانی ما به صورت 24 ساعته و 7 روز هفته آماده پاسخگویی به درخواست‌های شماست. ما از سیستم‌های تیکتینگ پیشرفته استفاده می‌کنیم که اولویت‌بندی و ردیابی درخواست‌ها را ممکن می‌سازد. برای موارد اضطراری، پشتیبانی تلفنی فوری ارائه می‌دهیم. میانگین زمان پاسخگویی ما کمتر از 1 ساعت برای موارد بحرانی و حداکثر 4 ساعت برای درخواست‌های معمولی است.",
          image:
            "/assets/images/earth-grid-with-24-hours-sign-and-circle-of-arrows-around-svgrepo-com.svg",
        },
        {
          title: "به‌روزرسانی‌های امنیتی",
          description:
            "ما به طور مداوم وب‌سایت شما را از نظر آسیب‌پذیری‌های امنیتی بررسی می‌کنیم و به محض انتشار وصله‌های امنیتی برای CMSها، پلاگین‌ها و کتابخانه‌های استفاده شده، آنها را اعمال می‌نماییم. همچنین به‌روزرسانی‌های جزئی و اصلی را پس از تست کامل در محیط توسعه، روی وب‌سایت اصلی پیاده‌سازی می‌کنیم تا از اختلال در عملکرد جلوگیری شود. گزارش‌های ماهانه از به‌روزرسانی‌های انجام شده ارائه می‌دهیم.",
          image: "/assets/images/update-svgrepo-com.svg",
        },
      ],
      bgImage: "url('/assets/images/maintenance-bg.jpg')",
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
    <div dir="rtl">
      <Toaster position="top-center" />
      <BlogSchema blogData={blogData} />

      <div className="mt-36  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded">
        <Banner
          src="/assets/images/webHeader.webp"
          text="توسعه و طراحی وب"
          category="خدمات مهندسی"
          description="طراحی و توسعه وب‌سایت‌های مدرن، سریع و واکنش‌گرا با استفاده از جدیدترین تکنولوژی‌های روز دنیا برای رشد کسب و کار شما"
        />

        <div className="mx-8">
          <VideoAndText
            heading="یک وبسایت ، برای یک عمر !"
            subText="یک وبسایت باید جوری ساخته بشه که شما سال ها بتونید راحت ازش استفاده کنید بدون هیچ دغدغه ای  ما با استفاده از جدیدترین فناوری‌های وب مثل React، Next.js و Node.js، وب‌سایت‌هایی سریع، امن و مقیاس‌پذیر براتون طراحی می‌کنیم که همیشه به‌روز و پایدار بمونید . تیم ما با تمرکز روی طراحی واکنش‌گرا و عملکرد بالا، تجربه‌ای روان و حرفه‌ای برای کاربران شما ایجاد می‌کنه تا مشتری هاتون راحت از خونشون با شما در ارتباط باشن "
            videoSrc={{
              "1080p": "/assets/videos/nlpvideo.mp4",
              "720p": "/assets/videos/nlpvideo.mp4",
              "480p": "/assets/videos/nlpvideo.mp4",
            }}
          />
        </div>
        <div className="mx-8">
          <DoubleText
            heading="چرا باید یک وبسایت حرفه ای داشته باشیم ؟"
            subText="هویت هر کسب و کاری با سایت کامل میشه داشتن داشتن یک وبسایت حرفه ای به ما کمک میکنه که ببتونیم از روند های تکرار پذیر جلوگیری کنیم برای مثال دیگه لازم نیست هی قیمت بدیم  با سوالات متداول در مورد پشتیبانی به صورت نوتیفیکیشن به کاربر ها نشون میدیم که تجربه خرید راحت تری داشته باشند  و دیگه منتظر جواب سوال نباشن تا خریدشون انجام بدن  "
          />
        </div>

        <div className="min-h-screen  ">
          <FeatureSection
            features={features}
            heading={HeadingSwichBox}
            description={DescriptionSwichBox}
          />

          <div>
            <WhyUs />
          </div>

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
