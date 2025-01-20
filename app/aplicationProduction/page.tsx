"use client";
import Banner from "@/components/services/Banner";
import Options from "../../components/services/Options";
import KindOfServices from "@/components/services/KindOfServices";
import DoubleText from "@/components/services/doubleText";
import OlympicRings from "@/components/circle";
import { BlogSchema } from "@/components/schema/blogSchema";
import { useEffect } from "react";

const servicesData = [
  {
    id: 1,
    title: "طراحی اپلیکیشن دسکتاپ",
    icon: "/assets/images/desctop-software-blue-icon.svg",
    description:
      "راه‌حل‌های نرم‌افزاری سفارشی برای سیستم‌های دسکتاپ با کیفیت بالا",
    gradient: "from-blue-500 to-blue-700",
    details: [
      "توسعه برای ویندوز، مک و لینوکس",
      "طراحی رابط کاربری پیشرفته",
      "بهینه‌سازی عملکرد",
    ],
  },
  {
    id: 2,
    title: "طراحی وب اپلیکیشن",
    icon: "/assets/images/web-aplication-blue-icon.svg",
    description: "راه‌حل‌های وب مدرن و کارآمد",
    gradient: "from-green-500 to-green-700",
    details: ["توسعه فول‌استک", "طراحی واکنش‌گرا", "امنیت بالا"],
  },
  {
    id: 3,
    title: "طراحی اپلیکیشن موبایل",
    icon: "/assets/images/mobile-app-blue-icon.svg",
    description: "اپلیکیشن‌های هوشمند و کاربردی",
    gradient: "from-purple-500 to-purple-700",
    details: ["توسعه iOS و Android", "تجربه کاربری عالی", "پشتیبانی مداوم"],
  },
];

const Page = () => {
  const blogData = {
    title: "تومک | توسعه اپلیکیشن های سفارشی",
    url: "/aplicationProduction",
    images: ["/assets/images/heade-application-development-min-2048x725.jpg"],
    sections: [
      {
        heading:
          "آنچه می توانید با توسعه برنامه های کاربردی سفارشی به دست آورید",
        content: "راه‌حل‌های نوآورانه برای کسب و کار شما",
        lists: [
          "طراحی اپلیکیشن دسکتاپ",
          "طراحی وب اپلیکیشن",
          "طراحی اپلیکیشن موبایل",
        ],
      },
      {
        heading: "طراحی اپلیکیشن دسکتاپ",
        content:
          "راه‌حل‌های نرم‌افزاری سفارشی برای سیستم‌های دسکتاپ با کیفیت بالا",
        lists: [
          "توسعه برای ویندوز، مک و لینوکس",
          "طراحی رابط کاربری پیشرفته",
          "بهینه‌سازی عملکرد",
        ],
      },
      {
        heading: "طراحی وب اپلیکیشن",
        content: "راه‌حل‌های وب مدرن و کارآمد",
        lists: ["توسعه فول‌استک", "طراحی واکنش‌گرا", "امنیت بالا"],
      },
      {
        heading: "طراحی اپلیکیشن موبایل",
        content: "اپلیکیشن‌های هوشمند و کاربردی",
        lists: ["توسعه iOS و Android", "تجربه کاربری عالی", "پشتیبانی مداوم"],
      },
    ],
  };
  useEffect(() => {
    document.title = "تومک | توسعه اپلیکیشن های سفارشی";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "تومک یک تیم پویا و خلاق است که با تکیه بر دانش فنی و تخصص، خدمات حرفه‌ای و کاملی را در زمینه طراحی و توسعه وب، تولید محتوا، و تحلیل داده‌ها ارائه می‌دهد. "
      );
    }
  }, []);

  return (
    <>
      <BlogSchema blogData={blogData} />

      <div className="mx-8 my-32">
        <Banner
          src="/assets/images/heade-application-development-min-2048x725.jpg"
          text="Services"
          category="Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <DoubleText
          heading={
            "آنچه می توانید با توسعه برنامه های کاربردی سفارشی به دست آورید"
          }
          subText={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          }
        />
        <OlympicRings />
        <div className="mt-12">
          <Options />
        </div>
        <div className="mt-12">
          <KindOfServices
            servicesData={servicesData}
            title="خدمات ما"
            subtitle="راه‌حل‌های نوآورانه برای کسب و کار شما"
          />{" "}
        </div>
        <div className="-mt-32"></div>
      </div>
    </>
  );
};

export default Page;
