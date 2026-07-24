import { FOOTER_LINKS, SPONSORS } from "../../constants/data";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <FaInstagram />,
  YouTube: <FaYoutube />,
  Twitter: <FaTwitter />,
  LinkedIn: <FaLinkedin />,
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[#2a2a35]">
      <div className="page-container">
        <div className="pt-[64px] pb-12 border-b border-[#2a2a35] text-center">
          <h2 className="font-[Orbitron] text-2xl md:text-3xl font-bold text-white mb-2">
            <span className="text-[#e63946]">SPONSORS</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-[24px] mt-8">
            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-10 h-10 bg-[#16161e] border border-[#2a2a35] rounded-lg flex items-center justify-center">
                  <span className="text-[#e63946] text-lg">⚡</span>
                </div>
                <span className="font-[Rajdhani] text-white text-lg font-semibold tracking-wider">
                  {sponsor.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-[64px] pb-[40px] grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#e63946] rounded-sm flex items-center justify-center">
                <span className="font-[Orbitron] text-white text-xs font-bold">B</span>
              </div>
              <span className="font-[Orbitron] text-white text-lg font-bold tracking-wider">
                BOT<span className="text-[#e63946]">LEAGUE</span>
              </span>
            </div>
            <p className="font-[Inter] text-[#6b6b7b] text-sm leading-relaxed">
              India&apos;s premier competitive robotics platform connecting builders,
              innovators, and engineers across the nation.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-center text-center">
            <h3 className="font-[Orbitron] text-sm font-bold text-white uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[Rajdhani] text-[#6b6b7b] text-base hover:text-[#e63946] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="font-[Orbitron] text-sm font-bold text-white uppercase tracking-widest mb-6">
              Social Media
            </h3>
            <div className="flex gap-[16px] justify-center md:justify-end">
              {FOOTER_LINKS.socialMedia.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 bg-[#16161e] border border-[#2a2a35] rounded-lg flex items-center justify-center text-[#6b6b7b] hover:text-[#e63946] hover:border-[#e63946] transition-all duration-200"
                >
                  {socialIcons[link.label]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-[#2a2a35] text-center">
          <p className="font-[Inter] text-[#6b6b7b] text-xs">
            © 2026 BotLeague. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
