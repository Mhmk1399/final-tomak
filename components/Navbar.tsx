"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react"; // Optional for smooth transitions
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // State to track user's authentication status

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch("/api/me", {
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
      href: "/servicess",
      dropdown: [
        { name: "طراحی سایت", href: "/servicess/web-development" },
        { name: "گرافیک و دیزاین", href: "/servicess/graphic-design" },
        { name: "سئو", href: "/servicess/seo-optimization" },
        { name: "تولید محتوا", href: "/servicess/content-creation" },
        { name: "آنالیز داده", href: "/servicess/data-analyzer" },
      ],
    },
    { name: "درباره ما", href: "/about" },
    { name: "ارتباط با ما", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-2 py-2 left-0 right-0 z-50 transition-all mx-4 rounded-xl duration-300  ${
        isHomePage
          ? "bg-secondary/40 mx-4 rounded-lg border-gray-100 border-2 shadow-md shadow-gray-400 backdrop-blur-lg"
          : "bg-white/50 backdrop-blur-md shadow-lg shadow-gray-500"
      }`}
      dir="rtl"
    >
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
          <div className="hidden md:flex md:items-center ">
            <div className=" flex items-baseline gap-3 ">
              {navigation.map((item) =>
                item.name === "خدمات " ? (
                  <div
                    key={item.name}
                    className="relative "
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {/* Dropdown Menu خدمات */}

                    <Link href="/servicess">
                      <span
                        className={`cursor-pointer  px-3 py-2 text-base font-semibold ${
                          isHomePage ? "text-white" : "text-black"
                        } hover:border-b-2 hover:opacity-70 hover:border-gray-500`}
                      >
                        {item.name}
                      </span>
                    </Link>

                    {isServicesOpen && (
                      <div className="absolute right-0 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              setIsServicesOpen(false);
                            }
                          }}
                        >
                          {item.dropdown?.map((subItem) => (
                            <Link key={subItem.name} href={subItem.href}>
                              <span
                                className="block px-4 py-2 text-base text-primary bg-background hover:bg-transparent hover:text-black"
                                role="menuitem"
                              >
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.name} href={item.href}>
                    {/* navbar items */}

                    <span
                      className={`${
                        pathname === item.href
                          ? "text-blue-700"
                          : " hover:text-secondary "
                      } px-3 py-2  text-base font-semibold hover:border-b-2 hover:opacity-90 hover:border-white ${
                        isHomePage ? "text-white" : "text-black"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                )
              )}

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
                        src="/assets/images/profile.webp" // Add your default avatar image
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
                              // Add your logout logic here
                              console.log("Logging out");
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
                        src="/assets/images/profile.webp" // Add your default avatar image
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
                              // Add your logout logic here
                              console.log("Logging out");
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
                        className={`w-full text-right text-white hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium`}
                      >
                        {item.name}
                      </button>
                      {mobileDropdownOpen === item.name && (
                        <div className="pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link key={subItem.name} href={subItem.href}>
                              <span
                                onClick={() => setIsOpen(false)}
                                className={`block text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm 
                                  
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
                        className={`block text-white hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium `}
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
    </nav>
  );
};

export default Navbar;
