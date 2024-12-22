"use client";
import Diffrent from "@/components/services/diffrent";
import Vision from "@/components/services/vision";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      <div
        className="flex items-center flex-col justify-center min-h-screen"
        dir="rtl"
      >
        <div
          className={`max-w-5xl mx-4 flex flex-col border border-gray-300 items-center justify-center my-32 p-4 bg-secondary/10 backdrop-blur-md shadow-lg transform transition duration-700 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl font-bold mb-4 p-2 text-center text-black">
            چی شد که ما اومدیم؟
          </h1>
          <Image
            src="/assets/images/aboutUs.svg"
            alt="aboutus"
            width={300}
            height={500}
            className="my-5"
          />

          <p className="text-lg text-black/90 mb-6 p-8 text-justify rounded-xl bg-white/90 ">
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
          subTitle={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          }
          title={"هدف ما"}
        />
      </div>
    </>
  );
};

export default About;
