import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Competitions from "./components/sections/Competitions";
import PathToLeague from "./components/sections/PathToLeague";
import WhatIsBotLeague from "./components/sections/WhatIsBotLeague";
import Categories from "./components/sections/Categories";
import Disciplines from "./components/sections/Disciplines";
import WhyRegister from "./components/sections/WhyRegister";
import JoinEcosystem from "./components/sections/JoinEcosystem";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main>
        <Hero />
        <Competitions />
        <PathToLeague />
        <WhatIsBotLeague />
        <Categories />
        <Disciplines />
        <WhyRegister />
        <JoinEcosystem />
      </main>
      <Footer />
    </div>
  );
}
