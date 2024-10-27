"use client"; // Make sure this is at the top to indicate this is a client-side component.

import React, { useState } from "react";

const OrderForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    projectType: "",
    budget: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const form = new FormData(); // Create a new FormData object
      form.append("name", formData.name);
      form.append("phoneNumber", formData.phoneNumber);
      form.append("projectType", formData.projectType);
      form.append("budget", formData.budget);
      form.append("description", formData.description);

      const response = await fetch("/api/order", {
        method: "POST",
        body: form, // Sending the form data
      });

      if (response.ok) {
        setSubmitted(true); // Update the UI to reflect form submission
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="order-form" className="bg-background py-16">

      <div className="max-w-4xl mx-auto px-8 py-6 bg-primary rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-center text-white border-b-2 p-3 my-8">
          پروژه توسعه خود را سفارش دهید
        </h3>

        <p className="text-lg text-center font-bold mb-8 mt-4 text-white">
          {submitted
            ? ""
            : "لطفا فرم را تکمیل کنید."}
        </p>

        {submitted ? (
          <div
            className="bg-green-400 border text-center border-green-600 text-green-700 px-4 py-5 rounded-xl relative"
            role="alert"
          >
            <strong dir="ltr" className="font-bold text-black/80">! متشکریم</strong> <br />
            <span className="block sm:inline text-white">
              جزئیات پروژه شما با موفقیت ارسال شد.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-gray-700 p-12 rounded-xl shadow"
          >
            <div className="mb-4">
              <label
                className="block mb-2 text-white text-center font-semibold"
                htmlFor="name"
              >
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 outline-none focus:ring-4 ring-primary"
                placeholder="نام و نام خانوادگی"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-white text-center font-semibold"
                htmlFor="phoneNumber"
              >
                شماره موبایل
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 outline-none focus:ring-4 ring-primary"
                placeholder="09123456789"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-white text-center font-semibold"
                htmlFor="projectType"
              >
                نوع پروژه
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 outline-none focus:ring-4 ring-primary"
              >
                <option value="">انتخاب کنید...</option>
                <option value="web">طراحی و توسعه وب سایت</option>
                <option value="mobile">طراحی و توسعه برنامه موبایل</option>
                <option value="ecommerce">
                  طراحی و توسعه فروشگاه الکترونیک
                </option>
                <option value="other">سایر خدمات</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-white text-center font-semibold"
                htmlFor="budget"
              >
                تخمین هزینه
              </label>
              <input
                type="number"
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 outline-none focus:ring-4 ring-primary"
                placeholder="تخمین هزینه پروژه به تومان"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-white text-center font-semibold"
                htmlFor="description"
              >
                توضیحات پروژه
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 outline-none focus:ring-4 ring-primary"
                placeholder="توضیحات پروژه"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-500"
              >
                ارسال پیام
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default OrderForm;
