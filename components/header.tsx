"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Drawer } from "vaul";

export const Header = function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container right-0 from-green-500 bg-transparent w-4/5 mx-auto pt-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className=" p-12 m-12">
              <img
                className="nav-logo"
                src="/pedro-logo.png"
                alt="Logo"
                height={100}
                width={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-[family-name:var(--font-manrope)] ">
            <Link
              href="/about"
              className="text-white hover:text-gray-200 relative group transition-colors duration-200 text-sm font-[700]"
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
            </Link>
            <Link
              href="/tokenomics"
              className="text-white hover:text-gray-200 relative group transition-colors duration-200 text-sm font-[700]"
            >
              <span>Tokenomics</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
            </Link>
            <Link
              href="/roadmap"
              className="text-white hover:text-gray-200 relative group transition-colors duration-200 text-sm font-[700]"
            >
              <span>Roadmap</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
            </Link>
            <button className="bg-white  text-[#7F1911] border border-[#7F1911] hover:bg-gray-100 transition-colors duration-200 text-sm font-[800] px-6 py-2 rounded-3xl">
              WHITE PAPER
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="hamburger-icon md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu drawer using Vaul */}
        <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
          <Drawer.Trigger asChild>
            <button style={{ display: "none" }}>Open Menu</button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 " />
            <Drawer.Content className="bg-[#7F1911] flex flex-col items-center rounded-t-[10px] h-full mt-24 fixed bottom-0 left-0 right-0">
              <div className="p-4 bg-[#7F1911] rounded-t-[10px] w-full">
                <Drawer.Title className="sr-only">
                  fsdfdsfdsfsd Menu
                </Drawer.Title>
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
                <div className="flex flex-col gap-4">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-lg font-medium text-white hover:text-gray-200 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/tokenomics"
                    className="block px-4 py-2 text-lg font-medium text-white hover:text-gray-200 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Tokenomics
                  </Link>
                  <Link
                    href="/roadmap"
                    className="block px-4 py-2 text-lg font-medium text-white hover:text-gray-200 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Roadmap
                  </Link>
                  <button
                    className="mx-4 bg-white text-[#7F1911] hover:bg-gray-100 transition-colors duration-200 text-sm font-medium px-6 py-2 rounded-3xl"
                    onClick={() => setIsOpen(false)}
                  >
                    WHITE PAPER
                  </button>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed  md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};
