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
      className="about relative overflow-hidden px-6 py-32 text-white"
      id="about"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* TOP CONTENT */}
        <div className="abtc mx-auto mb-24 max-w-4xl text-center">
          {/* BADGE */}
          <div className="fade-up mb-8 flex justify-center">
            <div className="abt bg-white/5 px-5 py-3 uppercase tracking-[0.3em]">
              About CDORF<span>.ng</span>
            </div>
          </div>

          {/* HEADING */}
          <h2 className="fade-up text-4xl font-semibold leading-tight md:text-6xl">
            Fast & Reliable
            <span className="desc mt-2 block">
              Vehicle Documentation Services
            </span>
          </h2>

          {/* TEXT */}
          <p className="fade-up mx-auto mt-8 max-w-3xl text-base leading-relaxed md:text-lg">
            We help individuals and businesses process important vehicle
            documents quickly, securely, and without stress. From driver’s
            license processing to vehicle registration and ownership transfer,
            CDORF.NG provides trusted documentation support across Nigeria.
          </p>

          {/* BUTTON */}
          <div className="fade-up mt-10 flex justify-center">
            <Link
              href="#contact"
              className="ctl group inline-flex items-center gap-3 px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] transition hover:scale-[1.05]"
            >
              Contact Us Today
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="relative">
          {/* MAIN CARD */}
          <div className="fade-up relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            {/* TOP */}
            <div className="mb-14 flex flex-col items-center justify-center text-center">
              <div className="arr mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <ArrowUpRight size={26} />
              </div>

              <h3 className="title text-3xl font-semibold">
                Our Core Services
              </h3>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {/* CARD */}
              <div className="card rounded-2xl border border-white/10 p-6 transition duration-300 hover:scale-[1.05]">
                <h4 className="count mb-3 text-2xl font-bold">
                  Driver’s License
                </h4>

                <p className="txt text-sm leading-relaxed">
                  Processing, renewal, and update of driver’s licenses.
                </p>
              </div>

              {/* CARD */}
              <div className="card rounded-2xl border border-white/10 p-6 transition duration-300 hover:scale-[1.05]">
                <h4 className="count mb-3 text-2xl font-bold">
                  Ownership Transfer
                </h4>

                <p className="txt text-sm leading-relaxed">
                  Secure change of vehicle ownership and documentation.
                </p>
              </div>

              {/* CARD */}
              <div className="card rounded-2xl border border-white/10 p-6 transition duration-300 hover:scale-[1.05]">
                <h4 className="count mb-3 text-2xl font-bold">
                  New Registration
                </h4>

                <p className="txt text-sm leading-relaxed">
                  Vehicle registration and plate number processing services.
                </p>
              </div>

              {/* CARD */}
              <div className="card rounded-2xl border border-white/10 p-6 transition duration-300 hover:scale-[1.05]">
                <h4 className="count mb-3 text-2xl font-bold">
                  CMR & Tinted Permit
                </h4>

                <p className="txt text-sm leading-relaxed">
                  Fast processing for CMR papers and tinted glass permits.
                </p>
              </div>
            </div>
          </div>

          {/* FLOATING DECOR */}
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}