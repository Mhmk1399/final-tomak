import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../lib/blogData";

const Blogs = () => {
  const getGridClass = (index: number) => {
    const gridPatterns = [
      "md:col-span-2", 
      "md:col-span-1", 
      "md:col-span-3", 
      "md:col-span-1 md:row-span-2",
    ];
    return gridPatterns[index % gridPatterns.length];
  };

  return (
    <div className="container mx-auto px-4 py-8 my-12" dir="rtl">
      <h1 className="text-3xl font-bold text-black text-center my-8">وبلاگ تومک</h1>

      <div className="grid md:grid-cols-3 gap-6 grid-masonry">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className={`
              relative overflow-hidden shadow-md 
              group ${getGridClass(index)}
            `}
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
                
                <h2 className="text-xl font-bold mb-2">
                  {post.title}
                </h2>
                
                <p className="text-sm opacity-80 mb-4">
                  {post.summary}
                </p>

                <div className="flex justify-between items-center">
                  <Link
                    href={post.link}
                    className="text-white hover:text-blue-200 group flex items-center"
                  >
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
                  </Link>
                  <span className="text-xs">
                    مدت مطالعه: {post.time} دقیقه
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
