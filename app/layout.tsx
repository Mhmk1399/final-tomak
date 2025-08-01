import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ray } from "@/next-persian-fonts/ray";
import Script from "next/script";
import Breadcrumbs from "../components/breadCrumbs";
import CanonicalUrl from "@/components/CanonicalUrl";

export const metadata: Metadata = {
  verification: {
    google: "googled13c95ed93977bad",
  },
  title: "تومک",
  description:
    "تومک یک آژانس دیجیتال مارکتینگ است که با هدف ارائه خدمات دیجیتال مارکتینگ و طراحی وب سایت به کسب و کارها تاسیس شده است.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <link
          rel="preload"
          href="/public/assets/images/loading.gif"
          as="image"
          type="image/gif"
        />
        <link
          rel="icon"
          href="/assets/images/favicon.png"
          type="image/x-icon"
        />
        <meta name="enamad" content="52576260" />

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
        <CanonicalUrl />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FFQTK8C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <Breadcrumbs />

        {children}

        <Footer />
      </body>
    </html>
  );
}
