"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef(null);

  const [loading, setLoading] = useState(false);

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

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#071120] px-6 py-32 text-white"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto mb-24 max-w-4xl text-center">
          <div className="fade-up mb-8 flex justify-center">
            <div className="bg-white/5 px-8 py-3 text-base uppercase tracking-[0.35em] text-blue-300 backdrop-blur-xl">
              Contact Us
            </div>
          </div>

          <h2 className="fade-up text-5xl font-semibold md:text-7xl">
            Let’s Create Something
            <span className="block text-blue-400">Exceptional Together</span>
          </h2>

          <p className="fade-up mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            Whether you're looking to buy premium vehicles or luxury properties,
            we`re ready to help you.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="fade-up rounded-[32px] border border-white/10 bg-white/5 p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Phone
                  </p>
                  <h3 className="text-2xl">+234 000 000 0000</h3>
                </div>
              </div>
            </div>

            <div className="fade-up rounded-[32px] border border-white/10 bg-white/5 p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Email
                  </p>
                  <h3 className="text-2xl">hello@cdorf.ng</h3>
                </div>
              </div>
            </div>

            <div className="fade-up rounded-[32px] border border-white/10 bg-white/5 p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Location
                  </p>
                  <h3 className="text-2xl">Lagos, Nigeria</h3>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="fade-up rounded-[36px] border border-white/10 bg-white/5 p-10">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full border border-white/10 bg-black/20 px-6 py-5 outline-none focus:border-blue-400"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full border border-white/10 bg-black/20 px-6 py-5 outline-none focus:border-blue-400"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                className="w-full resize-none border border-white/10 bg-black/20 px-6 py-5 outline-none focus:border-blue-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="group flex items-center gap-4 bg-blue-500 px-8 py-5 uppercase tracking-[0.2em] transition hover:scale-105"
              >
                {loading ? "Sending..." : "Send Message"}

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
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
