"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
const pathTranslations: { [key: string]: string } = {
  services: "خدمات",
  about: "درباره ما",
  contact: "ارتباط با ما",
  portfolio: "نمونه کارها",
  blog: "وبلاگ",
  order: "سفارش",
  login: "ورود",
  register: "ثبت نام",
  aiServices: "خدمات هوش مصنوعی",
  blogs: "وبلاگ",
  "persian-natural-language-processing": "پردازش طبیعی زبان فارسی",
  "Text-Classifiers-in-Machine-Learning-A-Practical-Guide-in-persian":
    "راهنمای جامع طبقه بندی متون یا (text classification)",
  "a-beginners-guide-about-what-is-regresion-and-when-does-it-used-in-persian-language":
    "راهنمای جامع رگرسیون و انواع آن در تحلیل داده",
  engineeringServicess: "توسعه نرم‌افزارهای سفارشی",
  "custom-machine-learning": "یادگیری ماشین سفارشی",
  mobileDevelopment: "توسعه اپلیکیشن موبایل",
  webDevelopment: " توسعه و طراحی وب ",
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    // Check if the segment exists in translations, if not return "404"
    const label = pathTranslations[segment] || "صفحه 404";

    return { href, label };
  });

  return (
    <nav
      className="bg-transparent backdrop-blur-sm py-3 px-6  absolute top-20 right-4 lg:right-9 z-10"
      dir="rtl"
    >
      <ol className="flex items-center space-x-2 space-x-reverse">
        <li>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <HomeIcon className="h-5 w-5" />
          </Link>
        </li>

        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronLeftIcon
              className="h-3 w-3
            
            text-gray-400 mx-2"
            />
            <Link
              href={item.href}
              className={`${
                index === breadcrumbItems.length - 1
                  ? "text-gray-600 hover:text-gray-900 font-medium text-xs lg:text-sm "
                  : "text-blue-600 hover:text-blue-800 text-xs lg:text-sm"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
