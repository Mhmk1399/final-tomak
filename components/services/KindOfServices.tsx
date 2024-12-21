"use client";

import Image from "next/image";

import { useState } from "react";

const KindOfServices = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getCardClasses = (index: number) => {
    const baseClasses = "bg-white border-r border-gray-800 overflow-hidden px-4 text-blue-900 transition-all duration-300";
    return activeCard === index 
      ? `${baseClasses} md:w-[100%]` 
      : `${baseClasses} md:w-[70%] `;
  };

  const getParagraphClasses = (index: number) => {
    return activeCard === index 
      ? "text-gray-900 mt-6 text-sm font-light block" 
      : "hidden";
  };

  return (
    <div>
      <div
        className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto"
        dir="rtl"
      >
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
            ما چیا طراحی میکنیم
          </h2>
          <p className="text-blue-900 text-center">
            End-to-end application development services
          </p>
          <div className="grid grid-cols-1md:grid-cols-4 lg:grid-cols-3 gap-2">
            {/* firstone */}
            <div
              className={getCardClasses(0)}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div>
                <Image
                  src={"/assets/images/desctop-software-blue-icon.svg"}
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <h3 className="text-l font-bold mt-4">طراحی اپلیکیشن دسکتاپ </h3>
              <p className={getParagraphClasses(0)}>
                خدمات طراحی نرم افزار دسکتاپ شامل شامل یکپارچه‌سازی اپلیکیشن‌های
                دسکتاپ برای طیف گسترده‌ای از سیستم‌عامل‌ها، از جمله ویندوز،
                مک‌او‌اس و لینوکس می‌باشد. تیم توسعه ما در هر مرحله از فرآیند
                توسعه شما پشتیبانی اختصاصی ارائه می‌دهد تا به شما کمک کند پروژه
                سفارشی نرم‌افزاری خود را به‌طور کامل، به‌موقع، در چارچوب بودجه و
                با رعایت تمامی نیازمندی‌ها تحویل دهید.
              </p>
            </div>
            {/* secondOne */}
            <div
              className={getCardClasses(1)}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div>
                <Image
                  src={"/assets/images/web-aplication-blue-icon.svg"}
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <h3 className="text-l font-bold mt-4">طراحی وب اپلیکشن</h3>
              <p className={getParagraphClasses(1)}>
                خدمات توسعه اپلیکیشن‌های وب تومک تمامی عناصر یک راه‌حل موفق وب
                را پوشش می‌دهد؛ از مشاوره تکنولوژی و طراحی تجربه کاربری (UX)
                گرفته تا توسعه فرانت‌اند و بک‌اند، استقرار و پشتیبانی. چه به یک
                بازار تجارت الکترونیک با عملکرد بالا نیاز داشته باشید یا یک
                اپلیکیشن وب داده‌محور برای مدیریت لجستیک، ما به شما کمک می‌کنیم
                تا دسترسی بی‌وقفه مشتریانتان به محصولات و خدماتتان را در هر زمان
                و هر مکان فراهم کنید.
              </p>
            </div>
            {/* thirdOne */}
            <div 
              className={getCardClasses(2)}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div>
                <Image
                  src={"/assets/images/desctop-software-blue-icon.svg"}
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <h3 className="text-l font-bold mt-4">طراحی اپلیکیشن دسکتاپ </h3>
              <p className={getParagraphClasses(2)}>
                ما توی تیم تومک یک پکیج کامل از خدمات طراحی اپلیکیشن بهتون ارائه
                میدیم که کاملاً متناسب با نیازهای کسب‌وکار شما طراحی شده‌اند. از
                مراحل اولیه ایده‌پردازی تا انتشار نهایی اپلیکیشن، تیم ما در کنار
                شماست.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KindOfServices;
