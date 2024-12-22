import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaCode,
  FaDatabase,
  FaRobot,
  FaMobileAlt,
  FaLaptopCode,
  FaChartLine,
  FaArrowLeft,
  FaTimes,
} from "react-icons/fa";
import { MdWebAsset, MdAutoGraph } from "react-icons/md";

const megaMenuItems = [
  {
    name: "مهندسی نرم‌افزار",
    icon: <FaCode className="text-orange-400 w-8 h-8" />,
    image: "/assets/images/soft.jpeg",
    bgColor: "bg-blue-50",
    children: [
      {
        name: "طراحی وب اپلیکیشن",
        href: "/servicess/web-development/web-design",
        icon: <MdWebAsset className="text-blue-600 w-6 h-6" />,
        description: "توسعه وب‌سایت‌های پیشرفته با آخرین تکنولوژی‌ها",
      },
      {
        name: "توسعه اپلیکیشن موبایل",
        href: "/servicess/web-development/mobile-development",
        icon: <FaMobileAlt className="text-green-600 w-6 h-6" />,
        description: "اپلیکیشن‌های هوشمند برای iOS و Android",
      },
      {
        name: "اتوماسیون سازمانی",
        href: "/servicess/web-development/software-development",
        icon: <FaLaptopCode className="text-purple-600 w-6 h-6" />,
        description: "راهکارهای هوشمند برای بهینه‌سازی فرآیندها",
      },
    ],
  },
  {
    name: "هوش مصنوعی",
    icon: <FaRobot className="text-purple-500 w-8 h-8" />,
    image: "/assets/images/ai.jpg",
    bgColor: "bg-purple-50",
    children: [
      {
        name: "تحلیل داده‌ها",
        href: "/servicess/ai/data-analysis",
        icon: <FaChartLine className="text-indigo-600 w-6 h-6" />,
        description: "استخراج بینش‌ راهبردی از داده‌ها",
      },
      {
        name: "هوش تجاری",
        href: "/servicess/ai/business-intelligence",
        icon: <MdAutoGraph className="text-green-600 w-6 h-6" />,
        description: "تصمیم‌گیری هوشمندانه با ابزارهای پیشرفته",
      },
      {
        name: "مدل‌سازی پیشبینی",
        href: "/servicess/ai/predictive-modeling",
        icon: <FaDatabase className="text-red-600 w-6 h-6" />,
        description: "پیش‌بینی روندها با الگوریتم‌های پیچیده",
      },
    ],
  },
];

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMenuPersistent, setIsMenuPersistent] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleCloseMenu = () => {
    setActiveMenu(null);
    setActiveCategory(null);
    setIsMenuPersistent(false);
    setHoveredCategory(null);
  };

  console.log(hoveredCategory);

  return (
    <div
      className="relative group"
      onMouseEnter={() => {
        if (!isMenuPersistent) {
          setActiveMenu("خدمات");
        }
      }}
      onMouseLeave={() => {
        if (!isMenuPersistent) {
          // setActiveMenu(null);
          setActiveCategory(null);
        }
      }}
    >
      <Link href="#" className="flex items-center">
        <span className="text-base font-semibold text-black">خدمات</span>
      </Link>

      {activeMenu === "خدمات" && (
        <div
        className="fixed top-[50px] left-0 right-0 w-screen min-w-max mt-2 z-50"
        onMouseEnter={() => setIsMenuPersistent(true)}
        >
          <div className="bg-gray-100 shadow-2xl rounded-xl overflow-hidden p-10 max-w-5xl mx-auto grid grid-cols-3 divide-x">
            {/* Categories Column */}
            <div className="col-span-1 bg-[#023047] opacity-95 rounded-xl p-4">
              <button
                onClick={handleCloseMenu}
                className="absolute top-2 -mx-4  z-60 text-red-400 hover:text-gray-800 transition-colors"
              >
                <FaTimes className="w-6 h-7" />
              </button>
              {megaMenuItems.map((category) => (
                <div
                  key={category.name}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeCategory === category.name
                      ? "bg-gray-600 shadow-md"
                      : "hover:bg-blue-50"
                  }`}
                  onMouseEnter={() => setActiveCategory(category.name)}
                >
                  {category.icon}

                  <h3 className="text-lg font-semibold mr-3 text-gray-100">
                    {category.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Subcategories and Image Column */}
            <div className="col-span-2 grid grid-cols-2 p-10 mr-2 bg-white/20 rounded-xl">
              {megaMenuItems.map(
                (category) =>
                  activeCategory === category.name && (
                    <React.Fragment key={category.name}>
                      {/* Subcategories */}
                      <div className="space-y-4 p-6">
                        {category.children.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group flex border-b border-gray-300 items-center hover:bg-gray-200 p-4 rounded-2xl transition-all duration-300"
                          >
                            <div className="ml-4 ">{item.icon}</div>
                            <div>
                              <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">
                                {item.name}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {item.description}
                              </p>
                            </div>
                            <FaArrowLeft className="mr-auto opacity-0 group-hover:opacity-100 text-blue-600 transition-all" />
                          </Link>
                        ))}
                      </div>

                      {/* Category Image */}
                      <div
                        className={`relative rounded-xl overflow-hidden shadow-lg ${category.bgColor}`}
                      >
                        <Image
                          src={category.image}
                          alt={category.name}
                          layout="fill"
                          objectFit="cover"
                          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                          <h3 className="text-yellow-400 font-bold text-lg">
                            {category.name}
                          </h3>
                        </div>
                      </div>
                    </React.Fragment>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
