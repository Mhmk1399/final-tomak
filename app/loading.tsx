"use client";
import { useEffect, useState } from "react";

const Loading = () => {
  const [falling, setFalling] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFalling((prev) => (prev + 2) % 120); // controls falling dot motion
    }, 16); // 60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white h-screen overflow-hidden">
      <div className="fixed z-[5000] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-28 h-28">
          {/* SVG Circle with Rotation */}
          <div className="absolute inset-0 animate-spin-slower">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="#0045E6"
                strokeWidth="4"
                strokeDasharray="270 90"
                strokeLinecap="round"
              />

              {/* Two fixed dots at end/start of dash */}
              <circle cx="85" cy="50" r="4" fill="#0045E6" />
              <circle cx="80.5" cy="60" r="4" fill="#0045E6" />
            </svg>
          </div>

          {/* Center T */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[#0045E6] font-black text-4xl">T</div>
          </div>

          {/* Falling dots */}
          {falling < 100 && (
            <div
              className="absolute left-[calc(50%+42px)]"
              style={{
                top: `${falling}%`,
                opacity: falling > 30 ? (100 - falling) / 70 : 0,
              }}
            >
              <div className="w-2.5 h-2.5 bg-[#0045E6] rounded-full"></div>
            </div>
          )}
          {falling > 10 && falling < 110 && (
            <div
              className="absolute left-[calc(50%+38px)]"
              style={{
                top: `${falling - 10}%`,
                opacity: falling > 40 ? (100 - falling + 10) / 70 : 0,
              }}
            >
              <div className="w-2.5 h-2.5 bg-[#0045E6] rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loading;
