import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sahel } from "@/next-persian-fonts/sahel";

export const metadata: Metadata = {
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
      <body className={sahel.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
