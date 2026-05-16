"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const brands = [
  { name: "Toyota", logo: "/images/brands/toyota.png", count: "24 Cars" },
  { name: "Lexus", logo: "/images/brands/lexus.png", count: "18 Cars" },
  {
    name: "Mercedes-Benz",
    logo: "/assets/images/benz.jpg",
    count: "21 Cars",
  },
  { name: "BMW", logo: "/images/brands/bmw.png", count: "15 Cars" },
  { name: "Honda", logo: "/images/brands/honda.png", count: "19 Cars" },
  { name: "Ford", logo: "/images/brands/ford.png", count: "12 Cars" },
  { name: "Chevrolet", logo: "/images/brands/chevrolet.png", count: "9 Cars" },
  { name: "Hyundai", logo: "/images/brands/hyundai.png", count: "11 Cars" },
  { name: "Kia", logo: "/images/brands/kia.png", count: "8 Cars" },
  { name: "Porsche", logo: "/images/brands/porsche.png", count: "6 Cars" },
  {
    name: "Land Rover",
    logo: "/images/brands/landrover.png",
    count: "10 Cars",
  },
  {
    name: "Rolls Royce",
    logo: "/images/brands/rollsroyce.png",
    count: "4 Cars",
  },
];

export default function AutosPage() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
    )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        gridRef.current?.children,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
        },
        "-=0.2",
      );
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Banner */}
      <div className="relative bg-[#0A0A0A] border-b border-white/10 py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_70%)]" />
        <p
          ref={subRef}
          className="text-[#C9A84C] font-poppins text-sm tracking-[0.3em] uppercase mb-4"
        >
          CDORF Autos
        </p>
        <h1
          ref={headingRef}
          className="font-playfair text-5xl md:text-7xl font-black text-white leading-tight"
        >
          Shop By Brand
        </h1>
        <p className="mt-4 text-white/40 font-poppins max-w-xl mx-auto">
          Browse our curated selection of vehicles from the world's most trusted
          manufacturers.
        </p>
      </div>

      {/* Brands Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {brands.map((brand) => (
            <Link
              href={`/autos/${brand.name.toLowerCase().replace(" ", "-")}`}
              key={brand.name}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-[#C9A84C]/40 transition-all duration-300 cursor-pointer"
            >
              {/* Logo */}
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain filter invert brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Brand Name */}
              <div className="text-center">
                <p className="text-white font-poppins font-semibold text-sm">
                  {brand.name}
                </p>
                <p className="text-white/30 font-poppins text-xs mt-1">
                  {brand.count}
                </p>
              </div>

              {/* Gold accent line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C9A84C] group-hover:w-1/2 transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
