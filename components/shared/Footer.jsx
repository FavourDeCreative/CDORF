import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-white mt-20 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold">CDORF<span className="text-yellow-400">.ng</span></h2>
          <p className="mt-2 text-green-200 text-sm">Nigeria's trusted marketplace for Autos and Properties.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-green-200 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/autos" className="hover:text-white">Autos</Link></li>
            <li><Link href="/properties" className="hover:text-white">Properties</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-green-200 text-sm">info@cdorf.ng</p>
          <p className="text-green-200 text-sm">Lagos, Nigeria</p>
        </div>
      </div>
      <div className="text-center text-green-400 text-xs mt-10">
        © {new Date().getFullYear()} CDORF.ng. All rights reserved.
      </div>
    </footer>
  );
}