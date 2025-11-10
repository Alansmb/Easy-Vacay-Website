"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import * as React from "react";

const screens = [
  "/screen0.jpg",
  "/screen1.png",
  "/screen2.jpg",
  "/screen3.jpg",
  "/screen4.png",
  "/screen5.png",
  "/screen6.jpg",
];

export function ExploreCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const isHoveringRef = React.useRef(false);
  const items = React.useMemo(() => [...screens, ...screens], []);
  const [current, setCurrent] = React.useState(0);

  const startAutoplay = React.useCallback(() => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      if (isHoveringRef.current) return;
      api?.scrollNext();
    }, 3000);
  }, [api]);

  const stopAutoplay = React.useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // Update pagination on select
  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      const selected = api.selectedScrollSnap();
      setCurrent(selected % screens.length);
    };
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        isHoveringRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveringRef.current = false;
      }}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          dragFree: false,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((src, idx) => (
            <CarouselItem
              key={`${src}-${idx}`}
              className="pl-2 md:pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="relative w-full aspect-[9/19.5] overflow-hidden rounded-[28px] border border-[##C3DBE9]">
                <Image
                  src={src}
                  alt={`App screen ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                  priority={idx < 2}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination dots */}
      <div className="mt-8 flex items-center justify-center gap-2 ">
        {screens.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => api?.scrollTo(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${
              current === idx ? "bg-[#DE149F]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ExploreCarousel;
