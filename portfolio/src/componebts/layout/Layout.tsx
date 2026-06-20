import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <div className="relative isolate min-h-screen">
      {/* Base color — separate layer so blobs aren't hidden behind it */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#fafafa]" />

      {/* Film grain — on top, subtle, does not darken colors */}
      {/* Film grain overlay */}
      <div
        aria-hidden="true"
        /* The following class adds a subtle film grain effect on top of the content.
           Optionally: use "pointer-events-none opacity-[0.085] mix-blend-overlay" for different intensities/blending.
           See index.css for more "noise-texture" settings.
        }*/
        className="noise-texture fixed inset-0 z-1"
        /*className="grain fixed inset-0 -z-20 pointer-events-none"*/
      />

      {/* Pink / purple glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/8 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-5 right-1/15 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute right-1/9 bottom-20 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />
      </div>

      {/* Fixed header — transparent at top, frosted white when content scrolls under */}
      <div
        className={`fixed inset-x-0 top-0 z-30 px-4 transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-200/80 bg-white/80 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent shadow-none"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl">
          <Header />
        </div>
      </div>

      {/* Page content — offset below fixed header */}
      <div
        className={`relative z-10 mx-auto flex max-w-6xl flex-col px-4 pt-28 ${
          isHome ? "h-screen overflow-hidden" : "min-h-screen"
        }`}
      >
        <main
          className={
            isHome ? "flex min-h-0 flex-1 flex-col" : "flex-1"
          }
        >
          <Outlet />
        </main>
        <Footer className="shrink-0" />
      </div>
    </div>
  );
}
