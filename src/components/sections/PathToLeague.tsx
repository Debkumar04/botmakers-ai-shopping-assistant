import { PATH_STEPS } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";
import { FaWrench, FaTrophy, FaStar, FaChartLine, FaCrown } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  wrench: <FaWrench />,
  trophy: <FaTrophy />,
  star: <FaStar />,
  "trending-up": <FaChartLine />,
  crown: <FaCrown />,
};

export default function PathToLeague() {
  return (
    <section className="section-py bg-[#111118] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent" />

      <div className="page-container">
        <SectionHeading tag="Getting Started" title="Your Path to" highlight="the League" />

        {/* Timeline — max-width 1200px, centered */}
        <div className="mt-10 mx-auto relative" style={{ maxWidth: "1200px" }}>

          {/* Horizontal connector line — runs center-to-center of first and last circle.
              Each of 5 equal cols is 20% wide; circle center sits at 10% and 90%. */}
          <div
            className="hidden lg:block absolute h-px bg-gradient-to-r from-[#e63946]/20 via-[#e63946]/40 to-[#e63946]/20"
            style={{ top: "40px", left: "10%", right: "10%" }}
          />

          {/* Five steps — equal columns, no extra gap on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0">
            {PATH_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle — 80px, badge 24px */}
                <div className="relative shrink-0">
                  <div className="w-[80px] h-[80px] rounded-full bg-[#16161e] border-2 border-[#2a2a35] flex items-center justify-center text-2xl text-[#e63946] group-hover:border-[#e63946] group-hover:shadow-[0_0_20px_rgba(230,57,70,0.3)] transition-all duration-300">
                    {iconMap[step.icon]}
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-[24px] h-[24px] bg-[#e63946] rounded-full flex items-center justify-center text-white text-xs font-[Rajdhani] font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Heading — 16px below circle */}
                <h3 className="font-[Orbitron] text-xs font-bold text-white uppercase tracking-wider mt-[16px]">
                  {step.title}
                </h3>

                {/* Description — 8px below heading */}
                <p className="font-[Inter] text-[#6b6b7b] text-xs leading-relaxed mt-[8px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
