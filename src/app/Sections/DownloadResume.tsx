"use client";
import { Button } from "@/common_components/Button/Button";
import Card from "@/common_components/Card/Card";
import { Typography } from "@/common_components/Typography/Typography";
import { Download, Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";

function DownloadResume() {
  const contacts = [
    {
      name: "linkedin",
      icon: "/portfolio/assets/linkedin.svg",
      link: "https://www.linkedin.com/in/vishruth-patil-55962ab6/"
    },
    {
      name: "github",
      icon: "/portfolio/assets/github.svg",
      link: "https://github.com/Vishruthp"
    },
    {
      name: "twitter",
      icon: "/portfolio/assets/twitter.svg",
      link: "https://x.com/vishruthpatil"
    },
    {
      name: "stackoverflow",
      icon: "/portfolio/assets/stackoverflow.svg",
      link: "https://stackoverflow.com/users/6799753/kaido"
    },
    {
      name: "instagram",
      icon: "/portfolio/assets/instagram.svg",
      link: "https://www.instagram.com/vishruthpatil/"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="flex flex-col justify-center items-center text-center space-y-4 p-8">
        {/* <div className="p-4 rounded-full bg-accent/10 text-accent-secondary">
          <Download className="w-8 h-8" />
        </div> */}
        <div className="space-y-1">
          <Typography variant="h3" fontWeight="bold">Curriculum Vitae</Typography>
          <p className="text-gray-400 text-sm">Download my latest resume in PDF format</p>
        </div>
        <a href="/portfolio/assets/Vishruth_Patil_Resume.pdf" download className="w-full">
          <Button variant="accent" className="w-full" icon={<Download className="w-4 h-4" />}>
            Download Resume
          </Button>
        </a>
      </Card>

      <Card className="flex flex-col p-8 space-y-6 shadow-xl group/connect">
        <div className="flex items-center gap-3">
          <Share2 className="w-5 h-5" />
          <Typography variant="h4" fontWeight="bold">Connect</Typography>
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          {contacts.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center !bg-black !border-black justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-200 transition-all hover:-translate-y-1 group/icon shadow-sm"
              title={item.name}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width="24"
                height="24"
                className="opacity-80 group-hover/icon:opacity-100 transition-opacity"
                unoptimized
              />
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center italic mt-auto font-medium">
          Feel free to reach out for collaborations or opportunities!
        </p>
      </Card>
    </div>
  );
}

export default DownloadResume;
