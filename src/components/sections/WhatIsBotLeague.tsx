import { FEATURES } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";

export default function WhatIsBotLeague() {
  return (
    <section id="about" className="section-py bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent" />

      <div className="page-container">
        <SectionHeading title="What is" highlight="BotLeague?" />

        {/* gap-[24px], equal-height rows via items-stretch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] mt-12">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group flex items-start gap-4 p-[20px] bg-[#16161e] border border-[#2a2a35] rounded-[16px] hover:border-[#e63946]/30 transition-all duration-300 h-full"
            >
              {/* Number box — shrink-0 keeps it from squishing, no vertical stretch */}
              <div className="shrink-0 w-10 h-10 bg-[#e63946]/10 border border-[#e63946]/20 rounded-lg flex items-center justify-center">
                <span className="font-[Orbitron] text-[#e63946] text-base font-bold">
                  {feature.number}
                </span>
              </div>

              {/* Text block — heading top-aligns with the number box */}
              <div className="min-w-0">
                <h3 className="font-[Orbitron] text-sm font-bold text-white uppercase tracking-wider">
                  {feature.title}
                </h3>
                <p className="font-[Inter] text-[#6b6b7b] text-sm leading-relaxed mt-2 max-w-[90%]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
