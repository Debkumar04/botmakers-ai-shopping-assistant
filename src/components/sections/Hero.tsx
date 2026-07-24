export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop"
          alt="Robotics Arena"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/60" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e63946]/10 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#e63946]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 page-container py-12 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-[600px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e63946]/10 border border-[#e63946]/30 rounded-full mb-[20px]">
            <span className="w-2 h-2 bg-[#e63946] rounded-full animate-pulse" />
            <span className="font-[Rajdhani] text-[#e63946] text-xs font-semibold uppercase tracking-widest">
              Season 2026 Live
            </span>
          </div>

          <h1 className="font-[Orbitron] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-[24px]">
            INDIA&apos;S ULTIMATE{" "}
            <span className="text-[#e63946]">ROBOTICS</span>{" "}
            <span className="block">ARENA</span>
          </h1>

          <p className="font-[Rajdhani] text-lg md:text-xl text-[#a0a0b0] font-medium mb-[36px] leading-relaxed">
            Build. Compete. Rise. The Nation&apos;s
            <br />
            Premier Robotics Platform for Builders.
          </p>

          <div className="flex flex-wrap gap-[16px] justify-center items-center">
            <a
              href="#events"
              className="group relative inline-flex items-center justify-center gap-2 px-[24px] h-[44px] bg-[#e63946] font-[Rajdhani] text-white text-base font-bold uppercase tracking-wider rounded-[10px] overflow-hidden transition-all duration-300 hover:bg-[#b71c2a] hover:-translate-y-[2px] hover:shadow-[0_0_30px_rgba(230,57,70,0.4)]"
            >
              <span className="relative z-10">Join Now</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-[24px] h-[44px] border border-[#2a2a35] font-[Rajdhani] text-white text-base font-bold uppercase tracking-wider rounded-[10px] hover:border-[#e63946]/50 hover:bg-[#e63946]/5 hover:-translate-y-[2px] transition-all duration-300"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e63946]/50 to-transparent" />
    </section>
  );
}
