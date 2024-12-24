import React from 'react'
import Image from 'next/image'
import { blogPosts } from '@/lib/blogData'

const BlogPost = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-32 " dir='rtl'>
      <article className="prose lg:prose-xl">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-black text-center" dir='rtl mb-8'>{blogPosts[0].title}</h1>
          <div className="relative h-[400px] w-full mb-4 mt-16"> 
            <Image 
              src="/assets/images/ai.jpg"
              alt="Text Classification"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center text-gray-600 mb-8">
            
            <span>{blogPosts[0].date}</span>
            <span className="mx-2">•</span>
            <span>{blogPosts[0].time}</span>
          </div>
        </div>

        {/* Content Sections */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">مقدمه</h2>
          <p className="text-gray-700 leading-relaxed">
            طبقه‌بندی متن یکی از کاربردی‌ترین تکنیک‌های پردازش زبان طبیعی است که در بسیاری از کاربردهای دنیای واقعی مورد استفاده قرار می‌گیرد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">مفاهیم اصلی طبقه‌بندی متن</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>پیش‌پردازش متن</li>
            <li>استخراج ویژگی</li>
            <li>انتخاب مدل</li>
            <li>ارزیابی عملکرد</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">روش‌های متداول</h2>
          <p className="text-gray-700 leading-relaxed">
            در این بخش به بررسی انواع الگوریتم‌های طبقه‌بندی متن می‌پردازیم:
          </p>
          <div className="mt-4 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold">Naive Bayes</h3>
              <p>یک روش ساده و موثر برای طبقه‌بندی متن</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold">Support Vector Machines</h3>
              <p>مناسب برای داده‌های با ابعاد بالا</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold">Deep Learning</h3>
              <p>استفاده از شبکه‌های عصبی عمیق برای دقت بالاتر</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export default BlogPost
