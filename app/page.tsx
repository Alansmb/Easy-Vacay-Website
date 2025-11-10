import { ContactForm } from "@/components/contact-form";
import ExploreCarousel from "@/components/explore-carousel";
import { FeatureList } from "@/components/feature-list";
import { HowItWorks } from "@/components/how-it-works";
import { TravelHighlightSection } from "@/components/travel-highlight";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen " id="header">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:px-12 xl:px-20 py-6 lg:py-20 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 lg:col-span-2 px-6 md:px-0">
          <h2 className="text-4xl md:text-5xl  font-bold leading-tight text-wrap">
            Discover the <span className="text-[#DE149F]">Best </span>
            <br className="hidden lg:block" />
            <span className="text-[#DE149F]">Destinations</span> Around the
            World.
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            From snow-capped peaks to sunny beaches — your next adventure starts
            here. Explore, plan, and experience group vacations made simple with{" "}
            <span className="font-semibold">Easy Vacay</span>.
          </p>

          <div className="flex gap-2 xs:gap-4 w-full ">
            <Image
              src="/app-store.svg"
              alt="Easy Vacay"
              width={200}
              height={200}
              className="cursor-pointer w-1/2  md:w-60 h-auto"
            />
            <Image
              src="/play-store.svg"
              alt="Easy Vacay"
              width={200}
              height={200}
              className="cursor-pointer w-1/2  md:w-60 h-auto"
            />
          </div>
        </div>

        {/* Right Decorative Section */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[450px] lg:col-span-3 overflow-hidden md:overflow-visible flex mt-8  ">
          {/* Rotating Globe */}
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="relative xs:w-[500px] xs:h-[500px] md:w-[500px] md:h-[500px] ">
              <video
                src="/globe.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[300px] h-[300px] xs:w-[400px] xs:h-[400px] md:w-[510px] md:h-[510px] rounded-full object-cover"
              />
            </div>
          </div>

          {/* Girl on top of globe */}
          <div className="absolute inset-0 bottom-14 md:bottom-[131px] right-[24px] flex items-center  z-10">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/girl-on-top-glob.svg"
                alt="Girl with suitcase and passport"
                width={400}
                height={500}
                className="w-auto h-auto max-w-[280px] md:max-w-[550px] object-contain"
                priority
              />
            </div>
          </div>

          {/* Left Plane with Dotted Line */}
          <div className="absolute bottom-8 md:bottom-24 -left-20 md:-left-6 lg:left-5 lg:top-20  z-20  w-60 h-60">
            <div className="relative w-full h-full">
              <Image
                src="/left-plane.svg"
                alt="Airplane"
                width={40}
                height={40}
                className=" z-10 w-8 h-8 md:w-10 md:h-10 absolute -top-8 md:-top-10 left-[6.7rem]"
              />
              <Image
                src="/left-dotted-line.svg"
                alt="Dotted line"
                fill
                className="w-full h-full absolute top-0 left-0"
              />
            </div>
          </div>

          {/* Right Plane with Dotted Line */}
          <div className="absolute top-20 -right-32   md:top-8 md:right-0 z-20  w-60 h-60">
            <div className="relative w-full h-full">
              <Image
                src="/right-plane.svg"
                alt="Airplane"
                width={40}
                height={40}
                className="absolute -top-11 w-8 h-8 md:w-10 md:h-10"
              />
              <Image
                src="/right-dott-line.svg"
                alt="Dotted line"
                width={1200}
                height={1200}
                className="absolute bottom-4 right-0 w-60 h-60   "
              />
            </div>
          </div>

          {/* Location Pin 2 - Right Side */}
          {/* <div className="absolute hidden md:block top-1/2 right-8 md:right-12 translate-y-[-50%] z-20">
            <Image
              src="/location.svg"
              alt="Location pin"
              width={24}
              height={24}
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div> */}

          {/* Top Places Card - Lower Left */}
          <div className="absolute bottom-16 left-4 md:bottom-24 md:left-24 z-20">
            <div className="bg-white rounded-full shadow-xl px-4 py-3 md:px-5 md:py-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#FACD49] border fill-white  border-white bg-white" />
              <span className="text-gray-800 font-medium text-sm md:text-base">
                Top Places
              </span>
            </div>
          </div>

          {/* Top Hotels Card - Lower Right */}
          <div className="absolute bottom-[5.8rem] right-1 md:bottom-8 md:right-24 z-20">
            <div className="bg-white rounded-full shadow-xl px-4 py-3 md:px-5 md:py-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#FACD49] border fill-white  border-white bg-white" />
              <span className="text-gray-800 font-medium text-sm md:text-base">
                Top Hotels
              </span>
            </div>
          </div>

          {/* 5000+ Customers Card - Middle Right */}
          <div className="absolute top-1/3 right-1 md:right-8 translate-y-[-50%] z-20">
            <div className="bg-white rounded-xl shadow-lg flex items-center md:gap-2 py-2 md:py-4 pr-4">
              <Image
                src="/hotspot.svg"
                alt="Customers icon"
                width={20}
                height={20}
                className="w-14 h-14 "
              />

              <div className="flex flex-col items-center ">
                <span className="text-[#3200AA] font-bold text-xl md:text-2xl">
                  5000 +
                </span>
                <span className="text-gray-600 text-xs ">Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />

      {/* <div className="w-">      */}
      <div className="  relative  md:max-w-6xl h-80  lg:h-64 overflow-hidden mx-auto xl:rounded-3xl xl:mb-24">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-bottom object-cover"
        >
          <source src="/beach.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[#2E707780]/80 via-[#2E707780]/30 to-transparent"></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
          <div className="text-center max-w-2xl">
            <h3 className="text-3xl  font-bold text-white ">
              We are dedicated to making your journey of discovery truly
              unforgettable.
            </h3>
          </div>
        </div>
      </div>

      {/* App Features Section */}
      <div
        id="features"
        className="py-10 xl:px-8 lg:py-16 xl:py-12 xl:pt-8 bg-[linear-gradient(0deg,#F6FAFF_0%,rgba(246,250,255,0)_100%)]"
      >
        <div className="w-full max-w-none px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[#DE149F] font-bold text-sm  md:text-base ">
                  APP FEATURES
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl mt-5  font-bold text-gray-900   leading-[130%] ">
                  Crafting Unforgettable Adventures
                </h2>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                Turn your travel dreams into reality — discover, plan, and share
                journeys that inspire unforgettable memories.
              </p>

              {/* Feature Image (matched to Figma with soft ring, shadow, and subtle pink tint) */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-124 rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_24px_60px_-24px_rgba(16,24,40,0.45)]">
                <Image
                  src="/girl.jpg"
                  alt="Adventure backpacker on mountain"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                {/* Subtle top-left radial tint to emulate Figma lighting */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(222,20,159,0.18)_0%,transparent_60%)]" />
              </div>
            </div>

            {/* Right Content - Features */}
            <FeatureList />
          </div>
        </div>
      </div>
      {/* Explore the App - Carousel */}
      <section className=" pb-10 lg:py-14 xl:px-8">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-16">
          <h3 className="text-3xl text-center md:text-left md:text-5xl font-semibold mb-10 lg:mb-6">
            Explore the App
          </h3>
          <ExploreCarousel />
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative  md:px-12 lg:px-16 py-16 xl:py-24 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Side Heading */}
          <div className="col-span-1 px-6 md:px-0">
            <p className="text-[#DE149F] font-bold text-sm md:text-base mb-3">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 md:leading-tight">
              What People Say <br /> About Us.
            </h2>
          </div>
          {/* Right Side Testimonials */}
          <div className="flex gap-8 pl-8 md:pl-0 md:gap-16">
            <div className="relative">
              {/* Up/Down controls on right */}
              {/* Faded background card */}
              <div className="absolute left-6 md:-right-10 top-16 md:top-28 rounded-2xl ring-1 ring-black/5 bg-white/40 backdrop-blur-sm shadow-sm  flex flex-col justify-end p-6 w-full">
                <div>
                  <p className="text-gray-700 leading-relaxed ">
                    I love this app! I have been planning the annual family
                    vacation for 14 years. I was so tired of chasing people down
                    for payments. I felt like a bill collector.
                  </p>
                  <p className="font-semibold text-gray-900">Nailah Worthen</p>
                  <p className="text-sm text-gray-500">Queens, NY</p>
                </div>
              </div>

              {/* Foreground card with floating avatar */}
              <div className="relative bg-white rounded-2xl shadow-[0_24px_60px_-24px_rgba(16,24,40,0.35)] ring-1 ring-black/5 p-6 md:p-8">
                <div className="absolute -top-6 -left-6 h-14 w-14 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                  <Image
                    src="/avatar.png"
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed mt-2">
                  I love this app! I have been planning the annual family
                  vacation for 14 years. I was so tired of chasing people down
                  for payments. I felt like a bill collector.
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-gray-900">
                    Jeffrey McClarke
                  </p>
                  <p className="text-sm text-gray-500">San Jose, CA</p>
                </div>
              </div>
            </div>
            <div className="self-center flex flex-col gap-6 text-gray-500 pr-3 md:pr-0">
              <ChevronUp className="w-8 h-8 text-[#BCB7C2] font-thin" />
              <ChevronDown className="w-8 h-8 text-[#3E2E4D] font-thin" />
            </div>
          </div>
        </div>
      </section>

      <TravelHighlightSection />
      {/* Contact Us Section */}
      <section
        id="contact"
        className="px-6 md:px-12 lg:px-8 py-10 xl:py-10 xl:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 lg:gap-16 items-start">
          {/* Left Content - Text with Gradient Background */}
          <div className="relative rounded-3xl sm:p-8 pb-0 sm:pb-0 lg:p-12  ">
            <p className="text-[#DE149F] font-bold text-sm md:text-base mb-3 uppercase">
              CONTACT US
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Got a question or just planning your next adventure?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We'd love to hear from you! Send us a message and our travel team
              will get back to you soon.
            </p>
          </div>

          {/* Right Content - Contact Form */}
          <div className="sm:p-6 md:p-8 xl:w-4/5">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
