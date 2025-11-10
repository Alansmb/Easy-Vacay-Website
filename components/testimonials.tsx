"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jeffrey McClarke",
    location: "San Jose, CA",
    text: "I love this app! I have been planning the annual family vacation for 14 years. I was so tired of chasing people down for payments. I felt like a bill collector.",
    avatar: "/avatar.png",
  },
  {
    id: 2,
    name: "Nailah Worthen",
    location: "Queens, NY",
    text: "Easy Vacay has completely transformed how we plan our group trips. The payment collection feature is a game-changer - no more awkward money conversations!",
    avatar: "/avatar.png",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    location: "Austin, TX",
    text: "The user interface is so intuitive and clean. Planning our company retreat was a breeze. Everyone could see the itinerary and make payments seamlessly.",
    avatar: "/avatar.png",
  },
  {
    id: 4,
    name: "Sarah Chen",
    location: "Seattle, WA",
    text: "As someone who organizes multiple trips a year, Easy Vacay has saved me countless hours. The trip management features are exactly what I needed.",
    avatar: "/avatar.png",
  },
  {
    id: 5,
    name: "David Rodriguez",
    location: "Miami, FL",
    text: "The real-time updates and messaging feature keeps everyone in the loop. Our group of 12 friends can now coordinate trips effortlessly.",
    avatar: "/avatar.png",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];
  const next = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <div className="flex flex-col md:flex-row md:gap-16 lg:gap-20 gap-4 px-6 md:px-0 col-span-2">
      <div className="relative w-full">
        {/* Container with stacked cards */}
        <div className="relative min-h-80 sm:min-h-96 md:min-h-[24rem] w-full">
          {/* Next (faded) card behind - only name and location */}
          <div
            className="absolute left-0 right-0 bottom-7 z-0 opacity-50 scale-95 pointer-events-none"
            // style={{
            //   transform: "translateY(calc(-50% + 3.5rem))",
            // }}
          >
            <div className="relative bg-white rounded-2xl shadow-lg ring-1 ring-black/5 p-4 sm:p-6 md:p-8">
              {/* Author info only */}
              <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                {next.text}
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  {next.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {next.location}
                </p>
              </div>
            </div>
          </div>

          {/* Current active card */}
          <div
            className="absolute left-0 right-0 top-1/2 z-10"
            style={{ transform: "translateY(-50%)" }}
          >
            <div className="relative bg-white rounded-2xl shadow-[0_24px_60px_-24px_rgba(16,24,40,0.35)] ring-1 ring-black/5 p-4 sm:p-6 md:p-8">
              {/* Avatar */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden ring-4 ring-white shadow-md z-20">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                {current.text}
              </p>

              {/* Author info */}
              <div className="mt-4 sm:mt-6">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  {current.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {current.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="self-center flex flex-row md:flex-col gap-4 md:gap-6 justify-center md:justify-start mt-4 md:mt-0">
        <button
          onClick={goToPrevious}
          className="text-[#BCB7C2] hover:text-[#3E2E4D] transition-colors duration-200 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={goToNext}
          className="text-[#3E2E4D] hover:text-[#DE149F] transition-colors duration-200 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>
    </div>
  );
}
