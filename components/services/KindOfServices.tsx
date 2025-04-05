"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceItem {
  videosrc?: string;
  id: number;
  title: string;
  href: string;
  icon: string;
  description: string;
  gradient: string;
  details: string[];
}

interface KindOfServicesProps {
  servicesData: ServiceItem[];
  title?: string;
  subtitle?: string;
}

const KindOfServices: React.FC<KindOfServicesProps> = ({
  servicesData,
  title,
  subtitle,
}) => {
  return (
    <div className="py-16 px-4 " dir="rtl">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block border border-blue-200">
              {title}
            </span>
          </motion.div>
          
          {subtitle && (
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm border-2 border-blue-100 hover:border-blue-300 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute transform rotate-45 bg-blue-50 w-20 h-20 -translate-y-10 translate-x-10 border-b-2 border-blue-200"></div>
              </div>
              
              <Link href={service.href} className="block h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-5 relative z-10">
                    <div className="w-14 h-14 flex-shrink-0 mr-4 rounded-full bg-blue-50 p-2.5 border border-blue-100 group-hover:bg-blue-100 transition-colors duration-300">
                      <Image
                        src={service.icon}
                        width={40}
                        height={40}
                        alt={service.title}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 border-b-2 border-blue-100 pb-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>

                  {service.details.length > 0 && (
                    <ul className="text-gray-600 text-xs space-y-2 list-disc pr-5 mb-5 marker:text-blue-400">
                      {service.details.slice(0, 3).map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}

                  {service.videosrc && (
                    <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden mt-auto border border-blue-100">
                      <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={service.videosrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* View more link */}
                  <div className="mt-4 text-blue-500 text-xs font-medium flex items-center justify-end">
                    مشاهده بیشتر
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KindOfServices;
