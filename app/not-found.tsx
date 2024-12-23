import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div
      className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"
      dir="rtl"
    >
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                به نظر می رسد که دری به سوی هیچ چیز بزرگی پیدا کرده اید{" "}
              </h1>
              <p className="mt-4 mb-9 text-gray-800">
                متاسفم برای این! لطفا از صفحه اصلی ما دیدن کنید تا به جایی که
                نیاز دارید برسید
              </p>
              <Link
                href="/"
                className="sm:w-full lg:w-auto my-6 border rounded-xl py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
              >
                منو ببر اونجا!
              </Link>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
};

export default Custom404;
