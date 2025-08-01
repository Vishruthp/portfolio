"use client"
import { Button } from "@/common_components/Button/Button";
import Card from "@/common_components/Card/Card";
import { Typography } from "@/common_components/Typography/Typography";
import Image from "next/image";
import React from "react";

function DownloadResume() {
  const contacts = [
    {
      name: "twitter",
      icon: "/twitter.svg",
    },
    {
      name: "linkedin",
      icon: "/linkedin.svg",
    },
    {
      name: "stackoverflow",
      icon: "/stackoverflow.svg",
    },
    {
      name: "instagram",
      icon: "/instagram.svg",
    },
    {
      name: "github",
      icon: "/github.svg",
    },
  ];

  return (
    <Card>
      <Typography variant="h3" fontWeight="semibold">
        Resume & Socials
      </Typography>
       <div className="flex items-center justify-center m-2">
        <a href="/SuuuuperResume.pdf" download>
          <Button variant="secondary">Download</Button>
        </a>
      </div>
      <div className="flex justify-around m-5">
        {contacts.map((item, index) => {
          return (
            <div key={index}>
              <a href="#">
                <Image src={item.icon} alt="test" width="20" height="20" />
              </a>
            </div>
          );
        })}
      </div>
     
    </Card>
  );
}

export default DownloadResume;
