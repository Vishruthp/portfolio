import Intro from "@/components/common/intro";
import Projects from "@/components/common/projects";
import Socials from "@/components/common/socials";
import Work from "@/components/common/work";

export default function Home() {
  return (
    <div className="flex justify-center m-4 items-center min-h-screen">
      <main>
        <Intro />
        <Work />
        <Projects />
        <Socials />
      </main>
    </div>
  );
}
