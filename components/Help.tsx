"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define interfaces for form steps
interface BudgetStep {
  minBudget: number;
  maxBudget: number;
}

interface ScaleStep {
  projectScale: "small" | "medium" | "large" | "enterprise";
}

interface ServicesStep {
  selectedServices: string[];
}
const PROJECT_SHOWCASE = [
  {
    id: "xyz",
    name: "طراحی و توسعه وب",
    icon: () => (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#f97316"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15"
            stroke="#f97316"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M13.2942 7.17041L12.0001 12L10.706 16.8297"
            stroke="#f97316"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15"
            stroke="#f97316"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            opacity="0.5"
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="#f97316"
            strokeWidth="1.5"
          ></path>{" "}
        </g>
      </svg>
    ),
    description:
      "ماهانه هزاران بازدید را از طریق وبسایت خود به کسب و کارتان اضافه کنید",
    backgroundImage: "/assets/images/webapp.jpg",
  },
  {
    id: "abc",
    name: "توسعه اپلیکیشن موبایل",
    icon: () => (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 1024 1024"
        className="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M503.808 426.496V501.76h21.504c29.184 0 43.52-12.8 43.52-37.888 0-24.576-14.336-37.376-43.52-37.376h-21.504zM721.92 426.496h-22.016V501.76h21.504c29.184 0 43.52-12.8 43.52-37.888 0-24.576-14.336-37.376-43.008-37.376zM304.64 428.544h-1.536c-0.512 6.656-2.048 13.312-4.096 19.456l-26.624 81.408h61.952l-26.624-80.896c-1.024-5.12-2.048-11.776-3.072-19.968z"
            fill="#f915f1"
          ></path>
          <path
            d="M793.088 329.216v-209.92c0-30.72-25.088-55.808-55.808-55.808H289.28c-30.72 0-55.808 25.088-55.808 55.808v209.92H129.024v349.696h104.448v223.744c0 30.72 25.088 55.808 55.808 55.808H737.28c30.72 0 55.808-25.088 55.808-55.808v-223.744h103.424V329.216h-103.424zM737.28 133.12v196.096H289.28V133.12H737.28z m-116.224 328.704c0 24.064-8.704 43.008-26.112 57.344-17.408 14.336-39.424 21.504-65.536 20.48h-25.6v81.408h-49.664V388.096h80.384c57.856 0 86.528 24.576 86.528 73.728z m-358.912 105.984l-16.896 53.248H190.976L276.48 388.096h58.368l83.456 232.96H364.032l-17.408-53.248H262.144z m250.88 363.52c-15.36 0-28.16-12.288-28.16-28.16 0-15.36 12.8-28.16 28.16-28.16s28.16 12.288 28.16 28.16c0 15.36-12.288 28.16-28.16 28.16z m-223.744-84.48v-167.936H737.28v167.936H289.28z m501.76-327.68c-17.408 14.336-39.424 21.504-65.536 20.48h-25.6v81.408H650.24V388.096h80.384c57.856 0 87.04 24.576 87.04 73.728-0.512 24.064-9.216 43.008-26.624 57.344z"
            fill="#f915f1"
          ></path>
        </g>
      </svg>
    ),
    description: "همراه با بروز شدن جامعه کسب و کار خود را بروز کنید",
    backgroundImage: "/assets/images/mobile.jpg",
  },

  {
    id: "tmk",
    name: "هوش مصنوعی و داده ",
    icon: () => (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="System / Data">
            {" "}
            <path
              id="Vector"
              d="M18 12V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V12M18 12V7M18 12C18 13.6569 15.3137 15 12 15C8.68629 15 6 13.6569 6 12M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7M6 12V7"
              stroke="#4ed728"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
    description: "بازدهی روندهای کسب و کار خود را به حداکثر برسانبد",
    backgroundImage: "/assets/images/hos.jpg",
  },
];

const SERVICES = [
  { id: "webDev", name: "طراحی و توسعه وب" },
  { id: "mobileDev", name: "توسعه اپلیکیشن موبایل" },
  { id: "uiux", name: "UI/UX طراحی " },
  { id: "ai", name: "هوش مصنوعی و داده " },
];

const SCALE_OPTIONS = [
  {
    id: "small",
    name: "پروژه کوچک",
    description: "پروژه کوچک با محدودیت‌های محدود",
    budget: "$500 - $5,000",
  },
  {
    id: "medium",
    name: "پروژه متوسط",
    description: "پروژه متوسط با محدودیت‌های متوسط",
    budget: "$5,000 - $20,000",
  },
  {
    id: "large",
    name: "پروژه بزرگ",
    description: "پروژه بزرگ با محدودیت‌های پیچیده",
    budget: "$20,000 - $100,000",
  },
  {
    id: "enterprise",
    name: "پروژه سازمانی",
    description: "پروژه سازمانی با محدودیت‌های سازمانی",
    budget: "$100,000+",
  },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<
    Partial<BudgetStep & ScaleStep & ServicesStep>
  >({});

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBudgetChange = (min: number, max: number) => {
    setFormData((prev) => ({ ...prev, minBudget: min, maxBudget: max }));
  };

  const handleScaleSelect = (scale: ScaleStep["projectScale"]) => {
    setFormData((prev) => ({ ...prev, projectScale: scale }));
  };

  const handleServiceToggle = (serviceId: string) => {
    const currentServices = formData.selectedServices || [];
    const newServices = currentServices.includes(serviceId)
      ? currentServices.filter((id) => id !== serviceId)
      : [...currentServices, serviceId];

    setFormData((prev) => ({ ...prev, selectedServices: newServices }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    // Add your submission logic here
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            key="budget-step"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="flex flex-col items-center h-full space-y-6"
          >
            <h2 className="text-2xl font-bold text-blue-500 rounded-2xl p-5 shadow-md shadow-blue-500">
              بودجه ی خود را وارد کنید
            </h2>
            <p className="text-gray-700 text-sm lg:text-base">
              فرم زیر را پر کنید تا بهترین پیشنهاد را برای شما پیدا کنیم
            </p>
            <div className="flex space-x-4">
              <input
                type="number"
                placeholder="میزان بودجه"
                className="p-2 rounded-xl border-blue-500 border text-black mx-auto text-center"
                onChange={(e) =>
                  handleBudgetChange(
                    Number(e.target.value),
                    formData.maxBudget || 0
                  )
                }
              />
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            key="scale-step"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="flex flex-col items-center space-y-6"
          >
            <h2 className="text-2xl font-bold text-white">
              مقیاس پروژه را انتخاب کنید
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {SCALE_OPTIONS.map((scale) => (
                <div
                  key={scale.id}
                  onClick={() =>
                    handleScaleSelect(scale.id as ScaleStep["projectScale"])
                  }
                  className={`p-4 rounded-lg cursor-pointer transition 
                    ${
                      formData.projectScale === scale.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  <h3 className="font-bold">{scale.name}</h3>
                  <p className="text-sm">{scale.description}</p>
                  <p className="text-xs mt-2">{scale.budget}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="services-step"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="flex flex-col items-center space-y-6"
          >
            <h2 className="text-2xl font-bold text-white">
              سرویس های مورد نیاز را انتخاب کنید
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceToggle(service.id)}
                  className={`p-4 rounded-lg cursor-pointer transition 
                    ${
                      formData.selectedServices?.includes(service.id)
                        ? "bg-green-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  {service.name}
                </div>
              ))}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className=" py-2" dir="rtl">
      <div className="w-full px-6 my-8 text-center">
        <div className=" mx-auto lg:w-1/2 flex flex-row items-center justify-center  text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-secondary ml-2"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div></div>
          <h2 className="text-black text-sm lg:text-lg font-bold">
            راه هایی که ما می توانیم کسب و کار شما را گسترش دهیم
          </h2>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col items-center justify-center h-full ">
        <div className=" flex w-full lg:w-1/2 flex-col lg:flex-row  items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white p-8">
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

            <div className="flex justify-between mt-8">
              {currentStep < 2 ? (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-auto"
                >
                  بعدی
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 ml-auto"
                >
                  ارسال
                </button>
              )}
              {currentStep > 0 && (
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                  قبلی
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="grid overflow-hidden  gap-3 text-white  md:grid-cols-1 lg:grid-cols-3">
            {PROJECT_SHOWCASE.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white border-l-2 border-gray-300 py-12 px-8 transition-transform hover:z-[1] hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/20 overflow-hidden"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"
                  style={{
                    backgroundImage: `url(${project.backgroundImage})`,
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10 space-y-6 h-full">
                  {project.icon && <div>{project.icon()}</div>}

                  <div>
                    <h5 className="text-lg h-full font-semibold text-black group-hover:text-white transition-all duration-500">
                      {project.name}
                    </h5>
                    <p className="text-gray-800 h-full">
                      {project.description}
                    </p>
                  </div>

                  {/* Oval Design */}
                  <div className="relative w-auto group  h-20 rounded-full border border-gray-300 flex items-center overflow-hidden mt-8">
                    
                    {/* Circle with Arrow */}
                    <div
                      className=" z-10 lg:group-hover:-translate-x-[calc(100%-14rem)] group-hover:-translate-x-[calc(100%-15rem)]  md:group-hover:-translate-x-[calc(100%-25.5rem)] flex
                               group-hover:bg-transparent group-hover:border-gray-300 absolute transition-transform duration-700 ease-in-out   left-4 w-12  h-12 border  border-gray-500 
                               rounded-full items-center justify-center bg-white/50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-600 group-hover:text-gray-100 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>

                    {/* Line */}
                    {/* <div className="absolute left-16 w-40 h-[1px] bg-gray-300"></div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
