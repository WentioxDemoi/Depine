"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import Image from "next/image";
import Download from "./components/DownloadButton";
import clsx from "clsx";
import Head from "next/head";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react"; // Importer useEffect
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isDropdownOpen]);
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <title>Depine</title>
        <meta property="og:title" content="Depine - Simplify Your Onboarding" />
        <meta
          property="og:description"
          content="Deploy your entire development environment in one click. No more configuration hassles – get started with Depine today."
        />
        <meta property="og:url" content="https://depine.app" />
        <meta property="og:image" content="https://depine.app/images/og.jpg" />
        <meta name="author" content="Depine" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Attention au padding avec le Carrousel */}
      <body className="flex flex-col md:p-5">
        <header id="header" className="fixed top-0 left-0 w-full flex items-center justify-between bg-black z-50 md:px-5">
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={200} height={50} className="p-5"/>
          </Link>
          <div className="relative md:hidden p-5">
            <Image
              src="/images/menu_mobile.png"
              alt="Menu"
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={() => setDropdownOpen(false)} />
            )}
            {isDropdownOpen && (
              <div className={`fixed top-0 right-0 bg-white shadow-lg h-screen z-50 transition-transform duration-300 transform ${isDropdownOpen ? "translate-x-0" : "translate-x-full"} w-3/4 rounded-l-lg flex flex-col`}>
                <div className="flex items-center ml-6 mt-6 space-x-6">
                  <Image
                    src="/images/black_logo.png"
                    alt="Menu"
                    width={200}
                    height={30}
                    className="cursor-pointer"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  />
                  <Image
                    src="/images/black_cross.png"
                    alt="Close Menu"
                    width={20}
                    height={20}
                    className="mt-1"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  />
                </div>
                <ul className="flex flex-col p-2 space-y-1 ml-5 mt-4">
                  <li
                    className={clsx("cursor-pointer text-black", {
                      "text-black font-bold": pathname === "/",
                    })}
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push("/");
                    }}
                  >
                    Product
                  </li>
                  <li
                    className={clsx("cursor-pointer text-black", {
                      "text-black font-bold": pathname === "/pricing",
                    })}
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push("/pricing");
                    }}
                  >
                    Pricing
                  </li>
                  <li
                    className={clsx("cursor-pointer text-black", {
                      "text-black font-bold": pathname === "/documentation",
                    })}
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push("/documentation");
                    }}
                  >
                    Documentation
                  </li>
                  <li
                    className={clsx("cursor-pointer text-black", {
                      "text-black font-bold": pathname === "/team",
                    })}
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push("/team");
                    }}
                  >
                    Team
                  </li>
                  <li>
                    <a
                      href="/path-to-download" // Change this to your actual download link
                      className="text-gray hover:text-white cursor-pointer"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Download
                    </a>
                  </li>
                </ul>
                <p className="text-sm text-center mb-4 mt-auto">
                  Made with 🧡 by the Depine Team
                </p>
              </div>
            )}
          </div>
          <div className="hidden md:flex flex-grow items-center justify-center space-x-5">
            <nav>
              <ul className="flex space-x-8">
                <li
                  className={clsx("cursor-pointer text-gray", {
                    "text-white": pathname === "/",
                  })}
                  onClick={() => router.push("/")}
                >
                  Product
                </li>
                <li
                  className={clsx("cursor-pointer text-gray", {
                    "text-white": pathname === "/pricing",
                  })}
                  onClick={() => router.push("/pricing")}
                >
                  Pricing
                </li>
                <li
                  className={clsx("cursor-pointer text-gray", {
                    "text-white": pathname === "/documentation",
                  })}
                  onClick={() => router.push("/documentation")}
                >
                  Documentation
                </li>
                <li
                  className={clsx("cursor-pointer text-gray", {
                    "text-white": pathname === "/team",
                  })}
                  onClick={() => router.push("/team")}
                >
                  Team
                </li>
              </ul>
            </nav>
          </div>
          <Download className="hidden md:flex" />
        </header>
              {/* Attention au padding avec le carrousel*/}
        <main className="text-white md:p-2 md:px-28  md:pb-[200px] w-full rounded-3xl bg-gradient-radial md:mt-30 mt-20"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
