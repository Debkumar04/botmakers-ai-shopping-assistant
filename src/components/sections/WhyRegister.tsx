import { ADVANTAGES } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";
import { FaAward, FaBalanceScale, FaBriefcase, FaBolt } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  award: <FaAward />,
  scale: <FaBalanceScale />,
  briefcase: <FaBriefcase />,
  zap: <FaBolt />,
};

export default function WhyRegister() {
  return (
    <section className="section-py bg-[#111118] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent" />

      <div className="page-container">
        <SectionHeading
          tag="Why Register?"
          title="The League"
          highlight="Advantage"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] mt-12 items-start">
          <div className="space-y-6 h-full">
            {ADVANTAGES.map((advantage) => (
              <div
                key={advantage.title}
                className="group flex items-center gap-5 p-[24px] bg-[#16161e] border border-[#2a2a35] rounded-[16px] hover:border-[#e63946]/30 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 bg-[#e63946]/10 border border-[#e63946]/20 rounded-lg flex items-center justify-center text-[#e63946] text-xl group-hover:bg-[#e63946]/20 transition-colors duration-300">
                  {iconMap[advantage.icon]}
                </div>
                <h3 className="font-[Orbitron] text-sm font-bold text-white uppercase tracking-wider">
                  {advantage.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="relative h-full">
            <div className="relative bg-[#16161e] border border-[#2a2a35] rounded-[16px] p-[24px] overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e63946]/5 rounded-full blur-[60px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#e63946]" />
                  <span className="font-[Orbitron] text-xs font-bold text-white uppercase tracking-wider">
                    Leaderboard
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "Team Nexus", points: 2840, change: "+120" },
                    { rank: 2, name: "RoboVikings", points: 2650, change: "+95" },
                    { rank: 3, name: "Circuit Breakers", points: 2480, change: "+78" },
                    { rank: 4, name: "Mech Warriors", points: 2310, change: "+62" },
                    { rank: 5, name: "Bot Brigade", points: 2150, change: "+45" },
                  ].map((team) => (
                    <div
                      key={team.rank}
                      className="flex items-center gap-4 p-3 bg-[#0a0a0f]/50 rounded-lg border border-[#2a2a35]/50"
                    >
                      <span
                        className={`font-[Orbitron] text-sm font-bold w-8 text-center ${
                          team.rank <= 3 ? "text-[#e63946]" : "text-[#6b6b7b]"
                        }`}
                      >
                        #{team.rank}
                      </span>
                      <div className="flex-1">
                        <span className="font-[Rajdhani] text-white text-sm font-semibold">
                          {team.name}
                        </span>
                      </div>
                      <span className="font-[Rajdhani] text-[#a0a0b0] text-sm">
                        {team.points.toLocaleString()} pts
                      </span>
                      <span className="font-[Rajdhani] text-[#2a9d8f] text-xs font-semibold">
                        {team.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
