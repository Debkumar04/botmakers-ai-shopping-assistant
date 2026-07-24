import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../../constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090F]/95 backdrop-blur-lg border-b border-[#262630]"
            : "bg-[#09090F]/70 backdrop-blur-md"
        }`}
      >
        <div className="page-container">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 select-none">
              <div className="w-10 h-10 rounded-md bg-[#ef4444] flex items-center justify-center shadow-lg">
                <span className="font-[Orbitron] text-white text-sm font-bold">
                  B
                </span>
              </div>

              <h1 className="font-[Orbitron] text-[30px] font-bold tracking-wide">
                <span className="text-white">BOT</span>
                <span className="text-[#ef4444]">LEAGUE</span>
              </h1>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-center">
              <div className="flex items-center gap-10">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="uppercase font-[Rajdhani] text-[15px] tracking-[0.18em] font-semibold text-gray-400 transition-all duration-300 hover:text-white hover:scale-105"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="h-10 px-5 rounded-md border border-[#333344] text-white font-[Rajdhani] uppercase tracking-wider font-semibold transition-all duration-300 hover:border-[#ef4444] hover:-translate-y-0.5">
                Login
              </button>

              <button className="h-10 px-5 rounded-md bg-[#ef4444] text-white font-[Rajdhani] uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-[#dc2626] hover:-translate-y-0.5">
                Register
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden justify-self-end text-white text-3xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#262630] bg-[#09090F]/95 backdrop-blur-xl shadow-2xl">
            <div className="page-container py-8">
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="uppercase font-[Rajdhani] tracking-[0.15em] text-gray-300 text-lg font-semibold hover:text-white transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 border-t border-[#262630]">
                <button className="h-11 rounded-lg border border-[#333344] text-white0 px-3 uppercase font-[Rajdhani] tracking-wider font-semibold transition hover:border-[#ef4444]">
                  Login
                </button>

                <button className="h-11 rounded-lg bg-[#ef4444] px-3 py-6 text-white uppercase font-[Rajdhani] tracking-wider font-semibold transition hover:bg-[#dc2626]">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}
