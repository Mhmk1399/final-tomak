import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
}

const Testimonials = () => {
  const [, setTestimonials] = useState<Testimonial[]>([]);

  const testimonialRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setTestimonials(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);
  useEffect(() => {
    const options = {
      threshold: 0.5, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const animationClass =
            index % 2 === 0 ? "fade-in-top" : "fade-in-bottom";
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target); // Stop observing after animation is applied
        }
      });
    }, options);

    testimonialRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      testimonialRefs.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const testimonialsArray = [
    {
      quote:
        "تیم پروژه ما را به موقع تحویل داد و فراتر از انتظارات ما بود. بسیار توصیه می شود!",
      name: "کاربر 1",
      image: "/assets/images/profile.webp",
    },
    {
      quote:
        "کیفیت فوق العاده و ارتباط عالی در طول پروژه. ممتاز! همه چی عالی بود",
      name: "کاربر 2",
      image: "/assets/images/profile.webp",
    },
    {
      quote:
        "کیفیت فوق العاده و ارتباط عالی در طول پروژه. ممتاز! همه چی عالی بود",
      name: "کاربر 3",
      image: "/assets/images/profile.webp",
    },
    {
      quote:
        "تیم پروژه ما را به موقع تحویل داد و فراتر از انتظارات ما بود. بسیار توصیه می شود!",
      name: "کاربر 3",
      image: "/assets/images/profile.webp",
    },
    {
      quote:
        "تیم پروژه ما را به موقع تحویل داد و فراتر از انتظارات ما بود. بسیار توصیه می شود!",
      name: "کاربر 3",
      image: "/assets/images/profile.webp",
    },
    {
      quote:
        "تیم پروژه ما را به موقع تحویل داد و فراتر از انتظارات ما بود. بسیار توصیه می شود!",
      name: "کاربر 3",
      image: "/assets/images/profile.webp",
    },
  ];

  return (
    <section className="bg-gray-100 py-20" dir="rtl">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-primary">
          تجربه کاربران تومک
        </h3>
        <div className="flex flex-nowrap overflow-x-auto justify-center -mx-4">
          {testimonialsArray.map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8 flex-shrink-0"
              ref={(el) => {
                if (el) {
                  testimonialRefs.current[index] = el;
                }
              }}
            >
              <div className="bg-gradient-to-b from-secondary to-primary text-center p-8 rounded-3xl shadow-lg flex flex-col items-center justify-between transform transition duration-500 ease-in-out hover:scale-90 hover:shadow-2xl">
                <Image
                  src={testimonial.image}
                  width={80}
                  height={80}
                  alt="avatar"
                  className="rounded-full mx-auto mb-6 border-4 border-white transition-transform transform hover:scale-110"
                />
                <p className="text-white mb-4 text-justify italic">{`"${testimonial.quote}"`}</p>
                <h5 className="text-lg font-semibold text-gray-400 mb-2">{`- ${testimonial.name}`}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
