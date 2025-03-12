import { motion } from "framer-motion";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      title: "تجربه و تخصص",
      description: "بیش از 5 سال تجربه در دیجیتال‌سازی کسب‌وکارهای بزرگ تهران",
      icon: "/assets/images/experience.svg",
      stat: "۵+ سال"
    },
    {
      title: "امنیت داده‌ها",
      description: "استفاده از پروتکل‌های رمزنگاری پیشرفته و زیرساخت‌های امن",
      icon: "/assets/images/security.svg",
      stat: "۱۰۰٪ امن"
    },
    {
      title: "پشتیبانی تخصصی",
      description: "تیم پشتیبانی متخصص با پاسخگویی سریع در تمام ساعات",
      icon: "/assets/images/support.svg",
      stat: "۲۴/۷"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-primary mb-12"
        >
          چرا تومک را انتخاب کنید؟
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                <span className="text-2xl font-bold text-secondary">{feature.stat}</span>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
