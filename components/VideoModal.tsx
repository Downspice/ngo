"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";


interface ModalVideoProps {
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function VideoModal({
 
}: ModalVideoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Watch what we do</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="max-w-fit mx-auto h-full flex items-center">
          {/* <video
            ref={videoRef}
            width={videoWidth}
            height={videoHeight}
            loop
            controls
          >
            <source src={video} />
            Your browser does not support the video tag.
          </video> */}

          <iframe
            width="908"
            height="511"
            src="https://www.youtube.com/embed/oBS1E5r4oi0"
            title="Kenya African Kids free School Education Donate"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
