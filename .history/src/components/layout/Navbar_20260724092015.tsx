import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../../constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#2a2a35]"
          : "bg-transparent"
      }`}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-[80px]">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#e63946] rounded-sm flex items-center justify-center">
              <span className="font-[Orbitron] text-white text-xs font-bold">B</span>
            </div>
            <span className="font-[Orbitron] text-white text-lg font-bold tracking-wider">
              BOT<span className="text-[#e63946]">LEAGUE</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-[40px]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[Rajdhani] text-[#a0a0b0] text-sm font-medium uppercase tracking-wider hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-[16px]">
            <button className="h-[44px] px-[24px] font-[Rajdhani] text-sm font-semibold text-white border border-[#2a2a35] rounded-[10px] hover:border-[#e63946] hover:-translate-y-[2px] transition-all duration-300 uppercase tracking-wider">
              Login
            </button>
            <button className="h-[44px] px-[24px] font-[Rajdhani] text-sm font-semibold text-white bg-[#e63946] rounded-[10px] hover:bg-[#b71c2a] hover:-translate-y-[2px] transition-all duration-300 uppercase tracking-wider">
              Register
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white text-2xl"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-md border-t border-[#2a2a35]">
          <div className="page-container py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-[Rajdhani] text-[#a0a0b0] text-base font-medium uppercase tracking-wider hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-[#2a2a35]">
              <button className="flex-1 font-[Rajdhani] text-sm font-semibold text-white py-2 border border-[#2a2a35] rounded uppercase tracking-wider">
                Login
              </button>
              <button className="flex-1 font-[Rajdhani] text-sm font-semibold text-white px-4 py-2.5 bg-[#e63946] rounded uppercase tracking-wider">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
