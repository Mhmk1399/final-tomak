"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../lib/blogData";
import { BlogSchema } from "@/components/schema/blogSchema";

const Blogs = () => {
  const blogData = {
    title: "وبلاگ تومک | مقالات تخصصی دیجیتال مارکتینگ",
    url: "/blogs",
    images: ["/assets/images/blog-header.webp"],
    sections: [
      {
        heading: "مقالات تخصصی دیجیتال مارکتینگ و طراحی سایت",
        content:
          "در وبلاگ تومک، جدیدترین مقالات و آموزش‌های تخصصی در حوزه دیجیتال مارکتینگ، طراحی سایت، سئو و بازاریابی محتوا را مطالعه کنید.",
        lists: [
          "مقالات دیجیتال مارکتینگ",
          "آموزش طراحی سایت",
          "راهنمای سئو و بهینه‌سازی",
          "استراتژی‌های بازاریابی محتوا",
        ],
      },
      {
        heading: "محتوای تخصصی و کاربردی",
        content:
          "تیم تولید محتوای تومک با تکیه بر تجربه و دانش تخصصی، جدیدترین مطالب آموزشی و کاربردی را در اختیار شما قرار می‌دهد.",
      },
      {
        heading: "راهنمای جامع کسب و کار آنلاین",
        content:
          "با مطالعه مقالات وبلاگ تومک، با اصول و استراتژی‌های موفقیت در فضای دیجیتال آشنا شوید و کسب و کار خود را متحول کنید.",
      },
      {
        heading: "به‌روزترین تکنیک‌های دیجیتال مارکتینگ",
        content:
          "در وبلاگ تومک، جدیدترین روش‌ها و تکنیک‌های دیجیتال مارکتینگ را به زبانی ساده و کاربردی می‌آموزید.",
      },
    ],
  };

  const getGridClass = (index: number) => {
    const gridPatterns = [
      "md:col-span-2",
      "md:col-span-1",
      "md:col-span-3",
      "md:col-span-1 md:row-span-2",
    ];
    return gridPatterns[index % gridPatterns.length];
  };
  useEffect(() => {
    document.title = "وبلاگ | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "در وبلاگ تومک، جدیدترین مقالات و آموزش‌های تخصصی در حوزه دیجیتال مارکتینگ، طراحی سایت، سئو و بازاریابی محتوا را مطالعه کنید."
      );
    }
  }, []);

  return (
    <>
      <BlogSchema blogData={blogData} />
      <div className="container mx-auto px-4 py-8 my-12" dir="rtl">
        <h1 className="text-3xl font-bold text-black text-center my-8">
          وبلاگ تومک
        </h1>

        <div className="grid md:grid-cols-3 gap-6 grid-masonry">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`
              relative overflow-hidden shadow-md 
              group ${getGridClass(index)}
            `}
            >
              <Link
                href={post.link}
                className="text-white hover:text-blue-200 group flex items-center"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 brightness-50"
                  />
                </div>

                {/* Overlay Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                  <div className="space-y-3">
                    <span className="text-[10px] bg-yellow-400 text-gray-800 px-2 py-1 rounded">
                      {post.date}
                    </span>

                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>

                    <p className="text-sm opacity-80 mb-4">{post.summary}</p>

                    <div className="flex justify-between items-center">
                      مطالعه بیشتر
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 17l-5-5m0 0l5-5m-5 5h12"
                        />
                      </svg>
                      <span className="text-xs">
                        مدت مطالعه: {post.time} دقیقه
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
