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
      className="relative overflow-hidden bg-[#050B16] px-4 py-24 text-white md:px-6 md:py-32"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px] md:h-[500px] md:w-[500px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* TOP */}
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-24">
          <h2 className="fade-up text-4xl font-semibold leading-tight md:text-7xl">
            Find The Car You Want
            <span className="mt-3 block text-3xl accent md:text-5xl">
              We’ll Source It For You
            </span>
          </h2>

          <p className="fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:mt-8 md:text-lg">
            Tell us the exact car you’re looking for — brand, model, or budget.
            Our team will help you find, verify, and deliver it anywhere in
            Nigeria.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT INFO */}
          <div className="space-y-5 md:space-y-6">
            {/* PHONE */}
            <div className="fade-up rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl md:rounded-[32px] md:p-8">
              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white md:h-16 md:w-16">
                  <Phone size={22} />
                </div>

                <div className="min-w-0">
                  <p className="tc text-xs uppercase tracking-[0.2em] md:text-sm">
                    Call / WhatsApp
                  </p>

                  <h3 className="mt-2 break-words text-lg font-medium md:text-2xl">
                    +234 7030 566 546
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Fast responses for car requests & pricing
                  </p>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="fade-up rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl md:rounded-[32px] md:p-8">
              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white md:h-16 md:w-16">
                  <Mail size={22} />
                </div>

                <div className="min-w-0">
                  <p className="tc text-xs uppercase tracking-[0.2em] md:text-sm">
                    Email Us
                  </p>

                  <h3 className="mt-2 break-words text-lg font-medium md:text-2xl">
                    tijanisaheed341@gmail.com
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Send car details or budget range
                  </p>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="fade-up rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl md:rounded-[32px] md:p-8">
              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white md:h-16 md:w-16">
                  <MapPin size={22} />
                </div>

                <div className="min-w-0">
                  <p className="tc text-xs uppercase tracking-[0.2em] md:text-sm">
                    Office
                  </p>

                  <h3 className="mt-2 text-lg font-medium leading-relaxed md:text-2xl">
                    No 15b, Isheri Holiday Inn, Grammar School, Ojodu Berger,
                    Lagos State
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Inspection & verification hub
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CTA FORM */}
          <div className="fade-up rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:rounded-[36px] md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold accent md:text-3xl">
                Request A Car
              </h3>

              <p className="tc mt-3 text-sm md:text-base">
                Drop the details of the car you want and we’ll get back to you.
              </p>
            </div>

            <form className="space-y-5 md:space-y-6">
              <input
                type="text"
                placeholder="Car Brand (e.g Toyota)"
                className="w-full border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none focus:border-blue-400 md:px-6 md:py-5 md:text-base"
              />

              <input
                type="text"
                placeholder="Model (e.g Camry 2019)"
                className="w-full border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none focus:border-blue-400 md:px-6 md:py-5 md:text-base"
              />

              <input
                type="text"
                placeholder="Budget Range (Optional)"
                className="w-full border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none focus:border-blue-400 md:px-6 md:py-5 md:text-base"
              />

              <textarea
                rows={5}
                placeholder="Any extra details..."
                className="w-full resize-none border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none focus:border-blue-400 md:px-6 md:py-5 md:text-base"
              />

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-4 ct px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:scale-105 hover:bg-blue-400 md:w-auto md:px-8 md:py-5 md:text-sm"
              >
                Send Request
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black md:h-10 md:w-10">
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
