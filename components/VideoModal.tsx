"use client";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";

interface ModalVideoProps {
  video: string; 
  videoWidth: number;
  videoHeight: number;
}

export default function VideoModal({
  video, 
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Watch what we do</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="max-w-5xl mx-auto h-full flex items-center">
          <video
            ref={videoRef}
            width={videoWidth}
            height={videoHeight}
            loop
            controls
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
}
