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
      }
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050B16] px-6 py-32 text-white"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* TOP */}
        <div className="mx-auto mb-24 max-w-4xl text-center">
          {/* <div className="fade-up mb-8 flex justify-center">
            <div className="abt bg-white/5 px-8 py-3 uppercase tracking-[0.35em] backdrop-blur-xl auto-contact">
              CDORF AUTOS
            </div>
          </div> */}

          <h2 className="fade-up text-3xl font-semibold leading-tight md:text-7xl">
            Find The Car You Want
            <span className="mt-2 block text-5xl accent">
              We’ll Source It For You
            </span>
          </h2>

          <p className="fade-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Tell us the exact car you’re looking for — brand, model, or budget.
            Our team will help you find, verify, and deliver it anywhere in
            Nigeria.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT INFO */}
          <div className="space-y-6">
            {/* PHONE */}
            <div className="fade-up rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] tc">
                    Call / WhatsApp
                  </p>

                  <h3 className="text-2xl font-medium">+234 7030 566 546</h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Fast responses for car requests & pricing
                  </p>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="fade-up rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-3xl tc">
                    Email Us
                  </p>

                  <h3 className="text-2xl font-medium">
                    tijanisaheed341@gmail.com
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Send car details or budget range
                  </p>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="fade-up rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-3xl tc">
                    Office
                  </p>

                  <h3 className="text-2xl font-medium">
                    No 15b, isheri holiday inn, grammar school ojodu berger
                    Lagos state
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Inspection & verification hub
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CTA FORM */}
          <div className="fade-up rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold accent">Request A Car</h3>

              <p className="mt-3 tc">
                Drop the details of the car you want and we’ll get back to you.
              </p>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Car Brand (e.g Toyota)"
                className="w-full border border-white/10 bg-black/20 px-6 py-5 text-white outline-none focus:border-blue-400"
              />

              <input
                type="text"
                placeholder="Model (e.g Camry 2019)"
                className="w-full border border-white/10 bg-black/20 px-6 py-5 text-white outline-none focus:border-blue-400"
              />

              <input
                type="text"
                placeholder="Budget Range (Optional)"
                className="w-full border border-white/10 bg-black/20 px-6 py-5 text-white outline-none focus:border-blue-400"
              />

              <textarea
                rows={5}
                placeholder="Any extra details..."
                className="w-full resize-none border border-white/10 bg-black/20 px-6 py-5 text-white outline-none focus:border-blue-400"
              />

              <button
                type="submit"
                className="group inline-flex items-center gap-4 ct px-8 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:scale-105 hover:bg-blue-400"
              >
                Send Request
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
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