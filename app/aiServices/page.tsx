import Banner from "@/components/services/Banner";
import Options from "../../components/services/Options";
import KindOfServices from "@/components/services/KindOfServices";
import DoubleText from "@/components/services/doubleText";
import OlympicRings from "@/components/circle";

const servicesData = [
  {
    id: 1,
    title: "پردازش زبان طبیعی فارسی",
    icon: "/assets/images/desctop-software-blue-icon.svg",
    description: "راهکارهای هوشمند پردازش متن و گفتار فارسی با دقت بالا",
    gradient: "from-blue-500 to-blue-700",
    details: [
      "تحلیل احساسات متون فارسی",
      "چت‌بات‌های هوشمند فارسی‌زبان",
      "خلاصه‌سازی خودکار متون",
    ],
  },
  {
    id: 2,
    title: "یادگیری ماشین سفارشی",
    icon: "/assets/images/web-aplication-blue-icon.svg",
    description: "توسعه مدل‌های یادگیری ماشین مختص کسب‌وکار شما",
    gradient: "from-green-500 to-green-700",
    details: [
      "پیش‌بینی رفتار مشتریان",
      "تشخیص الگوهای کسب‌وکار",
      "بهینه‌سازی فرآیندها",
    ],
  },
  {
    id: 3,
    title: "بینایی ماشین و پردازش تصویر",
    icon: "/assets/images/mobile-app-blue-icon.svg",
    description: "راهکارهای هوشمند تحلیل تصاویر و ویدیو",
    gradient: "from-purple-500 to-purple-700",
    details: ["تشخیص اشیاء", "پردازش تصاویر صنعتی", "سیستم‌های نظارت هوشمند"],
  },
];

const Page = () => {
  return (
    <div className="mx-8 my-32">
      <Banner
        src="/assets/images/heade-application-development-min-2048x725.jpg"
        text="راهکارهای هوش مصنوعی"
        category="هوش مصنوعی و یادگیری ماشین"
        description="با استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی و یادگیری ماشین، راهکارهای هوشمند و سفارشی برای کسب‌وکارهای فارسی‌زبان ارائه می‌دهیم."
      />

      <DoubleText
        heading="مزایای استفاده از هوش مصنوعی در کسب‌وکار شما"
        subText="با بهره‌گیری از هوش مصنوعی و یادگیری ماشین، کسب‌وکار شما می‌تواند به سطح جدیدی از کارایی و هوشمندی دست یابد. از تحلیل داده‌های کلان و پیش‌بینی روندهای بازار گرفته تا اتوماسیون فرآیندها و خدمات مشتری هوشمند، همه با تمرکز ویژه بر نیازهای خاص بازار فارسی‌زبان. تیم متخصص ما با درک عمیق از چالش‌های زبان فارسی در هوش مصنوعی، راهکارهایی را توسعه می‌دهد که دقیقاً متناسب با نیازهای بومی شماست. این راهکارها به شما کمک می‌کنند تا تصمیمات هوشمندانه‌تری بگیرید، هزینه‌ها را کاهش دهید و مزیت رقابتی خود را در بازار افزایش دهید."
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
  );
};

export default Page;
