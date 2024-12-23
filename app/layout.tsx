import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { sahel } from "@/next-persian-fonts/sahel";
import { ray } from "@/next-persian-fonts/ray";
import Script from "next/script";

export const metadata: Metadata = {
  verification: {
    google: "googled13c95ed93977bad",
  },
  title: "تومک",
  description:
    "در تومک، ما به شما کمک می‌کنیم تا در دنیای دیجیتال بدرخشید! با ارائه مجموعه‌ای کامل از خدمات شامل طراحی وب‌سایت، بهینه‌سازی موتورهای جستجو (سئو)، تولید محتوا، خدمات گرافیک و آنالیز داده، تیم ما در تلاش است تا با راهکارهای نوآورانه و سفارشی، نیازهای منحصر به فرد شما را برآورده کند. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5FFQTK8C');
          `}
        </Script>
      </head>
      <body className={ray.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FFQTK8C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
