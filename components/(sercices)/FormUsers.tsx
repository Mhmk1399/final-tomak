"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserForm {
  message: string;
  name: string;
}

const FormUsers = () => {
  const [userForm, setUserForm] = useState<UserForm>({ message: "", name: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false); // For authentication
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // Add modal state
  const router = useRouter();

  // Check for authentication by calling the /api/auth/me endpoint
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/me", {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          setUserForm(data);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error verifying authentication:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get("message");

    if (!isAuthenticated) {
      setShowModal(true); // Show the modal first

      return;
    }

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userForm.message }),
      });

      if (response.ok) {
        setShowModal(true);
        setUserForm({
          message: "",
          name: "",
        });
        console.log(message);
      } else {
        console.error("Error submitting comment.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Or a spinner
  }

  function handleClickRoute(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    router.push("/login");
  }

  return (
    <section className="bg-gray-50">
      {isAuthenticated && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-green-400 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              موفقیت‌آمیز
            </h3>
            <p className="text-gray-100 mb-6 text-center">
              نظر شما با موفقیت ثبت شد.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-white font-bold text-center  shadow-md shadow-gray-200 text-black py-2 px-4 rounded-md hover:bg-transparent transition duration-300"
            >
              بستن
            </button>
          </div>
        </div>
      )}
      {!isAuthenticated && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-red-400 p-8 rounded-lg flex  flex-col shadow-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              موفقیت‌آمیز نبود
            </h3>
            <p className="text-gray-100 mb-6  text-center">
              نظر شما با ثبت نشد.
            </p>
            <button
              onClick={handleClickRoute}
              className="bg-white hover:text-white hover:bg-transparent text-black py-3 px-6 text-center rounded-xl"
            >
              بستن
            </button>
          </div>
        </div>
      )}
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            نظرات خود را با ما در میان بگذارید
          </h2>
          <p className="hidden text-gray-500 sm:mt-4 sm:block text-justify">
            ما به خواست شما همیشه سریعترین و بهترین خدمات را ارائه میدهیم...
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form
            onSubmit={handleSubmit}
            className=" flex w-full flex-col sm:gap-4"
          >
            <div className="sm:flex-1">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                نظر شما
              </label>
              <textarea
                name="message"
                value={userForm.message}
                onChange={(e) =>
                  setUserForm({
                    message: e.target.value,
                    name: "",
                  })
                }
                id="message"
                placeholder="متن نظرات شما"
                className="w-full rounded-md bg-gray-200 p-3 text-gray-700 shadow-sm transition focus:ring-secondary focus:bg-white focus:ring-2 focus:outline-none mb-4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-5 py-3 text-white transition duration-500 hover:scale-95 hover:bg-primary sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium">ارسال</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormUsers;
