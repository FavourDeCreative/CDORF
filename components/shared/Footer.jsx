import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black px-6 py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* LEFT */}
        <div className="max-w-sm">
          <h2 className="text-3xl font-bold">
            CDORF<span className="text-yellow-400">.ng</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Nigeria’s trusted digital marketplace for premium autos and luxury
            properties.
          </p>

          {/* SOCIALS */}
          <div className="mt-6 flex items-center gap-4">
            <Link
              href="https://www.facebook.com/share/1FvzRjTyzX/"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaFacebookF size={15} />
            </Link>

            <Link
              href="https://www.instagram.com/cdorfautos_31?igsh=NjEwMnRoejN0ZG15"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaInstagram size={16} />
            </Link>

            <Link
              href="https://www.tiktok.com/@cdorfautos_2022?_r=1&_t=ZS-96RFTvwKID3"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaTiktok size={15} />
            </Link>

            <Link
              href="https://wa.me/2347030566546"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              <FaWhatsapp size={17} />
            </Link>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-semibold uppercase tracking-[0.2em]">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-sm text-zinc-400">
            <Link href="/" className="transition hover:text-yellow-400">
              Home
            </Link>

            <Link href="/autos" className="transition hover:text-yellow-400">
              Autos
            </Link>

            <Link
              href="/properties"
              className="transition hover:text-yellow-400"
            >
              Properties
            </Link>

            <Link href="#about" className="transition hover:text-yellow-400">
              About
            </Link>

            <Link href="#contact" className="transition hover:text-yellow-400">
              Contact
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="max-w-sm">
          <h3 className="text-lg font-semibold uppercase tracking-[0.2em]">
            Contact
          </h3>

          <div className="mt-5 space-y-4 text-sm text-zinc-400">
            <p>info@cdorf.ng</p>

            <p>
              No 15b, Isheri Holiday Inn,
              <br />
              Grammar School, Ojodu Berger,
              <br />
              Lagos State, Nigeria
            </p>

            <p>+234 7030 566 546</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-zinc-500 md:flex-row">
        <p>© {new Date().getFullYear()} CDORF.ng. All rights reserved.</p>
      </div>
    </footer>
  );
}
