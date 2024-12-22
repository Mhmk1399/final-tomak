"use client";
import Image from "next/image";

const whyUs = () => {
  return (
    <div>
      <div className="">
        <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <div className="space-y-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
              حالا بیا تا بهت بگم ما چجوری کار میکنیم
            </h2>
            {/* firstone */}
            <div className="space-y-8 px-8 md:space-y-4 text-center md:text-right md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl text-blue-900" dir="rtl">
                  1. تحقیق بازار
                </h3>
                
                <p className="text-blue-900">
                  ما قبل از اینکه هر پروژه ای را شروع کنیم ابتدا یک تحقیق بازار
                  مفصل روش انجام میدیم که بهقمیم این بیزینس توی چه حوزه هایی قوی
                  تر از بقیس که اونا رو بیش تر نشون بدیم و اینکه ضعف هایی که
                  نمیشه درستش کرد را بپوشونیم علاوه بر اون توی این تحقیق بازار ا
                  مخاطب هدف شما را هم شناسایی میکنیم که بتونیم دقیق ترین رابط
                  کاربری براشون طراحی کنیم
                </p>
              </div>
              <div className="mx-auto justify-center w-1/2 rounded-md ">
                <Image
                  src={"/assets/images/3389268.jpg"}
                  width={500}
                  height={500}
                  alt=""
                  className="rounded-md"
                />
              </div>
            </div>
            {/* second one */}
            <div className="space-y-8 md:space-y-0 text-center md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
              <div className="w-full  space-y-4">
                <h3 className="font-medium text-2xl text-blue-900" dir="rtl">
                  2.طراحی رابط کاربری
                </h3>
                <p className="text-blue-900 m-12">
                  توی مرحله دوم اون رابطه کاربری که مناسب مخاطب هدف شما هست
                  براتون طراحی میکنیم این روند حداقل یک هفته الی ده روز زمان
                  میبره تا بتونیم یک رابط کاربری خلاقانه برای شما طراحی کنیم
                </p>
              </div>
              <div className=" justify-center  ">


                <Image
                  src={"/assets/images/4814017.jpg"}
                  width={1000}
                  height={500}
                  alt=""
                />
              </div>
            </div>
            {/* third one */}
            <div className="space-y-8 px-8 md:space-y-4 text-center md:text-right md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl text-blue-900" dir="rtl">
                  3.مهندسی داده و درخواست ها
                </h3>
                <p className="text-blue-900">
                  این مرحله باعث میشه تمام کار های متفاوت تر از تمام رقبامون بشه
                  چرا که ما معماری دیتابیس وب اپلیکشن یا اپلیکشن شما را براساس
                  درخواست های هر لحظه کاربراتان برنامه ریزی و درست میکنیم این
                  باعث میشه که شما با بزرگتر شدن برنامتون و بیشتر شدن کاربراتون
                  هیچ مشکلی برای سرعت پردازش اپلیکیشن و وبسایتتون ایجاد نشه
                </p>
              </div>
              <div className="mx-auto justify-center w-1/2 rounded-md ">
                <Image
                  src={"/assets/images/3389268.jpg"}
                  width={500}
                  height={500}
                  alt=""
                  className="rounded-md"
                />
              </div>
            </div>
            {/* fourth one */}
            <div className="space-y-8 md:space-y-0 text-center md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
              <div className="w-full  space-y-4">
                <h3 className="font-medium text-2xl text-blue-900" dir="rtl">
                  4.تست و دیباگ
                </h3>
                <p className="text-blue-900 m-12">
                  بعد از ساخت کامل اپلیکشن ما با ربات های خودمون سعی میکنیم
                  بیشترین بار ممکن را بر روی اپلیکشین یا وب اپلیکشن شما پیاده
                  کنیم که ببینم ایا جایی به مشکل میخوره یا نه اگه همه چی اوکی
                  بود که تحویل شما میدیم به صورت کامل و خیال راحت اگر نبود انقدر
                  باز سازی میشه تا بتونه این فشار را تحل کنه
                </p>
              </div>
              <div className=" justify-center  ">
                <Image
                  src={"/assets/images/4814017.jpg"}
                  width={1000}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whyUs;
