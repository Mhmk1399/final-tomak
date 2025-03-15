"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
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
    name: "علی محمدی",
    role: "مدیر عامل شرکت آلفا",
    content:
      "همکاری با تیم شما یکی از بهترین تصمیمات کسب و کار ما بود. کیفیت کار و تعهد شما به موفقیت پروژه فوق‌العاده است.",
    avatar: "/assets/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "سارا رضایی",
    role: "بنیانگذار استارتاپ بتا",
    content:
      "سرعت عمل و دقت تیم شما در اجرای پروژه ما باورنکردنی بود. قطعاً برای پروژه‌های آینده هم با شما همکاری خواهیم کرد.",
    avatar: "/assets/images/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "محمد کریمی",
    role: "مدیر فنی شرکت گاما",
    content:
      "پشتیبانی و راهنمایی‌های فنی شما در طول پروژه بسیار ارزشمند بود و به ما کمک کرد تا به بهترین نتیجه برسیم.",
    avatar: "/assets/images/testimonial-3.jpg",
  },
];

const WhyUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeReason, setActiveReason] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  // Auto-advance testimonial every 3000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Staggered animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };
  return (
    <section
      ref={containerRef}
      className="py-20 px-4 overflow-hidden relative bg-gradient-to-b from-white to-gray-50"
      dir="rtl"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="inline-block"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full mb-4 inline-block">
              چرا ما را انتخاب کنید؟
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              مزیت‌های همکاری با ما
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            ما با تکیه بر تخصص، تعهد و نوآوری، بهترین راهکارها را برای کسب و کار
            شما ارائه می‌دهیم
          </motion.p>
        </div>

        {/* Reasons grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              onMouseEnter={() => setActiveReason(reason.id)}
              onMouseLeave={() => setActiveReason(null)}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group transition-all duration-300"
              style={{
                boxShadow:
                  activeReason === reason.id
                    ? `0 20px 30px -10px rgba(0, 0, 0, 0.1), 0 0 0 2px ${reason.color.replace(
                        "text-",
                        "var(--"
                      )}`
                    : "0 10px 20px -5px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Background gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeReason === reason.id ? 0.05 : 0 }}
              />

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} text-white flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{
                  rotate: [0, -5, 5, -5, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                {reason.icon}
              </motion.div>

              <h3 className={`text-xl font-bold mb-3 ${reason.color}`}>
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>

              {/* Corner decoration */}
              <motion.div
                className="absolute -bottom-2 -left-2 w-16 h-16 opacity-10"
                initial={{ rotate: 0 }}
                animate={{ rotate: activeReason === reason.id ? 45 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 64L64 0H0V64Z"
                    className={reason.color.replace("text", "fill")}
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 mb-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid-pattern"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="rotate(45)"
                >
                  <rect width="100%" height="100%" fill="none" />
                  <circle cx="20" cy="20" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              آمار و ارقام ما
            </h3>
            <p className="text-gray-600">
              اعداد گویای تعهد ما به کیفیت و رضایت مشتریان هستند
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "+۱۰۰",
                label: "پروژه موفق",
                icon: <Code className="w-6 h-6" />,
                color: "text-blue-500",
              },
              {
                value: "+۹۵٪",
                label: "رضایت مشتریان",
                icon: <Users className="w-6 h-6" />,
                color: "text-green-500",
              },
              {
                value: "+۵۰",
                label: "متخصص حرفه‌ای",
                icon: <Award className="w-6 h-6" />,
                color: "text-purple-500",
              },
              {
                value: "+۸",
                label: "سال تجربه",
                icon: <Clock className="w-6 h-6" />,
                color: "text-amber-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${stat.color} bg-opacity-10 mb-4`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <h4 className="text-3xl font-bold text-gray-300 mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              نظرات مشتریان ما
            </h3>
            <p className="text-gray-600">
              آنچه مشتریان درباره همکاری با ما می‌گویند
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 md:p-12 relative"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <motion.div
                        className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 10, 0] }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          src={
                            testimonials[activeTestimonial].avatar ||
                            "https://via.placeholder.com/80"
                          }
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full object-cover"
                          width={80}
                          height={80}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://via.placeholder.com/80";
                          }}
                        />
                      </motion.div>
                      <div className="text-center md:text-right">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <div className="flex mb-4 justify-center md:justify-start">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.2,
                                  delay: 0.4 + i * 0.1,
                                }}
                              >
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                              </motion.div>
                            ))}
                          </div>
                          <motion.p
                            className="text-gray-700 text-lg mb-6 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            {testimonials[activeTestimonial].content}
                          </motion.p>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            <h4 className="font-bold text-lg text-gray-900">
                              {testimonials[activeTestimonial].name}
                            </h4>
                            <p className="text-gray-600">
                              {testimonials[activeTestimonial].role}
                            </p>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
