import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Script from "next/script";

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
    google: "w4uOGvd6-79n2_TbcYfHr38qmItjH-M5fMFfzDhvSUk",
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MPLS2G4LYR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-MPLS2G4LYR');
          `}
        </Script>

        {/* Adsterra Ads */}
        <Script
          src="https://pl29530214.effectivecpmnetwork.com/2e/8e/ce/2e8ece65bdcc16628dcf5741a3ed2b7a.js"
          strategy="afterInteractive"
        />

        {/* Tawk.to Live Chat */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {},
                Tawk_LoadStart = new Date();

            (function () {
              var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];

              s1.async = true;
              s1.src = "https://embed.tawk.to/6a0b578c0a71ec1c34c486d2/default";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");

              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}