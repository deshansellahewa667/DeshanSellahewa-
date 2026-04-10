import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import ExperienceTable from "@/components/ExperienceTable";
import MoreInfo from "@/components/MoreInfo";

export default function Home() {
  return (
    <main className="w-full bg-[#121212]">
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
      <MoreInfo />
    </main>
  );
}
