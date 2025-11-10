"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Only handle hash scrolling on home page
    if (pathname !== "/") return;

    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Wait for page to be fully rendered
      setTimeout(() => {
        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [pathname]);

  return null;
}

