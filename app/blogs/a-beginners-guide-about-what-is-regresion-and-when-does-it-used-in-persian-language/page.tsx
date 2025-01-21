"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import { BlogSchema } from "@/components/schema/blogSchema";

const Page = () => {
  const blogData = {
    title: "راهنمای جامع رگرسیون و انواع آن در تحلیل داده",
    url: "/a-beginners-guide-about-what-is-regresion-and-when-does-it-used-in-persian-language",
    images: ["/assets/images/regression_guide.svg"],
    sections: [
      {
        heading: "مقدمه",
        content:
          "رگرسیون یکی از پرکاربردترین تکنیک‌های تحلیل داده و یادگیری ماشین است که در پیش‌بینی و مدل‌سازی روابط بین متغیرها استفاده می‌شود. این تکنیک‌ها به کسب‌وکارها کمک می‌کنند تا روندها را پیش‌بینی کنند، ارتباطات را درک کنند و تصمیمات داده‌محور بگیرند.",
      },
      {
        heading: "پیش‌زمینه برای درک بهتر مفهوم رگرسیون",
        content:
          "یکی از مهم‌ترین مفاهیم در تحلیل داده‌ها و یادگیری ماشین، رگرسیون است. تصور کنید می‌خواهید قیمت خانه‌ها را بر اساس متراژ آن‌ها پیش‌بینی کنید. این یک مثال ساده از تشخیص الگو است که در آن رابطه بین دو متغیر وابسته و مستقل را بررسی می‌کنیم.",
      },
      {
        heading: "تحلیل رگرسیون چیست؟",
        content:
          "تحلیل رگرسیون یک روش قدرتمند آماری است که به ما کمک می‌کند روابط بین متغیرها را کشف و پیش‌بینی کنیم. مانند یک کارآگاه که از سرنخ‌های مختلف برای حل معما استفاده می‌کند، رگرسیون از متغیرهای پیش‌بینی‌کننده برای یافتن الگوها و پیش‌بینی نتایج استفاده می‌کند.",
      },
      {
        heading: "مثال‌های عملی",
        content:
          "پیش‌بینی مصرف انرژی: تصور کنید مدیر یک ساختمان هوشمند هستید. با استفاده از فاکتورهایی مانند دمای هوا، ساعات روز، تعداد افراد و روزهای هفته می‌توانید مصرف برق ساختمان را پیش‌بینی کنید.\nتحلیل عملکرد تبلیغات: یک آژانس تبلیغاتی با بررسی فاکتورهایی مانند بودجه تبلیغات، زمان پخش، پلتفرم تبلیغاتی و جمعیت هدف، میزان بازگشت سرمایه را پیش‌بینی می‌کند.",
      },
      {
        heading: "تکنیک‌های پیش‌بینی در رگرسیون",
        content:
          "درون‌یابی (Interpolation): فرآیند تخمین مقادیر ناشناخته بین نقاط داده‌های موجود است. این تکنیک زمانی کاربرد دارد که می‌خواهیم مقادیر گمشده را در محدوده داده‌های موجود پیدا کنیم.\nبرون‌یابی (Extrapolation): روشی برای پیش‌بینی مقادیر خارج از محدوده داده‌های موجود است. این تکنیک برای پیش‌بینی روندهای آینده بر اساس الگوهای گذشته استفاده می‌شود.",
      },
      {
        heading: "کاربردهای واقعی",
        content:
          "پیش‌بینی قیمت سهام بر اساس شاخص‌های اقتصادی.\nتخمین میزان فروش محصولات جدید.\nپیش‌بینی نمرات دانش‌آموزان بر اساس ساعات مطالعه.\nتحلیل اثربخشی داروها در پزشکی.",
      },
    ],
  };

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
  // Add these functions before the useEffect hook
  useEffect(() => {
    document.title = "راهنمای جامع رگرسیون و انواع آن در تحلیل داده";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "رگرسیون یکی از پرکاربردترین تکنیک‌های تحلیل داده و یادگیری ماشین است که در پیش‌بینی و مدل‌سازی روابط بین متغیرها استفاده می‌شود. این تکنیک‌ها به کسب‌وکارها کمک می‌کنند تا روندها را پیش‌بینی کنند، ارتباطات را درک کنند و تصمیمات داده‌محور بگیرند"
      );
    }
  }, []);

  useEffect(() => {
    // Store chart instances
    const charts: Chart[] = [];

    // Linear Regression Chart
    const linearCtx = document.getElementById(
      "linearRegressionChart"
    ) as HTMLCanvasElement;
    if (linearCtx) {
      const linearChart = new Chart(linearCtx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "داده‌های واقعی",
              data: [
                { x: 80, y: 800 },
                { x: 120, y: 1200 },
                { x: 160, y: 1600 },
              ],
              backgroundColor: "rgba(59, 130, 246, 0.5)",
            },
            {
              label: "خط رگرسیون",
              type: "line",
              data: [
                { x: 60, y: 600 },
                { x: 180, y: 1800 },
              ],
              borderColor: "rgba(59, 130, 246, 0.8)",
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: { title: { display: true, text: "متراژ" } },
            y: { title: { display: true, text: "قیمت (میلیون تومان)" } },
          },
        },
      });
      charts.push(linearChart);
    }

    // Polynomial Regression Chart
    const polyCtx = document.getElementById(
      "polynomialRegressionChart"
    ) as HTMLCanvasElement;
    if (polyCtx) {
      const realData = [
        { x: 0, y: 100 },
        { x: 1, y: 200 },
        { x: 2, y: 400 },
        { x: 3, y: 800 },
        { x: 4, y: 1600 },
        { x: 5, y: 3200 },
      ];

      const curvePoints = Array.from({ length: 51 }, (_, i) => {
        const x = i / 10;
        return { x, y: 100 * Math.pow(2, x) };
      });

      const polyChart = new Chart(polyCtx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "داده‌های واقعی",
              data: realData,
              backgroundColor: "rgba(139, 92, 246, 0.5)",
              pointRadius: 6,
            },
            {
              label: "منحنی رگرسیون",
              data: curvePoints,
              type: "line",
              borderColor: "rgba(139, 92, 246, 0.8)",
              backgroundColor: "transparent",
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: { title: { display: true, text: "زمان (ساعت)" } },
            y: { title: { display: true, text: "تعداد باکتری‌ها" } },
          },
          plugins: {
            title: { display: true, text: "رشد جمعیت باکتری‌ها" },
          },
        },
      });
      charts.push(polyChart);
    }
    // Add to existing useEffect
    const lassoCtx = document.getElementById(
      "lassoRegressionChart"
    ) as HTMLCanvasElement;
    if (lassoCtx) {
      const lassoChart = new Chart(lassoCtx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "داده‌های واقعی",
              data: Array.from({ length: 30 }, (_, i) => ({
                x: i / 2,
                y: 120 + i * 2 + (Math.random() * 20 - 10),
              })),
              backgroundColor: "rgba(249, 115, 22, 0.5)",
              pointRadius: 6,
            },
            {
              label: "پیش‌بینی LASSO",
              type: "line",
              data: Array.from({ length: 30 }, (_, i) => ({
                x: i / 2,
                y: 120 + i * 2,
              })),
              borderColor: "rgba(249, 115, 22, 0.8)",
              backgroundColor: "transparent",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "شاخص توده بدنی",
              },
            },
            y: {
              title: {
                display: true,
                text: "فشار خون",
              },
            },
          },
        },
      });
      charts.push(lassoChart);
    }
    // Add to existing useEffect
    const elasticNetCtx = document.getElementById(
      "elasticNetChart"
    ) as HTMLCanvasElement;
    if (elasticNetCtx) {
      const elasticNetChart = new Chart(elasticNetCtx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "داده‌های واقعی",
              data: Array.from({ length: 50 }, (_, i) => ({
                x: i / 5,
                y: 1000 + i * 10 + (Math.random() * 200 - 100),
              })),
              backgroundColor: "rgba(99, 102, 241, 0.5)",
              pointRadius: 6,
            },
            {
              label: "پیش‌بینی ElasticNet",
              type: "line",
              data: Array.from({ length: 50 }, (_, i) => ({
                x: i / 5,
                y: 1000 + i * 10,
              })),
              borderColor: "rgba(99, 102, 241, 0.8)",
              backgroundColor: "transparent",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "زمان (روز)",
              },
            },
            y: {
              title: {
                display: true,
                text: "قیمت سهام (تومان)",
              },
            },
          },
        },
      });
      charts.push(elasticNetChart);
    }
    // Add to existing useEffect
    const bayesianCtx = document.getElementById(
      "bayesianRegressionChart"
    ) as HTMLCanvasElement;
    if (bayesianCtx) {
      const bayesianChart = new Chart(bayesianCtx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "داده‌های واقعی",
              data: Array.from({ length: 30 }, (_, i) => ({
                x: i,
                y: 50 + i * 2 + (Math.random() * 10 - 5),
              })),
              backgroundColor: "rgba(147, 51, 234, 0.5)",
              pointRadius: 6,
            },
            {
              label: "میانگین پیش‌بینی",
              type: "line",
              data: Array.from({ length: 30 }, (_, i) => ({
                x: i,
                y: 50 + i * 2,
              })),
              borderColor: "rgba(147, 51, 234, 0.8)",
              backgroundColor: "transparent",
              borderWidth: 2,
            },
            {
              label: "فاصله اطمینان",
              type: "line",
              data: Array.from({ length: 30 }, (_, i) => ({
                x: i,
                y: 50 + i * 2 + 8,
              })),
              borderColor: "rgba(147, 51, 234, 0.3)",
              backgroundColor: "rgba(147, 51, 234, 0.1)",
              fill: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "زمان (ساعت)",
              },
            },
            y: {
              title: {
                display: true,
                text: "مصرف انرژی (کیلووات)",
              },
            },
          },
        },
      });
      charts.push(bayesianChart);
    }

    // Cleanup function
    return () => {
      charts.forEach((chart) => chart.destroy());
    };
  }, []);

  useEffect(() => {
    const charts: Chart[] = [];

    const ridgeCtx = document.getElementById(
      "ridgeRegressionChart"
    ) as HTMLCanvasElement;
    if (ridgeCtx) {
      const ridgeChart = new Chart(ridgeCtx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "داده‌های واقعی",
              data: Array.from({ length: 20 }, (_, i) => ({
                x: i,
                y: 100000 - i * 5000 + Math.random() * 2000,
              })),
              backgroundColor: "rgba(34, 197, 94, 0.5)",
              pointRadius: 6,
            },
            {
              label: "پیش‌بینی مدل ریج",
              type: "line",
              data: Array.from({ length: 20 }, (_, i) => ({
                x: i,
                y: 100000 - i * 5000,
              })),
              borderColor: "rgba(34, 197, 94, 0.8)",
              backgroundColor: "transparent",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "سن خودرو (سال)",
              },
            },
            y: {
              title: {
                display: true,
                text: "قیمت (تومان)",
              },
            },
          },
        },
      });
      charts.push(ridgeChart);
    }

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
      charts.push(chart);
    }
    // Add to existing useEffect
    const logisticCtx = document.getElementById(
      "logisticRegressionChart"
    ) as HTMLCanvasElement;
    if (logisticCtx) {
      const logisticChart = new Chart(logisticCtx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "بیماران سالم",
              data: Array.from({ length: 20 }, () => ({
                x: Math.random() * 50 + 100,
                y: Math.random() * 20 + 60,
              })),
              backgroundColor: "rgba(34, 197, 94, 0.5)",
              pointRadius: 6,
            },
            {
              label: "بیماران قلبی",
              data: Array.from({ length: 20 }, () => ({
                x: Math.random() * 50 + 150,
                y: Math.random() * 20 + 80,
              })),
              backgroundColor: "rgba(239, 68, 68, 0.5)",
              pointRadius: 6,
            },
            {
              label: "مرز تصمیم‌گیری",
              type: "line",
              data: Array.from({ length: 100 }, (_, i) => ({
                x: i + 100,
                y: 0.4 * i + 40,
              })),
              borderColor: "rgba(59, 130, 246, 0.8)",
              backgroundColor: "transparent",
              borderWidth: 2,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "کلسترول",
              },
            },
            y: {
              title: {
                display: true,
                text: "فشار خون",
              },
            },
          },
        },
      });
      charts.push(logisticChart);
    }

    return () => {
      charts.forEach((chart) => chart.destroy());
    };
  }, []);
  const tableOfContents = [
    {
      id: "introduction",
      title: "مقدمه",
    },
    {
      id: "context",
      title: "پیش زمینه و مفاهیم اولیه",
    },
    {
      id: "regression-fundamentals",
      title: "اصول اساسی رگرسیون",
      subItems: [
        {
          id: "what-is-regression-analysis",
          title: "تحلیل رگرسیون چیست؟",
        },
        {
          id: "when-to-use",
          title: "موارد کاربرد رگرسیون",
        },
      ],
    },
    {
      id: "regression-types",
      title: "انواع رگرسیون",
      subItems: [
        {
          id: "linear-regression",
          title: "رگرسیون خطی ساده و چندگانه",
        },
        {
          id: "polynomial-regression",
          title: "رگرسیون چندجمله‌ای",
        },
        {
          id: "regularization-methods",
          title: "روش‌های منظم‌سازی",
          subItems: [
            {
              id: "lasso-regression",
              title: "رگرسیون لاسو",
            },
            {
              id: "ridge-regression",
              title: "رگرسیون ریج",
            },
          ],
        },
        {
          id: "logistic-regression",
          title: "رگرسیون لجستیک",
        },
      ],
    },
    {
      id: "practical-applications",
      title: "کاربردهای عملی",
    },
    {
      id: "conclusion",
      title: "نتیجه‌گیری و جمع‌بندی",
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
      <BlogSchema blogData={blogData} />

      <div className="relative min-h-screen w-full py-12 bg-sky-50 mt-12" dir="rtl">
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
              <section id="introduction">
                <h1 className="text-2xl font-bold border-b-2 py-2 border-sky-100 text-sky-900 mb-4">
                  راهنمای جامع رگرسیون و انواع آن در تحلیل داده
                </h1>
              </section>
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
              id="context"
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
              id="what-is-regression-analysis"
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
              <h4
                id="linear-regression"
                className="text-xl font-bold text-gray-800 mb-4"
              >
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
          <div className="space-y-12">
            {/* Linear Regression */}
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
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
                رگرسیون خطی (Linear Regression)
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    رگرسیون خطی یکی از پایه‌ای‌ترین و پرکاربردترین روش‌های تحلیل
                    رگرسیون است که رابطه خطی بین متغیرها را مدل می‌کند. این روش
                    در
                    <Link
                      href="https://scikit-learn.org/stable/modules/linear_model.html"
                      className="text-blue-600 hover:underline mx-1"
                    >
                      scikit-learn
                    </Link>
                    و دیگر کتابخانه‌های یادگیری ماشین به طور گسترده پشتیبانی
                    می‌شود.
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">
                    ویژگی‌های کلیدی
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span>سادگی پیاده‌سازی و تفسیر</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span>محاسبات سریع و کارآمد</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span>مناسب برای روابط خطی</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Real-world Example */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-4">
                  مثال کاربردی: پیش‌بینی قیمت خانه
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      متغیرها:
                    </h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>متغیر مستقل (X): متراژ خانه (متر مربع)</li>
                      <li>متغیر وابسته (Y): قیمت خانه (میلیون تومان)</li>
                    </ul>
                    <div className="mt-4">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        داده‌های نمونه:
                      </h5>
                      <div className="bg-white p-2 rounded border">
                        <table className="min-w-full">
                          <thead>
                            <tr>
                              <th className="px-4 py-2 border text-gray-900">
                                متراژ (X)
                              </th>
                              <th className="px-4 py-2 border text-gray-900">
                                قیمت (Y)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4 py-2 border text-center text-gray-900">
                                80
                              </td>
                              <td className="px-4 py-2 border text-center text-gray-900">
                                800
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border text-center text-gray-900">
                                120
                              </td>
                              <td className="px-4 py-2 border text-center text-gray-900">
                                1200
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border text-center text-gray-900">
                                160
                              </td>
                              <td className="px-4 py-2 border text-center text-gray-900">
                                1600
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="bg-white border rounded-lg p-4">
                    <canvas id="linearRegressionChart"></canvas>
                  </div>
                </div>
              </div>

              {/* Mathematical Details */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-4">محاسبات ریاضی</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      فرمول اصلی:
                    </h5>
                    <div className="bg-white p-4 rounded border">
                      <p className="font-mono text-gray-900">
                        Y = β₀ + β₁X + ε
                      </p>
                      <ul className="text-sm text-gray-600 mt-2">
                        <li>β₀: عرض از مبدأ</li>
                        <li>β₁: شیب خط</li>
                        <li>ε: خطای تصادفی</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      محاسبه ضرایب:
                    </h5>
                    <div className="bg-white p-4 rounded border text-gray-900">
                      <p className="font-mono text-gray-900">
                        β₁ = Σ((x - x̄)(y - ȳ)) / Σ((x - x̄)²)
                      </p>
                      <p className="font-mono mt-2 text-gray-900">
                        β₀ = ȳ - β₁x̄
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">منابع تکمیلی</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://www.coursera.org/learn/linear-regression-model"
                      className="text-blue-600 hover:underline"
                    >
                      دوره Coursera: Linear Regression and Modeling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.tensorflow.org/tutorials/keras/regression"
                      className="text-blue-600 hover:underline"
                    >
                      آموزش TensorFlow: Basic Regression
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html"
                      className="text-blue-600 hover:underline"
                    >
                      مستندات PyTorch: Building Linear Regression
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Polynomial Regression */}

            <div className="bg-white rounded-xl shadow-lg">
              <div className="bg-purple-500 text-white p-4 rounded-t-xl">
                <h3
                  id="polynomial-regression"
                  className="text-xl font-bold flex items-center gap-2"
                >
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
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7m14 10a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v8a2 2 0 002 2h2z"
                    />
                  </svg>
                  رگرسیون چندجمله‌ای (Polynomial Regression)
                </h3>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Description */}
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      رگرسیون چندجمله‌ای یک تکنیک قدرتمند برای مدل‌سازی روابط
                      غیرخطی است که در آن متغیر وابسته به صورت چندجمله‌ای با
                      متغیر مستقل ارتباط دارد. برای مثال، در مطالعه رشد گیاهان،
                      رابطه بین ارتفاع گیاه و زمان معمولاً خطی نیست - گیاه در
                      ابتدا سریع رشد می‌کند، سپس رشد آن کند می‌شود و در نهایت به
                      یک حد مشخص می‌رسد. همچنین در فیزیک، حرکت پرتابه‌ها را در
                      نظر بگیرید: مسیر یک توپ بسکتبال در هوا به شکل سهمی است که
                      با معادله درجه دوم توصیف می‌شود. در اقتصاد نیز، رابطه بین
                      قیمت و تقاضا اغلب غیرخطی است - با افزایش قیمت، کاهش تقاضا
                      به صورت تدریجی شدت می‌گیرد. این نوع رگرسیون با اضافه کردن
                      توان‌های بالاتر متغیر مستقل (مثل x², x³) می‌تواند این
                      الگوهای پیچیده را به خوبی مدل کند.
                      <Link
                        href="https://scikit-learn.org/stable/modules/preprocessing.html#polynomial-features"
                        className="text-purple-600 hover:underline mx-1"
                      >
                        مستندات scikit-learn
                      </Link>
                      روش‌های پیشرفته‌ای برای ایجاد و بهینه‌سازی این مدل‌ها
                      ارائه می‌دهد.
                    </p>
                  </div>

                  {/* Quick Facts */}
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">
                      ویژگی‌های کلیدی
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-purple-500">•</span>
                        <span>مناسب برای روابط غیرخطی</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-500">•</span>
                        <span>انعطاف‌پذیری در مدل‌سازی منحنی‌ها</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-500">•</span>
                        <span>قابلیت تشخیص الگوهای پیچیده</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Real-world Example */}
                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-4">
                    مثال کاربردی: رشد جمعیت باکتری‌ها
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        متغیرها:
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>متغیر مستقل (X): زمان (ساعت)</li>
                        <li>متغیر وابسته (Y): تعداد باکتری‌ها</li>
                      </ul>
                      <div className="mt-4">
                        <h5 className="font-semibold text-gray-800 mb-2">
                          داده‌های نمونه:
                        </h5>
                        <div className="bg-white p-2 rounded border">
                          <table className="min-w-full">
                            <thead>
                              <tr>
                                <th className="px-4 py-2 border text-gray-900">
                                  زمان (X)
                                </th>
                                <th className="px-4 py-2 border text-gray-900">
                                  تعداد باکتری (Y)
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-4 py-2 border text-center text-gray-900">
                                  0
                                </td>
                                <td className="px-4 py-2 border text-center text-gray-900">
                                  100
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 border text-center text-gray-900">
                                  2
                                </td>
                                <td className="px-4 py-2 border text-center text-gray-900">
                                  400
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 border text-center text-gray-900">
                                  4
                                </td>
                                <td className="px-4 py-2 border text-center text-gray-900">
                                  1600
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-white border rounded-lg p-4">
                      <canvas id="polynomialRegressionChart"></canvas>
                    </div>
                  </div>
                </div>

                {/* Mathematical Details */}
                {/* Mathematical Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-4">
                    محاسبات ریاضی
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        فرمول چندجمله‌ای درجه n:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-mono text-black">
                          Y = β₀ + β₁X + β₂X² + β₃X³ + ... + βₙXⁿ + ε
                        </p>
                        <div className="text-sm text-gray-600 mt-4 space-y-2">
                          <p className="font-bold">توضیح اجزای فرمول:</p>
                          <ul className="space-y-3">
                            <li>
                              <span className="font-mono">β₀</span>: عرض از مبدأ
                              که نقطه شروع منحنی را مشخص می‌کند
                            </li>
                            <li>
                              <span className="font-mono">β₁X</span>: جزء خطی که
                              روند کلی تغییرات را نشان می‌دهد
                            </li>
                            <li>
                              <span className="font-mono">β₂X²</span>: جزء درجه
                              دوم که انحنای اصلی منحنی را شکل می‌دهد
                            </li>
                            <li>
                              <span className="font-mono">βₙXⁿ</span>: اجزای
                              درجه بالاتر که جزئیات پیچیده‌تر منحنی را کنترل
                              می‌کنند
                            </li>
                            <li>
                              <span className="font-mono">ε</span>: خطای تصادفی
                              که نویز و تغییرات غیرقابل پیش‌بینی را مدل می‌کند
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        محاسبه ضرایب بهینه:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-mono text-black">
                          {"β = (Z'Z)⁻¹Z'y"}
                        </p>
                        <div className="text-sm text-gray-600 mt-4 space-y-2">
                          <p className="font-bold">توضیح اجزای فرمول:</p>
                          <ul className="space-y-3">
                            <li>
                              <span className="font-mono">Z</span>: ماتریس
                              ویژگی‌های چندجمله‌ای شامل توان‌های X
                            </li>
                            <li>
                              <span className="font-mono">{"Z'"}</span>:
                              ترانهاده ماتریس ویژگی‌های چندجمله‌ای
                            </li>
                            <li>
                              <span className="font-mono">{"(Z'Z)⁻¹"}</span>:
                              معکوس حاصلضرب ماتریس‌ها برای یافتن ضرایب بهینه
                            </li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 p-3 rounded mt-4">
                          <p className="text-sm text-purple-800">
                            این فرمول‌ها به ما امکان می‌دهند روابط غیرخطی پیچیده
                            را با دقت بالا مدل‌سازی کنیم. درجه چندجمله‌ای (n)
                            باید با توجه به پیچیدگی داده‌ها و خطر بیش‌برازش
                            انتخاب شود.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">نمونه کد Python:</h4>
                  <pre className="text-sm">
                    {`from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Create polynomial features
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

# Fit polynomial regression
model = LinearRegression()
model.fit(X_poly, y)`}
                  </pre>
                </div>

                {/* Additional Resources */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">
                    منابع تکمیلی
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://www.coursera.org/learn/ml-regression"
                        className="text-purple-600 hover:underline"
                      >
                        دوره Coursera: Machine Learning - Regression
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.kaggle.com/code/residentmario/polynomial-regression"
                        className="text-purple-600 hover:underline"
                      >
                        Kaggle: Polynomial Regression Tutorial
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://numpy.org/doc/stable/reference/routines.polynomials.html"
                        className="text-purple-600 hover:underline"
                      >
                        NumPy: Polynomial Documentation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 3. Ridge Regression */}
            {/* Ridge Regression */}
            <div className="bg-white rounded-xl shadow-lg">
              <div className="bg-green-500 text-white p-4 rounded-t-xl">
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
                  رگرسیون ریج (Ridge Regression)
                </h3>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Description */}
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      رگرسیون ریج یک تکنیک پیشرفته برای بهبود دقت پیش‌بینی در
                      شرایط پیچیده است. تصور کنید می‌خواهید قیمت خانه را بر اساس
                      ویژگی‌های متعدد پیش‌بینی کنید: متراژ، تعداد اتاق‌ها، سن
                      ساختمان، فاصله تا مرکز شهر و کیفیت مصالح. این ویژگی‌ها
                      اغلب با هم همبستگی دارند - مثلاً خانه‌های بزرگ‌تر معمولاً
                      تعداد اتاق بیشتری دارند. در چنین شرایطی، رگرسیون خطی ساده
                      ممکن است ضرایب بسیار بزرگی به برخی ویژگی‌ها اختصاص دهد و
                      دچار (overfitting)بیش‌برازش شود. رگرسیون ریج با اضافه کردن
                      یک جریمه (λ||β||²) به تابع هزینه، از این مشکل جلوگیری
                      می‌کند. در مثال قیمت خانه، اگر λ = 1000 باشد، مدل از
                      اختصاص وزن بیش از حد به متراژ یا تعداد اتاق‌ها خودداری
                      می‌کند و تمام ویژگی‌ها را به طور متعادل در نظر می‌گیرد.
                      این روش در صنعت داروسازی نیز کاربرد گسترده‌ای دارد - برای
                      پیش‌بینی اثربخشی داروها بر اساس صدها ویژگی مولکولی، که
                      بسیاری از آنها همبستگی بالایی دارند.
                      <Link
                        href="https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression"
                        className="text-green-600 hover:underline mx-1"
                      >
                        مستندات scikit-learn
                      </Link>
                      ابزارهای قدرتمندی برای پیاده‌سازی و تنظیم این مدل ارائه
                      می‌دهد.
                    </p>
                  </div>

                  {/* Quick Facts */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">
                      ویژگی‌های کلیدی
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        <span>کنترل پیچیدگی مدل با پارامتر λ</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        <span>کاهش واریانس مدل</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        <span>حفظ تمام ویژگی‌ها در مدل</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Real-world Example */}
                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-4">
                    مثال کاربردی: پیش‌بینی قیمت خودرو
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        متغیرها:
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>• سن خودرو (سال)</li>
                        <li>• کیلومتر کارکرد</li>
                        <li>• حجم موتور</li>
                        <li>• مصرف سوخت</li>
                        <li>• برند خودرو</li>
                      </ul>
                    </div>

                    {/* Chart */}
                    <div className="bg-white border rounded-lg p-4">
                      <canvas id="ridgeRegressionChart"></canvas>
                    </div>
                  </div>
                </div>

                {/* Mathematical Details */}
                {/* Mathematical Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-4">
                    محاسبات ریاضی
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        تابع هزینه:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-mono text-black">
                          L = ||y - Xβ||² + λ||β||²
                        </p>
                        <div className="text-sm text-gray-600 mt-4 space-y-2">
                          <p className="font-bold">توضیح اجزای فرمول:</p>
                          <ul className="space-y-3">
                            <li>
                              <span className="font-mono">||y - Xβ||²</span>:
                              مجموع مربعات خطا که فاصله بین مقادیر واقعی و
                              پیش‌بینی شده را محاسبه می‌کند
                            </li>
                            <li>
                              <span className="font-mono">λ</span>: پارامتر
                              تنظیم که میزان جریمه را کنترل می‌کند. مقادیر
                              بزرگتر λ باعث کاهش بیشتر ضرایب می‌شود
                            </li>
                            <li>
                              <span className="font-mono">||β||²</span>: مجموع
                              مربعات ضرایب مدل که به عنوان جریمه عمل می‌کند و از
                              بزرگ شدن بیش از حد ضرایب جلوگیری می‌کند
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        فرمول محاسبه ضرایب:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-mono text-black">
                          {"  β = (X'X + λI)⁻¹X'y"}
                        </p>
                        <div className="text-sm text-gray-600 mt-4 space-y-2">
                          <p className="font-bold">توضیح اجزای فرمول:</p>
                          <ul className="space-y-3">
                            <li>
                              <span className="font-mono">{"X'"}</span>:
                              ترانهاده ماتریس ویژگی‌ها
                            </li>
                            <li>
                              <span className="font-mono">I</span>: ماتریس همانی
                              که در ابعاد تعداد ویژگی‌ها ایجاد می‌شود
                            </li>
                            <li>
                              <span className="font-mono">(...)⁻¹</span>: معکوس
                              ماتریس که ضرایب بهینه را محاسبه می‌کند
                            </li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-3 rounded mt-4">
                          <p className="text-sm text-green-800">
                            این فرمول ضرایبی را محاسبه می‌کند که هم خطای
                            پیش‌بینی را کمینه می‌کنند و هم از بزرگ شدن بیش از حد
                            ضرایب جلوگیری می‌کنند.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">نمونه کد Python:</h4>
                  <pre className="text-sm">
                    {`from sklearn.linear_model import Ridge
from sklearn.preprocessing import StandardScaler

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Fit Ridge regression
ridge = Ridge(alpha=1.0)  # alpha is the regularization strength
ridge.fit(X_scaled, y)`}
                  </pre>
                </div>

                {/* Additional Resources */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">
                    منابع تکمیلی
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://www.coursera.org/learn/advanced-learning-algorithms"
                        className="text-green-600 hover:underline"
                      >
                        دوره Coursera: Advanced Learning Algorithms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.kaggle.com/code/residentmario/ridge-and-lasso-regression"
                        className="text-green-600 hover:underline"
                      >
                        Kaggle: Ridge Regression Tutorial
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://stanford.edu/~hastie/ElemStatLearn/"
                        className="text-green-600 hover:underline"
                      >
                        کتاب: Elements of Statistical Learning
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* LASSO Regression */}
            <div className="bg-white rounded-xl shadow-lg">
              <div className="bg-orange-500 text-white p-4 rounded-t-xl">
                <h3
                  id="lasso-regression"
                  className="text-xl font-bold flex items-center gap-2"
                >
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  رگرسیون لاسو (LASSO Regression)
                </h3>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1">
                  {/* Description */}
                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      درک عمیق‌تر رگرسیون LASSO
                    </h4>

                    <div className="space-y-4 text-gray-700">
                      <p className="leading-relaxed">
                        رگرسیون LASSO یک تکنیک پیشرفته در یادگیری ماشین است که
                        برای حل دو چالش اصلی طراحی شده است: انتخاب ویژگی‌های مهم
                        و جلوگیری از بیش‌برازش. این روش به‌ویژه در شرایطی که
                        تعداد متغیرهای پیش‌بینی‌کننده زیاد است، بسیار کارآمد عمل
                        می‌کند.
                      </p>

                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-bold text-orange-800 mb-2">
                          مزایای کلیدی LASSO:
                        </h5>
                        <ul className="list-disc list-inside space-y-2">
                          <li>خودکارسازی انتخاب ویژگی‌های مهم</li>
                          <li>کاهش پیچیدگی مدل با حذف متغیرهای کم‌اثر</li>
                          <li>بهبود قابلیت تفسیر مدل</li>
                          <li>کاهش هزینه‌های جمع‌آوری داده در آینده</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-bold text-blue-800 mb-2">
                          کاربردهای عملی:
                        </h5>
                        <ul className="space-y-2">
                          <li>
                            • در ژنومیک: شناسایی ژن‌های مرتبط با بیماری‌های خاص
                            از بین هزاران ژن
                          </li>
                          <li>
                            • در اقتصاد: پیش‌بینی شاخص‌های اقتصادی با استفاده از
                            متغیرهای کلیدی
                          </li>
                          <li>
                            • در پزشکی: تشخیص فاکتورهای موثر در پیشرفت بیماری
                          </li>
                          <li>
                            • در بازاریابی: شناسایی موثرترین کانال‌های تبلیغاتی
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5
                          id="ridge-regression"
                          className="font-bold text-green-800 mb-2"
                        >
                          تفاوت با سایر روش‌ها:
                        </h5>
                        <p>
                          برخلاف رگرسیون ریج که فقط ضرایب را کوچک می‌کند، LASSO
                          می‌تواند برخی ضرایب را دقیقاً صفر کند. این ویژگی باعث
                          می‌شود LASSO علاوه بر منظم‌سازی، یک ابزار قدرتمند برای
                          انتخاب ویژگی نیز باشد.
                        </p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-bold text-purple-800 mb-2">
                          نکات کاربردی در پیاده‌سازی:
                        </h5>
                        <ul className="space-y-2">
                          <li>
                            • استاندارد‌سازی داده‌ها قبل از اعمال LASSO ضروری
                            است
                          </li>
                          <li>• انتخاب مناسب پارامتر λ با اعتبارسنجی متقاطع</li>
                          <li>
                            • بررسی ثبات انتخاب ویژگی‌ها با تکنیک‌های نمونه‌گیری
                            مجدد
                          </li>
                          <li>• توجه به همبستگی بین متغیرها در تفسیر نتایج</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h5 className="font-bold text-yellow-800 mb-2">
                          محدودیت‌ها و ملاحظات:
                        </h5>
                        <ul className="space-y-2">
                          <li>
                            • در حضور متغیرهای بسیار همبسته، انتخاب LASSO
                            می‌تواند ناپایدار باشد
                          </li>
                          <li>• برای روابط غیرخطی پیچیده مناسب نیست</li>
                          <li>
                            • تعداد متغیرهای انتخاب شده نمی‌تواند از تعداد
                            مشاهدات بیشتر باشد
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Quick Facts */}
                </div>

                {/* Real-world Example */}
                <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-4">
                    مثال کاربردی: پیش‌بینی بیماری‌های قلبی
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        متغیرها:
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>• فشار خون</li>
                        <li>• سطح کلسترول</li>
                        <li>• ضربان قلب</li>
                        <li>• سن</li>
                        <li>• شاخص توده بدنی</li>
                        <li>• سطح قند خون</li>
                      </ul>
                    </div>

                    {/* Chart */}
                    <div className="bg-white border rounded-lg p-4">
                      <canvas id="lassoRegressionChart"></canvas>
                    </div>
                  </div>
                </div>

                {/* Mathematical Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-4">
                    محاسبات ریاضی
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        تابع هزینه:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-mono text-black">
                          L = ||y - Xβ||² + λ||β||₁
                        </p>
                        <div className="text-sm text-gray-600 mt-4 space-y-2">
                          <p className="font-bold">تشریح ریاضی فرمول:</p>
                          <ul className="space-y-3">
                            <li>
                              <span className="font-mono">||y - Xβ||²</span>:
                              مجموع مربعات خطا که به صورت (y₁ - ŷ₁)² + (y₂ -
                              ŷ₂)² + ... + (yₙ - ŷₙ)² محاسبه می‌شود
                            </li>
                            <li>
                              <span className="font-mono">λ</span>: پارامتر
                              تنظیم که معمولاً در بازه [0, ∞) انتخاب می‌شود. λ =
                              0 معادل رگرسیون خطی معمولی است
                            </li>
                            <li>
                              <span className="font-mono">||β||₁</span>: نُرم L1
                              ضرایب که به صورت |β₁| + |β₂| + ... + |βₚ| محاسبه
                              می‌شود
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        خواص ریاضی:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <div className="text-sm text-gray-600 space-y-3">
                          <p>• مشتق‌پذیری: تابع در β = 0 مشتق‌پذیر نیست</p>
                          <p>
                            • محدب بودن: تابع هزینه محدب است و حداقل سراسری دارد
                          </p>
                          <p>
                            • صفر شدن ضرایب: وقتی |∂L/∂βⱼ| λ باشد، βⱼ = 0 می‌شود
                          </p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded mt-4">
                          <p className="text-sm text-orange-800">
                            عبارت λ||β||₁ باعث می‌شود برخی ضرایب دقیقاً صفر
                            شوند، زیرا مشتق نُرم L1 در صفر ناپیوسته است. این
                            ویژگی منحصر به فرد LASSO است که آن را از Ridge
                            متمایز می‌کند.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">نمونه کد Python:</h4>
                  <pre className="text-sm">
                    {`from sklearn.linear_model import Lasso
from sklearn.preprocessing import StandardScaler

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Fit LASSO regression
lasso = Lasso(alpha=0.1)  # alpha is the regularization parameter
lasso.fit(X_scaled, y)

# Check which features were selected
selected_features = [f for f, c in zip(feature_names, lasso.coef_) if c != 0]`}
                  </pre>
                </div>

                {/* Additional Resources */}
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-2">
                    منابع تکمیلی
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://www.coursera.org/learn/ml-regression/lecture/MXEUF/lasso"
                        className="text-orange-600 hover:underline"
                      >
                        دوره Coursera: LASSO Regression
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.kaggle.com/code/residentmario/l1-norms-and-the-lasso"
                        className="text-orange-600 hover:underline"
                      >
                        Kaggle: LASSO Tutorial
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://web.stanford.edu/~hastie/Papers/Tibshirani/lasso.pdf"
                        className="text-orange-600 hover:underline"
                      >
                        مقاله اصلی LASSO توسط Tibshirani
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ElasticNet Regression */}
            <div className="bg-white rounded-xl shadow-lg">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  رگرسیون الاستیک نت (ElasticNet Regression)
                </h3>
              </div>

              <div className="p-6 space-y-6">
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  رگرسیون الاستیک نت یک روش قدرتمند و انعطاف‌پذیر است که مزایای
                  رگرسیون‌های Ridge و LASSO را ترکیب می‌کند. این روش به‌ویژه در
                  شرایطی که با داده‌های پیچیده و همبسته روبرو هستیم، بسیار
                  کارآمد است. برای مثال، در صنعت دارویی، محققان از الاستیک نت
                  برای پیش‌بینی اثربخشی داروها با استفاده از هزاران ویژگی
                  مولکولی استفاده می‌کنند. در بازارهای مالی، تحلیلگران از این
                  روش برای پیش‌بینی قیمت سهام با در نظر گرفتن صدها شاخص اقتصادی
                  و مالی بهره می‌برند. در تشخیص پزشکی، الاستیک نت به پزشکان کمک
                  می‌کند تا از بین هزاران نشانگر زیستی، موثرترین عوامل در تشخیص
                  بیماری را شناسایی کنند. این روش با تنظیم خودکار اهمیت متغیرها
                  و حفظ گروه‌های همبسته، مدل‌هایی پایدار و قابل تفسیر ارائه
                  می‌دهد.
                  <Link
                    href="https://scikit-learn.org/stable/modules/linear_model.html#elastic-net"
                    className="text-indigo-600 hover:underline mx-1"
                  >
                    مستندات scikit-learn
                  </Link>
                  ابزارهای کارآمدی برای پیاده‌سازی این روش فراهم می‌کند.
                </p>

                {/* Mathematical Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-4">
                    محاسبات ریاضی
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        تابع هزینه:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-mono text-black">
                          L = ||y - Xβ||² + λ₁||β||₁ + λ₂||β||²
                        </p>
                        <div className="text-sm text-gray-600 mt-4 space-y-2">
                          <p className="font-bold">تشریح اجزای فرمول:</p>
                          <ul className="space-y-3">
                            <li>
                              <span className="font-mono">||y - Xβ||²</span>:
                              مجموع مربعات خطا
                            </li>
                            <li>
                              <span className="font-mono">λ₁</span>: پارامتر
                              تنظیم L1 (LASSO)
                            </li>
                            <li>
                              <span className="font-mono">λ₂</span>: پارامتر
                              تنظیم L2 (Ridge)
                            </li>
                            <li>
                              <span className="font-mono">α = λ₁ + λ₂</span>:
                              پارامتر تنظیم کلی
                            </li>
                            <li>
                              <span className="font-mono">
                                ρ = λ₁/(λ₁ + λ₂)
                              </span>
                              : نسبت ترکیب L1 و L2
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        ویژگی‌های خاص:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <div className="text-sm text-gray-600 space-y-3">
                          <p>• ترکیب منظم‌سازی L1 و L2</p>
                          <p>• انعطاف‌پذیری در انتخاب ویژگی</p>
                          <p>• مدیریت همبستگی بین متغیرها</p>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded mt-4">
                          <p className="text-sm text-indigo-800">
                            با تنظیم نسبت ρ می‌توان بین خاصیت انتخاب ویژگی LASSO
                            و مدیریت همبستگی Ridge تعادل برقرار کرد.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real-world Example */}
                <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-lg">
                  <h4 className="font-bold text-indigo-800 mb-4">
                    مثال کاربردی: پیش‌بینی قیمت سهام
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        متغیرهای ورودی:
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>• شاخص‌های تکنیکال</li>
                        <li>• داده‌های بنیادی شرکت</li>
                        <li>• شاخص‌های اقتصاد کلان</li>
                        <li>• حجم معاملات</li>
                        <li>• اخبار و سنتیمنت بازار</li>
                      </ul>
                    </div>

                    {/* Chart */}
                    <div className="bg-white border rounded-lg p-4">
                      <canvas id="elasticNetChart"></canvas>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">نمونه کد Python:</h4>
                  <pre className="text-sm">
                    {`from sklearn.linear_model import ElasticNet
from sklearn.preprocessing import StandardScaler

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Fit ElasticNet regression
elastic_net = ElasticNet(alpha=1.0, l1_ratio=0.5)
elastic_net.fit(X_scaled, y)

# Get selected features
selected_features = [f for f, c in zip(feature_names, elastic_net.coef_) if c != 0]`}
                  </pre>
                </div>

                {/* Additional Resources */}
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-800 mb-2">
                    منابع تکمیلی
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://www.coursera.org/learn/ml-regression/lecture/2oKHl/elastic-net"
                        className="text-indigo-600 hover:underline"
                      >
                        دوره Coursera: ElasticNet Regression
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.kaggle.com/code/residentmario/elastic-net-regression"
                        className="text-indigo-600 hover:underline"
                      >
                        Kaggle: ElasticNet Tutorial
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://web.stanford.edu/~hastie/Papers/elasticnet.pdf"
                        className="text-indigo-600 hover:underline"
                      >
                        مقاله اصلی ElasticNet
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Bayesian Regression */}
            <div className="bg-white rounded-xl shadow-lg">
              <div className="bg-purple-500 text-white p-4 rounded-t-xl">
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
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    />
                  </svg>
                  رگرسیون بیزی (Bayesian Regression)
                </h3>
              </div>

              <div className="p-6 space-y-6">
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  رگرسیون بیزی یک رویکرد قدرتمند در تحلیل داده است که با ترکیب
                  دانش قبلی و داده‌های جدید، تخمین‌های دقیق‌تری ارائه می‌دهد. در
                  صنعت خودروسازی، مهندسان از این روش برای پیش‌بینی عمر قطعات
                  خودرو استفاده می‌کنند - با ترکیب دانش تاریخی درباره عملکرد
                  قطعات مشابه و داده‌های جدید تست‌های استرس. در پزشکی شخصی‌سازی
                  شده، پزشکان از رگرسیون بیزی برای تنظیم دوز دارو استفاده
                  می‌کنند - با در نظر گرفتن اطلاعات جمعیتی و پاسخ‌های فردی بیمار
                  به درمان. در هواشناسی، این روش برای پیش‌بینی دقیق‌تر آب و هوا
                  به کار می‌رود - با ترکیب مدل‌های اقلیمی موجود و داده‌های
                  لحظه‌ای سنسورها. مزیت اصلی رگرسیون بیزی، توانایی آن در
                  کمی‌سازی عدم قطعیت و به‌روزرسانی مداوم پیش‌بینی‌ها با دریافت
                  داده‌های جدید است. این ویژگی به‌ویژه در تصمیم‌گیری‌های حساس
                  مانند مدیریت ریسک در بانکداری یا کنترل کیفیت در خط تولید بسیار
                  ارزشمند است.
                </p>

                {/* Mathematical Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-4">
                    محاسبات ریاضی
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        قضیه بیز در پزشکی شخصی‌سازی شده:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-mono text-black">
                          P(β|D) ∝ P(D|β)P(β)
                        </p>
                        <div className="text-sm text-gray-600 mt-4 space-y-2">
                          <p className="font-bold">
                            تشریح اجزای فرمول در تنظیم دوز دارو:
                          </p>
                          <ul className="space-y-3">
                            <li>
                              <span className="font-mono text-black">
                                P(β|D)
                              </span>
                              : توزیع پسین ضرایب - تخمین نهایی اثر دارو با توجه
                              به پاسخ بیمار
                            </li>
                            <li>
                              <span className="font-mono">P(D|β)</span>: تابع
                              درستنمایی - چگونه داده‌های جدید واکنش بیمار را
                              نشان می‌دهند
                            </li>
                            <li>
                              <span className="font-mono">P(β)</span>: توزیع
                              پیشین - دانش اولیه از مطالعات بالینی قبلی و
                              تجربیات پزشکی
                            </li>
                          </ul>
                          <div className="bg-purple-50 p-3 rounded mt-2">
                            <p className="text-purple-800">
                              مثال: در تنظیم دوز داروی دیابت، پزشک از اطلاعات
                              جمعیتی (توزیع پیشین) و پاسخ فردی بیمار به دوزهای
                              قبلی (درستنمایی) برای تعیین دوز بهینه استفاده
                              می‌کند.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        مدل رگرسیون در پزشکی:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-mono text-black">y ~ N(Xβ, σ²I)</p>
                        <div className="text-sm text-gray-600 mt-4">
                          <ul className="space-y-3">
                            <li>
                              <span className="font-mono">y</span>: سطح قند خون
                              بیمار
                            </li>
                            <li>
                              <span className="font-mono">X</span>: ماتریس
                              ویژگی‌ها شامل دوز دارو، رژیم غذایی، فعالیت فیزیکی
                            </li>
                            <li>
                              <span className="font-mono">β</span>: ضرایب تأثیر
                              هر عامل
                            </li>
                            <li>
                              <span className="font-mono">σ²</span>: واریانس
                              پاسخ بیمار به درمان
                            </li>
                          </ul>
                          <div className="bg-green-50 p-3 rounded mt-4">
                            <p className="text-green-800">
                              این مدل به پزشک اجازه می‌دهد عدم قطعیت در پاسخ
                              بیمار را در نظر گرفته و با دریافت داده‌های جدید،
                              پیش‌بینی‌های خود را به‌روز کند.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real-world Example */}
                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-4">
                    مثال کاربردی: پیش‌بینی مصرف انرژی
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        متغیرها:
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>• دمای هوا</li>
                        <li>• رطوبت نسبی</li>
                        <li>• ساعات روز</li>
                        <li>• روزهای تعطیل</li>
                        <li>• تعداد ساکنین</li>
                      </ul>
                      <div className="mt-4 bg-white p-3 rounded">
                        <p className="text-sm text-gray-600">
                          با استفاده از دانش قبلی درباره الگوهای مصرف انرژی و
                          داده‌های جدید، مدل بیزی می‌تواند عدم قطعیت در
                          پیش‌بینی‌ها را بهتر مدیریت کند.
                        </p>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-white border rounded-lg p-4">
                      <canvas id="bayesianRegressionChart"></canvas>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">نمونه کد Python:</h4>
                  <pre className="text-sm">
                    {`import pymc3 as pm

with pm.Model() as model:
    # Prior distributions
    β = pm.Normal('β', mu=0, sd=10, shape=X.shape[1])
    σ = pm.HalfNormal('σ', sd=1)
    
    # Linear regression
    μ = pm.math.dot(X, β)
    
    # Likelihood
    y_obs = pm.Normal('y_obs', mu=μ, sd=σ, observed=y)
    
    # Inference
    trace = pm.sample(2000, tune=1000)`}
                  </pre>
                </div>

                {/* Additional Resources */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">
                    منابع تکمیلی
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://docs.pymc.io/en/v3/pymc-examples/examples/case_studies/probabilistic_matrix_factorization.html"
                        className="text-purple-600 hover:underline"
                      >
                        PyMC3: Bayesian Regression Examples
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://arxiv.org/abs/1906.09686"
                        className="text-purple-600 hover:underline"
                      >
                        مقاله: Bayesian Regression and Classification
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.coursera.org/learn/bayesian-statistics"
                        className="text-purple-600 hover:underline"
                      >
                        دوره Coursera: Bayesian Statistics
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Logistic Regression */}
            <div className="bg-white rounded-xl shadow-lg">
              <div className="bg-blue-500 text-white p-4 rounded-t-xl">
                <h3
                  id="logistic-regression"
                  className="text-xl font-bold flex items-center gap-2"
                >
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  رگرسیون لجستیک (Logistic Regression)
                </h3>
              </div>

              <div className="p-6 space-y-6">
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  رگرسیون لجستیک یک روش قدرتمند برای مسائل طبقه‌بندی دودویی است
                  که در آن متغیر وابسته فقط دو حالت دارد (مثلاً بله/خیر،
                  موفق/ناموفق). این روش با استفاده از تابع سیگموئید، احتمال تعلق
                  یک نمونه به کلاس مثبت را محاسبه می‌کند. در پزشکی برای تشخیص
                  بیماری، در بانکداری برای ارزیابی ریسک اعتباری، و در بازاریابی
                  برای پیش‌بینی رفتار مشتری کاربرد گسترده‌ای دارد.
                </p>

                {/* Mathematical Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-4">
                    محاسبات ریاضی در پیش‌بینی رفتار مشتری
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        تابع سیگموئید در تحلیل مشتری:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-mono text-black">
                          P(خرید|ویژگی‌ها) = 1 / (1 + e^(-z))
                        </p>
                        <p className="font-mono mt-2 text-black">
                          z = β₀ + β₁(سن) + β₂(درآمد) + β₃(بازدیدها) +
                          β₄(خرید‌های‌قبلی)
                        </p>
                        <div className="text-sm text-gray-600 mt-4 space-y-2">
                          <p className="font-bold">کاربرد در فروشگاه آنلاین:</p>
                          <ul className="space-y-3">
                            <li>
                              <span className="font-mono">
                                P(خرید|ویژگی‌ها)
                              </span>
                              : احتمال خرید مشتری در ۳۰ روز آینده
                            </li>
                            <li>
                              <span className="font-mono">β₁</span>: تأثیر سن در
                              تصمیم خرید (مثلاً 0.03 برای هر سال)
                            </li>
                            <li>
                              <span className="font-mono">β₂</span>: تأثیر درآمد
                              (مثلاً 0.005 برای هر میلیون تومان)
                            </li>
                            <li>
                              <span className="font-mono">β₃</span>: تأثیر تعداد
                              بازدیدها از سایت (مثلاً 0.1 برای هر بازدید)
                            </li>
                          </ul>
                          <div className="bg-blue-50 p-3 rounded mt-2">
                            <p className="text-blue-800">
                              مثال: برای مشتری ۳۵ ساله با درآمد ۱۰ میلیون و ۵
                              بازدید اخیر، احتمال خرید ۷۵٪ محاسبه می‌شود.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        تابع هزینه در بهینه‌سازی کمپین:
                      </h5>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-mono text-black">
                          J(θ) = -1/m Σ[y log(h(x)) + (1-y)log(1-h(x))]
                        </p>
                        <div className="text-sm text-gray-600 mt-4">
                          <ul className="space-y-3">
                            <li>• y: خرید واقعی (1 یا 0)</li>
                            <li>• h(x): احتمال پیش‌بینی شده خرید</li>
                            <li>• m: تعداد مشتریان در دیتاست</li>
                          </ul>
                          <div className="bg-green-50 p-3 rounded mt-4">
                            <p className="text-green-800">
                              با کمینه کردن این تابع هزینه، مدل می‌تواند
                              دقیق‌ترین پیش‌بینی را برای رفتار خرید مشتریان
                              ارائه دهد و کمپین‌های هدفمند طراحی کند.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real-world Example */}
                <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-4">
                    مثال کاربردی: تشخیص بیماری قلبی
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        متغیرهای ورودی:
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>• سن (x₁)</li>
                        <li>• فشار خون (x₂)</li>
                        <li>• کلسترول (x₃)</li>
                        <li>• ضربان قلب (x₄)</li>
                        <li>• قند خون (x₅)</li>
                      </ul>
                      <div className="mt-4 bg-white p-3 rounded">
                        <p className="text-sm text-gray-600">
                          خروجی: احتمال وجود بیماری قلبی (0 تا 1)
                        </p>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-white border rounded-lg p-4">
                      <canvas id="logisticRegressionChart"></canvas>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">نمونه کد Python:</h4>
                  <pre className="text-sm">
                    {`from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Fit logistic regression
model = LogisticRegression(penalty='l2', C=1.0)
model.fit(X_scaled, y)

# Get predictions
probabilities = model.predict_proba(X_scaled)
predictions = model.predict(X_scaled)

# Feature importance
coefficients = pd.DataFrame({
    'Feature': feature_names,
    'Coefficient': model.coef_[0]
})`}
                  </pre>
                </div>

                {/* Additional Resources */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 id="conclusion" className="font-bold text-blue-800 mb-2">
                    منابع تکمیلی
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression"
                        className="text-blue-600 hover:underline"
                      >
                        Scikit-learn: Logistic Regression
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.coursera.org/learn/machine-learning/lecture/1XG8G/cost-function"
                        className="text-blue-600 hover:underline"
                      >
                        Coursera: Logistic Regression Cost Function
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.kaggle.com/code/prashant111/logistic-regression-classifier-tutorial"
                        className="text-blue-600 hover:underline"
                      >
                        Kaggle: Logistic Regression Tutorial
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* جمع بندی و نتیجه گیری */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h2 className="text-2xl text-indigo-900 text-right font-bold border-b-2 border-indigo-200 pb-4">
              خلاصه و راهنمای سریع انواع رگرسیون
            </h2>

            {/* Quick Reference Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
                <h4 className="text-lg font-bold text-blue-900 mb-4">
                  رگرسیون خطی
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• فرمول: Y = β₀ + β₁X + ε</li>
                  <li>• کاربرد: روابط خطی ساده</li>
                  <li>• مثال: پیش‌بینی قیمت خانه</li>
                  <li>• ویژگی: ساده و قابل تفسیر</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
                <h4 className="text-lg font-bold text-purple-900 mb-4">
                  رگرسیون چندجمله‌ای
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• فرمول: Y = β₀ + β₁X + β₂X² + ε</li>
                  <li>• کاربرد: روابط غیرخطی</li>
                  <li>• مثال: رشد گیاهان</li>
                  <li>• ویژگی: انعطاف‌پذیر در روابط پیچیده</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
                <h4 className="text-lg font-bold text-green-900 mb-4">
                  رگرسیون Ridge
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• فرمول: L = ||y - Xβ||² + λ||β||²</li>
                  <li>• کاربرد: کنترل همخطی</li>
                  <li>• مثال: تحلیل داده‌های ژنتیکی</li>
                  <li>• ویژگی: کاهش واریانس ضرایب</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
                <h4 className="text-lg font-bold text-orange-900 mb-4">
                  رگرسیون LASSO
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• فرمول: L = ||y - Xβ||² + λ||β||₁</li>
                  <li>• کاربرد: انتخاب ویژگی</li>
                  <li>• مثال: تشخیص بیماری</li>
                  <li>• ویژگی: حذف ویژگی‌های کم‌اهمیت</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-500">
                <h4 className="text-lg font-bold text-indigo-900 mb-4">
                  رگرسیون ElasticNet
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• فرمول: L = ||y - Xβ||² + λ₁||β||₁ + λ₂||β||²</li>
                  <li>• کاربرد: ترکیب Ridge و LASSO</li>
                  <li>• مثال: پیش‌بینی قیمت سهام</li>
                  <li>• ویژگی: انعطاف‌پذیری در تنظیم</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500">
                <h4 className="text-lg font-bold text-pink-900 mb-4">
                  رگرسیون بیزی
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• فرمول: P(β|D) ∝ P(D|β)P(β)</li>
                  <li>• کاربرد: تخمین عدم قطعیت</li>
                  <li>• مثال: پزشکی شخصی‌سازی شده</li>
                  <li>• ویژگی: محاسبه توزیع احتمال</li>
                </ul>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-lg mt-6">
              <h4 className="text-lg font-bold text-indigo-900 mb-3">
                نکات کلیدی
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • انتخاب نوع رگرسیون بستگی به ماهیت داده و هدف پروژه دارد
                </li>
                <li>• پیش‌پردازش داده‌ها در همه روش‌ها مهم است</li>
                <li>• ارزیابی مدل باید با معیارهای مناسب انجام شود</li>
                <li>• ترکیب روش‌ها می‌تواند نتایج بهتری ارائه دهد</li>
              </ul>
            </div>
          </div>
        </div>

        {/* منابع */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h2 className="text-2xl text-indigo-900 text-right font-bold border-b-2 border-indigo-200 pb-4">
              منابع و مراجع یادگیری
            </h2>

            {/* Online Courses */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                دوره‌های آنلاین
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Coursera</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://www.coursera.org/learn/machine-learning"
                        className="text-blue-600 hover:underline"
                      >
                        Machine Learning - Andrew Ng
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.coursera.org/specializations/mathematics-machine-learning"
                        className="text-blue-600 hover:underline"
                      >
                        Mathematics for Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.coursera.org/learn/regression-models"
                        className="text-blue-600 hover:underline"
                      >
                        Regression Models - Johns Hopkins
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">edX</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://www.edx.org/course/statistical-learning"
                        className="text-green-600 hover:underline"
                      >
                        Statistical Learning - Stanford
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.edx.org/professional-certificate/harvardx-data-science"
                        className="text-green-600 hover:underline"
                      >
                        Data Science Professional Certificate
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Documentation */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                مستندات فنی
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="https://scikit-learn.org/stable/modules/linear_model.html"
                    className="text-purple-600 hover:underline"
                  >
                    Scikit-learn Linear Models
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    پیاده‌سازی عملی انواع رگرسیون در Python
                  </p>
                </li>
                <li>
                  <Link
                    href="https://pytorch.org/docs/stable/nn.html#linear-layers"
                    className="text-purple-600 hover:underline"
                  >
                    PyTorch Linear Layers
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    پیاده‌سازی شبکه‌های عصبی و رگرسیون
                  </p>
                </li>
                <li>
                  <Link
                    href="https://www.tensorflow.org/api_docs/python/tf/keras/layers/Dense"
                    className="text-purple-600 hover:underline"
                  >
                    TensorFlow/Keras Documentation
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    لایه‌های خطی در یادگیری عمیق
                  </p>
                </li>
              </ul>
            </div>

            {/* Books */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                کتاب‌های مرجع
              </h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold">
                    The Elements of Statistical Learning
                  </span>
                  <p className="text-sm text-gray-600">
                    Hastie, Tibshirani, and Friedman
                  </p>
                  <Link
                    href="https://web.stanford.edu/~hastie/ElemStatLearn/"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    دانلود رایگان
                  </Link>
                </li>
                <li>
                  <span className="font-semibold">
                    Pattern Recognition and Machine Learning
                  </span>
                  <p className="text-sm text-gray-600">Christopher Bishop</p>
                </li>
                <li>
                  <span className="font-semibold">
                    Introduction to Statistical Learning
                  </span>
                  <p className="text-sm text-gray-600">
                    James, Witten, Hastie, and Tibshirani
                  </p>
                  <Link
                    href="https://www.statlearning.com/"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    دانلود رایگان
                  </Link>
                </li>
              </ul>
            </div>

            {/* Interactive Learning */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                یادگیری تعاملی
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="https://www.kaggle.com/learn/intro-to-machine-learning"
                    className="text-indigo-600 hover:underline"
                  >
                    Kaggle Learn
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    دوره‌های عملی با داده‌های واقعی
                  </p>
                </li>
                <li>
                  <Link
                    href="https://www.datacamp.com/courses/supervised-learning-with-scikit-learn"
                    className="text-indigo-600 hover:underline"
                  >
                    DataCamp
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    یادگیری تعاملی با تمرین‌های عملی
                  </p>
                </li>
                <li>
                  <Link
                    href="https://github.com/microsoft/ML-For-Beginners"
                    className="text-indigo-600 hover:underline"
                  >
                    Microsoft ML for Beginners
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    منبع آزاد برای یادگیری ماشین
                  </p>
                </li>
              </ul>
            </div>

            {/* Research Papers */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                مقالات پژوهشی
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="https://arxiv.org/abs/1509.09169"
                    className="text-red-600 hover:underline"
                  >
                    A Comparative Study of Linear Regression Methods
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    مقایسه جامع روش‌های رگرسیون خطی
                  </p>
                </li>
                <li>
                  <Link
                    href="https://arxiv.org/abs/1803.08823"
                    className="text-red-600 hover:underline"
                  >
                    Modern Optimization Methods for Big Data Problems
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    روش‌های بهینه‌سازی در مسائل داده‌های بزرگ
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
