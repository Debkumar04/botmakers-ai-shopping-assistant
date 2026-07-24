import { useState } from "react";
import { COMPETITIONS, PAST_RESULTS } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";

type Tab = "location" | "section" | "past";

export default function Competitions() {
  const [activeTab, setActiveTab] = useState<Tab>("location");

  const tabs: { key: Tab; label: string }[] = [
    { key: "location", label: "Location" },
    { key: "section", label: "Section" },
    { key: "past", label: "Past Results" },
  ];

  const events = activeTab === "past" ? PAST_RESULTS : COMPETITIONS;

  return (
    <section id="events" className="section-py bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent" />

      <div className="page-container">
        <SectionHeading title="Competitions &" highlight="Events" />

        {/* Tab filter */}
        <div className="flex justify-center gap-1 mt-12 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`font-[Rajdhani] text-sm font-semibold uppercase tracking-wider px-6 py-2.5 rounded transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-[#e63946] text-white"
                  : "bg-[#16161e] text-[#6b6b7b] hover:text-white border border-[#2a2a35]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards — gap 24px, flex-col so all reach the same baseline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {events.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col bg-[#16161e] border border-[#2a2a35] rounded-[16px] hover:border-[#e63946]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,70,0.08)] p-5 h-full"
            >
              {/* Image — 16px radius, inside card padding */}
              <div className="relative h-48 rounded-[16px] overflow-hidden shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16161e] to-transparent" />
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-xs font-[Rajdhani] font-bold uppercase tracking-wider ${
                    event.status === "Upcoming"
                      ? "bg-[#e63946]/90 text-white"
                      : "bg-[#2a9d8f]/90 text-white"
                  }`}
                >
                  {event.status}
                </span>
              </div>

              {/* Title — 16px below image */}
              <h3 className="font-[Orbitron] text-base font-bold text-white mt-[16px]">
                {event.title}
              </h3>

              {/* Metadata — 12px below title */}
              <div className="flex items-center gap-4 mt-[12px]">
                <span className="font-[Rajdhani] text-[#6b6b7b] text-sm">
                  📅 {event.date}
                </span>
                <span className="font-[Rajdhani] text-[#6b6b7b] text-sm">
                  📍 {event.location}
                </span>
              </div>

              {/* Register — mt-auto fills remaining space, then 20px gap above button */}
              <div className="mt-auto pt-[20px]">
                <button className="w-full h-[44px] font-[Rajdhani] text-sm font-bold text-white px-[24px] bg-[#e63946] rounded-[10px] hover:bg-[#b71c2a] hover:-translate-y-[2px] transition-all duration-300 uppercase tracking-wider">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
