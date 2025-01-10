"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Chart from "chart.js/auto";

const Page = () => {
  useEffect(() => {
    const ctx = document.getElementById("energyChart") as HTMLCanvasElement;
    if (ctx) {
      const chart = new Chart(ctx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "مصرف انرژی",
              data: [
                { x: 20, y: 100 },
                { x: 22, y: 120 },
                { x: 25, y: 140 },
                { x: 27, y: 160 },
                { x: 30, y: 180 },
                { x: 32, y: 200 },
              ],
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              borderColor: "rgba(16, 185, 129, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "دمای هوا (درجه سانتیگراد)",
              },
            },
            y: {
              title: {
                display: true,
                text: "مصرف انرژی (کیلووات ساعت)",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "رابطه دمای هوا و مصرف انرژی",
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const ctx = document.getElementById(
      "adPerformanceChart"
    ) as HTMLCanvasElement;
    if (ctx) {
      const chart = new Chart(ctx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "ROI تبلیغات",
              data: [
                { x: 1000, y: 2000 },
                { x: 2000, y: 3500 },
                { x: 3000, y: 5500 },
                { x: 4000, y: 7000 },
                { x: 5000, y: 9000 },
                { x: 6000, y: 11000 },
              ],
              backgroundColor: "rgba(79, 70, 229, 0.2)",
              borderColor: "rgba(79, 70, 229, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "بودجه تبلیغات (تومان)",
              },
            },
            y: {
              title: {
                display: true,
                text: "بازگشت سرمایه (تومان)",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "رابطه بودجه تبلیغات و بازگشت سرمایه",
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, []);
  const tableOfContents = [
    {
      id: "context",
      title: "پیش زمینه ",
    },
    {
      id: "what-is-regression-analysis",
      title: "تحلیل رگرسیون چیست؟",
    },
    {
      id: "linear-regression",
      title: "رگرسیون خطی",
    },
    {
      id: "polynomial-regression",
      title: "رگرسیون چندجمله‌ای",
    },
    {
      id: "lasso-regression",
      title: "رگرسیون لاسو",
    },
    {
      id: "ridge-regression",
      title: "رگرسیون ریج",
    },
    {
      id: "logistic-regression",
      title: "رگرسیون لجستیک",
    },
    {
      id: "conclusion",
      title: "نتیجه‌گیری",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <>
      <div className="relative min-h-screen w-full py-12 bg-sky-50" dir="rtl">
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-32 transform -translate-y-1"
            preserveAspectRatio="none"
          >
            <path
              fill="#0369a1"
              fillOpacity="0.1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path
              fill="#0284c7"
              fillOpacity="0.2"
              d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        <div className=" px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
            <div className="md:w-1/2 lg:mr-6">
              <h1 className="text-2xl font-bold border-b-2 py-2 border-sky-100 text-sky-900 mb-4">
                راهنمای جامع رگرسیون و انواع آن در تحلیل داده
              </h1>
              <p className="text-sky-700 mb-2 text-lg leading-relaxed">
                رگرسیون یکی از پرکاربردترین تکنیک‌های تحلیل داده و یادگیری ماشین
                است که در پیش‌بینی و مدل‌سازی روابط بین متغیرها استفاده می‌شود.
                بیش از 70 درصد از تحلیل‌های داده در دنیای واقعی از انواع مختلف
                رگرسیون استفاده می‌کنند. این تکنیک‌ها به کسب و کارها کمک می‌کنند
                تا روندها را پیش‌بینی کنند، ارتباطات را درک کنند و تصمیمات
                داده-محور بگیرند. در این مقاله، انواع مختلف رگرسیون، کاربردهای
                آنها و نحوه انتخاب مدل مناسب برای مسائل مختلف را بررسی می‌کنیم.
                شما می‌توانید از فهرست مطالب برای دسترسی به بخش‌های مختلف
                استفاده کنید و برای یادگیری بیشتر از ویدیوی آموزشی در انتهای
                صفحه بهره ببرید.
              </p>

              <Image
                src="/assets/images/proftestimonial.png"
                alt="Description"
                width={30}
                height={30}
                className="rounded-full shadow-lg inline-block"
              />
              <span className="text-black font-medium mr-2">
                نویسنده :{" "}
                <Link
                  href="https://www.linkedin.com/in/mohamad-hosein-mohamad-khani-a52373189

"
                  className="text-sky-600 hover:underline"
                >
                  محمدحسین محمدخانی
                </Link>
              </span>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/images/whatIsregresion.jpeg"
                alt="this photo genrated by ai"
                width={800}
                height={500}
                className=" shadow-lg shadow-gray-400 hover:shadow-none transition-shadow duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="sticky  mb-12 sm:overflow-y-auto sm:h-100vh  lg:top-[8rem] lg:left-4 z-50 bg-white/10 backdrop-blur-xs p-4 rounded-lg shadow-lg border border-sky-100 w-full lg:w-48 lg:overflow-y-auto   lg:max-h-[calc(100vh-12rem)]"
          dir="rtl"
        >
          <h4 className="text-lg font-bold text-sky-900 mb-4 border-b pb-2">
            فهرست مطالب
          </h4>
          <ul className="space-y-1">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sky-600 text-xs hover:text-sky-900 transition-colors duration-300 border-b border-gray-200 text-right w-full hover:bg-gray-100 p-3 rounded-lg"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* پیشزمینه رگرسیون و مفهوم کلی  */}
        <div className=" container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16  flex flex-col  justify-center gap-8 ">
            <h2
              id="section1"
              className="text-xl text-gray-800 text-right font-bold"
            >
              پیش زمینه برای درک بهتر مفهوم رگرسیون
            </h2>
            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              یکی از مهمترین مفاهیم در تحلیل داده‌ها و یادگیری ماشین، (
              <Link
                href="https://www.ibm.com/topics/regression-analysis"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold"
              >
                رگرسیون
              </Link>
              ) است. تصور کنید می‌خواهید قیمت خانه‌ها را بر اساس متراژ آنها
              پیش‌بینی کنید. این یک مثال ساده از (
              <Link
                href="https://www.mathworks.com/discovery/pattern-recognition.html"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold"
              >
                تشخیص الگو
              </Link>
              ) است که در آن رابطه بین دو متغیر (
              <Link
                href="https://www.statisticshowto.com/dependent-variable-definition/"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold"
              >
                متغیر وابسته
              </Link>
              ) و (
              <Link
                href="https://www.statisticshowto.com/independent-variable-definition/"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold"
              >
                متغیر مستقل
              </Link>
              ) را بررسی می‌کنیم.
            </p>

            <Image
              src="/assets/images/linearRegresionExample.png"
              alt="نمودار رگرسیون قیمت خانه"
              width={800}
              height={500}
              className="shadow-lg"
            />

            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              در این مثال، با استفاده از تکنیک‌های (
              <Link
                href="https://www.ibm.com/topics/linear-regression"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold"
              >
                رگرسیون خطی
              </Link>
              ) می‌توانیم خط یا منحنی‌ای را پیدا کنیم که بهترین برازش را با
              داده‌های ما داشته باشد. این خط به ما کمک می‌کند تا (
              <Link
                href="https://www.oracle.com/artificial-intelligence/machine-learning/what-is-machine-learning/"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold"
              >
                پیش‌بینی‌های
              </Link>
              ) دقیق‌تری انجام دهیم.
            </p>

            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">بیشتر بخوانید ...</div>
              <p className="text-right text-gray-500 leading-relaxed">
                لینک توضیحات تکمیلی مفاهیم ذکر شده در متن بالا با رنگ آبی مشخص
                شده است. با کلیک بر روی این کلمات می‌توانید به منابع اصلی دسترسی
                پیدا کنید.
              </p>
            </div>

            {/* تحلیل رگرسیون چیست ؟{" "} */}

            <h2
              id="section2"
              className="text-xl text-gray-800 text-right font-bold"
            >
              تحلیل رگرسیون چیست ؟{" "}
            </h2>
            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              تحلیل رگرسیون یک روش قدرتمند آماری است که به ما کمک می‌کند روابط
              بین متغیرها را کشف و پیش‌بینی کنیم. مانند یک کارآگاه که از
              سرنخ‌های مختلف برای حل معما استفاده می‌کند، رگرسیون از (
              <Link
                href="https://www.ibm.com/topics/predictive-analytics"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold"
              >
                متغیرهای پیش‌بینی‌کننده
              </Link>
              ) برای یافتن الگوها و پیش‌بینی نتایج استفاده می‌کند.
            </p>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Header Section */}
              <div className="bg-emerald-500 text-white p-4 rounded-t-xl">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  مثال عملی ۱: پیش‌بینی مصرف انرژی
                </h3>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  تصور کنید مدیر یک ساختمان هوشمند هستید. با استفاده از
                  فاکتورهای زیر می‌توانید مصرف برق ساختمان را پیش‌بینی کنید:
                </p>

                {/* Factors Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-emerald-50 p-3 rounded-lg text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mx-auto mb-2 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                      />
                    </svg>
                    <span className="text-emerald-800">دمای هوا</span>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mx-auto mb-2 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-emerald-800">ساعات روز</span>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mx-auto mb-2 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="text-emerald-800">تعداد افراد</span>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mx-auto mb-2 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-emerald-800">روزهای هفته</span>
                  </div>
                </div>

                {/* Sample Chart */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    نمودار رگرسیون مصرف انرژی
                  </h4>
                  <div className="aspect-w-16 aspect-h-9">
                    <canvas id="energyChart"></canvas>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-indigo-500 text-white p-4 rounded-t-xl">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  مثال عملی ۲: تحلیل عملکرد تبلیغات
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                یک آژانس تبلیغاتی با بررسی فاکتورهای زیر، میزان بازگشت سرمایه را
                پیش‌بینی می‌کند:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-indigo-50 p-3 rounded-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto mb-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-indigo-800">بودجه تبلیغات</span>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto mb-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-indigo-800">زمان پخش</span>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto mb-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span className="text-indigo-800">پلتفرم تبلیغاتی</span>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto mb-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-indigo-800">جمعیت هدف</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-4">
                  نمودار رگرسیون بازگشت سرمایه تبلیغات
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <canvas id="adPerformanceChart"></canvas>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                محاسبات ریاضی رگرسیون خطی
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Formula Section */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-800 mb-3">
                    فرمول رگرسیون خطی
                  </h5>
                  <div className="space-y-2">
                    <p className="text-gray-900 font-mono">Y = β₀ + β₁X</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Y: بازگشت سرمایه (متغیر وابسته)</li>
                      <li>X: بودجه تبلیغات (متغیر مستقل)</li>
                      <li>β₀: عرض از مبدأ</li>
                      <li>β₁: شیب خط (ضریب رگرسیون)</li>
                    </ul>
                  </div>
                </div>

                {/* Calculations Section */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-bold text-green-800 mb-3">
                    محاسبه ضرایب
                  </h5>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-mono">
                      β₁ = Σ((x - x̄)(y - ȳ)) / Σ((x - x̄)²)
                    </p>
                    <p className="text-black">β₀ = ȳ - β₁x̄</p>
                  </div>
                </div>

                {/* Example Calculation */}
                <div className="bg-purple-50 p-4 rounded-lg md:col-span-2">
                  <h5 className="font-bold text-purple-800 mb-3">مثال عددی</h5>
                  <div className="space-y-2">
                    <p className="text-gray-700">با داده‌های نمونه:</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-mono text-black">β₁ = 1.75</p>
                        <p className="font-mono text-black">β₀ = 500</p>
                      </div>
                      <div>
                        <p className="text-black">برای بودجه 1000 تومان:</p>
                        <p className="font-mono text-black">
                          Y = 500 + 1.75(1000) = 2250 تومان
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* R-squared Section */}
                <div className="bg-yellow-50 p-4 rounded-lg md:col-span-2">
                  <h5 className="font-bold text-yellow-800 mb-3">
                    ضریب تعیین (R²)
                  </h5>
                  <div className="space-y-2">
                    <p className="text-gray-700">R² = 0.92</p>
                    <p className="text-sm text-gray-600">
                      این مقدار نشان می‌دهد که 92% از تغییرات در بازگشت سرمایه
                      توسط تغییرات در بودجه تبلیغات قابل توضیح است.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <h3 className="text-xl font-bold text-gray-800">
                تکنیک‌های پیش‌بینی در رگرسیون
              </h3>

              {/* Interpolation Section */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-r-4 border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-2xl text-blue-600">1</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">
                    <Link
                      href="https://www.mathworks.com/discovery/interpolation.html"
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      درون‌یابی (Interpolation)
                    </Link>
                  </h4>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    درون‌یابی فرآیند تخمین مقادیر ناشناخته بین نقاط داده‌های
                    موجود است. این تکنیک زمانی کاربرد دارد که می‌خواهیم مقادیر
                    گمشده را در محدوده داده‌های موجود پیدا کنیم.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">
                      مثال‌های کاربردی درون‌یابی:
                    </h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>
                          دمای هوا: تخمین دمای ساعت 14:30 با داشتن دمای ساعت‌های
                          14:00 و 15:00
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>
                          قیمت سهام: محاسبه قیمت سهام در زمانی که بازار بسته
                          بوده با استفاده از قیمت‌های قبل و بعد از آن
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>
                          نقشه‌برداری: تخمین ارتفاع نقطه‌ای بین دو نقطه با
                          ارتفاع مشخص
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Extrapolation Section */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-r-4 border-green-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <span className="text-2xl text-green-600">2</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">
                    <Link
                      href="https://www.mathworks.com/discovery/extrapolation.html"
                      className="text-green-500 hover:text-green-700 transition-colors"
                    >
                      برون‌یابی (Extrapolation)
                    </Link>
                  </h4>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    برون‌یابی روشی برای پیش‌بینی مقادیر خارج از محدوده داده‌های
                    موجود است. این تکنیک برای پیش‌بینی روندهای آینده بر اساس
                    الگوهای گذشته استفاده می‌شود.
                  </p>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">
                      مثال‌های کاربردی برون‌یابی:
                    </h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>
                          جمعیت: پیش‌بینی جمعیت شهر در سال 1410 بر اساس داده‌های
                          جمعیتی 10 سال گذشته
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>
                          فروش: تخمین فروش محصول در فصل آینده بر اساس روند فروش
                          فصل‌های گذشته
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>
                          تغییرات اقلیمی: پیش‌بینی دمای کره زمین در 10 سال آینده
                          بر اساس روند تغییرات دمایی گذشته
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                    <h5 className="font-bold text-yellow-800 mb-2">
                      نکات مهم:
                    </h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        <span>
                          برون‌یابی معمولاً دقت کمتری نسبت به درون‌یابی دارد
                          زیرا به فرضیات بیشتری درباره ثبات روندها نیاز دارد
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        <span>
                          هرچه فاصله پیش‌بینی از داده‌های موجود بیشتر باشد،
                          احتمال خطا افزایش می‌یابد
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">کاربردهای واقعی</div>
              <ul className="text-right text-gray-500 leading-relaxed list-disc pr-6">
                <li>پیش‌بینی قیمت سهام بر اساس شاخص‌های اقتصادی</li>
                <li>تخمین میزان فروش محصولات جدید</li>
                <li>پیش‌بینی نمرات دانش‌آموزان بر اساس ساعات مطالعه</li>
                <li>تحلیل اثربخشی داروها در پزشکی</li>
              </ul>
            </div>

            <Image
              src="/assets/images/legresionimage2.jpeg"
              alt="Description"
              width={800}
              height={500}
              className="shadow-lg"
            />
          </div>
        </div>


        {/* جمع بندی و نتیجه گیری */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h2 className="text-2xl text-indigo-900 text-right font-bold border-b-2 border-indigo-200 pb-4">
              جمع‌بندی و نتیجه‌گیری
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg">
              <h3
                id="section17"
                className="text-xl font-bold text-blue-900 mb-4"
              >
                مروری بر مفاهیم کلیدی
              </h3>
              <p className="text-gray-700 leading-relaxed">
                در این مقاله، با مفاهیم اساسی طبقه‌بندی متن آشنا شدیم. از تعریف
                اولیه طبقه‌بندی‌کننده متن تا الگوریتم‌های پیشرفته و روش‌های
                ارزیابی را بررسی کردیم. دیدیم که چگونه هر الگوریتم با رویکرد
                منحصر به فرد خود به حل مسئله طبقه‌بندی می‌پردازد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
                <h4 className="text-lg font-bold text-green-900 mb-4">
                  الگوریتم‌های اصلی
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• رگرسیون لجستیک برای طبقه‌بندی دودویی</li>
                  <li>• نایو بیز برای تحلیل احتمالاتی</li>
                  <li>• درخت تصمیم برای قوانین شفاف</li>
                  <li>• جنگل تصادفی برای دقت بالاتر</li>
                  <li>• SVM برای داده‌های با ابعاد بالا</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
                <h4 className="text-lg font-bold text-purple-900 mb-4">
                  معیارهای ارزیابی
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• دقت برای داده‌های متوازن</li>
                  <li>• صحت برای کیفیت پیش‌بینی‌های مثبت</li>
                  <li>• فراخوانی برای پوشش موارد مثبت</li>
                  <li>• معیار F1 برای تعادل بین صحت و فراخوانی</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg mt-6 border-r-4 border-emerald-500">
              <h4 className="text-lg font-bold text-emerald-900 mb-3">
                توصیه‌های کاربردی
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• انتخاب الگوریتم مناسب بر اساس نوع داده و هدف پروژه</li>
                <li>• اهمیت پیش‌پردازش و آماده‌سازی داده‌ها</li>
                <li>• استفاده از معیارهای ارزیابی متناسب با مسئله</li>
                <li>• توجه به مصالحه بین سرعت، دقت و قابلیت تفسیر</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-bold text-indigo-900 mb-3">
                نگاه به آینده
              </h4>
              <p className="text-gray-700 leading-relaxed">
                با گسترش روزافزون داده‌های متنی در دنیای دیجیتال، اهمیت
                طبقه‌بندی متن همچنان رو به افزایش است. ترکیب این تکنیک‌ها با
                یادگیری عمیق و پردازش زبان طبیعی، افق‌های جدیدی را در تحلیل و
                درک متون باز می‌کند.
              </p>
            </div>
          </div>
        </div>
        {/* منابع */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h2
              id="section18"
              className="text-2xl text-indigo-900 text-right font-bold border-b-2 border-indigo-200 pb-4"
            >
              منابع و مراجع
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                منابع اصلی
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://scikit-learn.org/stable/supervised_learning.html"
                    className="hover:text-blue-600"
                  >
                    Scikit-learn Documentation - Text Classification
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://www.deeplearning.ai/"
                    className="hover:text-blue-600"
                  >
                    DeepLearning.AI - Natural Language Processing Specialization
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://www.tensorflow.org/text"
                    className="hover:text-blue-600"
                  >
                    TensorFlow Text - Official Documentation
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://web.stanford.edu/~jurafsky/slp3/"
                    className="hover:text-blue-600"
                  >
                    Speech and Language Processing - Stanford NLP Group
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://www.nltk.org/"
                    className="hover:text-blue-600"
                  >
                    Natural Language Toolkit (NLTK) Documentation
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://levity.ai/blog/text-classifiers-in-machine-learning-a-practical-guide"
                    className="hover:text-blue-600"
                  >
                    Levity AI Blog - Text Classifiers in Machine Learning
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://www.ibm.com/think/topics/machine-learning-algorithms"
                    className="hover:text-blue-600"
                  >
                    IBM - Machine Learning Algorithms
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://docs.aws.amazon.com/machine-learning/latest/dg/learning-algorithm.html"
                    className="hover:text-blue-600"
                  >
                    AWS Documentation - Learning Algorithms
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://www.javatpoint.com/hypothesis-in-machine-learning"
                    className="hover:text-blue-600"
                  >
                    Javatpoint - Hypothesis in Machine Learning
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                یادداشت پایانی
              </h4>
              <p className="text-gray-700 leading-relaxed">
                تمامی مطالب این مقاله با استفاده از منابع معتبر علمی و آکادمیک
                گردآوری و تألیف شده است. مفاهیم و مثال‌های ارائه شده بر اساس
                آخرین پژوهش‌ها و بهترین شیوه‌های موجود در حوزه طبقه‌بندی متن
                می‌باشد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
