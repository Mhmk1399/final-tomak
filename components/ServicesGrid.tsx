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
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Animation for rotation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.55) % 360);
    }, 40);

    return () => clearInterval(rotationInterval);
  }, []);

  // Calculate positions for child elements
  useEffect(() => {
    const calculatePositions = () => {
      const newPositions = services.map((service, i) => {
        const container = containerRefs.current[i];
        if (!container || !service.children) return [];

        const centerX = container.offsetWidth / 2;
        const centerY = container.offsetHeight / 2;

        // Responsive radius calculation
        const baseRadius = Math.min(
          container.offsetWidth,
          container.offsetHeight
        );
        const radius =
          window.innerWidth < 640
            ? baseRadius * 0.32
            : baseRadius * 0.38;

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

  // Generate border colors
  const getBorderColor = (index: number) => {
    const colors = [
      "border-blue-400",
      "border-indigo-400",
      "border-purple-400",
      "border-pink-400",
      "border-orange-400",
      "border-teal-400",
    ];
    return colors[index % colors.length];
  };

  // Generate accent colors for hover effects
  // const getAccentColor = (index: number) => {
  //   const colors = [
  //     "from-blue-50 to-transparent",
  //     "from-indigo-50 to-transparent",
  //     "from-purple-50 to-transparent",
  //     "from-pink-50 to-transparent",
  //     "from-orange-50 to-transparent",
  //     "from-teal-50 to-transparent",
  //   ];
  //   return colors[index % colors.length];
  // };

  return (
    <div className="max-w-5xl mx-auto px-4" dir="rtl">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900">خدمات ما</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          خدماتی که تیم ما به کسب و کار شما اضافه خواهد کرد
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            ref={(el) => {
              containerRefs.current[index] = el;
            }}
            className={`relative h-72 sm:h-80 rounded-xl border-2 ${getBorderColor(index)} 
                      overflow-hidden backdrop-blur-sm transition-all duration-300`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
           

            {/* Main circle */}
            <motion.div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-16 h-16 rounded-full bg-white shadow-md flex items-center 
                       justify-center border ${getBorderColor(index)} z-20`}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-sm font-medium text-center text-gray-800 px-2">
                {service.name}
              </h3>
            </motion.div>

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {childPositions[index]?.map((pos, childIndex) => (
                <motion.line
                  key={childIndex}
                  x1="50%"
                  y1="50%"
                  x2={pos.x}
                  y2={pos.y}
                  stroke={hoveredService === index ? `var(--${getBorderColor(index).split('-')[1]}-color, #a3a3a3)` : "rgba(0,0,0,0.1)"}
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 1,
                    transition: { duration: 1, delay: childIndex * 0.1 } 
                  }}
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: [0, 2, 0, -2, 0],
                  transition: {
                    x: {
                      repeat: Infinity,
                      duration: 5,
                      delay: childIndex * 0.5,
                    },
                    opacity: { duration: 0.3, delay: childIndex * 0.1 },
                    scale: { duration: 0.3, delay: childIndex * 0.1 }
                  },
                }}
              >
                <Link
                  href={service.children![childIndex].href}
                  className="block"
                >
                  <motion.div 
                    className={`w-[110px] bg-white rounded-lg p-3 shadow-sm border border-gray-100 
                              hover:shadow-md hover:border-${getBorderColor(index).split('-')[1]}-300 text-xs text-center`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {service.children![childIndex].name}
                  </motion.div>
                </Link>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-gray-200 opacity-50"></div>
            <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full border-2 border-gray-200 opacity-50"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
