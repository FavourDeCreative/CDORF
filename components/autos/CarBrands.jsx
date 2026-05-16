"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const brands = [
  { name: "Toyota", logo: "/brands/toyota.png", car: "/cars/toyota.jpg" },
  { name: "Mercedes", logo: "/brands/benz.png", car: "/cars/benz.jpg" },
  { name: "BMW", logo: "/brands/bmw.png", car: "/cars/BMW.jpg" },
  { name: "Audi", logo: "/brands/audi.png", car: "/cars/audi.jpg" },
  { name: "Lexus", logo: "/brands/lexus.png", car: "/cars/lexus.jpg" },
  { name: "Honda", logo: "/brands/honda.png", car: "/cars/honda.jpg" },
  { name: "Ford", logo: "/brands/ford.png", car: "/cars/ford.jpg" },
  { name: "Hyundai", logo: "/brands/hyundai.png", car: "/cars/hyundai.jpg" },
  { name: "Porsche", logo: "/brands/porsche.png", car: "/cars/porsche.jpg" },
  {
    name: "Range Rover",
    logo: "/brands/range.png",
    car: "/cars/range.jpg",
  },
];

export default function Brands() {
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

  const handleEnter = (e) => {
    const img = e.currentTarget.querySelector(".car-img");
    const bg = e.currentTarget.querySelector(".bg-layer");

    gsap.to(bg, {
      opacity: 1,
      scale: 1.05,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.fromTo(
      img,
      { x: 80, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" },
    );
  };

  const handleLeave = (e) => {
    const img = e.currentTarget.querySelector(".car-img");
    const bg = e.currentTarget.querySelector(".bg-layer");

    gsap.to(bg, {
      opacity: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.inOut",
    });

    gsap.to(img, {
      x: 80,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
    });
  };

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
            Trusted Brands
          </div>

          <h2 className="fade-up text-4xl font-semibold md:text-6xl">
            Top Car <span className="accent">Brands</span>
          </h2>

          <p className="fade-up mx-auto mt-6 max-w-2xl text-zinc-400">
            Hover to preview premium vehicles from each brand.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {brands.map((brand, i) => (
            <div
              key={i}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className="fade-up group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition"
            >
              {/* BACKGROUND IMAGE */}
              <div className="bg-layer absolute inset-0 opacity-0 transition">
                <Image
                  src={brand.car}
                  alt={brand.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="relative h-14 w-14">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-300 group-hover:text-yellow-400">
                  {brand.name}
                </p>
              </div>

              {/* CAR PREVIEW */}
              <div className="car-img absolute right-0 top-1/2 h-24 w-40 -translate-y-1/2 opacity-0">
                <Image
                  src={brand.car}
                  alt={`${brand.name} car`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
