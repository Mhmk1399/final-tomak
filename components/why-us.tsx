"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Users,
  Clock,
  Award,
  Lightbulb,
  Code,
  HeartHandshake,
  Star,
} from "lucide-react";
import Image from "next/image";

interface Reason {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

const reasons: Reason[] = [
  {
    id: "expertise",
    icon: <Code className="w-6 h-6" />,
    title: "تخصص فنی",
    description:
      "تیم ما از متخصصان با تجربه در جدیدترین فناوری‌ها تشکیل شده است",
    color: "text-blue-500",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "quality",
    icon: <Award className="w-6 h-6" />,
    title: "کیفیت بی‌نظیر",
    description: "ما به ارائه محصولات با کیفیت و بدون نقص متعهد هستیم",
    color: "text-purple-500",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: "support",
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "پشتیبانی ۲۴/۷",
    description: "تیم پشتیبانی ما همیشه آماده کمک و پاسخگویی به سوالات شما است",
    color: "text-green-500",
    gradient: "from-green-500 to-green-600",
  },
  {
    id: "speed",
    icon: <Zap className="w-6 h-6" />,
    title: "سرعت عمل",
    description:
      "پروژه‌های شما را در کوتاه‌ترین زمان ممکن و با بالاترین کیفیت تحویل می‌دهیم",
    color: "text-amber-500",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    id: "security",
    icon: <Shield className="w-6 h-6" />,
    title: "امنیت بالا",
    description:
      "امنیت داده‌های شما برای ما در اولویت است و از آن‌ها محافظت می‌کنیم",
    color: "text-red-500",
    gradient: "from-red-500 to-red-600",
  },
  {
    id: "innovation",
    icon: <Lightbulb className="w-6 h-6" />,
    title: "نوآوری",
    description: "همیشه به دنبال راه‌های جدید و خلاقانه برای حل مشکلات هستیم",
    color: "text-cyan-500",
    gradient: "from-cyan-500 to-cyan-600",
  },
];

const testimonials = [
  {
    id: 1,
    name: "digikala",
    role: "مدیر عامل  ",
    content:
      "همکاری با تیم شما یکی از بهترین تصمیمات کسب و کار ما بود. کیفیت کار و تعهد شما به موفقیت پروژه فوق‌العاده است.",
    avatar: "/assets/images/digikala.png",
  },
  {
    id: 2,
    name: "snapp",
    role: "مدیر عملیات بخش کب",
    content:
      "سرعت عمل و دقت تیم شما در اجرای پروژه ما باورنکردنی بود. قطعاً برای پروژه‌های آینده هم با شما همکاری خواهیم کرد.",
    avatar: "/assets/images/snapp.png",
  },
  {
    id: 3,
    name: "شرکت آبنوس جام کرج",
    role: "مدیر عامل",
    content:
      "پشتیبانی و راهنمایی‌های فنی شما در طول پروژه بسیار ارزشمند بود و به ما کمک کرد تا به بهترین نتیجه برسیم.",
    avatar: "/assets/images/abnos.webp",
  },
  {
    id: 5,
    name: "دیوار",
    role: "مدیر توسعه محصول",
    content:
      "همکاری با تیم شما باعث شد تا بتوانیم در زمان کوتاه‌تری به بازار عرضه شویم و از رقبا پیشی بگیریم.",
    avatar: "/assets/images/divar.png",
  },
  {
    id: 6,
    name: "کافه بازار",
    role: "مدیر ارشد فناوری",
    content:
      "تخصص فنی و درک عمیق شما از نیازهای کسب و کار ما، باعث شد تا نتیجه نهایی فراتر از انتظارات ما باشد.",
    avatar: "/assets/images/bazar.jpg",
  },
  {
    id: 9,
    name: "کاخ ورسای",
    role: "مدیر مجموعه",
    content:
      "راهکارهای نوآورانه شما به ما کمک کرد تا بتوانیم خدمات بهتری به کاربران خود ارائه دهیم و رضایت آنها را جلب کنیم.",
    avatar: "/assets/images/versai.webp",
  },
];

const WhyUs: React.FC = () => {
  const [activeReason, setActiveReason] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-advance testimonial every 3000ms
  React.useEffect(() => {
    console.log(activeReason);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-16 px-4 relative bg-white"
      dir="rtl"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-white pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
            چرا ما را انتخاب کنید؟
          </span>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            مزیت‌های همکاری با ما
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ما با تکیه بر تخصص، تعهد و نوآوری، بهترین راهکارها را برای کسب و کار
            شما ارائه می‌دهیم
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setActiveReason(reason.id)}
              onMouseLeave={() => setActiveReason(null)}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg bg-${reason.color.replace('text-', '')}-50 ${reason.color} flex items-center justify-center mb-4`}
              >
                {reason.icon}
              </div>

              <h3 className={`text-lg font-bold mb-2 ${reason.color}`}>
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">
              اعداد گویای تعهد ما به کیفیت و رضایت مشتریان هستند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                value: "+۱۰۰",
                label: "پروژه موفق",
                icon: <Code className="w-5 h-5" />,
                color: "text-blue-500",
              },
              {
                value: "+۹۵٪",
                label: "رضایت مشتریان",
                icon: <Users className="w-5 h-5" />,
                color: "text-green-500",
              },
              {
                value: "+۸",
                label: "سال تجربه",
                icon: <Clock className="w-5 h-5" />,
                color: "text-amber-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 relative"
              >
                <div
                  className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center ${stat.color} bg-opacity-10 mb-3`}
                >
                  {stat.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </h4>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              نظرات مشتریان ما
            </h3>
            <p className="text-gray-600">
              آنچه مشتریان درباره همکاری با ما می‌گویند
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-sm border border-gray-100">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 md:p-8 relative"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm flex-shrink-0">
                    <Image
                      src={
                        testimonials[activeTestimonial].avatar ||
                        "https://via.placeholder.com/80"
                      }
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-full object-cover"
                      width={64}
                      height={64}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/80";
                      }}
                    />
                  </div>
                  <div className="text-center md:text-right">
                    <div className="flex mb-3 justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-yellow-400 fill-yellow-400" 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-base mb-4">
                      {testimonials[activeTestimonial].content}
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Testimonial navigation dots */}
            <div className="flex justify-center mt-4 space-x-1 space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "bg-blue-500 w-4" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
