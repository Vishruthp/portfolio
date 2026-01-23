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
    <Card className={`relative overflow-hidden ${className}`}>
      {/* Decorative Blur Circle */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <Avatar 
              src="/portfolio/assets/profile.png" 
              alt="Vishruth" 
              size="xl" 
              className="relative border-2 border-white/10"
            />
          </div>
          
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="space-y-1">
              <Typography variant="h1" fontWeight="bold" className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Hi, I&apos;m Vishruth
              </Typography>
              <Typography variant="h4" fontWeight="medium" className="text-accent-secondary">
                Senior Software Engineer
              </Typography>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <Badge
                label="Open to Work"
                variant="success"
                icon={<CheckCircle className="w-4 h-4" />}
                className="py-2"
              />
            </div>
          </div>
        </div>
        
        <AboutMe />
      </div>
    </Card>
  );
}

export default HeroSection;
