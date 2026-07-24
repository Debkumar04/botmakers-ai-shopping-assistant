import { DISCIPLINES } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";

export default function Disciplines() {
  return (
    <section id="disciplines" className="section-py bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent" />

      <div className="page-container">
        <SectionHeading tag="Events" title="Competition" highlight="Disciplines" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[24px] mt-12">
          {DISCIPLINES.map((discipline) => (
            <div
              key={discipline.title}
              className="group relative rounded-[16px] overflow-hidden aspect-[16/10] sm:aspect-[4/5] cursor-pointer card-base border border-[#2a2a35] h-full"
            >
              <img
                src={discipline.image}
                alt={discipline.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
              <div className="absolute inset-0 bg-[#e63946]/0 group-hover:bg-[#e63946]/10 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-[16px]">
                <h3 className="font-[Orbitron] text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  {discipline.title}
                </h3>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-[#e63946]/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
