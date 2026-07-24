import { CATEGORIES } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";

export default function Categories() {
  return (
    <section id="categories" className="section-py bg-[#111118] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent" />

      <div className="page-container">
        <SectionHeading title="CATEGORIES" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] mt-12">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="group relative p-[24px] bg-[#16161e] border border-[#2a2a35] rounded-[16px] flex flex-col items-center text-center hover:border-opacity-60 transition-all duration-300 overflow-hidden h-full"
              style={{
                ["--cat-color" as string]: category.color,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${category.color}08 0%, transparent 70%)`,
                }}
              />
              <div className="relative z-10 flex flex-col items-center w-full">
                <div
                  className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl border"
                  style={{
                    backgroundColor: `${category.color}15`,
                    borderColor: `${category.color}30`,
                  }}
                >
                  {category.icon}
                </div>
                <h3 className="font-[Orbitron] text-sm font-bold text-white uppercase tracking-wider mt-[20px]">
                  {category.title}
                </h3>
                <p className="font-[Rajdhani] text-[#6b6b7b] text-sm font-medium mt-[10px]">
                  {category.age}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
