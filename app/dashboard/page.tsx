"use client";
import Card from "@/components/dashboardUser/card";
import Topbar from "@/components/dashboardUser/topBar";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = " داشبورد | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "داشبورد تومک به شما این امکان را می‌دهد که مدیریت کسب‌وکار خود را به آسانی و با دقت بیشتری انجام دهید. تمام ابزارهای مورد نیاز برای رشد و توسعه را در اینجا پیدا خواهید کرد."
      );
    }
  }, []);
  return (
    <div className="flex flex-col lg:flex-row h-full " dir="rtl">
      {/* Sidebar */}

      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary">
        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <div className="p-16 mb-6 mx-4 bg-gradient-to-l from-primary to-secondary rounded-2xl flex flex-col lg:flex-row items-center justify-center flex-wrap gap-6">
          <Card
            title="آمار کاربران"
            content="آخرین آمار خود را اینجا دنبال کنید."
          />
          <Card
            title="پیام ها"
            content="پیام ها و اعلان های خود را بررسی کنید."
          />
          <Card
            title="تنظیمات"
            content="تنظیمات حساب خود را در اینجا مدیریت کنید."
          />
          <Card
            title="فعالیت های اخیر"
            content="فعالیت های اخیر خود را در پلتفرم مشاهده کنید."
          />
        </div>
      </div>
    </div>
  );
}
