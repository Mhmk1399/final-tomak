"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerData = {
    about: {
      title: "درباره ما",
      links: [
        { text: "تیم ما ", href: "#" },
        { text: "استخدام", href: "#" },
      ],
    },
    services: {
      title: "خدمات ما",
      links: [
        { text: " هوش مصنوعی و داده کاوی", href: "/servicess/web-development" },
        { text: "مهندسی نرم افزار", href: "/servicess/graphic-design" },
      ],
    },
    helpfulLinks: {
      title: "لینک های مفید",
      links: [
        { text: "سوالات متداول", href: "/contact" },
        { text: "پشتیبانی", href: "/contact" },
      ],
    },
    contact: {
      title: "ارتباط با ما",
      items: [
        { type: "email", value: "toomakcompany@gmail.com" },
        { type: "address", value: "فلسطین - بزرگمهر - پلاک 78" },
      ],
    },
  };

  return (
    <>
      <footer
        className={`py-8  relative 
         
            bg-white/50 backdrop-blur-md border-gray-100 border-t-2
        `}
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
              <div className="flex flex-row justify-between gap-12 items-center">
                <Link href="/">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/images/logo.png"
                    className={`text-center`}
                    alt="logo"
                  />
                </Link>
                <div className="flex items-center justify-center p-[25px] gap-5 bg-lightGray shadow-custom w-fit h-fit">
                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/toomakagency/profilecard/?igsh=MWR3Z3lkaWdsYTVqdA=="
                    className="w-13 h-13 flex items-center justify-center overflow-hidden p-2 transition duration-300 rounded-lg hover:scale-90 active:scale-90"
                  >
                    <svg
                      className={`w-[30px] fill-pink-400
                       `}
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
                      className={`w-[30px] `}
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
                      className={`w-[30px] fill-green-400
                       `}
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                  </Link>
                  <Link href="tel:+989015528576" className="text-white">
                    <svg
                      width="35px"
                      height="64px"
                      viewBox="0 0 25.00 25.00"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#d90d0d"
                      stroke="#d90d0d"
                      strokeWidth="0.00025"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <defs> </defs>{" "}
                        <g id="phone">
                          {" "}
                          <path
                            className="cls-1"
                            d="M23,17.11a5.92,5.92,0,0,0-4.63-3.95,1.5,1.5,0,0,0-1.51.66L15.6,15.63a.53.53,0,0,1-.61.2,13.25,13.25,0,0,1-3.6-2.14,13,13,0,0,1-2.94-3.52.5.5,0,0,1,.17-.69l1.63-1.09a1.52,1.52,0,0,0,.61-1.71A10.13,10.13,0,0,0,9.48,3.79a10.36,10.36,0,0,0-2.2-2.33A1.53,1.53,0,0,0,6,1.19a7.31,7.31,0,0,0-1.13.43A7.64,7.64,0,0,0,1.2,6.1a1.48,1.48,0,0,0,0,.93A24.63,24.63,0,0,0,7.73,17.44,24.76,24.76,0,0,0,17.12,23a1.41,1.41,0,0,0,.45.07,1.59,1.59,0,0,0,.48-.07,7.64,7.64,0,0,0,4.47-3.66A6.21,6.21,0,0,0,23,18,1.46,1.46,0,0,0,23,17.11Zm-1.33,1.74A6.61,6.61,0,0,1,17.73,22a.54.54,0,0,1-.31,0,23.61,23.61,0,0,1-9-5.29,23.74,23.74,0,0,1-6.27-10,.47.47,0,0,1,0-.31A6.59,6.59,0,0,1,5.29,2.52a5,5,0,0,1,1-.36h.1a.5.5,0,0,1,.32.11,9.4,9.4,0,0,1,2,2.09A9.07,9.07,0,0,1,9.9,7a.52.52,0,0,1-.21.6L8.06,8.64a1.54,1.54,0,0,0-.47,2,14.09,14.09,0,0,0,7,6.09,1.51,1.51,0,0,0,1.81-.58l1.21-1.81a.51.51,0,0,1,.51-.23A4.94,4.94,0,0,1,22,17.44a.58.58,0,0,1,0,.29A5.35,5.35,0,0,1,21.62,18.85Z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>

              <p
                className={`text-base font-medium text-gray-500 pt-5 p-2 text-justify 
                `}
              >
                شرکت ما، راهکارهای جامع مهندسی دیجیتال را برای کسب‌وکارهای
                محصول‌محور و خدمات‌محور فراهم می‌کند. هدف ما ارائه تمامی خدمات
                برنامه نویسی در تمام حوضه ها تحت یک سقف است تا شما بتوانید به
                آسانی به اهداف کسب‌وکاری خود دست پیدا کنید. با تیمی جوان، پویا و
                پرانرژی، ما در کنار شما هستیم تا در دنیای دیجیتال بدرخشید.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              {Object.entries(footerData).map(([key, section]) => (
                <div key={key} className="text-center sm:text-left">
                  <p
                    className={`text-xl text-right font-bold text-blue-400 border-b-2  p-2 border-black/30
                     `}
                  >
                    {section.title}
                  </p>
                  <ul className="mt-8 space-y-4 text-right text-sm">
                    {"links" in section &&
                      section.links.map((link, index) => (
                        <li key={index}>
                          <a
                            className={`text-black text-right transition hover:text-black/50 hover:border-b-2 p-2 border-gray-100 font-bold hover:text-blue-400
                            `}
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
                                className={`transition font-bold hover:border-b-2 p-2 border-gray-100 text-gray-600 hover:text-blue-400
                                `}
                              >
                                {item.value}
                              </a>
                            ) : item.type === "phone" ? (
                              <a
                                href={`tel:${item.value}`}
                                className={` transition font-bold  hover:border-b-2 p-2 border-gray-100  text-gray-600 hover:text-blue-400
                                `}
                              >
                                {item.value}
                              </a>
                            ) : (
                              <span
                                className={` transition font-bold hover:border-b-2 p-2 border-gray-100 text-gray-600 hover:text-blue-400
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
              <p className="text-sm text-black">
                <span className="block sm:inline"> All rights reserved. </span>

                <a className="inline-block text-black underline" href="#">
                  Terms & Conditions
                </a>

                <span>·</span>

                <a className="inline-block text-black underline " href="#">
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 ml-1 text-sm text-black sm:order-first sm:mt-0">
                © 2024 Tomak
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
