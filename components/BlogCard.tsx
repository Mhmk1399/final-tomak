"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

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

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  post,
  index = 0,
  featured = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Category color mapping
  const categoryColors: Record<
    string,
    { bg: string; text: string; gradient: string }
  > = {
    تکنولوژی: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      gradient: "from-blue-300/20 via-blue-400/10 to-transparent",
    },
    طراحی: {
      bg: "bg-purple-100",
      text: "text-purple-700",
      gradient: "from-purple-300/20 via-purple-400/10 to-transparent",
    },
    بازاریابی: {
      bg: "bg-amber-100",
      text: "text-amber-700",
      gradient: "from-amber-300/20 via-amber-400/10 to-transparent",
    },
    توسعه: {
      bg: "bg-green-100",
      text: "text-green-700",
      gradient: "from-green-300/20 via-green-400/10 to-transparent",
    },
    اخبار: {
      bg: "bg-red-100",
      text: "text-red-700",
      gradient: "from-red-300/20 via-red-400/10 to-transparent",
    },
    // Default fallback
    default: {
      bg: "bg-gray-100",
      text: "text-gray-700",
      gradient: "from-gray-300/20 via-gray-400/10 to-transparent",
    },
  };

  const categoryStyle = categoryColors[post.category] || categoryColors.default;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-500 backdrop-blur-sm
        ${featured ? "md:col-span-2" : ""}
        bg-gradient-to-br from-white to-gray-50
        border-gray-200 hover:border-gray-300
      `}
      style={{
        boxShadow: isHovered
          ? "0 20px 30px -10px rgba(0, 0, 0, 0.1), 0 10px 20px -10px rgba(0, 0, 0, 0.05)"
          : "0 10px 15px -5px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
        transition:
          "box-shadow 0.5s ease, transform 0.5s ease, border-color 0.5s ease",
      }}
      dir="rtl"
    >
      {/* Hover effect */}
      {isHovered && (
        <motion.div
          className={`absolute pointer-events-none bg-gradient-to-r ${categoryStyle.gradient} rounded-full opacity-70 blur-xl`}
          style={{
            width: "250px",
            height: "250px",
            left: mousePosition.x - 125,
            top: mousePosition.y - 125,
            transition: "opacity 0.2s ease",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
        />
      )}

      <div
        className={`flex ${
          featured ? "md:flex-row flex-col" : "flex-col"
        } h-full`}
      >
        {/* Image container */}
        <div
          className={`relative overflow-hidden ${
            featured ? "md:w-1/2" : "w-full h-48"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              width={800}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="absolute top-4 right-4 z-20">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${categoryStyle.bg} ${categoryStyle.text}`}
            >
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className={`p-6 flex flex-col justify-between ${
            featured ? "md:w-1/2" : "w-full"
          }`}
        >
          <div>
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          </div>

          <div className="mt-auto">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden ml-2">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-gray-700">{post.author.name}</span>
            </div>

            <div className="flex flex-wrap items-center text-xs text-gray-500 mb-4">
              <div className="flex items-center ml-4">
                <Calendar className="w-4 h-4 ml-1" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center ml-4">
                <Clock className="w-4 h-4 ml-1" />
                <span>{post.readTime} دقیقه</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 ml-1" />
                <span>{post.commentCount} نظر</span>
              </div>
            </div>

            <Link href={`/blogs/${post.slug}`}>
              <motion.div
                whileHover={{ x: -5 }}
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 group"
              >
                ادامه مطلب
                <ChevronRight className="w-4 h-4 mr-1 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`blog-pattern-${post.id}`}
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <rect width="100%" height="100%" fill="none" />
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#blog-pattern-${post.id})`}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default BlogCard;
