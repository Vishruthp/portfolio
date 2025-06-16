import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { personalProjects } from "@/constants/constants";
function Projects() {
  return (
    <Card className="w-4xl m-4">
      <CardHeader>
        <CardTitle>My Personal Projects</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {personalProjects.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="flex flex-col">
                        <h2 className="font-bold text-blue-500">
                          {item.title}
                        </h2>
                        <p>{item.description}</p>
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
      </CardContent>
    </Card>
  );
}

export default Projects;
