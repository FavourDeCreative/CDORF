"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!sectionRef.current) return;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_6wv8twu",
        "template_xum7r8p",
        formRef.current,
        "20c5K5pCz_Dj1Y_TS",
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#071120] px-4 py-24 text-white sm:px-6 md:py-32"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px] md:h-[500px] md:w-[500px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-24">
          <div className="fade-up mb-6 flex justify-center md:mb-8">
            <div className="px-5 py-3 text-sm uppercase tracking-[0.3em] text-blue-300 backdrop-blur-xl md:px-8 md:text-base">
              Contact Us
            </div>
          </div>

          <h2 className="fade-up text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl">
            Let's Create Something
            <span className="mt-2 block text-blue-400">
              Exceptional Together
            </span>
          </h2>

          <p className="fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:mt-8">
            Whether you're looking to buy premium vehicles or luxury properties,
            we&apos;re ready to help you.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* LEFT */}
          <div className="space-y-5 md:space-y-6">
            {/* PHONE */}
            <div className="fade-up rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6 md:rounded-[32px] md:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 md:h-16 md:w-16">
                  <Phone size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 sm:text-sm">
                    Phone
                  </p>

                  <h3 className="mt-2 break-words text-lg font-medium sm:text-xl md:text-2xl">
                    +234 703 056 6546
                  </h3>

                  <h3 className="break-words text-lg font-medium sm:text-xl md:text-2xl">
                    +234 810 932 0745
                  </h3>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="fade-up rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6 md:rounded-[32px] md:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 md:h-16 md:w-16">
                  <Mail size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 sm:text-sm">
                    Email
                  </p>

                  <h3 className="mt-2 break-all text-lg font-medium sm:text-xl md:text-2xl">
                    tijanisaheed341@gmail.com
                  </h3>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="fade-up rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6 md:rounded-[32px] md:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 md:h-16 md:w-16">
                  <MapPin size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 sm:text-sm">
                    Location
                  </p>

                  <h3 className="mt-2 text-lg leading-relaxed font-medium sm:text-xl md:text-2xl">
                    No 15b, Isheri Holiday Inn, Grammar School, Ojodu Berger,
                    Lagos State
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="fade-up rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-7 md:rounded-[36px] md:p-10">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-8"
            >
              <input
                name="from_name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm outline-none transition focus:border-blue-400 sm:px-6 sm:py-5 sm:text-base"
              />

              <input
                name="from_email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm outline-none transition focus:border-blue-400 sm:px-6 sm:py-5 sm:text-base"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                required
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm outline-none transition focus:border-blue-400 sm:px-6 sm:py-5 sm:text-base"
              />

              {/* STATUS */}
              {status === "success" && (
                <p className="text-sm font-medium text-green-400">
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-medium text-red-400">
                  ✗ Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-4 rounded-2xl bg-blue-500 px-6 py-4 text-xs uppercase tracking-[0.2em] transition hover:scale-[1.02] hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit sm:px-8 sm:py-5 sm:text-sm"
              >
                {loading ? "Sending..." : "Send Message"}

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black sm:h-10 sm:w-10">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
