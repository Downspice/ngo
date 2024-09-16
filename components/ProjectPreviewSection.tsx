import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/project";
import Image from "next/image";

export function ProjectProjectPreview() {
  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>
                    </div>
                    <div className="col-span-2">
                      <Image src={project.imageSrc} alt="project image" fill />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
