import React, { useState } from "react";
import Image from "next/image";

// Define an interface for the video data
interface VideoTestimonial {
  id: number;
  videoUrl: string;
  thumbnailUrl: string;
  logoUrl: string;
  customerName: string;
}

const VideoTestimonials: React.FC = () => {
  // Sample data - you can replace this with your actual customer testimonial data
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
      customerName: "شرکت ب",
    },
    {
      id: 4,
      videoUrl: "/assets/images/testi.mp4",
      thumbnailUrl: "/assets/images/human.jpeg",
      logoUrl: "/assets/images/logo.png",
      customerName: "شرکت ب",
    },
  ];

  // State to manage which video is currently playing
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">
        مشتریان وفادار ما
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative group w-72 h-96 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Video/Thumbnail Container */}
            <div
              className="relative w-full h-full cursor-pointer"
              onMouseEnter={() => setPlayingVideoId(testimonial.id)}
              onMouseLeave={() => setPlayingVideoId(null)}
            >
              {playingVideoId === testimonial.id ? (
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
                  width={300}
                  height={300}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              )}
            </div>

            {/* Logo Section */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/60 p-4 flex justify-center items-center transition-transform duration-300 group-hover:translate-y-0 translate-y-full">
              <Image
                src={testimonial.logoUrl}
                alt={`${testimonial.customerName} لوگو`}
                width={80}
                height={40}
                // objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoTestimonials;
