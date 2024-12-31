import Banner from "@/components/services/Banner";
import Options from "../../components/services/Options";
import KindOfServices from "@/components/services/KindOfServices";
import DoubleText from "@/components/services/doubleText";
import OlympicRings from "@/components/circle";

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
  return (
    <div className="mx-8 my-32">
      <Banner
        src="/assets/images/heade-application-development-min-2048x725.jpg"
        text="توسعه نرم‌افزارهای سفارشی"
        category="خدمات برنامه‌نویسی و توسعه نرم‌افزار"
        description="تیم متخصص ما با استفاده از جدیدترین تکنولوژی‌ها، راهکارهای نرم‌افزاری هوشمند و کارآمد برای کسب‌وکار شما ارائه می‌دهد. از طراحی تا پیاده‌سازی و پشتیبانی، در کنار شما هستیم."
      />

      <DoubleText
        heading={
          "آنچه می توانید با توسعه برنامه های کاربردی سفارشی به دست آورید"
        }
        subText={
          "توسعه برنامه‌های کاربردی سفارشی به شما امکان می‌دهد تا راه‌حل‌های منحصر به فردی برای کسب و کارتان داشته باشید. با این روش می‌توانید فرآیندهای کاری را خودکار کنید، بهره‌وری را افزایش دهید و تجربه کاربری بهتری را برای مشتریان خود فراهم کنید. برنامه‌های سفارشی همچنین به شما اجازه می‌دهند تا با جمع‌آوری و تحلیل داده‌ها، تصمیمات آگاهانه‌تری بگیرید و استراتژی‌های کسب و کار خود را بهبود بخشید. از مزایای دیگر می‌توان به امنیت بالاتر، انعطاف‌پذیری بیشتر و قابلیت مقیاس‌پذیری اشاره کرد که همگی به رشد و موفقیت کسب و کار شما کمک می‌کنند."
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
  );
};

export default Page;
