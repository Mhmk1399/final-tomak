import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  childFeatures: string[];
  bgImage: string;
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
      featureRefs.current[selectedFeature].scrollIntoView({
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

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          {heading}
        </h1>
        <p className="text-gray-600 text-lg">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
            className="bg-white shadow-md
             hover:shadow-none transition-all duration-300 rounded-lg p-6 text-center cursor-pointer group relative"
            onClick={() => setSelectedFeature(index)}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h2>
            <p className="text-gray-600">{feature.description}</p>

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
          className="mt-12 relative rounded-xl p-8 overflow-hidden"
          dir="rtl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: features[selectedFeature].bgImage,
              filter: "blur(2px)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 tracking-wide">
              {features[selectedFeature].title}
            </h2>

            <ul className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-8">
              {features[selectedFeature].childFeatures.map(
                (childFeature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="backdrop-blur-sm bg-white/10 rounded-lg p-4 lg:p-6 
                     border border-white/20 hover:border-white/40 
                     transform hover:scale-105 transition-all duration-300
                     shadow-lg hover:shadow-xl"
                  >
                    <span className="text-white text-lg lg:text-xl font-medium block text-center">
                      {childFeature}
                    </span>
                  </motion.li>
                )
              )}
            </ul>

            <div className="text-center">
              <button
                onClick={handleReturn}
                className="group px-6 py-3 bg-white/10 hover:bg-white/20 
                   text-white font-medium rounded-full 
                   transition-all duration-300 ease-in-out
                   border border-white/30 hover:border-white/50
                   backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  بازگشت
                  <svg
                    className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
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
