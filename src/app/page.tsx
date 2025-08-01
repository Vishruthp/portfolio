import DownloadResume from "./Sections/DownloadResume";
import HeroSection from "./Sections/HeroSection";
import Projects from "./Sections/Projects";
import Timeline from "./Sections/TimelineSection";

export default function Home() {
  return (
    <div className="font-sans flex flex-col justify-center items-center min-h-screen m-2">
      <main>
        <div className="grid grid-cols-1 gap-4 m-4 md:w-[70vw]">
          <HeroSection />
          <Timeline />
          <Projects />
          <DownloadResume />
        </div>
      </main>
    </div>
  );
}
