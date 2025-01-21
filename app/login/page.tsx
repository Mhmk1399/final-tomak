"use client";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  // const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to handle error messages
  const [modalError, setModalError] = useState(false); // State to handle error messages
  const [modalSuccess, setModalSuccess] = useState(false); // State to handle error messages
  const [loading, setLoading] = useState(false); // Loading state for submission
  const router = useRouter();

  const formFields = [
    {
      id: "phone",
      label: "شماره تلفن",
      type: "text",
      placeholder: "شماره تلفن",
    },
    {
      id: "password",
      label: "گذرواژه",
      type: "password",
      placeholder: "گذرواژه",
    },
  ];
  useEffect(() => {
    document.title = "  ورود | تومک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "به صفحه ورود تومک خوش آمدید! با ورود به حساب کاربری خود، می‌توانید از تمامی امکانات و خدمات پیشرفته تومک بهره‌مند شوید. مدیریت سفارشات، مشاهده تحلیل‌ها و دسترسی به ابزارهای حرفه‌ای در یک بستر امن و کاربرپسند در انتظار شماست."
      );
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData);
    const { phone, password } = formValues;

    setLoading(true);
    // setErrorMessage(null); // Reset error message before attempting to log in

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, password }),
      });

      if (response.ok) {
        setModalSuccess(true); // You could use a proper notification system here
        router.push("/dashboard"); // Redirect to dashboard or another page after successful login
      } else {
        setModalError(true); // setErrorMessage
      }
    } catch (error) {
      console.error("Login error:", error);
      setModalError(true); // setErrorMessage
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div
      className="flex justify-center items-center h-full w-full bg-login-custom backdrop-blur-sm"
      dir="rtl"
    >
      <div className="grid gap-8 md:my-24 lg:my-12 ">
        <section
          id="back-div"
          className="rounded-3xl sm:w-[300px] p-1 lg:w-[1024px] lg:p-8 shadow-xl mb-12 md:w-[600px] md:mt-32 mt-28 backdrop-blur-sm"
        >
          <div className=" rounded-xl bg-white/80 p-8 m-2 backdrop-blur-sm">
            <h1 className="text-3xl lg:text-5xl font-bold text-center cursor-default text-primary my-2">
              ورود
            </h1>

            {/* success Modal */}

            {modalSuccess && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-green-400 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    ورود شما موفقیت‌آمیز بود
                  </h3>
                  <p className="text-gray-100 mb-6 text-center">
                    به صفحه داشبورد منتقل می شوید.{" "}
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
                    ورود شما موفقیت‌آمیز نبود
                  </h3>
                  <p className="text-gray-100 mb-6 text-center">
                    خطا در ورود به حساب کاربری شما وجود دارد.
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block mb-2 text-lg text-black"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    className="border p-3 shadow-md text-black bg-white border-gray-300 focus:outline-none rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}
              <Link
                href="#"
                className="text-blue-400 text-sm pt-2 transition hover:underline"
              >
                رمز عبور خود را فراموش کرده‌اید؟
              </Link>
              <button
                disabled={loading}
                className="w-full p-3 mt-4 text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                {loading ? "در حال ورود..." : "ورود"}
              </button>
            </form>
            <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
              <span className="text-gray-500">
                حساب کاربری ندارید؟
                <Link
                  href="/signin"
                  className="text-blue-400 transition font-bold hover:underline mx-1"
                >
                  ساختن حساب کاربری
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
