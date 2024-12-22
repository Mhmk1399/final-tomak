import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface VideoTestimonial {
  id: number;
  videoUrl: string;
  thumbnailUrl: string;
  logoUrl: string;
  customerName: string;
}

const VideoTestimonials: React.FC = () => {
  const testimonials: VideoTestimonial[] = [
    {
      id: 1,
      videoUrl: "/assets/images/testi.mp4",
      thumbnailUrl: "/assets/images/human.jpeg",
      logoUrl: "/assets/images/logo.png",
      customerName: "شرکت الف",
    },
    {
      id: 2,
      videoUrl: "/assets/images/testi.mp4",
      thumbnailUrl: "/assets/images/human.jpeg",
      logoUrl: "/assets/images/logo.png",
      customerName: "شرکت ب",
    },
    {
      id: 3,
      videoUrl: "/assets/images/testi.mp4",
      thumbnailUrl: "/assets/images/human.jpeg",
      logoUrl: "/assets/images/logo.png",
      customerName: "شرکت ج",
    },
    {
      id: 4,
      videoUrl: "/assets/images/testi.mp4",
      thumbnailUrl: "/assets/images/human.jpeg",
      logoUrl: "/assets/images/logo.png",
      customerName: "شرکت د",
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">
        مشتریان وفادار ما
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="relative overflow-hidden rounded-lg shadow-lg"
            animate={{
              width: hoveredId === testimonial.id ? "400px" : "280px",
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            onHoverStart={() => setHoveredId(testimonial.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <div className="relative w-full h-96 cursor-pointer overflow-hidden">
              {hoveredId === testimonial.id ? (
                <video
                  src={testimonial.videoUrl}
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={testimonial.thumbnailUrl}
                  alt={testimonial.customerName}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-white/60 p-4 flex justify-center items-center">
              <Image
                src={testimonial.logoUrl}
                alt={`${testimonial.customerName} لوگو`}
                width={80}
                height={40}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoTestimonials;
