"use client";
import Diffrent from "@/components/services/diffrent";
import Vision from "@/components/services/vision";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlogSchema } from "@/components/schema/blogSchema";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const blogData = {
    title: "درباره تومک | تیم متخصص توسعه کسب و کار دیجیتال",
    url: "/about",
    images: ["/assets/images/aboutUs.svg"],
    sections: [
      {
        heading: "تیم حرفه‌ای توسعه کسب و کار دیجیتال",
        content:
          "تیم تومک متشکل از متخصصان حوزه نرم‌افزار و تصویرسازی دیجیتال، با ترکیب خلاقیت و تکنولوژی به رشد کسب و کارها کمک می‌کند.",
        lists: [
          "توسعه نرم‌افزارهای سفارشی",
          "طراحی و پیاده‌سازی سیستم‌های اتوماسیون",
          "هوش مصنوعی کاربردی",
          "دیجیتال مارکتینگ حرفه‌ای",
        ],
      },
      {
        heading: "تخصص و تجربه",
        content:
          "از سال 1401 با تمرکز بر نوآوری و کیفیت، خدمات جامع دیجیتال را به کسب و کارها ارائه می‌دهیم.",
      },
      {
        heading: "رویکرد متفاوت به توسعه دیجیتال",
        content:
          "هدف ما فراتر از حضور دیجیتال است - ما به دنبال ایجاد رشد واقعی و پایدار برای کسب و کارها هستیم.",
      },
      {
        heading: "همراه در مسیر موفقیت",
        content:
          "با ترکیب دانش فنی و خلاقیت، کسب و کار شما را برای موفقیت در دنیای دیجیتال آماده می‌کنیم.",
      },
    ],
  };

  useEffect(() => {
    document.title = "درباره ما | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "تومک یک تیم پویا و خلاق است که با تکیه بر دانش فنی و تخصص، خدمات حرفه‌ای و کاملی را در زمینه طراحی و توسعه وب، تولید محتوا، و تحلیل داده‌ها ارائه می‌دهد. "
      );
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // delay for animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BlogSchema blogData={blogData} />

      <div
        className="flex items-center flex-col justify-center min-h-screen"
        dir="rtl"
      >
        <div
          className={`max-w-4xl mx-4 flex flex-col border rounded-xl border-gray-300 items-center justify-center my-32 p-4  backdrop-blur-md ring ring-gray-100 transform transition duration-700 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-2xl lg:text-3xl font-bold my-7 p-2 text-center text-black border-b border-blue-100 ">
            چی شد که ما اومدیم؟
          </h1>
          <Image
            src="/assets/images/aboutUs.svg"
            alt="aboutus"
            width={300}
            height={500}
            className="my-5"
          />

          <p className="text-lg text-black/90 mb-6 p-8 text-justify rounded-xl bg-white ">
            این یک درباره ما کاملاً متفاوت است! تیم ما از دو هسته‌ی اصلی،
            محمدحسین محمدخانی و محمدمهدی رحمانی، تشکیل شده. هر کدام تخصص‌های
            مختلفی دارند که می‌شود گفت دو بال اصلی هر بیزینس هستند. همین باعث شد
            که به فکر بیفتند با هم کسب‌وکارها را در فضای دیجیتال گسترش بدهند.
            مهدی، مهندس تصویر و نورپردازی است و به همین خاطر تیم ما درک خیلی
            خوبی از نحوه‌ی دیده شدن بیزینس‌ها در فضای دیجیتال دارد. از آن طرف،
            محمد، مهندس نرم‌افزار است و هر چیزی را که فکرش را بکنید، می‌تواند در
            فضای دیجیتال بسازد. اول این کار برمی‌گردد به سال ۱۴۰۱، زمانی که شرکت
            تومک بیشتر در حوزه‌ی دیجیتال مارکتینگ فعالیت می‌کرد. اما با گذشت
            زمان، هر دو نفر متوجه شدند که توسعه‌ی کسب‌وکارها نیاز به پایه‌های
            بنیادی‌تری دارد. مثل مهندسی‌های بهتر برای ساخت اتوماسیون‌ها و
            شخصی‌سازی مدل‌های هوش مصنوعی برای کسب‌وکارها. به همین خاطر، هدف تیم
            ما از روز اول این شد که فراتر از دیجیتال مارکتینگ حرکت کند و به
            بیزینس‌ها کمک کند تا نه فقط دیده شوند، بلکه از نظر ساختاری و عملکردی
            رشد کنند. امروز، ما نه تنها در زمینه‌ی تبلیغات دیجیتال قوی عمل
            می‌کنیم، بلکه در طراحی و پیاده‌سازی سیستم‌های اتوماسیون، هوش مصنوعی،
            و توسعه‌ی نرم‌افزارهای کاربردی تخصص داریم. تیم تومک آماده است تا با
            ترکیب خلاقیت و تکنولوژی، کسب‌وکار شما را به سطح بالاتری ببرد. اینجا،
            ما فقط برای دیده شدن کار نمی‌کنیم؛ بلکه برای موفق شدن شما تلاش
            می‌کنیم. 🚀
          </p>
          <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
            <span className="text-lg">
              <Link href="/">بازگشت به صفحه اصلی</Link>
            </span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20"></div>
            </div>
          </button>
        </div>

        <Diffrent
          text1={"مهندسی با اشتیاق"}
          p1={
            "ما شبکه ای از نوآوران هستیم. ما راه حل های جسورانه ای برای پیچیده ترین چالش های مشتری ابداع می کنیم. این توانایی ما برای کشف فناوری‌های جدید برای طراحی بهترین راه‌حل‌هایی است که 96 درصد از مشتریان ما آماده هستند تا به ما پیشنهاد دهند."
          }
          text2={"تمرکز بر عملکرد"}
          p2={
            "ما شریک اختصاصی شما می شویم. این بدان معناست که تا زمانی که ما و شما 100% خوشحال نباشیم، پروژه ای را به پایان نخواهیم رساند. با نرخ رضایت مشتری بیش از 97٪، ما یک شریک کلیدی فناوری استراتژیک در نظر گرفته می‌شویم."
          }
          text3={"تقدیم به موفقیت"}
          p3={
            "ما نوآوری هایی را هدایت می کنیم که به مشتریان ما کمک می کند جلوتر از منحنی باشند. ما به نیازهای فوری و اهداف بلند مدت شما اهمیت می دهیم. ما بر این باوریم که موفقیت سه جنبه دارد: برای مشتریان ما، مشتریان آنها و جوامعی که بر آنها تأثیر می گذارند."
          }
        />
        <Vision
          image={"/assets/images/vison2.jpg"}
          subTitle={`ما اینجا دور هم جمع نشده‌ایم که فقط کار کنیم؛ هدف ما ساختن چیزهایی است که واقعاً برای کسب‌وکارها معنی داشته باشد. از روز اول، تمرکز ما روی این بوده که بیزینس‌ها را از صرفاً "حضور در فضای دیجیتال" به "موفقیت در فضای دیجیتال" برسانیم.

ما باور داریم که هر کسب‌وکاری پتانسیل این را دارد که رشد کند، بدرخشد و حتی فراتر از انتظارات پیش برود. اما این فقط با ابزارهای درست و استراتژی‌های هوشمندانه ممکن است. هدف ما این است که این ابزارها و استراتژی‌ها را برای شما فراهم کنیم.

ما می‌خواهیم:

به کسب‌وکارها کمک کنیم بهتر دیده شوند و بیشتر بفروشند.
سیستم‌هایی طراحی کنیم که زمان و انرژی شما را ذخیره کند.
هوش مصنوعی را از یک ایده‌ی ترسناک به یک ابزار ساده و کاربردی برای شما تبدیل کنیم.
بیزینس‌ها را برای آینده آماده کنیم؛ نه فقط برای حال.
برای ما، موفقیت شما همان چیزی است که ما را به حرکت وا‌می‌دارد. تیم تومک با ترکیب خلاقیت، دانش فنی و اشتیاق به نوآوری، اینجاست که کاری کند که کسب‌وکار شما نه فقط در دیجیتال، بلکه در دنیای واقعی هم بدرخشد.

بیایید با هم آینده‌ای بسازیم که در آن، رشد و موفقیت شما هیچ محدودیتی نداشته باشد. `}
          title={"هدف ما"}
        />

        {/* <UserTomak /> */}
     
      </div>
    </>
  );
};

export default About;
