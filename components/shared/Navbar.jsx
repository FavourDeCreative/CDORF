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

  // NAVBAR ENTRANCE
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
    );
  }, []);

  // MOBILE MENU
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    gsap.to(mobileMenuRef.current, {
      x: isOpen ? "0%" : "100%",
      duration: 0.5,
      ease: isOpen ? "power4.out" : "power3.inOut",
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
          {/* LOGO */}
          <Link href="/" className="logo relative z-50">
            CDORF <span>.ng</span>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-10">
            {/* DESKTOP LINKS */}
            <div className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="navlinks group relative text-[13px] uppercase tracking-[0.25em] transition"
                >
                  <span>{link.name}</span>

                  <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button onClick={() => setIsOpen(true)} className="nav md:hidden">
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="sidebar fixed top-0 right-0 z-[100] flex h-screen w-[320px] translate-x-full flex-col justify-between p-8 text-white"
      >
        {/* TOP */}
        <div>
          {/* CLOSE */}
          <div className="mb-14 flex justify-end">
            <button onClick={() => setIsOpen(false)} className="close">
              <X size={24} />
            </button>
          </div>

          {/* LINKS */}
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
        <div className="border-t border-white/10 pt-8 socials">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Follow Us
          </p>

          <div className="flex items-center gap-4">
            {/* FACEBOOK */}
            <Link
              href="https://facebook.com"
              target="_blank"
              className="social-icon flex h-12 w-12 items-center justify-center rounded-full border icon transition hover:border-yellow-400 hover:text-yellow-400"
          
          >
              <FaFacebookF size={16} />
            </Link>

            {/* INSTAGRAM */}
            <Link
              href="https://instagram.com"
              target="_blank"
              className="social-icon flex h-12 w-12 items-center justify-center rounded-full border icon transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaInstagram size={16} />
            </Link>

            {/* TIKTOK */}
            <Link
              href="https://tiktok.com"
              target="_blank"
              className="social-icon flex h-12 w-12 items-center justify-center rounded-full border icon transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaTiktok size={16} />
            </Link>

            {/* WHATSAPP */}
            <Link
              href="https://wa.me/2340000000000"
              target="_blank"
              className="social-icon flex h-12 w-12 items-center justify-center rounded-full border icon transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaWhatsapp size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
