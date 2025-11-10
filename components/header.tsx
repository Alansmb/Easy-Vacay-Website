"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "#header", label: "Home" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleNav = (href: string) => {
    if (isHomePage) {
      // On home page, scroll to section and update URL hash
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        // Update URL hash without page reload
        window.history.pushState(null, "", window.location.pathname + href);

        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // On other pages, navigate to home page with hash
      router.push(`/${href}`);
    }
  };

  const getNavHref = (href: string) => {
    if (isHomePage) {
      return href;
    }
    return `/${href}`;
  };

  const handleDrawerNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    // Close drawer first
    setDrawerOpen(false);

    if (isHomePage) {
      // Wait for drawer animation to complete, then scroll and update URL
      setTimeout(() => {
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          // Update URL hash without page reload
          window.history.pushState(null, "", window.location.pathname + href);

          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    } else {
      // Navigate to home page with hash
      router.push(`/${href}`);
    }
  };

  return (
    <header className="w-full sticky md:relative top-0 left-0 right-0 z-50 bg-easy-vacay bg-fixed bg-no-repeat bg-cover bg-white">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 xl:px-80 py-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Easy Vacay Home"
        >
          <Image
            src="/logo.svg"
            alt="Easy Vacay"
            width={250}
            height={250}
            className="w-32 md:w-48 lg:w-56 xl:w-[250px] h-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) =>
            isHomePage ? (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="text-gray-900 font-medium hover:text-purple-600 transition cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                href={getNavHref(item.href)}
                className="text-gray-900 font-medium hover:text-purple-600 transition cursor-pointer"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
        <div className="md:hidden">
          <Drawer
            direction="left"
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
          >
            <DrawerTrigger aria-label="Open menu" className="text-gray-900">
              <Menu size={24} />
            </DrawerTrigger>
            <DrawerContent className="data-[vaul-drawer-direction=left]:w-80">
              <DrawerHeader className="border-b">
                <DrawerTitle>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.svg"
                      alt="Easy Vacay"
                      width={150}
                      height={150}
                      priority
                    />
                  </div>
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col p-4 gap-4">
                {navItems.map((item) =>
                  isHomePage ? (
                    <button
                      key={item.label}
                      onClick={(e) => handleDrawerNav(e, item.href)}
                      className="text-left text-gray-900 font-medium hover:text-purple-600 transition"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.label}
                      href={getNavHref(item.href)}
                      onClick={() => setDrawerOpen(false)}
                      className="text-left text-gray-900 font-medium hover:text-purple-600 transition"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
}

export default Header;
