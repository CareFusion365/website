"use client";
import { useEffect } from "react";
import AOS from "aos";
import Lenis from "@studio-freight/lenis";
import "aos/dist/aos.css";
import { useRef } from "react";
import { AppProviders } from "@/providers";
import "../styles/fonts.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      //console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <main className="wrapper" ref={containerRef}>
            {children}
          </main>
        </AppProviders>
      </body>
    </html>
  );
}
