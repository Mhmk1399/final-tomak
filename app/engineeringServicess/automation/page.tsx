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
      title: "اتوماسیون صنعتی پیشرفته",
      description:
        "طراحی و پیاده‌سازی سیستم‌های یکپارچه اتوماسیون صنعتی برای افزایش بهره‌وری، کاهش خطاهای انسانی و بهبود کیفیت تولید در کارخانه‌ها و واحدهای صنعتی",
      childFeatures: [
        {
          title: "سیستم‌های کنترل منطقی برنامه‌پذیر (PLC)",
          description:
            "طراحی، برنامه‌نویسی و پیاده‌سازی سیستم‌های کنترل مبتنی بر PLC با استفاده از برندهای پیشرو مانند Siemens، Allen-Bradley و Schneider Electric. برنامه‌نویسی با استاندارد IEC 61131-3 شامل زبان‌های Ladder Diagram، Structured Text و Function Block Diagram. پیاده‌سازی راهکارهای کنترل فرآیند، ماشین‌آلات و خطوط تولید با قابلیت اطمینان بالا و نگهداری آسان.",
          image: "/assets/images/plc-control.jpg",
        },
        {
          title: "سیستم‌های کنترل و نظارت (SCADA)",
          description:
            "پیاده‌سازی سیستم‌های SCADA جامع با نرم‌افزارهای پیشرفته مانند WinCC، Ignition و Vijeo Citect. ایجاد رابط‌های کاربری نظارتی (HMI) با قابلیت نمایش Real-time داده‌های فرآیند، آلارم‌دهی هوشمند و ثبت تاریخی پارامترها. امکان اتصال به انواع PLCها، اینورترها و دستگاه‌های هوشمند صنعتی.",
          image: "/assets/images/scada-system.jpg",
        },
        {
          title: "سیستم‌های کنترل توزیع‌شده (DCS)",
          description:
            "طراحی و پیاده‌سازی سیستم‌های DCS برای صنایع فرآیندی مانند پتروشیمی، نفت و گاز و نیروگاه‌ها. استفاده از راهکارهای پیشرفته مانند Siemens PCS7، Yokogawa CENTUM و Honeywell Experion. کنترل یکپارچه فرآیندهای پیچیده با قابلیت‌های پیشرفته کنترل حلقه بسته، مدیریت آلارم و گزارش‌گیری جامع.",
          image: "/assets/images/dcs-architecture.jpg",
        },
        {
          title: "رابط انسان و ماشین (HMI)",
          description:
            "طراحی پنل‌های اپراتوری بهینه با در نظر گرفتن اصول ارگونومی و UX صنعتی. پیاده‌سازی HMIهای صنعتی مقاوم با صفحه‌نمایش لمسی و قابلیت کار در محیط‌های سخت صنعتی. امکان نمایش پارامترهای حیاتی فرآیند، Trendهای تاریخی و ایجاد صفحات تعاملی برای اپراتورها.",
          image: "/assets/images/hmi-panel.jpg",
        },
      ],
      bgImage: "url('/assets/images/industrial-automation-bg.jpg')",
    },
    {
      icon: <FaIndustry className="text-4xl text-gray-800" />,
      title: "رباتیک صنعتی و اتوماسیون",
      description:
        "طراحی و پیاده‌سازی سیستم‌های رباتیک پیشرفته برای خطوط تولید، مونتاژ و جابجایی مواد در صنایع مختلف",
      childFeatures: [
        {
          title: "برنامه‌نویسی ربات‌های صنعتی",
          description:
            "برنامه‌نویسی ربات‌های صنعتی برندهای پیشرو مانند KUKA، Fanuc و ABB برای کاربردهای مختلف. پیاده‌سازی الگوریتم‌های حرکتی پیشرفته، مسیریابی بهینه و هماهنگی چند رباتی (Multi-robot Coordination). آموزش اپراتورها و ایجاد رابط‌های کاربری ساده برای تغییر دستورالعمل‌ها.",
          image: "/assets/images/robot-programming.jpg",
        },
        {
          title: "سیستم‌های کنترل حرکت پیشرفته",
          description:
            "طراحی سیستم‌های کنترل حرکت (Motion Control) با سروو درایوها و استپر موتورهای دقیق. پیاده‌سازی الگوریتم‌های کنترل موقعیت، سرعت و گشتاور برای کاربردهای دقیق مانند ماشین‌های CNC، خطوط بسته‌بندی و سیستم‌های جابجایی مواد. استفاده از پروتکل‌های صنعتی مانند EtherCAT، PROFINET و CANopen.",
          image: "/assets/images/motion-control.jpg",
        },
        {
          title: "سیستم‌های بینایی ماشین صنعتی",
          description:
            "پیاده‌سازی سیستم‌های بینایی ماشین (Machine Vision) برای بازرسی کیفیت، شناسایی اشیا و راهنمایی ربات‌ها. استفاده از دوربین‌های صنعتی با رزولوشن بالا، الگوریتم‌های پردازش تصویر و یادگیری عمیق برای تشخیص عیوب. یکپارچه‌سازی با سیستم‌های کنترل برای رد خودکار محصولات معیوب.",
          image: "/assets/images/machine-vision.jpg",
        },
        {
          title: "سیستم‌های مونتاژ اتوماتیک",
          description:
            "طراحی خطوط مونتاژ خودکار با استفاده از ربات‌ها، سیستم‌های تغذیه قطعات و ابزارهای مخصوص. پیاده‌سازی کنترل کیفیت آنلاین در حین مونتاژ و سیستم‌های ردگیری محصول. بهینه‌سازی چرخه زمانی عملیات و کاهش ضایعات در فرآیند مونتاژ.",
          image: "/assets/images/auto-assembly.jpg",
        },
      ],
      bgImage: "url('/assets/images/industrial-robotics-bg.jpg')",
    },
    {
      icon: <FaCogs className="text-4xl text-green-500" />,
      title: "بهینه‌سازی فرآیندهای تولید",
      description:
        "تحلیل، مانیتورینگ و بهینه‌سازی فرآیندهای تولید با استفاده از راهکارهای نوین اتوماسیون صنعتی",
      childFeatures: [
        {
          title: "سیستم‌های کنترل فرآیند پیشرفته",
          description:
            "پیاده‌سازی الگوریتم‌های کنترل پیشرفته (Advanced Process Control) برای بهینه‌سازی پارامترهای فرآیند. استفاده از تکنیک‌های مدل‌پیش بین (Model Predictive Control) برای فرآیندهای پیچیده با تأخیر زمانی بالا. کاهش مصرف انرژی و مواد اولیه از طریق کنترل دقیق پارامترهای فرآیند.",
          image: "/assets/images/process-control.jpg",
        },
        {
          title: "سیستم‌های مانیتورینگ Real-time",
          description:
            "راه‌اندازی سیستم‌های نظارتی بلادرنگ با نمونه‌برداری با فرکانس بالا برای تشخیص آنومالی‌ها. پیاده‌سازی Dashboardهای مدیریتی برای نمایش شاخص‌های کلیدی عملکرد (KPIs) تولید. ایجاد سیستم‌های هشدار هوشمند برای پیش‌بینی خرابی‌ها قبل از وقوع.",
          image: "/assets/images/realtime-monitoring.jpg",
        },
        {
          title: "سیستم‌های گزارش‌گیری و تحلیل داده",
          description:
            "طراحی سیستم‌های گزارش‌گیری خودکار با قابلیت استخراج داده‌های تاریخی و تحلیل روندها. پیاده‌سازی ابزارهای تحلیل داده برای شناسایی گلوگاه‌های تولید و نقاط بهینه‌سازی. تولید گزارش‌های سفارشی برای مدیریت در سطوح مختلف.",
          image: "/assets/images/data-reporting.jpg",
        },
        {
          title: "بهینه‌سازی مصرف انرژی و منابع",
          description:
            "تحلیل الگوی مصرف انرژی و مواد اولیه در خطوط تولید. پیاده‌سازی سیستم‌های کنترل هوشمند برای کاهش مصرف انرژی در تجهیزات صنعتی. مانیتورینگ Continuous Improvement و اندازه‌گیری ROI پس از پیاده‌سازی راهکارها.",
          image: "/assets/images/energy-optimization.jpg",
        },
      ],
      bgImage: "url('/assets/images/process-optimization-bg.jpg')",
    },
    {
      icon: <FaChartLine className="text-4xl text-purple-500" />,
      title: "راهکارهای صنعت هوشمند 4.0",
      description:
        "پیاده‌سازی فناوری‌های دیجیتال و هوشمندسازی در صنعت برای تحول دیجیتال واحدهای تولیدی",
      childFeatures: [
        {
          title: "اینترنت صنعتی اشیا (IIoT)",
          description:
            "طراحی و پیاده‌سازی شبکه‌های IIoT برای اتصال تجهیزات صنعتی و جمع‌آوری داده‌های فرآیند. استفاده از پروتکل‌های صنعتی امن مانند OPC UA، MQTT و Modbus TCP. پیاده‌سازی Edge Computing برای پردازش داده در محل و کاهش تأخیر در تصمیم‌گیری‌های حیاتی.",
          image: "/assets/images/iiot-platform.jpg",
        },
        {
          title: "تحلیل کلان داده‌های صنعتی",
          description:
            "ایجاد مخازن داده صنعتی (Data Lake) برای ذخیره‌سازی و تحلیل حجم بالای داده‌های تولید. پیاده‌سازی الگوریتم‌های یادگیری ماشین برای پیش‌بینی کیفیت محصول، تشخیص الگوی خرابی و بهینه‌سازی فرآیند. ایجاد مدل‌های دیجیتال دوقلو (Digital Twin) برای شبیه‌سازی و پیش‌بینی رفتار سیستم‌های فیزیکی.",
          image: "/assets/images/big-data-analytics.jpg",
        },
        {
          title: "هوش مصنوعی در صنعت",
          description:
            "پیاده‌سازی راهکارهای هوش مصنوعی برای تشخیص عیوب محصولات، پیش‌بینی خرابی تجهیزات (Predictive Maintenance) و بهینه‌سازی پارامترهای فرآیند. استفاده از تکنیک‌های بینایی کامپیوتر، پردازش سیگنال و یادگیری عمیق برای حل چالش‌های پیچیده صنعتی. آموزش مدل‌های خاص هر صنعت با داده‌های واقعی تولید.",
          image: "/assets/images/ai-industry.jpg",
        },
        {
          title: "پلتفرم‌های ابری صنعتی",
          description:
            "راه‌اندازی سیستم‌های ابری اختصاصی برای صنایع با قابلیت‌های امنیتی پیشرفته. پیاده‌سازی راهکارهای Hybrid Cloud برای ترکیب مزایای پردازش ابری و محلی. ایجاد سرویس‌های SaaS صنعتی برای دسترسی از راه دور و مدیریت متمرکز چندین سایت تولیدی.",
          image: "/assets/images/industrial-cloud.jpg",
        },
      ],
      bgImage: "url('/assets/images/smart-industry-bg.jpg')",
    },
    {
      icon: <FaMicrochip className="text-4xl text-orange-500" />,
      title: "سیستم‌های کنترل هوشمند",
      description:
        "طراحی و پیاده‌سازی الگوریتم‌های کنترل پیشرفته برای سیستم‌های دینامیکی پیچیده",
      childFeatures: [
        {
          title: "کنترل پیشرفته غیرخطی",
          description:
            "پیاده‌سازی الگوریتم‌های کنترل غیرخطی برای سیستم‌های با رفتار پیچیده و متغیر با زمان. استفاده از روش‌های کنترل مدل‌محور (Model-based Control) برای سیستم‌های چندمتغیره. طراحی کنترلرهای مقاوم (Robust Control) برای عملکرد پایدار در شرایط عدم قطعیت پارامترها.",
          image: "/assets/images/nonlinear-control.jpg",
        },
        {
          title: "سیستم‌های کنترل فازی",
          description:
            "طراحی کنترلرهای فازی (Fuzzy Logic Controllers) برای سیستم‌های با مدل نامعلوم یا غیردقیق. پیاده‌سازی دانش متخصصان در قالب قواعد فازی برای کنترل فرآیندهای پیچیده. ترکیب کنترل فازی با روش‌های کلاسیک برای بهبود عملکرد در شرایط مختلف کاری.",
          image: "/assets/images/fuzzy-control.jpg",
        },
        {
          title: "کنترل PID پیشرفته",
          description:
            "تنظیم و بهینه‌سازی کنترلرهای PID با روش‌های سیستماتیک مانند Ziegler-Nichols و روش‌های مبتنی بر مدل. پیاده‌سازی کنترلرهای PID با قابلیت Self-tuning و Gain Scheduling برای تطبیق با شرایط مختلف فرآیند. استفاده از ساختارهای پیشرفته PID مانند Cascade Control، Feedforward Control و Ratio Control.",
          image: "/assets/images/pid-control.jpg",
        },
        {
          title: "سیستم‌های کنترل تطبیقی",
          description:
            "پیاده‌سازی کنترلرهای تطبیقی (Adaptive Control) برای سیستم‌های با پارامترهای متغیر با زمان. استفاده از روش‌های شناسایی سیستم آنلاین و تنظیم خودکار پارامترهای کنترلر. کاربرد در سیستم‌های با تغییرات بار، فرسایش تجهیزات یا تغییر مشخصات فرآیند در طول زمان.",
          image: "/assets/images/adaptive-control.jpg",
        },
      ],
      bgImage: "url('/assets/images/control-systems-bg.jpg')",
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
    <div dir="rtl" >
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
    </div>
  );
}
