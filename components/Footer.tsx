"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const footerData = {
    about: {
      title: "درباره ما",
      links: [
        { text: "تاریخچه شرکت", href: "#" },
        { text: "تیم ما ", href: "#" },
        { text: "استخدام", href: "#" },
      ],
    },
    services: {
      title: "خدمات ما",
      links: [
        { text: "طراحی سایت", href: "/servicess/web-development" },
        { text: "گرافیک و دیزاین", href: "/servicess/graphic-design" },
        { text: "تولید محتوا", href: "/servicess/content-creation" },
        { text: "سئو", href: "/servicess/seo-optimization" },
        { text: "آنالیز داده", href: "/servicess/data-analyzer" },
      ],
    },
    helpfulLinks: {
      title: "لینک های مفید",
      links: [
        { text: "سوالات متداول", href: "#" },
        { text: "پشتیبانی", href: "#" },
      ],
    },
    contact: {
      title: "ارتباط با ما",
      items: [
        { type: "email", value: "tomacAgency@gmail.com" },
        { type: "phone", value: "09015528576" },
        { type: "address", value: "فلسطین - بزرگمهر - پلاک 78" },
      ],
    },
  };

  return (
    <>
      <footer
        className={`py-4  relative ${
          isHomePage
            ? "bg-secondary/40 bg-gradient-to-b from-transparent to-black/80 mx-4 rounded-lg border-gray-100 border-2 shadow-2xl shadow-white"
            : "bg-secondary/80"
        }`}
        dir="rtl"
      >
        <div className="area absolute inset-0">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="mx-auto px-4 pb-6 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center sm:text-center lg:text-left flex flex-col items-center mt-4">
              <Link href="/">
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/logo.png"
                  className="text-center neon-svg"
                  alt="logo"
                />
              </Link>
              <p className="text-base font-medium text-gray-100 pt-5 p-2 text-justify">
                شرکت ما، راهکارهای جامع دیجیتال مارکتینگ را برای کسب‌وکارهای
                محصول‌محور و خدمات‌محور فراهم می‌کند. هدف ما ارائه تمامی خدمات
                دیجیتال مارکتینگ تحت یک سقف است تا شما بتوانید به آسانی به اهداف
                کسب‌وکاری خود دست پیدا کنید. با تیمی جوان، پویا و پرانرژی، ما در
                کنار شما هستیم تا در دنیای دیجیتال بدرخشید
              </p>
              <div className="flex items-center justify-center p-[25px] gap-5 bg-lightGray shadow-custom w-fit h-fit">
                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/toomakagency/profilecard/?igsh=MWR3Z3lkaWdsYTVqdA=="
                  className="w-13 h-13 flex items-center justify-center overflow-hidden p-2 transition duration-300 rounded-lg hover:scale-90 active:scale-90"
                >
                  <svg
                    className="w-[30px] fill-pink-400 neon-svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048
               4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    ></path>
                  </svg>
                </Link>

                {/* Telegram */}
                <Link
                  href="https://t.me/Immhmk"
                  className="w-12 h-11 bg-darkGray flex items-center p-2 justify-center overflow-hidden transition duration-300 rounded-lg hover:scale-90 active:scale-90"
                >
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 24 24"
                    className="neon-svg"
                    fill="#61c4fa"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                        fill="#61c4fa"
                      ></path>{" "}
                    </g>
                  </svg>
                </Link>

                {/* WhatsApp */}
                <Link
                  href="tel:+989015528576"
                  className="w-13 h-13 bg-darkGray flex items-center p-2 justify-center overflow-hidden transition duration-300 rounded-lg hover:scale-90 active:scale-90"
                >
                  <svg
                    className="w-[30px] fill-green-400 animate-none hover:animate-slide-in-top neon-svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              {Object.entries(footerData).map(([key, section]) => (
                <div key={key} className="text-center sm:text-left">
                  <p
                    className={`text-2xl font-extrabold text-gray-600 border-b-2 border-black p-2  ${
                      isHomePage
                        ? "text-white border-white/50"
                        : "text-gray-600"
                    } `}
                  >
                    {section.title}
                  </p>
                  <ul className="mt-8 space-y-4 text-sm">
                    {"links" in section &&
                      section.links.map((link, index) => (
                        <li key={index}>
                          <a
                            className={`text-white transition hover:text-black hover:border-b-2 p-2 border-gray-100 font-bold ${
                              isHomePage
                                ? "hover:text-secondary border-white/50"
                                : "text-gray-600"
                            }`}
                            href={link.href}
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    {"items" in section &&
                      section.items.map((item, index) => (
                        <li key={index}>
                          <div className="">
                            {item.type === "email" ? (
                              <a
                                href={`mailto:${item.value}`}
                                className={`text-white transition font-bold hover:text-black hover:border-b-2 p-2 border-gray-100 ${
                                  isHomePage
                                    ? "hover:text-secondary border-white/50"
                                    : "text-gray-600"
                                }`}
                              >
                                {item.value}
                              </a>
                            ) : item.type === "phone" ? (
                              <a
                                href={`tel:${item.value}`}
                                className={`text-white transition font-bold hover:text-black hover:border-b-2 p-2 border-gray-100 ${
                                  isHomePage
                                    ? "hover:text-secondary border-white/50"
                                    : "text-gray-600"
                                }`}
                              >
                                {item.value}
                              </a>
                            ) : (
                              <span
                                className={`text-white transition font-bold hover:text-black hover:border-b-2 p-2 border-gray-100 ${
                                  isHomePage
                                    ? "hover:text-secondary border-white/50"
                                    : "text-gray-600"
                                }`}
                              >
                                {item.value}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800 flex flex-row items-center justify-center sm:flex-row">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-100">
                <span className="block sm:inline"> All rights reserved. </span>

                <a className="inline-block text-white underline" href="#">
                  Terms & Conditions
                </a>

                <span>·</span>

                <a className="inline-block text-white underline " href="#">
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 ml-1 text-sm text-white sm:order-first sm:mt-0">
                © 2024 Tomac
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
