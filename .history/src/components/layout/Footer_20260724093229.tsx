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
    <footer className="bg-[#09090F] border-t border-[#23232d]">
      {/* Sponsors */}
      <div className="page-container pt-20">
        <h2 className="font-[Orbitron] text-center text-5xl font-bold uppercase tracking-wide">
          <span className="text-[#ef4444]">Sponsors</span>
        </h2>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-14">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center gap-4 opacity-70 hover:opacity-100 transition duration-300"
            >
              <div className="w-12 h-12 rounded-xl border border-[#2d2d36] bg-[#12121a] flex items-center justify-center">
                <span className="text-[#ef4444] text-xl">⚡</span>
              </div>

              <span className="font-[Rajdhani] text-3xl font-semibold text-[#8f8f98] uppercase tracking-wide">
                {sponsor.logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}

      <div className="mt-16 border-t border-[#23232d]" />

      {/* Footer */}

      <div className="page-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left */}

          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-11 h-11 rounded-md bg-[#ef4444] flex items-center justify-center">
                <span className="font-[Orbitron] text-white font-bold">B</span>
              </div>

              <h2 className="font-[Orbitron] text-3xl font-bold tracking-wide">
                <span className="text-white">BOT</span>
                <span className="text-[#ef4444]">LEAGUE</span>
              </h2>
            </div>

            <p className="max-w-[320px] text-[#7b7b88] text-lg leading-9">
              India's premier competitive robotics platform connecting builders,
              innovators and engineers across the nation.
            </p>
          </div>

          {/* Center */}

          <div className="lg:col-span-3 flex flex-col items-center">
            <h3 className="font-[Orbitron] text-white uppercase text-xl mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {FOOTER_LINKS.quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#8b8b95] text-xl font-[Rajdhani] hover:text-[#ef4444] transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}

          <div className="lg:col-span-4 flex flex-col items-end">
            <h3 className="font-[Orbitron] text-white uppercase text-xl mb-8">
              Social Media
            </h3>

            <div className="flex gap-5">
              {FOOTER_LINKS.socialMedia.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-14 h-14 rounded-xl border border-[#2d2d36] bg-[#12121a] flex items-center justify-center text-[#8b8b95] text-xl hover:border-[#ef4444] hover:text-[#ef4444] transition-all duration-300"
                >
                  {socialIcons[item.label]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="border-t border-[#23232d]">
        <div className="page-container py-6 text-center">
          <p className="text-[#666] text-sm tracking-wide">
            © 2026 BotLeague. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
