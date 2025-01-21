"use client";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [modalError, setModalError] = useState(false); // State to handle error messages for ({confirm password})
  const [modalSuccess, setModalSuccess] = useState(false); // State to handle success messages for successful registration
  const [loading, setLoading] = useState(false); // Loading state to prevent multiple submissions
  const router = useRouter();

  const formFields = [
    {
      id: "name",
      label: "نام و نام خانوادگی",
      type: "text",
      placeholder: "نام و نام خانوادگی",
    },
    {
      id: "phone",
      label: "شماره تلفن",
      type: "phone",
      placeholder: "شماره تلفن",
    },
    { id: "email", label: "ایمیل", type: "email", placeholder: "ایمیل" },
    {
      id: "password",
      label: "گذرواژه",
      type: "password",
      placeholder: "گذرواژه",
    },
    {
      id: "confirmPassword",
      label: "تکرار گذرواژه",
      type: "password",
      placeholder: "تکرار گذرواژه",
    },
  ];
  useEffect(() => {
    document.title = "  ثبت نام | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "به تومک بپیوندید! با ثبت نام و ایجاد حساب کاربری، به مجموعه‌ای از ابزارها و خدمات حرفه‌ای دسترسی پیدا کنید که به شما در رشد کسب‌وکار و ارتقای حضورتان در فضای دیجیتال کمک می‌کنند. "
      );
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData);

    const { name, phone, email, password, confirmPassword } = formValues;

    // Basic validation for passwords match
    if (password !== confirmPassword) {
      setModalError(true);
      return;
    }

    setLoading(true);
    // setModalError(); // Reset error messages

    try {
      const form = new FormData();
      form.append("name", name as string);
      form.append("phone", phone as string);
      form.append("email", email as string);
      form.append("password", password as string);

      const response = await fetch("/api/users", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setModalSuccess(true);
        // alert("حساب کاربری شما با موفقیت ایجاد شد.");
        setTimeout(() => {
          router.push("/login"); // Redirect to login page after successful registration after 5 seconds
        }, 5000);
      } else {
        setModalError(true); // setErrorMessage
      }
    } catch (error) {
      setModalError(true); // setErrorMessage
      console.error("Error submitting registration form:", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-max w-full px-4  sm:px-6 lg:px-8 bg-login-custom backdrop-blur-sm"
      dir="rtl"
    >
      {modalSuccess && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-green-400 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              ثبت نام شما موفقیت‌آمیز بود
            </h3>
            <p className="text-gray-100 mb-6 text-center">
              به صفحه ورود منتقل می شوید.{" "}
            </p>
            <button
              onClick={() => setModalSuccess(false)}
              className="w-full bg-white font-bold text-center  shadow-md shadow-gray-200 text-black py-2 px-4 rounded-md hover:bg-transparent transition duration-300"
            >
              بستن
            </button>
          </div>
        </div>
      )}

      {/* error Modal */}

      {modalError && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-red-400 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              خطا در تطابق رمز عبور
            </h3>
            <p className="text-gray-100 mb-6 text-center">
              لطفا رمز عبور خود را با دقت وارد کنید.
            </p>
            <button
              onClick={() => setModalError(false)}
              className="w-full bg-white font-bold text-center  shadow-md shadow-gray-200 text-black py-2 px-4 rounded-md hover:bg-transparent transition duration-300"
            >
              بستن
            </button>
          </div>
        </div>
      )}
      <div className="grid gap-6 sm:gap-8 w-full max-w-lg sm:max-w-xl lg:max-w-5xl lg:my-36 mt-44 ">
        <section
          id="back-div"
          className="rounded-3xl w-full lg:p-6 shadow-xl backdrop-blur-sm"
        >
          <div className="border-8 border-transparent rounded-xl bg-white/80 shadow-xl p-6 sm:p-8 m-2 backdrop-blur-sm">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center cursor-default text-primary my-4">
              ساختن حساب کاربری
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block mb-0.5 text-base text-black"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    className="border p-2 shadow-md text-black rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition transform hover:scale-105 duration-300"
                    type={field.type}
                    placeholder={field.placeholder}
                    required={true}
                  />
                </div>
              ))}
              <button
                disabled={loading}
                className="w-full p-3 mt-4 text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                {loading ? "در حال ارسال..." : "ساختن حساب کاربری"}
              </button>
            </form>

            <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
              <span className="text-gray-500">
                حساب کاربری دارید؟
                <Link
                  href="/login"
                  className="text-blue-400 transition font-bold hover:underline mx-1"
                >
                  وارد شوید{" "}
                </Link>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
