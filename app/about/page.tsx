"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    totalSales: 0,
    officialPlugins: 0,
    totalPlugins: 0,
    downloads: 0,
  });
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const countInterval = setInterval(() => {
      setCounts((prevCounts) => ({
        totalSales:
          prevCounts.totalSales < 4.8 ? prevCounts.totalSales + 0.1 : 4.8,
        officialPlugins:
          prevCounts.officialPlugins < 24 ? prevCounts.officialPlugins + 1 : 24,
        totalPlugins:
          prevCounts.totalPlugins < 86 ? prevCounts.totalPlugins + 1 : 86,
        downloads:
          prevCounts.downloads < 86000 ? prevCounts.downloads + 1000 : 86000,
      }));
    }, 50);
    return () => {
      clearTimeout(timer);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <>
      <div
        className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-b from-primary to-secondary"
        dir="rtl"
      >
        <div
          className={`max-w-5xl mx-4 flex flex-col items-center justify-center my-32 p-4 bg-secondary rounded-2xl shadow-lg transform transition duration-700 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl font-bold mb-4 p-2 text-center text-white">
            درباره ما
          </h1>
          <Image
            src="/assets/images/aboutUs.svg"
            alt="aboutus"
            width={300}
            height={500}
            className="my-5"
          />

          <p className="text-lg text-white/90 mb-6 p-8 text-justify rounded-xl bg-white/30 ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
            <span className="text-lg">
              <Link href="/">بازگشت به صفحه اصلی</Link>
            </span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20"></div>
            </div>
          </button>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              مورد اعتماد کسب و کارهای تجارت الکترونیک
            </h2>

            <p className="mt-4 text-gray-200 text-base text-justify p-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                کل فروش
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                ${counts.totalSales.toFixed(1)}m
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                افزونه های رسمی
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {Math.round(counts.officialPlugins)}
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                مجموع افزونه ها
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {Math.round(counts.totalPlugins)}
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                دانلودها
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {Math.round(counts.downloads / 1000)}k
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default About;
