"use client";
import Pedronomics from "@/components/pedronomics";
import Typical from "react-typical";
import Roadmap from "@/components/road-map";
import MarqueegBanner from "@/components/marquee-banner";
import "./../app/globals.css";
import WhyPedroCoin from "@/components/why-pedro";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import TokenDistribution from "@/components/token-distribution";
import Footer from "@/components/Footer";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: { opacity: 1 },
    animate: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="main-bg min-h-screen bg-gradient-to-b ">
      <div className="mx-auto" style={{ overflow: "hidden" }}>
        <div className="hero-bg h-[85vh]">
          <Header />
          <motion.div
            className="main-text text-center max-w-6xl mx-auto mt-20 mb-32"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <h1 className="banner-text text-4xl md:text-7xl font-title font-[family-name:var(--font-pixelify-sans)] text-white mb-6">
              <Typical
                steps={[
                  "Building the Future of Memes & Tokens with the Awkward Look",
                  2000,
                ]}
                loop={1}
                wrapper="span"
              />
            </h1>

            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              {...fadeInUp}
            >
              Where r and dssdsd unite on the Solana blockchain—join the
              community-driven revolution blending internet culture with
              cutting-edge crypto utility.
            </motion.p>

            <motion.div {...fadeInUp}>
              <button className="join-community bg-[#4A1D1D] text-[#D38A59] hover:bg-[#3A1515] px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-[100px] border border-[#D38A59]">
                JOIN THE COMMUNITY
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative bg-[#fff]">
          <div className="transform rotate-6 pt-12">
            <MarqueegBanner />
          </div>
          <div
            id="about"
            className="max-w-[1440px] flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 mx-auto"
          >
            <div className="tale-of-perdro-wrapper text-center md:text-left max-w-xl">
              <h2 className=" text-3xl md:text-5xl font-bold text-[#4A1D1D] mb-6 font-[family-name:var(--font-pixelify-sans)] ">
                THE TALE OF PEDRO WHERE MEMES MEET BLOCKCHAIN
              </h2>
              <p className="text-[#7F1911] text-lg leading-8 font-light font-[family-name:var(--font-manrope)] ">
                PedroCoin isn't just another cryptocurrency—it's a movement!
                Built on the Solana blockchain, PedroCoin merges the universal
                language of memes with groundbreaking blockchain technology. Our
                mission is to make crypto accessible, fun, and impactful for
                everyone, from seasoned investors to meme lovers.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://i.giphy.com/H5C8CevNMbpBqNqFjl.webp"
                alt="Pedro Meme"
                width={500}
                height={500}
                className="rounded-full aspect-square w-[300px] md:w-[400px] lg:w-[500px]"
              />
            </div>
          </div>
        </div>
        <WhyPedroCoin />
        <div id="tokenomics" className="pedronomics-container">
          <Pedronomics />
          <div className="relative flex items-end justify-center gap-[2rem]">
            <TokenDistribution />
          </div>
        </div>
        <Roadmap />
        <div>
          <MarqueegBanner />
        </div>
        <Footer />
      </div>
    </main>
  );
}
