"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const SCREEN_IMAGES = [
  "/screen0.jpg",
  "/screen1.png",
  "/screen2.jpg",
  "/screen3.jpg",
  "/screen4.png",
  "/screen5.png",
  "/screen6.jpg",
];

const ROTATION_INTERVAL = 2000;

export function TravelHighlightSection() {
  const availableScreens = useMemo(() => SCREEN_IMAGES.filter(Boolean), []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (availableScreens.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % availableScreens.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [availableScreens.length]);

  const currentScreen = availableScreens[currentIndex] ?? SCREEN_IMAGES[0];

  return (
    <section className="px-6 md:px-12 lg:px-16 xl:px-24 lg:py-16  md:pt-16 lg:pt-36  bg-fixed">
      <div className="relative overflow-x-visible">
        {/* Gradient panel */}
        <div className="relative rounded-[40px] text-white py-16 sm:py-20 md:py-36 px-6 sm:px-16 md:px-24 lg:px-8 xl:px-24 bg-[linear-gradient(105.05deg,#DD149F_6.93%,#3200AA_97.93%)]">
          <div className="max-w-2xl space-y-4">
            <p className="uppercase tracking-wide text-sm font-semibold text-white/80">
              Travel Made Effortless
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Travel Made Effortless
            </h2>
            <p className="text-white/80 text-lg mt-3 max-w-md">
              Discover how every touchpoint in Easy Vacay is crafted to make
              your journey smoother and smarter.
            </p>
          </div>

          {/* Phone mockup (desktop) overlapping to the right */}
          <div
            className="hidden lg:block absolute right-16 xl:right-36 top-1/2 -translate-y-1/2  "
            style={{
              clipPath: "inset(0 0 67px 0)",
            }}
          >
            <div className="relative z-30 mx-auto aspect-9/19 w-[280px] rounded-[42px] bg-linear-to-b from-black/80 via-black to-black/90 p-3 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.75)]">
              <div className="absolute z-40 left-28 top-7 h-5 w-16 rounded-full bg-black" />
              {/* <div className="absolute z-20"> */}
              <div className="relative  h-full w-full rounded-[32px] bg-white">
                {availableScreens.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Easy Vacay app screen"
                    fill
                    className={`transition-opacity duration-700 ease-in-out rounded-4xl ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="280px"
                    priority={index === 0}
                  />
                ))}
              </div>
              {/* </div> */}
              <div className="absolute  inset-x-12 bottom-3 h-1 rounded-full bg-black/30" />
            </div>
          </div>
        </div>

        {/* Phone mockup (mobile) stacked below */}
        {/* <div className="mt-8 flex justify-center md:hidden">
          <div className="relative aspect-9/19 w-[240px] rounded-[42px] bg-linear-to-b from-black/80 via-black to-black/90 p-3 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.75)]">
            <div className="absolute left-1/2 top-3 h-3 w-16 -translate-x-1/2 rounded-full bg-black/60" />
            <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-white">
              {availableScreens.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt="Easy Vacay app screen"
                  fill
                  className={`object-cover transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="240px"
                  priority={index === 0}
                />
              ))}
            </div>
            <div className="absolute inset-x-12 bottom-3 h-1 rounded-full bg-black/30" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
