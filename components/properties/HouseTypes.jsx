"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const houses = [
  { name: "Luxury Villa", image: "/houses/villa.jpg" },
  { name: "Duplex", image: "/houses/duplex.jpg" },
  { name: "Penthouse", image: "/houses/penthouse.jpg" },
  { name: "Bungalow", image: "/houses/bungalow.jpg" },
  { name: "Mansion", image: "/houses/mansion.jpg" },
  { name: "Apartment", image: "/houses/apartment.jpg" },
  { name: "Townhouse", image: "/houses/townhouse.jpg" },
  { name: "Studio", image: "/houses/studio.jpg" },
  { name: "Mini Flat", image: "/houses/miniflat.jpg" },
  { name: "Serviced Apartment", image: "/houses/serviced.jpg" },
];

export default function Houses() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black px-6 py-24 text-white"
      id="brands"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <div className="fade-up mb-6 inline-flex px-6 py-3 uppercase tracking-[0.3em]">
            Featured Properties
          </div>

          <h2 className="fade-up text-4xl font-semibold md:text-6xl">
            Explore <span className="accent">Property Types</span>
          </h2>

          <p className="fade-up mx-auto mt-6 max-w-2xl text-zinc-400">
            Discover premium homes, apartments, and luxury real estate listings.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {houses.map((house, i) => (
            <div
              key={i}
              className="fade-up group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={house.image}
                  alt={house.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* TEXT */}
              <div className="p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-300 group-hover:text-yellow-400">
                  {house.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
