"use client"
import Avatar from "@/common_components/Avatar/Avatar";
import Badge from "@/common_components/Badge/Badge";
import Card from "@/common_components/Card/Card";
import { Typography } from "@/common_components/Typography/Typography";
import { CheckCircle } from "lucide-react";
import React from "react";
import AboutMe from "./AboutMe";

type HeroSectionProps = {
  className?: string;
};

function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <Card className={className}>
      <div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <Avatar src="/portfolio/assets/profile.png" alt="Your Name" size="xl" />
            <Typography variant="h1" fontWeight="semibold">
              Hi, Vishruth Here
            </Typography>
          </div>
          <Badge
            label="Open to Work"
            variant="success"
            icon={<CheckCircle />}
            className="h-10"
          />
        </div>
        <AboutMe />
      </div>
    </Card>
  );
}

export default HeroSection;
