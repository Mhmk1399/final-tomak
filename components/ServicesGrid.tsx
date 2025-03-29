import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceItem {
  name: string;
  href: string;
  children?: ServiceItem[];
}

interface ChildPosition {
  x: number;
  y: number;
}

const ServicesGrid: React.FC<{ services: ServiceItem[] }> = ({ services }) => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [childPositions, setChildPositions] = useState<ChildPosition[][]>([]);
  const [rotation, setRotation] = useState(0);

  // Animation for rotation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.1) % 360);
    }, 30);

    return () => clearInterval(rotationInterval);
  }, []);

  // Calculate positions for child elements
  // Calculate positions for child elements
  useEffect(() => {
    const calculatePositions = () => {
      const newPositions = services.map((service, i) => {
        const container = containerRefs.current[i];
        if (!container || !service.children) return [];

        const centerX = container.offsetWidth / 2;
        const centerY = container.offsetHeight / 2;

        // Responsive radius calculation - increased for small screens
        const baseRadius = Math.min(
          container.offsetWidth,
          container.offsetHeight
        );
        const radius =
          window.innerWidth < 640
            ? baseRadius * 0.35 // Increased from 0.3 to 0.35 for more distance on small screens
            : baseRadius * 0.35; // Normal radius on larger screens

        return service.children.map((_, childIndex) => {
          const childCount = service.children?.length || 1;
          // Distribute children evenly in a circle
          const angle =
            ((childIndex * (360 / childCount) + rotation) * Math.PI) / 180;
          return {
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
          };
        });
      });
      setChildPositions(newPositions);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, [services, rotation]);

  // Generate colors
  const getColor = (index: number) => {
    const colors = [
      "bg-blue-100",
      "bg-indigo-100",
      "bg-purple-100",
      "bg-pink-100",
      "bg-orange-100",
      "bg-teal-100",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="max-w-5xl mx-auto px-4" dir="rtl">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-900">خدمات ما</h2>
        <p className="text-gray-600 text-sm mt-2">
          خدماتی که تیم ما به کسب و کار شما اضافه خواهد کرد
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              containerRefs.current[index] = el;
            }}
            className={`relative h-64 sm:h-72 rounded-lg ${getColor(
              index
            )} overflow-hidden`}
          >
            {/* Main circle */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-14 h-14 rounded-full bg-white shadow-sm flex items-center 
                       justify-center border border-gray-100 z-20"
            >
              <h3 className="text-sm font-medium text-center text-gray-800 px-2">
                {service.name}
              </h3>
            </div>

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {childPositions[index]?.map((pos, childIndex) => (
                <line
                  key={childIndex}
                  x1="50%"
                  y1="50%"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="rgba(0,0,0,0.1)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
              ))}
            </svg>

            {/* Child items */}
            {childPositions[index]?.map((pos, childIndex) => (
              <motion.div
                key={childIndex}
                className="absolute z-30"
                style={{
                  left: pos.x - 50,
                  top: pos.y - 20,
                }}
                animate={{
                  x: [0, 2, 0, -2, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 5,
                    delay: childIndex * 0.5,
                  },
                }}
              >
                <Link
                  href={service.children![childIndex].href}
                  className="block"
                >
                  <div className="w-[100px] bg-white rounded-md p-2 shadow-sm hover:shadow text-xs text-center">
                    {service.children![childIndex].name}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
