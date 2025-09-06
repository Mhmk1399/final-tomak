import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { BlogSchema } from "@/components/schema/blogSchema"; // keep using your component

export const metadata = {
  title: "SaaS، PaaS و MaaS: تفاوت‌ها، تاریخچه و کاربردها | تومَک",
  description:
    "راهنمای جامع مدل‌های سرویس‌دهی ابری SaaS، PaaS و MaaS با تعریف‌ها، تاریخچه، مثال‌های واقعی، آمار جهانی و نکات انتخاب برای کسب‌وکارها.",
  alternates: {
    canonical: "https://your-domain.com/blogs/saas-paas-maas-guide-persian",
  },
  openGraph: {
    type: "article",
    locale: "fa_IR",
    url: "https://your-domain.com/blogs/saas-paas-maas-guide-persian",
    title: "SaaS، PaaS و MaaS: تفاوت‌ها، تاریخچه و کاربردها | تومَک",
    description:
      "تعریف‌ها، تاریخچه و مثال‌های عملی SaaS، PaaS و MaaS + راهنمای انتخاب.",
    siteName: "Tomek",
    images: [
      {
        url: "https://your-domain.com/assets/images/cloud-services.png",
        width: 1200,
        height: 630,
        alt: "راهنمای سرویس‌های ابری SaaS PaaS MaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS، PaaS و MaaS: تفاوت‌ها، تاریخچه و کاربردها",
    description:
      "راهنمای کامل مدل‌های ابری + مثال‌های واقعی و آمار جهانی.",
    images: ["https://your-domain.com/assets/images/cloud-services.png"],
  },
  authors: [{ name: "Tomek Editorial" }],
  other: { "article:section": "Cloud", "article:tag": "SaaS,PaaS,MaaS,Cloud" },
};

const Page = () => {
  // Structured data (fallback) — you already have BlogSchema; keep both if BlogSchema adds Article rich data.
  const blogData = useMemo(
    () => ({
      title:
        "SaaS، PaaS و MaaS: تفاوت‌ها، تاریخچه و کاربردها در دنیای کسب‌وکار",
      url: "https://your-domain.com/blogs/saas-paas-maas-guide-persian",
      images: ["https://your-domain.com/assets/images/cloud-services.png"],
      sections: [
        {
          heading: "تعریف‌های پایه‌ای: SaaS، PaaS و MaaS چیا هستن؟",
          content:
            "این مدل‌ها همه بخشی از رایانش ابری هستن، اما سطح سرویس‌دهی و مسئولیت‌ها فرق می‌کنه.",
        },
        {
          heading: "تاریخچه و دلیل به‌وجود آمدن این مدل‌ها",
          content:
            "از تایم‌شیرینگ دهه ۶۰ تا انفجار سرویس‌های ابری پس از ۲۰۰۰.",
        },
        {
          heading: "مثال‌های عملی و تأثیرات در کسب‌وکارها",
          content: "بررسی کاربردهای واقعی در خرده‌فروشی، سلامت، فین‌تک و حمل‌ونقل.",
        },
      ],
    }),
    []
  );

  return (
    <>
      <BlogSchema blogData={blogData} />

      {/* HEADER / HERO */}
      <article className="relative w-full py-12 bg-sky-50 mt-12" dir="rtl">
        <header className="px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
            <div className="md:w-1/2 lg:mr-6">
              <h1 className="text-3xl font-bold border-b-2 py-2 border-sky-100 text-sky-900 mb-4">
                SaaS، PaaS ، MaaS:
                <span className="flex ml-12"> تفاوت، تاریخچه و کاربرد در دنیای کسب‌وکار</span>
              </h1>
              <p className="text-sky-700 mb-3 text-lg leading-relaxed">
                در دنیای امروز، مدل‌های ابری مثل SaaS، PaaS و MaaS عملیات کسب‌وکار را ساده‌تر
                و مقرون‌به‌صرفه‌تر می‌کنند. در این مطلب: تعریف‌ها، تاریخچه، مثال‌های واقعی،
                آمار جهانی و راهنمای انتخاب بر اساس نیاز شما.
              </p>
              {/* Internal links for topical authority */}
              <nav className="text-sm text-sky-800 mt-4 space-x-2 space-x-reverse">
                <Link className="underline hover:no-underline" href="/blogs/cloud-cost-optimization">
                  کاهش هزینه‌های کلاد
                </Link>
                <span>·</span>
                <Link className="underline hover:no-underline" href="/blogs/cicd-best-practices">
                  بهترین‌عملکردهای CI/CD
                </Link>
                <span>·</span>
                <Link className="underline hover:no-underline" href="/blogs/observability-guide">
                  راهنمای Observability
                </Link>
              </nav>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/images/cloud-services.png"
                alt="راهنمای سرویس‌های ابری SaaS PaaS MaaS"
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="shadow-lg shadow-gray-400 hover:shadow-none transition-shadow duration-300 ease-in-out"
              />
            </div>
          </div>
        </header>

        {/* TOC (jump links improve UX + sitelinks) */}
        <nav aria-label="فهرست مطالب" className="container max-w-4xl mx-auto px-4">
          <ul className="list-disc list-inside bg-white/70 rounded-lg p-4 text-sky-900">
            <li><a href="#defs" className="underline">تعریف‌های پایه</a></li>
            <li><a href="#history" className="underline">تاریخچه و چرایی</a></li>
            <li><a href="#examples" className="underline">مثال‌های عملی</a></li>
            <li><a href="#conclusion" className="underline">نتیجه‌گیری و آمار</a></li>
            <li><a href="#faq" className="underline">سؤالات متداول</a></li>
          </ul>
        </nav>

        {/* BODY */}
        <div className="container max-w-4xl mx-auto px-4 py-8" dir="rtl">
          {/* === Definitions === */}
          <section id="defs" className="mb-12">
            {/** your improved “تعریف‌ها” section pasted here unchanged **/}
            {/* ... (use the already refined version you pasted in your message) */}
          </section>

          {/* === History === */}
          <section id="history" className="mb-12">
            {/** your improved “تاریخچه” section pasted here unchanged **/}
            {/* ... */}
          </section>

          {/* === Examples === */}
          <section id="examples" className="mb-12">
            {/** your improved “مثال‌ها” section pasted here unchanged **/}
            {/* ... */}
          </section>

          {/* === Conclusion + Stats === */}
          <section id="conclusion" className="mb-12">
            {/** your improved conclusion section pasted here unchanged **/}
            {/* ... */}
          </section>

          {/* === FAQ (rich results) === */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">سؤالات متداول</h2>
            <div className="space-y-4">
              <details className="bg-white p-4 rounded-lg shadow">
                <summary className="font-bold cursor-pointer">SaaS، PaaS و MaaS چه تفاوتی در مسئولیت‌ها دارن؟</summary>
                <p className="mt-2 text-gray-700">در SaaS ارائه‌دهنده همه‌چیز (نرم‌افزار) را مدیریت می‌کند؛ در PaaS شما کد/اپ را مدیریت می‌کنید و بقیه با پلتفرم است؛ در MaaS تمرکز روی مشاهده‌پذیری و مانیتورینگ است.</p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow">
                <summary className="font-bold cursor-pointer">برای استارتاپ کوچک کدوم بهتره؟</summary>
                <p className="mt-2 text-gray-700">معمولاً ترکیب SaaS برای امور روزمره (CRM، ایمیل) + PaaS برای توسعه محصول + MaaS برای رصد سلامت سیستم بهترین تعادل هزینه/سرعت/کیفیت را می‌دهد.</p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow">
                <summary className="font-bold cursor-pointer">اگر انطباق (Compliance) سختی داریم چه کنیم؟</summary>
                <p className="mt-2 text-gray-700">از ارائه‌دهنده‌هایی با گواهی‌های مرتبط (ISO 27001، SOC 2، HIPAA و...) استفاده کنید و محدودیت‌های داده‌ای/اقلیمی را در قرارداد و تنظیمات سرویس enforce کنید.</p>
              </details>
            </div>
          </section>

          {/* BREADCRUMBS (UX + schema) */}
         
        </div>
      </article>

     
    </>
  );
};

export default Page;
