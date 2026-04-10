import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import ExperienceTable from "@/components/ExperienceTable";
import WebMap from "@/components/WebMap";
import MoreInfo from "@/components/MoreInfo";
import HUD from "@/components/HUD";

export default function Home() {
  return (
    <main className="w-full">
      <HUD />
      {/* 
        The relative wrapper allows the absolute Overlay 
        to track exactly over the 500vh ScrollyCanvas 
      */}
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>

      <ExperienceTable />
      <Projects />
      <WebMap />
      <MoreInfo />
    </main>
  );
}

