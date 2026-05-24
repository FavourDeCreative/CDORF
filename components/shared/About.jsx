"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about relative overflow-hidden px-6 py-28 text-white"
      id="about"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* TOP CONTENT */}
        <div className="abtc mx-auto mb-24 max-w-4xl text-center">
          {/* BADGE */}
          <div className="fade-up mb-8 flex justify-center">
            <div className="abt rounded-full border border-white/10 bg-white/5 px-5 py-3 uppercase tracking-[0.3em] backdrop-blur-xl">
              About CDORF<span>.ng</span>
            </div>
          </div>

          {/* HEADING */}
          <h2 className="fade-up text-4xl font-semibold leading-tight md:text-6xl">
            Fast & Reliable
            <span className="desc mt-3 block">
              Vehicle Documentation Services
            </span>
          </h2>

          {/* TEXT */}
          <p className="fade-up mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            We help individuals and businesses process important vehicle
            documents quickly, securely, and without stress. From driver’s
            license processing to vehicle registration and ownership transfer,
            CDORF.NG provides trusted documentation support across Nigeria.
          </p>

          {/* BUTTON */}
          <div className="fade-up mt-10 flex justify-center">
            <Link
              href="#contact"
              className="ctl group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] backdrop-blur-xl transition duration-300 hover:scale-[1.05]"
            >
              Contact Us Today

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* SERVICE SECTION */}
        <div className="relative">
          {/* MAIN WRAPPER */}
          <div className="fade-up relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
            {/* TOP */}
            <div className="mb-14 flex flex-col items-center justify-center text-center">
              <div className="arr mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <ArrowUpRight size={26} />
              </div>

              <h3 className="title text-3xl font-semibold md:text-4xl">
                Our Core Services
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
                Professional vehicle documentation services designed to make
                your registration and permit processes simple and stress-free.
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {/* CARD */}
              <div className="card rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:scale-[1.05]">
                <h4 className="count mb-4 text-2xl font-bold">
                  Driver’s License
                </h4>

                <p className="txt text-sm leading-7 text-white/70">
                  Processing, renewal, and update of driver’s licenses for
                  individuals and businesses.
                </p>
              </div>

              {/* CARD */}
              <div className="card rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:scale-[1.05]">
                <h4 className="count mb-4 text-2xl font-bold">
                  Ownership Transfer
                </h4>

                <p className="txt text-sm leading-7 text-white/70">
                  Secure and reliable vehicle ownership transfer and change of
                  documents.
                </p>
              </div>

              {/* CARD */}
              <div className="card rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:scale-[1.05]">
                <h4 className="count mb-4 text-2xl font-bold">
                  New Registration
                </h4>

                <p className="txt text-sm leading-7 text-white/70">
                  Fast vehicle registration, plate number processing, and
                  document setup.
                </p>
              </div>

              {/* CARD */}
              <div className="card rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:scale-[1.05]">
                <h4 className="count mb-4 text-2xl font-bold">
                  CMR & Tinted Permit
                </h4>

                <p className="txt text-sm leading-7 text-white/70">
                  Assistance with CMR processing, tinted permit applications,
                  and renewals.
                </p>
              </div>
            </div>
          </div>

          {/* FLOATING DECOR */}
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}