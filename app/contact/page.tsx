"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BlogSchema } from "@/components/schema/blogSchema";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const blogData = {
    title: "ارتباط با ما | تومک",
    url: "/contact",
    images: ["/assets/images/contact-header.webp"],
    sections: [
      {
        heading: "ارتباط با تومک",
        content:
          "آیا سوالی دارید؟ یا نیاز به راهنمایی بیشتر دارید؟ تیم ما آماده است تا پاسخگوی شما باشد. با استفاده از فرم زیر می‌توانید سوالات خود را بپرسید، درخواست مشاوره کنید یا هر گونه نظری دارید با ما در میان بگذارید. همین حالا به ما پیام دهید تا در سریع‌ترین زمان با شما تماس بگیریم.",
      },
      {
        heading: "ما دوست داریم از شما بشنویم!",
        content: "با پر کردن فرم زیر با ما در ارتباط باشید",
        formFields: [
          {
            label: "نام و نام خانوادگی",
            type: "text",
            placeholder: "نام و نام خانوادگی",
          },
          {
            label: "آدرس ایمیل",
            type: "email",
            placeholder: "you@example.com",
          },
          {
            label: "پیام شما",
            type: "textarea",
            placeholder: "پیام شما...",
          },
        ],
      },
    ],
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };
  useEffect(() => {
    document.title = "ارتباط  با ما |  تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "از طریق فرم تماس، ایمیل یا شماره تلفن با ما در ارتباط باشید و پاسخ خود را در سریع‌ترین زمان ممکن دریافت کنید."
      );
    }
  }, []);

  return (
    <>
      <BlogSchema blogData={blogData} />

      <div className=" h-full" dir="rtl">
        <div className="mt-36">
          <motion.div
            className="flex flex-col items-center justify-center mx-12 "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <h1 className="p-8 text-center text-4xl font-bold text-black">
              ارتباط با تومک
            </h1>
            <p className="p-8 lg:w-[70%] text-justify text-gray-700">
              آیا سوالی دارید؟ یا نیاز به راهنمایی بیشتر دارید؟ تیم ما آماده است
              تا پاسخگوی شما باشد. با استفاده از فرم زیر می‌توانید سوالات خود را
              بپرسید، درخواست مشاوره کنید یا هر گونه نظری دارید با ما در میان
              بگذارید. همین حالا به ما پیام دهید تا در سریع‌ترین زمان با شما
              تماس بگیریم.
            </p>
          </motion.div>
        </div>
        <div className=" flex flex-col items-center justify-center relative overflow-hidden my-12">
          {/* Background Blur Effect */}
          <div className="absolute inset-0 w-full h-full mt-6">
            <iframe
              src="https://lottie.host/embed/de77fa9b-73bd-41c7-b7d2-079601294041/bkvNeJWvpf.json"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-[350px] md:w-[500px] lg:w-[700px] bg-white/50 border backdrop-blur-sm rounded-2xl  p-6 mt-20"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-600 p-2">
                ما دوست داریم از شما بشنویم!
              </h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    نام و نام خانوادگی
                  </label>
                  <input
                    id="name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full px-4 text-black py-3 focus:outline-none rounded-md border-gray-300 shadow-sm focus:outline-indigo-500 sm:text-sm"
                    placeholder="نام و نام خانوادگی"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    آدرس ایمیل
                  </label>
                  <input
                    id="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full px-4 text-black py-3 focus:outline-none rounded-md border-gray-300 shadow-sm focus:outline-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    پیام شما
                  </label>
                  <textarea
                    id="message"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    name="message"
                    required
                    className="mt-1 block w-full px-4 text-black py-3 focus:outline-none rounded-md border-gray-300 shadow-sm focus:outline-indigo-500 sm:text-sm"
                    placeholder="پیام شما..."
                  ></textarea>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 0.96 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <button
                  type="submit"
                  className="w-full border border-green-400 py-3 px-6 font-bold text-green-600 rounded-md hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  ارسال پیام
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
