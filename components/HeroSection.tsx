import { Circle, CircleArrowRight, CirclePlay } from "lucide-react";
import { Button } from "./ui/button";
import VideoModal from "./VideoModal";
import { ProjectProjectPreview } from "./ProjectPreviewSection";

export default function HeroSection() {
  return (
    <>
      <div className="px-3 h-dvh bg-no-repeat bg-cover bg-[url('/africanStudents.jpg')] ">
        <h1>Welcome to Kids Future</h1>
        <h2>Empowering the Future Through Education</h2>
        <h2>
          "Bringing quality education and life skills to children in underserved
          communities."
        </h2>
        <h3>
          "Join us in shaping the next generation by supporting our programs
          today."
        </h3>
        <Button>
          Click to Donate <CircleArrowRight className="" />
        </Button>
        <VideoModal video="/video.mp4" videoWidth={1920} videoHeight={1080} />
        <div className="pl-10">
          <ProjectProjectPreview />
        </div>
      </div>
    </>
  );
}
