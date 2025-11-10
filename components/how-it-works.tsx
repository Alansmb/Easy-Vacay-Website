import Image from "next/image";
export function HowItWorks() {
  return (
    <div
      className=" py-16 pt-0 md:pt-16 md:py-24 px-6 text-center md:text-left xl:px-20"
      id="how-it-works"
    >
      <div className="max-w-6xl ">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-40">
          {/* Step 1: Post Your Trip */}
          <div className="flex flex-col items-center md:items-start gap-3 justify-center">
            <div className="relative  shrink-0">
              <Image
                src="/suit-case.gif"
                alt="Post Your Trip"
                width={100}
                height={100}
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
                Post Your Trip
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-center md:text-left ">
                Share your travel plan and invite others to join.
              </p>
            </div>
          </div>

          {/* Step 2: Pay Online */}
          <div className="flex flex-col items-center md:items-start gap-3 justify-center">
            <div className="relative   shrink-0">
              <Image
                src="/mobile.gif"
                alt="Pay Online"
                width={100}
                height={100}
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center md:text-left">
                Pay Online
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-center md:text-left">
                Book securely with quick and easy online payments.
              </p>
            </div>
          </div>

          {/* Step 3: Connect Instantly */}
          <div className="flex flex-col items-center md:items-start gap-3 justify-center">
            <div className="relative shrink-0">
              <Image
                src="/flight.gif"
                alt="Connect Instantly"
                width={100}
                height={100}
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center md:text-left">
                Connect Instantly
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-center md:text-left">
                Message and coordinate with travelers in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
