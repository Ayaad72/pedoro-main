import { Twitter, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/pedro-logo.png";
import solana from "../public/solana.png";
import Marquee from "react-fast-marquee";
import ScrollToTop from "./scroll-top";

export default function Footer() {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Whitepaper", href: "#" },
  ];

  return (
    <footer className="relative bg-[#440C0A] overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="text-center mb-0">
          <h2 className="font-[family-name:var(--font-pixelify-sans)] text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            Join the Pedro Party
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg font-[family-name:var(--font-manrope)] px-4">
            Connect with meme lovers and crypto enthusiasts across the globe and
            be part of the awkward revolution
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-6 md:mt-8">
            <Link
              href="#"
              className="bg-white p-2 sm:p-3 rounded-full hover:bg-white/90 transition-colors"
            >
              <Send className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B1D1D]" />
            </Link>
            <Link
              href="#"
              className="bg-white p-2 sm:p-3 rounded-full hover:bg-white/90 transition-colors"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B1D1D]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="footer-marquee-text inset-0 overflow-hidden pointer-events-none mb-10 md:mb-20">
        <div className="font-[family-name:var(--font-pixelify-sans)] footer-marquee-text-inner bottom-32 w-full text-[10vw] md:text-[14vw] leading-none font-bold whitespace-nowrap">
          <Marquee gradient={false} speed={40} direction="right">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <span
                  key={index}
                  className="text-[#C1A28B] opacity-90 px-2 md:px-4"
                >
                  ere humor mee
                </span>
              ))}
          </Marquee>
          <Marquee gradient={false} speed={40}>
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <span
                  key={index}
                  className="text-[#41CE84] opacity-90 px-2 md:px-4"
                >
                  on on the Sola
                </span>
              ))}
          </Marquee>
        </div>
      </div>
      <ScrollToTop />
      {/* Bottom Bar */}
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
        <div className="container mx-auto px-2 sm:px-4 py-4 md:py-6 pb-0">
          <div className="border-b border-white/12 border-[#ffffff97] flex flex-col md:flex-row items-center justify-between gap-6 py-6 md:py-8">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Pedro Logo"
                width={50}
                height={50}
                className="rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
              />
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors text-xs sm:text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* Copyright */}
          <div className="copy-right-text flex flex-col sm:flex-row justify-center items-center text-[#fff] text-white/60 text-xs sm:text-sm md:text-md p-6 md:p-4 text-center gap-2">
            <span>© 2025 PedroCoin. Powered by Solana</span>
            <Image
              className="solana-img mx-2 block sm:hidden"
              width={16}
              height={12}
              src={solana}
              alt="solana"
            />
            <span className="hidden sm:inline">|</span>
            <span>Meme responsibly. This is not financial advice.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
