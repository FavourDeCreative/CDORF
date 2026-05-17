"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const properties = [
  "/property1.jpg",
  "/property2.jpg",
  "/property3.jpg",
  "/property4.jpg",
  "/property5.jpg",
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.querySelectorAll(".fade-up"),
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      },
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full w-full"
      >
        {properties.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              {/* IMAGE */}
              <Image
                src={img}
                alt={`Property ${index + 1}`}
                fill
                priority
                className="object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-3xl">
                    <div className="fade-up mb-6 inline-flex px-5 py-3 uppercase tracking-[0.3em]">
                      CDORF PROPERTIES
                    </div>

                    <h1 className="fade-up text-3xl font-semibold leading-tight md:text-7xl">
                      Discover Premium
                      <span className="block text-yellow-400 text-5xl">
                        Properties in Nigeria
                      </span>
                    </h1>

                    <p className="fade-up mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
                      Explore luxury apartments, modern houses, and prime real
                      estate listings built for comfort and value.
                    </p>

                    <div className="fade-up mt-10 flex flex-wrap gap-5">
                      <Link
                        href="#properties"
                        className="px-8 py-4 transition bn"
                      >
                        Explore properties
                      </Link>

                      <Link href="#contact" className="px-8 py-4 transition ct">
                        contact us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
