// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Button to toggle sidebar on small screens */}
//       <button
//         className="sm:block lg:block p-4 text-2xl text-white fixed top-1 right-0 z-50 mt-16"
//         onClick={toggleSidebar}
//       >
//         داشبورد ☰
//       </button>

//       {/* Sidebar */}
//       <motion.div
//         dir="rtl"
//         className={`fixed sm:w-64 w-full bg-gray-800 text-white h-full sm:flex flex-col z-10 sm:relative sm:translate-x-0 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition duration-150 ease-in-out`}
//         initial={{ x: "-100%" }}
//         animate={{ x: isOpen ? 0 : "-100%" }}
//         transition={{ type: "spring", stiffness: 100 }}
//       >
//         <div className="p-6 text-2xl font-semibold mt-16">
//           <Image src={"/assets/images/logo.png"} alt="Logo" width={50} height={100} className="rounded-full" />
//         </div>
//         <nav className="flex flex-col gap-4 p-6">
//           <a href="#" className="hover:bg-gray-700 p-2 rounded">
//             صفحه اصلی
//           </a>
//           <a href="#" className="hover:bg-gray-700 p-2 rounded">
//             خدمات
//           </a>
//           <a href="#" className="hover:bg-gray-700 p-2 rounded">
//             تنظیمات
//           </a>
//           <a href="#" className="hover:bg-gray-700 p-2 rounded">
//             خروج از حساب
//           </a>
//         </nav>
//       </motion.div>

//       {/* Overlay to close the sidebar when clicking outside on small screens */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 sm:hidden z-0"
//           onClick={toggleSidebar}
//         />
//       )}
//     </>
//   );
// };

// export default Sidebar;
