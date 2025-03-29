import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
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

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [AnimatePresence]);

  return (
    <div>
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
  );
};

export default Testimonials;
