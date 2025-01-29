"use client";

import { Pixelify_Sans, Manrope } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner"; // Make sure you have this import

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate the loader for 3-5 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000 milliseconds (3 seconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${pixelifySans.variable} ${manrope.variable} antialiased`}
      >
        {/* Custom Cursor - Hidden on smaller screens */}
        <div className="hidden lg:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            color="139, 69, 19" // RGB for SaddleBrown
            outerAlpha={0.3}
            innerScale={1}
            outerScale={2.5}
            clickables={["a", "button", ".hoverable"]}
          />
        </div>

        {/* Show spinner with blurred background for 3-5 seconds */}
        {loading && (
          <div className="fixed inset-0 flex justify-center items-center bg-transparent bg-opacity-50 backdrop-blur-lg z-50">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}

        {/* Once loading is complete, show the main website content */}
        {!loading && <ReactLenis root>{children}</ReactLenis>}
      </body>
    </html>
  );
}
