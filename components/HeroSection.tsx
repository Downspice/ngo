import { CircleArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import VideoModal from "./VideoModal";

export default function HeroSection() {
  return (
    <>
      <div className="px-3 h-dvh ">
        <h1>Welcome to Kids Future</h1>
        <h2>Empowering the Future Through Education</h2>
        <h2>
          &quot;Bringing quality education and life skills to children in
          underserved communities.&quot;
        </h2>
        <h3>
          &quot;Join us in shaping the next generation by supporting our
          programs today.&quot;
        </h3>
        <Button>
          Click to Donate <CircleArrowRight className="" />
        </Button>
        <VideoModal video="/video.mp4" videoWidth={1920} videoHeight={1080} />
      </div>
    </>
  );
}
