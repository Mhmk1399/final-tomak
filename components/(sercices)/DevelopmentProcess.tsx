import { motion } from "framer-motion";

const DevelopmentProcess = () => {
  const steps = [
    {
      step: 1,
      title: "تحلیل و مشاوره",
      description: "بررسی دقیق نیازها و فرآیندهای کسب‌وکار شما",
      icon: "📊"
    },
    {
      step: 2,
      title: "طراحی راهکار",
      description: "ارائه راهکار سفارشی با تمرکز بر اهداف تجاری",
      icon: "🎯"
    },
    {
      step: 3,
      title: "توسعه و پیاده‌سازی",
      description: "پیاده‌سازی راهکار با بهترین تکنولوژی‌های روز",
      icon: "⚙️"
    },
    {
      step: 4,
      title: "تست و استقرار",
      description: "تست دقیق و استقرار تدریجی برای اطمینان از عملکرد",
      icon: "✅"
    }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          فرآیند توسعه در تومک
        </motion.h2>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white p-6 rounded-xl shadow-xl"
              >
                <div className="text-4xl mb-4 bg-secondary w-12 h-12 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute -top-3 right-4 bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center">
                  {step.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
