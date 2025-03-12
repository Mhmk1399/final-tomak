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
  FaServer,
} from "react-icons/fa";

import DoubleText from "@/components/services/doubleText";
import { BlogSchema } from "@/components/schema/blogSchema";
import FeatureSection from "@/components/switchBox";
import DevelopmentProcess from "@/components/(sercices)/DevelopmentProcess";
import WhyChooseUs from "@/components/(sercices)/WhyChooseUs";
import { WorksShowcase } from "@/components/(sercices)/WorksCard";

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
      title: "طراحی سفارشی برای کسب‌وکار شما",
      description:
        "ما وب‌سایت‌هایی طراحی می‌کنیم که دقیقاً با نیازهای کسب‌وکار شما در تهران هم‌راستا باشند. با استفاده از فناوری‌های پیشرفته مثل React.js و Vue.js، تجربه‌ای کاربرپسند و شخصی‌سازی‌شده ارائه می‌دهیم که بهره‌وری شما را افزایش داده و مشتریانتان را جذب می‌کند.",
      childFeatures: [
        {
          title: "اتوماسیون فرآیندها",
          description:
            "کاهش زمان انجام وظایف تکراری با وب‌اپلیکیشن‌های سفارشی.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "رابط‌های تعاملی",
          description: "طراحی پویا با React.js برای جلب توجه کاربران.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "شخصی‌سازی کامل",
          description: "ویژگی‌های متناسب با اهداف تجاری شما.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "پشتیبانی از زبان پارسی",
          description: "طراحی بومی‌شده برای مخاطبان پارسی‌زبان.",
          image: "/assets/images/4814017.jpg",
        },
      ],
    },
    {
      icon: <FaDesktop className="text-4xl text-pink-500" />,
      title: "افزایش سرعت و کارایی",
      description:
        "یک وب‌سایت سریع و بهینه نه‌تنها رضایت مشتریان شما را بالا می‌برد، بلکه هزینه‌های عملیاتی را کاهش می‌دهد. ما با بهینه‌سازی کدها و استفاده از تکنیک‌های SEO، وب‌سایتی ارائه می‌دهیم که هم سریع باشد و هم در جستجوها دیده شود.",
      childFeatures: [
        {
          title: "بارگذاری سریع",
          description: "کاهش زمان لود صفحات برای تجربه بهتر.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "بهینه‌سازی SEO",
          description: "افزایش رتبه در گوگل برای جذب مشتری بیشتر.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "پشتیبانی از حجم بالا",
          description: "مدیریت ترافیک سنگین بدون افت کیفیت.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "کاهش هزینه‌ها",
          description: "بهینه‌سازی منابع برای صرفه‌جویی در بودجه.",
          image: "/assets/images/4814017.jpg",
        },
      ],
    },
    {
      icon: <FaLaptopCode className="text-4xl text-red-500" />,
      title: "امنیت داده‌های شما",
      description:
        "حفاظت از اطلاعات کسب‌وکار شما اولویت ماست. ما با پیاده‌سازی پروتکل‌های امنیتی پیشرفته و پشتیبانی مداوم، اطمینان می‌دهیم که سیستم‌های شما در برابر تهدیدات محافظت شده و همیشه به‌روز باشند.",
      childFeatures: [
        {
          title: "رمزنگاری پیشرفته",
          description: "حفاظت از داده‌ها با استانداردهای جهانی.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "تست نفوذ",
          description: "شناسایی و رفع آسیب‌پذیری‌ها قبل از بروز مشکل.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "پشتیبانی 24/7",
          description: "رفع سریع مشکلات در هر زمان.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "به‌روزرسانی مداوم",
          description: "نگهداری سیستم با آخرین فناوری‌ها.",
          image: "/assets/images/4814017.jpg",
        },
      ],
    },
    {
      icon: <FaServer className="text-4xl text-green-500" />,
      title: "رشد همراه با کسب‌وکار شما",
      description:
        "وب‌سایتی که ما می‌سازیم، با توسعه کسب‌وکار شما رشد می‌کند. معماری مقیاس‌پذیر ما به شما امکان می‌دهد بدون نیاز به بازطراحی، ویژگی‌ها و قابلیت‌های جدیدی اضافه کنید.",
      childFeatures: [
        {
          title: "افزودن ماژول‌ها",
          description: "گسترش سریع امکانات با نیازهای جدید.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "پشتیبانی از کاربران بیشتر",
          description: "مدیریت افزایش مشتریان بدون افت عملکرد.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "انعطاف‌پذیری",
          description: "تطبیق با تغییرات بازار و فناوری.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "ادغام با سیستم‌های موجود",
          description: "اتصال وب‌سایت به ابزارهای فعلی شما.",
          image: "/assets/images/4814017.jpg",
        },
      ],
    },
    {
      icon: <FaMobileAlt className="text-4xl text-purple-500" />,
      title: "دسترسی در هر دستگاه",
      description:
        "مشتریان شما در تهران از موبایل و دسکتاپ استفاده می‌کنند. ما وب‌سایت‌هایی واکنش‌گرا طراحی می‌کنیم که در هر دستگاهی، تجربه‌ای یکپارچه و حرفه‌ای ارائه دهند.",
      childFeatures: [
        {
          title: "طراحی موبایل‌محور",
          description: "اولویت با تجربه کاربران موبایل.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "نمایش یکپارچه",
          description: "سازگاری کامل با تبلت و دسکتاپ.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "سرعت در موبایل",
          description: "بهینه‌سازی برای اینترنت‌های کندتر.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "دسترسی آسان",
          description: "رابط کاربرپسند برای مشتریان شما.",
          image: "/assets/images/4814017.jpg",
        },
      ],
    },
    {
      icon: <FaChartLine className="text-4xl text-orange-500" />,
      title: "افزایش فروش و سود",
      description:
        "یک وب‌سایت حرفه‌ای می‌تواند فروش شما را چند برابر کند. ما با ترکیب فناوری و استراتژی‌های بازاریابی دیجیتال، وب‌سایتی می‌سازیم که مشتریان را جذب و به خریدار تبدیل می‌کند.",
      childFeatures: [
        {
          title: "تحلیل داده‌ها",
          description: "درک رفتار مشتریان برای بهبود فروش.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "فراخوان عمل (CTA)",
          description: "دکمه‌های هوشمند برای افزایش تعامل.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "ادغام با شبکه‌های اجتماعی",
          description: "ارتباط مستقیم با اینستاگرام و کانال‌های شما.",
          image: "/assets/images/4814017.jpg",
        },
        {
          title: "پشتیبانی از پرداخت آنلاین",
          description: "تسهیل خرید مستقیم از وب‌سایت.",
          image: "/assets/images/4814017.jpg",
        },
      ],
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
        <div className="min-h-screen flex items-center justify-center">
            <WorksShowcase />
        </div>

        <div className="min-h-screen  ">
          <FeatureSection
            features={features}
            heading={HeadingSwichBox}
            description={DescriptionSwichBox}
          />
          <div>
            <DevelopmentProcess />
          </div>
          <div>
            <WhyChooseUs />
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
    </>
  );
}
