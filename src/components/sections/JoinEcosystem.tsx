import { ECOSYSTEM_ROLES } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";

export default function JoinEcosystem() {
  return (
    <section id="contact" className="section-py bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent" />

      <div className="page-container">
        <SectionHeading title="Join the" highlight="Ecosystem" />

        {/* Scrollable wrapper on mobile, grid on md+ */}
        <div className="mt-12 flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {ECOSYSTEM_ROLES.map((role) => (
            <div
              key={role.title}
              className="group flex-shrink-0 w-[280px] md:w-auto flex flex-col p-6 bg-[#16161e] border border-[#2a2a35] rounded-2xl hover:border-[#e63946]/30 transition-all duration-300 snap-start"
            >
              {/* Card Title */}
              <h3 className="font-[Orbitron] text-sm font-bold text-white uppercase tracking-wider mb-6">
                {role.title}
              </h3>

              {/* Form Fields */}
              <form
                className="flex flex-col gap-4 flex-1"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-11 px-4 bg-[#0e0e14] border border-[#2a2a35] rounded-lg text-white text-sm font-[Inter] placeholder-[#6b6b7b] outline-none focus:border-[#e63946]/50 transition-colors duration-200"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full h-11 px-4 bg-[#0e0e14] border border-[#2a2a35] rounded-lg text-white text-sm font-[Inter] placeholder-[#6b6b7b] outline-none focus:border-[#e63946]/50 transition-colors duration-200"
                />
                <select
                  defaultValue=""
                  className="w-full h-11 px-4 bg-[#0e0e14] border border-[#2a2a35] rounded-lg text-sm font-[Inter] text-[#6b6b7b] outline-none focus:border-[#e63946]/50 transition-colors duration-200 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="" disabled>
                    Enroll
                  </option>
                  <option value="participant" className="text-white bg-[#16161e]">
                    Participant
                  </option>
                  <option value="team" className="text-white bg-[#16161e]">
                    Team
                  </option>
                  <option value="individual" className="text-white bg-[#16161e]">
                    Individual
                  </option>
                </select>

                <button
                  type="submit"
                  className="mt-2 w-full h-11 font-[Rajdhani] text-sm font-bold text-white bg-[#e63946] rounded-lg hover:bg-[#b71c2a] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 uppercase tracking-wider"
                >
                  Sign Up
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
