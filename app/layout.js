import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "CDORF.ng",
  description: "Buy and Sell Autos & Properties in Nigeria",

  verification: {
    google: "bmbjNPH4QWLzy5YjUzgWLtkDnpl1V4x0ZVW99EgBLoQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          ${playfair.variable}
          antialiased
        `}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}
