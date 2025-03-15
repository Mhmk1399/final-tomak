"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Award, Crown, ChevronRight } from "lucide-react";

interface PricingTier {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  gradient: string;
  hoverGradient: string;
  borderColor: string;
  shadowColor: string;
  popular?: boolean;
}

interface PricingProps {
  tiers?: PricingTier[];
}

const defaultTiers: PricingTier[] = [
  {
    id: "basic",
    title: "پایه",
    price: "۹۹,۰۰۰",
    description: "مناسب برای کسب و کارهای کوچک و تازه شروع شده",
    features: [
      "پشتیبانی ایمیل",
      "۱ کاربر",
      "۵ گیگابایت فضا",
      "دسترسی به ویژگی‌های اصلی",
      "بروزرسانی‌های ماهانه",
    ],
    icon: <Star className="w-8 h-8" />,
    color: "from-blue-400 to-blue-600",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    hoverGradient: "from-blue-300/20 via-blue-400/10 to-transparent",
    borderColor: "border-blue-200 hover:border-blue-400",
    shadowColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    id: "silver",
    title: "نقره‌ای",
    price: "۱۹۹,۰۰۰",
    description: "مناسب برای کسب و کارهای متوسط با نیازهای بیشتر",
    features: [
      "پشتیبانی تلفنی و ایمیل",
      "۵ کاربر",
      "۲۰ گیگابایت فضا",
      "دسترسی به ویژگی‌های پیشرفته",
      "بروزرسانی‌های هفتگی",
      "گزارش‌های تحلیلی",
    ],
    icon: <Award className="w-8 h-8" />,
    color: "from-purple-400 to-purple-600",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    hoverGradient: "from-purple-300/20 via-purple-400/10 to-transparent",
    borderColor: "border-purple-200 hover:border-purple-400",
    shadowColor: "rgba(147, 51, 234, 0.3)",
    popular: true,
  },
  {
    id: "gold",
    title: "طلایی",
    price: "۳۹۹,۰۰۰",
    description: "مناسب برای کسب و کارهای بزرگ با نیازهای حرفه‌ای",
    features: [
      "پشتیبانی ۲۴/۷",
      "کاربران نامحدود",
      "۱۰۰ گیگابایت فضا",
      "دسترسی به تمام ویژگی‌ها",
      "بروزرسانی‌های روزانه",
      "گزارش‌های تحلیلی پیشرفته",
      "مشاوره اختصاصی",
      "پشتیبانی اولویت‌دار",
    ],
    icon: <Crown className="w-8 h-8" />,
    color: "from-amber-400 to-amber-600",
    gradient: "bg-gradient-to-br from-amber-50 to-amber-100",
    hoverGradient: "from-amber-300/20 via-amber-400/10 to-transparent",
    borderColor: "border-amber-200 hover:border-amber-400",
    shadowColor: "rgba(245, 158, 11, 0.3)",
  },
];

const Pricing: React.FC<PricingProps> = ({ tiers = defaultTiers }) => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);
  const [isYearly, setIsYearly] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mousePositions, setMousePositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({});

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    tierId: string,
    index: number
  ) => {
    if (cardRefs.current[index]) {
      const card = cardRefs.current[index];
      const rect = card?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePositions((prev) => ({
          ...prev,
          [tierId]: { x, y },
        }));
      }
    }
  };

  return (
    <section
      className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      dir="rtl"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            تعرفه‌های خدمات ما
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            بسته‌های متنوع ما برای هر کسب و کاری با هر اندازه‌ای طراحی شده‌اند
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 inline-flex items-center p-1 bg-gray-100 rounded-full"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 ${
                !isYearly
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ماهانه
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 ${
                isYearly
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              سالانه{" "}
              <span className="text-xs font-bold text-green-500 ml-1">
                (۲۰٪ تخفیف)
              </span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              onMouseEnter={() => setHoveredTier(tier.id)}
              onMouseLeave={() => setHoveredTier(null)}
              onMouseMove={(e) => handleMouseMove(e, tier.id, index)}
              className={`relative rounded-2xl overflow-hidden ${tier.gradient} ${tier.borderColor} border-2 transition-all duration-500 backdrop-blur-sm`}
              style={{
                boxShadow:
                  hoveredTier === tier.id
                    ? `0 20px 30px -10px ${tier.shadowColor}, 0 10px 20px -10px ${tier.shadowColor}`
                    : `0 10px 15px -5px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)`,
                transition:
                  "box-shadow 0.5s ease, transform 0.5s ease, border-color 0.5s ease",
              }}
            >
              {hoveredTier === tier.id && mousePositions[tier.id] && (
                <motion.div
                  className={`absolute pointer-events-none bg-gradient-to-r ${tier.hoverGradient} rounded-full opacity-70 blur-xl`}
                  style={{
                    width: "250px",
                    height: "250px",
                    left: mousePositions[tier.id].x - 125,
                    top: mousePositions[tier.id].y - 125,
                    transition: "opacity 0.2s ease",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                />
              )}
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-yellow-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg z-10 shadow-md">
                  پیشنهاد ویژه
                </div>
              )}

              <div className="p-8 relative z-10">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} text-white mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tier.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.title}
                </h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900">
                    {isYearly
                      ? `${
                          parseInt(tier.price.replace(/,/g, "")) * 12 * 0.8
                        }`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : tier.price}
                  </span>
                  <span className="text-gray-600 mr-2">
                    {isYearly ? "تومان / سالانه" : "تومان / ماهانه"}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle
                        className={`w-5 h-5 ml-1  bg-gradient-to-r ${tier.color} rounded-full text-white p-1 flex-shrink-0`}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${tier.color} text-white font-medium flex items-center justify-center group transition-all duration-300 shadow-md hover:shadow-lg`}
                  style={{
                    boxShadow: `0 4px 10px -2px ${tier.shadowColor}`,
                  }}
                >
                  <span>انتخاب پلن</span>
                  <ChevronRight className="w-5 rotate-180 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                </motion.button>
              </div>

              {hoveredTier === tier.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20 pointer-events-none"
                />
              )}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id={`${tier.id}-pattern`}
                      patternUnits="userSpaceOnUse"
                      width="40"
                      height="40"
                      patternTransform="rotate(45)"
                    >
                      <rect width="100%" height="100%" fill="none" />
                      <circle cx="20" cy="20" r="1" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill={`url(#${tier.id}-pattern)`}
                  />
                </svg>
              </div>
            </motion.div>
          ))}{" "}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            نیاز به راهنمایی بیشتر دارید؟ با کارشناسان ما تماس بگیرید
          </p>
          <a
            href="/contact"
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            تماس با ما &larr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
