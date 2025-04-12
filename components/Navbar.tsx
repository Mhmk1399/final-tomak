"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react"; // Optional for smooth transitions
import Image from "next/image";
import router from "next/router";
import MegaMenu from "../components/megaMenu";

const Navbar = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState<{
    first: number;
    second: number;
    third: number;
    fourth: number;
    corners?: {
      topLeft: string;
      topRight: string;
      bottomRight: string;
      bottomLeft: string;
    };
  }>({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
  });

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // State to track user's authentication status

  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    const navRect = navRef.current?.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    if (navRect) {
      setUnderlineStyle({
        width: targetRect.width,
        left: targetRect.left - navRect.left,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setUnderlineStyle({
      width: 0,
      left: 0,
      opacity: 0,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const totalProgress = (scrolled / scrollHeight) * 400;

      // Ensure progress transitions without overlap
      const firstProgress = Math.min(100, totalProgress); // (0-100)
      const secondProgress = Math.min(100, Math.max(0, totalProgress - 100)); // (100-200)
      const thirdProgress = Math.min(100, Math.max(0, totalProgress - 200)); // (200-300)
      const fourthProgress = Math.min(100, Math.max(0, totalProgress - 300)); // (300-400)

      setScrollProgress({
        first: firstProgress,
        second: secondProgress,
        third: thirdProgress,
        fourth: fourthProgress,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch("/api/login", {
          method: "GET",
          credentials: "include", // Include cookies in the request
        });
        console.log(response);

        if (response.ok) {
          setIsLoggedIn(true); // Set logged-in state based on response
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isProfileOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest(".relative")
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileOpen]);

  const navigation = [
    { name: "صفحه اصلی", href: "/" },
    {
      name: "خدمات ",
      href: "#",
      dropdown: [
        {
          name: "مهندسی",
          href: "/engineeringServicess",
          children: [
            {
              name: "طراحی سایت و وب اپلیکیشن",
              href: "/engineeringServicess",
            },
            {
              name: "طراحی اپلیکیشن موبایل",
              href: "/engineeringServicess",
            },
          ],
        },
        {
          name: "دیتا و هوش مصنوعی",
          href: "/aiServices",
          children: [
            {
              name: "شخصی سازی هوش مصنوعی",
              href: "/aiServices",
            },
            {
              name: "BI  یا هوش مجازی",
              href: "/aiServices",
            },
            {
              name: "جمع آوری و مرتب سازی داده ها",
              href: "/aiServices",
            },
          ],
        },
        // You can add more top-level service categories with their children here
      ],
    },
    { name: "ارتباط با ما", href: "/contact" },
    { name: "وبلاگ", href: "/blogs" },
    { name: "درباره ما", href: "/about" },
  ];

  const handleLogOut = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setIsLoggedIn(false);
        setIsLogoutModalOpen(false);
        router.push("/");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav
      className={`fixed top-2 py-2 left-0 right-0 z-50 transition-all mx-4 duration-300  
       
           bg-white/50 backdrop-blur-md 
      `}
      dir="rtl"
    >
      <div
        className="absolute -top-1 left-0 h-[4px] bg-blue-500 opacity-75 z-50"
        style={{
          width: `${scrollProgress.first}%`,
          transition: "width 0.3s ease",
        }}
      />
      <div
        className="absolute -top-1 -right-1 w-[4px] bg-blue-500 opacity-75 z-50"
        style={{
          height: `${scrollProgress.second}%`,
          transition: "height 0.3s ease",
        }}
      />
      <div
        className="absolute -bottom-0 -right-1 h-[4px] bg-blue-500 opacity-75 z-50"
        style={{
          width: `${scrollProgress.third}%`,
          transition: "width 0.3s ease",
        }}
      />
      <div
        className="absolute bottom-0 left-0  w-[4px] bg-blue-500 opacity-75  z-50"
        style={{
          height: `${scrollProgress.fourth}%`,
          transition: "height 0.3s ease",
        }}
      />

      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className=" flex items-center ">
            <Link href="/">
              <Image
                width={50}
                height={50}
                src="/assets/images/logo.png"
                className="text-center neon-svg py-1 lg:mt-0 md:mt-0"
                alt="logo"
              />{" "}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden md:flex md:items-center relative "
            ref={navRef}
          >
            <div className=" flex items-center gap-3 ">
              {navigation.map((item) =>
                item.name === "خدمات " ? (
                  <MegaMenu key={item.name} />
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative px-3 py-2"
                  >
                    {/* navbar items */}

                    <span
                      className={`
                           hover:text-secondary 
                       px-1 py-2  text-base font-semibold hover:border-b-2 hover:opacity-90 hover:border-white 
                         text-black
                      `}
                    >
                      {item.name}
                    </span>
                  </Link>
                )
              )}
              <div
                className="absolute bottom-0 h-0.5 bg-gray-300 transition-all duration-300 ease-in-out"
                style={{
                  width: underlineStyle.width,
                  left: underlineStyle.left,
                  opacity: underlineStyle.opacity,
                }}
              />

              {/* login and signup */}

              <div className="hidden md:flex items-center justify-center">
                {!isLoggedIn ? (
                  <>
                    <Link href="/login">
                      <span className="text-sm font-bold px-4 text-green-500 rounded-lg hover:bg-green-500 hover:text-white ml-2 p-2 bg-white">
                        ورود
                      </span>
                    </Link>
                    <Link href="/signin">
                      <span className="text-sm font-bold hover:text-green-500 hover:bg-white  px-4 bg-green-500 text-white rounded-lg p-2">
                        ثبت نام
                      </span>
                    </Link>
                  </>
                ) : (
                  <div className="relative mr-3">
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center justify-center"
                    >
                      <Image
                        width={32}
                        height={32}
                        className="rounded-full border-2 border-gray-200"
                        src="/assets/images/proftestimonial.png" // Add your default avatar image
                        alt="User avatar"
                      />
                    </button>

                    {isProfileOpen && (
                      <div className="absolute left-0 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu">
                          <Link href="/dashboard">
                            <span className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100">
                              <Image
                                src="/assets/images/dashboard.png"
                                alt="dashboard"
                                width={20}
                                height={20}
                                className="ml-2 inline"
                              />
                              داشبورد
                            </span>
                          </Link>
                          <button
                            onClick={() => {
                              setIsLogoutModalOpen(true);
                              setIsProfileOpen(false);
                            }}
                            className="block w-full text-right font-bold px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                          >
                            <Image
                              src="/assets/images/logout.png"
                              alt="dashboard"
                              width={20}
                              height={20}
                              className="ml-2 inline"
                            />
                            خروج
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center neon-svg justify-center p-2 rounded-md text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                // Hamburger Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F44336"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Close Icon
                <svg
                  className="block h-6 w-6 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        {() => (
          <div className="md:hidden z-10" id="mobile-menu" ref={mobileMenuRef}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex justify-center gap-4 mb-4">
                {!isLoggedIn ? (
                  <>
                    <Link href="/signin">
                      <span className="text-sm font-bold  bg-green-500  rounded-lg p-2 text-white hover:bg-background hover:text-green-500">
                        ثبت نام
                      </span>
                    </Link>
                    <Link href="/login">
                      <span className="text-sm font-bold text-green-500 bg-background hover:bg-green-500 hover:text-white  rounded-lg p-2">
                        ورود
                      </span>
                    </Link>
                  </>
                ) : (
                  <div className="relative ml-3">
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center justify-center"
                    >
                      <Image
                        width={32}
                        height={32}
                        className="rounded-full border-2 border-gray-200"
                        src="/assets/images/proftestimonial.png" // Add your default avatar image
                        alt="User avatar"
                      />
                    </button>

                    {isProfileOpen && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu">
                          <Link href="/dashboard">
                            <span className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100">
                              <Image
                                src="/assets/images/dashboard.png"
                                alt="dashboard"
                                width={20}
                                height={20}
                                className="ml-2 inline"
                              />
                              داشبورد
                            </span>
                          </Link>
                          <button
                            onClick={() => {
                              setIsLogoutModalOpen(true);
                              setIsProfileOpen(false);
                            }}
                            className="block w-full text-right font-bold px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                          >
                            <Image
                              src="/assets/images/logout.png"
                              alt="dashboard"
                              width={20}
                              height={20}
                              className="ml-2 inline"
                            />
                            خروج
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(
                            mobileDropdownOpen === item.name ? null : item.name
                          )
                        }
                        className={`w-full text-right text-black hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium`}
                      >
                        {item.name}
                      </button>
                      {mobileDropdownOpen === item.name && (
                        <div className="pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link key={subItem.name} href={subItem.href}>
                              <span
                                onClick={() => setIsOpen(false)}
                                className={`block text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm 
                                  
                                `}
                              >
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className={`block text-black hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium `}
                      >
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
      {isLogoutModalOpen && (
        <div className="absolute inset-0 bg-opacity-50 z-50 backdrop-blur-md flex items-center justify-center modal-overlay">
          <div
            className="  bg-white/80 lg:bg-white rounded-xl p-6 max-w-sm w-full mx-4 backdrop-blur-md lg:backdrop-blur-0 lg:mt-44 md:mt-44 md:bg-white modal-content"
            dir="rtl"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              خروج از حساب کاربری
            </h3>
            <p className="text-gray-600 mb-6">
              آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="px-4 py-2 text-black hover:text-gray-800 bg-secondary hover:bg-secondary/60 font-medium rounded-lg transition-colors duration-300 "
              >
                انصراف
              </button>
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-red-600 text-black font-medium rounded-lg hover:bg-red-400/60 transition-colors duration-300"
              >
                خروج
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
