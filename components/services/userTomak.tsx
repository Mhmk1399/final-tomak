import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const UserTomak = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const teamMembers = [
    {
      id: 1,
      name: "محمد امانی",
      role: "مهندس نرم‌افزار",
      description: "متخصص در توسعه نرم‌افزار و هوش مصنوعی",
      images: [
        "/assets/images/m1.png",
        "/assets/images/m2.png",
        "/assets/images/m3.png",
      ],
    },
    {
      id: 2,
      name: "حسین ذوالقدر",
      role: "مهندس نرم افزار",
      description: "متخصص در طراحی سایت و فرانت‌اند",
      images: [
        "/assets/images/h1.png",
        "/assets/images/h2.png",
        "/assets/images/h3.png",
      ],
    },
  ];

  const handleHover = (memberId: number) => {
    setHoveredMember(memberId);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 1500);

    return () => clearInterval(interval);
  };

  return (
    <div className=" w-full py-24" dir="rtl">
      <div className="w-full px-8">
        <div className="space-y-20">
          {teamMembers.map((member) => (
            <div key={member.id} className="relative">
              <div className="flex justify-between items-center gap-12 border-b border-gray-300 pb-12">
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-blue-900 mb-3">
                    {member.name}
                  </h2>
                  <h3 className="text-xl text-blue-700 mb-2">{member.role}</h3>
                  <p className="text-gray-600 text-lg">{member.description}</p>
                </motion.div>

                <div
                  className="relative w-80 h-96"
                  onMouseEnter={() => handleHover(member.id)}
                  onMouseLeave={() => {
                    setHoveredMember(null);
                    setCurrentImageIndex(0);
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={
                        hoveredMember === member.id ? currentImageIndex : "main"
                      }
                      className="absolute w-full h-full rounded-2xl overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={
                          member.images[
                            hoveredMember === member.id ? currentImageIndex : 0
                          ]
                        }
                        alt={
                          member.role[
                            hoveredMember === member.id ? currentImageIndex : 0
                          ]
                        }
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTomak;
