"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Autos", href: "/autos" },
  { name: "Properties", href: "/properties" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
    );
  }, []);

  // LOCK SCROLL + ANIMATE SIDEBAR + OVERLAY
  useEffect(() => {
    if (!mobileMenuRef.current || !overlayRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";

      gsap.to(mobileMenuRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power4.out",
      });

      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });
    } else {
      document.body.style.overflow = "auto";

      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power4.inOut",
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* OVERLAY */}
      <div
        ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-[90] bg-black/60 opacity-0 pointer-events-none"
      />

      {/* NAVBAR */}
      <header
        ref={navbarRef}
        className="navbar fixed top-0 left-0 z-50 w-full bg-white"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="logo relative z-50">
            CDORF <span>.ng</span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="navlinks group relative text-[13px] uppercase tracking-[0.25em]"
              >
                <span>{link.name}</span>
                <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden nav">
            <Menu size={26} />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="
          sidebar fixed top-0 right-0 z-[100]
          h-[100dvh] w-[320px]
          bg-black text-white
          flex flex-col
          translate-x-full
        "
        style={{ transform: "translateX(100%)" }}
      >
        {/* TOP (SCROLL AREA) */}
        <div className="flex-1 overflow-y-auto p-8 pb-6">
          <div className="mb-14 flex justify-end">
            <button onClick={() => setIsOpen(false)} className="close">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="nav-link group flex items-center justify-between border-b border-white/10 pb-4 text-lg uppercase tracking-[0.2em] text-zinc-300 transition hover:text-white"
              >
                <span>{link.name}</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM SOCIALS (FIXED SAFE AREA) */}
        <div className="shrink-0 border-t border-white/10 p-6 pb-[calc(env(safe-area-inset-bottom)+24px)]">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Follow Us
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="https://www.facebook.com/share/18h1egmKUW/"
              target="_blank"
              rel="noopener noreferrer"
              className="soc flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaFacebookF size={14} />
            </Link>

            <Link
              href="https://www.instagram.com/cdorfautos_31?igsh=NjEwMnRoejN0ZG15"
              target="_blank"
              rel="noopener noreferrer"
              className="soc flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaInstagram size={14} />
            </Link>

            <Link
              href="https://www.tiktok.com/@cdorfautos_2022?_r=1&_t=ZS-96RUWvZJxya"
              target="_blank"
              rel="noopener noreferrer"
              className="soc flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaTiktok size={14} />
            </Link>

            <Link
              href="https://wa.me/+2347030566546"
              target="_blank"
              rel="noopener noreferrer"
              className="soc flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaWhatsapp size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
