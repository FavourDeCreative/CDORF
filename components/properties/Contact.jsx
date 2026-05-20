"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function AutosContact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
      },
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050B16] px-4 sm:px-6 py-20 sm:py-32 text-white"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px] sm:blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* TOP */}
        <div className="mx-auto mb-16 sm:mb-24 max-w-4xl text-center">
          <h2 className="fade-up text-3xl sm:text-5xl md:text-7xl font-semibold leading-tight">
            What Kind Of House Are You Looking For
            <span className="mt-3 block text-2xl sm:text-4xl md:text-5xl accent">
              We’ll Source It For You
            </span>
          </h2>

          <p className="fade-up mx-auto mt-6 sm:mt-8 max-w-2xl text-sm sm:text-lg leading-relaxed text-zinc-400">
            Tell us the exact House you’re looking for...

            Our team will help you find and verify it anywhere in
            Nigeria.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* LEFT INFO */}
          <div className="space-y-5 sm:space-y-6">
            {/* PHONE */}
            <div className="fade-up rounded-[24px] sm:rounded-[32px] border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-2xl">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.25em] tc">
                    Call / WhatsApp
                  </p>

                  <h3 className="text-lg sm:text-2xl font-medium">
                    +234 7030 566 546
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                    Fast responses for car requests & pricing
                  </p>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="fade-up rounded-[24px] sm:rounded-[32px] border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-2xl">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.25em] tc">
                    Email Us
                  </p>

                  <h3 className="text-lg sm:text-2xl font-medium break-words">
                    tijanisaheed341@gmail.com
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                    Send car details or budget range
                  </p>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="fade-up rounded-[24px] sm:rounded-[32px] border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-2xl">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.25em] tc">
                    Office
                  </p>

                  <h3 className="text-lg sm:text-2xl font-medium leading-relaxed">
                    No 15b, Isheri Holiday Inn, Grammar School Ojodu Berger,
                    Lagos
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                    Inspection & verification hub
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="fade-up rounded-[28px] sm:rounded-[36px] border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-2xl">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-semibold accent">
                Request A Car
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                Drop the details of the house you want and we’ll get back to you.
              </p>
            </div>

            <form className="space-y-5 sm:space-y-6">
              <input
                type="text"
                placeholder="House Type  (e.g Bungalow)"
                className="w-full border border-white/10 bg-black/20 px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base text-white outline-none focus:border-blue-400"
              />

              <input
                type="text"
                placeholder="Kind  (e.g Room)"
                className="w-full border border-white/10 bg-black/20 px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base text-white outline-none focus:border-blue-400"
              />

              <input
                type="text"
                placeholder="Budget Range (Optional)"
                className="w-full border border-white/10 bg-black/20 px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base text-white outline-none focus:border-blue-400"
              />

              <textarea
                rows={5}
                placeholder="Any extra details..."
                className="w-full resize-none border border-white/10 bg-black/20 px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base text-white outline-none focus:border-blue-400"
              />

              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 ct px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:scale-105 hover:bg-blue-400"
              >
                Send Request
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-black">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
