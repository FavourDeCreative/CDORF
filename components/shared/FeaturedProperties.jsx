"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const featuredProperties = [
  {
    name: "Luxury Villa",
    image: "/houses/villa.jpg",
    location: "Lekki, Lagos",
    price: "₦450M",
  },
  {
    name: "Modern Duplex",
    image: "/houses/duplex.jpg",
    location: "Ikoyi, Lagos",
    price: "₦320M",
  },
  {
    name: "Penthouse Suite",
    image: "/houses/penthouse.jpg",
    location: "Victoria Island",
    price: "₦600M",
  },
  {
    name: "Serviced Apartment",
    image: "/houses/serviced.jpg",
    location: "Abuja",
    price: "₦180M",
  },
];

export default function FeaturedProperties() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black px-6 py-24 text-white"
      id="featured-properties"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <div className="fade-up mb-6 inline-flex px-6 py-3 uppercase tracking-[0.3em]">
            Featured Listings
          </div>

          <h2 className="fade-up text-4xl font-semibold md:text-6xl">
            Featured <span className="accent">Properties</span>
          </h2>

          <p className="fade-up mx-auto mt-6 max-w-2xl text-zinc-400">
            Explore handpicked luxury homes and premium real estate listings.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredProperties.map((property, i) => (
            <div
              key={i}
              className="fade-up group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black">
                  {property.price}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{property.name}</h3>

                <p className="mt-3 text-zinc-400">{property.location}</p>

                <button className="mt-6 w-full rounded-xl border border-white/10 px-5 py-4 text-sm uppercase tracking-[0.2em] transition hover:border-yellow-400 hover:text-yellow-400">
                  View Property
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA LINK */}
        <div className="mt-16 text-center fade-up">
          <Link
            href="/properties"
            className="inline-block rounded-full border border-yellow-400 px-8 py-4 text-sm uppercase tracking-[0.2em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Visit CDORF Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
