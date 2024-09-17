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

export function ProjectProjectPreview() {
  return (
    <Carousel className="w-full p-2 max-w-lg">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center ">
                 
                 
                </CardContent>
              </Card>
           
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
