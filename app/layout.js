import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Head from "next/head";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification (ONLY use if you have meta version) */}
        <meta
          name="google-site-verification"
          content="google-site-verification=bmbjNPH4QWLzy5YjUzgWLtkDnpl1V4x0ZVW99EgBLoQ"
        />
      </head>

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

<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a0b578c0a71ec1c34c486d2/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
      </body>
    </html>
  );
}
