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

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
    );
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    gsap.to(mobileMenuRef.current, {
      x: isOpen ? "0%" : "100%",
      duration: 0.5,
      ease: "power4.out",
    });
  }, [isOpen]);

  return (
    <>
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
          h-screen w-[320px]
          bg-black text-white
          flex flex-col
          translate-x-full
          overflow-hidden
        "
        style={{ transform: "translateX(100%)" }}
      >
        {/* TOP */}
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

        {/* BOTTOM SOCIALS */}
        <div className="border-t border-white/10 p-6 shrink-0">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Follow Us
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="social-icon flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-yellow-400 hover:text-yellow-400 soc"
            >
              <FaFacebookF size={14} />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="social-icon flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-yellow-400 hover:text-yellow-400 soc"
            >
              <FaInstagram size={14} />
            </Link>

            <Link
              href="https://tiktok.com"
              target="_blank"
              className="social-icon flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-yellow-400 hover:text-yellow-400 soc"
            >
              <FaTiktok size={14} />
            </Link>

            <Link
              href="https://wa.me/2340000000000"
              target="_blank"
              className="social-icon flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-yellow-400 hover:text-yellow-400 soc"
            >
              <FaWhatsapp size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
