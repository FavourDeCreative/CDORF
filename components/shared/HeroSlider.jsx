"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const slides = [
  {
    title: "CDORF Autos",
    subtitle: "Find premium vehicles across Nigeria",
    button: "Explore Autos",
    href: "/autos",
    image:
      "/cdorf.jpg",
    tag: "500+ Cars Available",
  },

  {
    title: "CDORF Properties",
    subtitle: "Luxury homes and investment properties",
    button: "Explore Properties",
    href: "/properties",
    image:
      "/house.jpg",
    tag: "300+ Properties Available",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      {
        scale: 1.1,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
      },
    ).fromTo(
      contentRef.current.children,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.8",
    );
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section
      ref={heroRef}
      className="
        relative
        h-screen
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="
          absolute
          inset-0
          bg-cover
          bg-center image
        "
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/70
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          items-center
          px-6
          md:px-16
        "
      >
        <div
          ref={contentRef}
          className="
            max-w-3xl
          "
        >
          {/* Tag */}
          <span
            className="
              inline-block
              mb-6
              rounded-full
              border
              px-4
              py-2
              text-sm txt 
            "
          >
            {slide.tag}
          </span>

          {/* Title */}
          <h1
            className="
              text-5xl
              md:text-8xl
              font-black
              leading-none title
            "
          >
            {slide.title}
          </h1>
          <h2 className="text-3xl span">{slide.span}</h2>
          {/* Subtitle */}
          <p
            className="
              mt-6
              max-w-xl
              text-lg
              md:text-xl txt
            "
          >
            {slide.subtitle}
          </p>

          {/* Buttons */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >
            <Link
              href={slide.href}
              className="
                px-8
                py-4
                transition bn
              "
            >
              {slide.button}
            </Link>

            <Link
              href="#contact"
              className="
                px-8
                py-4
                transition ct
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div
        className="
          absolute
          bottom-8
          left-6
          z-20
          flex
          gap-3
          md:left-16
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-[3px]
              transition-all
              duration-500

              ${current === index ? "w-12 bg-white" : "w-5 bg-white/40"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
