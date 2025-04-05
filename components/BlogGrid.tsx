"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  commentCount: number;
  slug: string;
}

interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
  postsPerPage?: number;
}

const BlogGrid: React.FC<BlogGridProps> = ({
  posts,
  title = "آخرین مقالات",
  subtitle = "جدیدترین مطالب و مقالات آموزشی ما را دنبال کنید",
  postsPerPage = 3,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate total number of pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Get current posts to display
  const currentPosts = posts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  // Handle page navigation
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section className="py-16 px-4 bg-white overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              featured={index === 0 && currentPage === 0}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-12 space-x-2 space-x-reverse">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevPage}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-white transition-colors"
            aria-label="Previous page"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </motion.button>

          <div className="flex space-x-2 space-x-reverse">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToPage(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  currentPage === index
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-white"
                }`}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNextPage}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-white transition-colors"
            aria-label="Next page"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/blogs"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            مشاهده همه مقالات
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;
