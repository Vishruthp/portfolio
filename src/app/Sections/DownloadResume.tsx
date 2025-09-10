"use client";
import { Button } from "@/common_components/Button/Button";
import Card from "@/common_components/Card/Card";
import { Typography } from "@/common_components/Typography/Typography";
import Image from "next/image";
import React from "react";

function DownloadResume() {
  const contacts = [
    {
      name: "twitter",
      icon: "/portfolio/assets/twitter.svg",
      link: "https://x.com/vishruthpatil"
    },
    {
      name: "linkedin",
      icon: "/portfolio/assets/linkedin.svg",
      link: "https://www.linkedin.com/in/vishruth-patil-55962ab6/"
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
    {
      name: "github",
      icon: "/portfolio/assets/github.svg",
      link: "https://github.com/Vishruthp"
    },
  ];

  return (
    <Card>
      <div className="flex flex-row items-center m-2">
        <Typography variant="h4" fontWeight="semibold">
          Resume
        </Typography>

        <div className="flex m-2">
          <a href="/portfolio/assets/Vishruth_Patil_Resume.pdf" download>
            <Button variant="primary">Download</Button>
          </a>
        </div>
      </div>

      <div className="flex justify-around m-5">
        Socials
        {contacts.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.link} target="_blank">
                <Image
                  src={item.icon}
                  alt="test"
                  width="20"
                  height="20"
                  unoptimized
                />
              </a>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default DownloadResume;
