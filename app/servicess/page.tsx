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
        text="خدمات ما"
        category="مهندسی و برنامه نویسی"
        description="در این بخش ما با توجه به کسب و کار شما یک راه کار برای بازدهی بخش های مختلف بیزینستون مثل تبلیغات یا فروش اراده میدیم "
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
  );
};

export default Page;
