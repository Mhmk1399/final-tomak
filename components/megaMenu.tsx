import React, { useState } from "react";
import Link from "next/link";
import {
  FaCode,
  FaRobot,
  FaMobileAlt,
  FaLaptopCode,
  FaArrowLeft,
  FaTimes,
  FaLanguage,
} from "react-icons/fa";
import { MdWebAsset, MdPsychology } from "react-icons/md";

const megaMenuItems = [
  {
    name: "مهندسی نرم‌افزار",
    href: "/engineeringServicess",
    icon: <FaCode className="text-orange-400 w-8 h-8" />,
    video: "/assets/images/7.mp4", // Replace with your video path
    bgColor: "bg-blue-50",
    children: [
      {
        name: "طراحی وب اپلیکیشن",
        href: "/engineeringServicess",
        icon: <MdWebAsset className="text-blue-600 w-6 h-6" />,
        description: "توسعه وب‌سایت‌های پیشرفته با آخرین تکنولوژی‌ها",
      },
      {
        name: "توسعه اپلیکیشن موبایل",
        href: "/engineeringServicess",
        icon: <FaMobileAlt className="text-green-600 w-6 h-6" />,
        description: "اپلیکیشن‌های هوشمند برای iOS و Android",
      },
      {
        name: "اتوماسیون سازمانی",
        href: "/engineeringServicess",
        icon: <FaLaptopCode className="text-purple-600 w-6 h-6" />,
        description: "راهکارهای هوشمند برای بهینه‌سازی فرآیندها",
      },
    ],
  },
  {
    name: "هوش مصنوعی",
    icon: <FaRobot className="text-purple-500 w-8 h-8" />,
    href: "/aiServices",
    video: "/assets/images/7.mp4", // Replace with your video path
    bgColor: "bg-purple-50",
    children: [
      {
        name: "پردازش زبان طبیعی فارسی",
        href: "/aiServices/persian-natural-language-processing",
        icon: <FaLanguage className="text-indigo-600 w-6 h-6" />,
        description: "راهکارهای هوشمند پردازش متن و گفتار فارسی",
      },
      {
        name: "یادگیری ماشین سفارشی",
        href: "/aiServices/custom-machine-learning",
        icon: <MdPsychology className="text-green-600 w-6 h-6" />,
        description: "مدل‌های یادگیری ماشین مختص کسب‌وکار شما",
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
          <div className="bg-gray-100  shadow-2xl rounded-xl overflow-hidden p-10 max-w-5xl mx-auto grid grid-cols-3 ">
            {/* Categories Column */}
            <div className="col-span-1 bg-transparent  opacity-95 rounded-xl p-4">
              <button
                onClick={handleCloseMenu}
                className="absolute top-2 -mx-4  z-60 text-red-400 hover:text-gray-800 transition-colors"
              >
                <FaTimes className="w-6 h-7" />
              </button>
              {megaMenuItems.map((category) => (
                <div
                  key={category.name}
                  className={`flex  items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeCategory === category.name
                      ? "bg-gray-100 shadow-md"
                      : "hover:bg-blue-50"
                  }`}
                  onMouseEnter={() => setActiveCategory(category.name)}
                >
                  {category.icon}

                  <h3 className="text-lg font-semibold mr-3 text-gray-800">
                    <Link href={category.href} className="text-gray-800">
                      {category.name}
                    </Link>
                  </h3>
                </div>
              ))}
            </div>

            {/* Subcategories and Image Column */}
            <div className="col-span-2 grid grid-cols-2 p-10 mr-2 bg-gray-100">
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
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                          preload="metadata"
                        >
                          <source src={category.video} type="video/mp4" />
                        </video>
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
