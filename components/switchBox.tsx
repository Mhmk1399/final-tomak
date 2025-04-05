import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Feature {
  icon: React.ReactNode | string;
  title: string;
  description: string;
  childFeatures: {
    title: string;
    description: string;
    image: string;
  }[];
}
interface FeatureSectionProps {
  features: Feature[];
  heading: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  features,
  heading,
  description,
}) => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const handleReturn = () => {
    if (selectedFeature !== null && featureRefs.current[selectedFeature]) {
      featureRefs.current[selectedFeature]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setSelectedFeature(null);
    }
  };

  useEffect(() => {
    if (selectedFeature !== null && detailRef.current) {
      detailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [selectedFeature]);

  const handleNext = () => {
    if (selectedFeature !== null && selectedFeature < features.length - 1) {
      setSelectedFeature(selectedFeature + 1);
    } else {
      // Handle the case when we're at the last feature
      // This could be returning to the grid view or showing a completion message
      handleReturn();
    }
  };
  return (
    <div className="min-h-screen p-2 w-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-  lg:text-4xl font-bold text-gray-800 mb-4">
          {heading}
        </h1>
        <p className="text-gray-600 text-lg">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            ref={(el) => {
              featureRefs.current[index] = el;
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-md border border-[#93c5fd] 
             hover:shadow-none hover:border-none transition-all duration-300 rounded-lg p-6 text-center cursor-pointer group relative"
            onClick={() => setSelectedFeature(index)}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              {feature.title}
            </h2>

            {/* Added Arrow Icon */}
            <svg
              className="w-6 h-6 absolute rotate-180 left-4 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-blue-500 transform group-hover:-translate-x-2 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {selectedFeature !== null && (
        <motion.div
          ref={detailRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 relative rounded-md w-full p-8 overflow-hidden border border-[#3b82f680] "
          dir="rtl"
        >
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-base sm:text-base lg:text-4xl font-bold text-center text-black mb-8 tracking-wide">
              {features[selectedFeature].title}
            </h2>
            <div className="grid gap-8">
              {features[selectedFeature].childFeatures.map(
                (childFeature, index) => (
                  <motion.div
                    key={index}
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-8 items-center ${
                      index % 2 === 0 ? "" : "direction-rtl"
                    }`}
                  >
                    <div
                      className={`${index % 2 === 0 ? "order-1" : "order-2"}`}
                    >
                      <h2 className="text-2xl text-black font-bold mb-4">
                        {childFeature.title}
                      </h2>
                      <p className="text-gray-900">
                        {childFeature.description}
                      </p>
                    </div>
                    <div
                      className={`${
                        index % 2 === 0
                          ? "sm:order-2 order-1"
                          : "order-2 sm:order-1"
                      } `}
                    >
                      <Image
                        src={childFeature.image}
                        alt={childFeature.title}
                        width={500}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </motion.div>
                )
              )}
            </div>

            <div className="text-center mt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={handleReturn}
                className="group px-6 py-3 bg-blue-50 hover:bg-blue-600
     text-blue-600 hover:text-white font-medium rounded-lg
     transition-all duration-300 ease-in-out
     border border-blue-200 hover:border-blue-700
     shadow-sm hover:shadow
     flex items-center justify-center gap-2"
              >
                <span>بازگشت</span>
              </button>

              <button
                onClick={handleNext} // Changed from handleReturn to handleNext
                className="group px-6 py-3 bg-blue-50 hover:bg-blue-600
     text-blue-600 hover:text-white font-medium rounded-lg
     transition-all duration-300 ease-in-out
     border border-blue-200 hover:border-blue-700
     shadow-sm hover:shadow
     flex items-center justify-center gap-2"
              >
                <span>
                  {selectedFeature < features.length - 1
                    ? features[selectedFeature + 1].title
                    : "پایان"}
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FeatureSection;
