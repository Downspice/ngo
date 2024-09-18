"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function VideoModal() {
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
