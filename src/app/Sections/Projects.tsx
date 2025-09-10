"use client";
import Card, { CardBackground } from "@/common_components/Card/Card";
import { Typography } from "@/common_components/Typography/Typography";
import {
  BotMessageSquare,
  Boxes,
  CircuitBoard,
  HandPlatter,
  KeyRound,
  Magnet,
  UserPen,
} from "lucide-react";
import React from "react";

function Projects() {
  const projects = [
    {
      projectName: "Portfolio",
      projectDescription: `This portfolio is built using Next.js, React, and Tailwind CSS. It showcases my skills,
projects, and experience as a developer. The design is responsive and optimized for both desktop and mobile devices.`,
      projectImage: <UserPen />,
      projectUrl: "https://github.com/Vishruthp/portfolio",
    },
    {
      projectName: "Convo Buddy",
      projectDescription:
        "ConvoBuddy is a local AI-powered chatbot built using Node.js, leveraging the power of an Ollama instance running directly on your device.",
      projectImage: <BotMessageSquare />,
      projectUrl: "https://github.com/Vishruthp/convobuddy",
    },
    {
      projectName: "pwdManager",
      projectDescription:
        "Simple React app and node server to get details (password,website) from the user and store it in couchdb. Crypto Algo Used aes-256-ctr",
      projectImage: <KeyRound />,
      projectUrl: "https://github.com/Vishruthp/pwdManager",
    },
    {
      projectName: "KubeScope (On Going)",
      projectDescription:
        "KubeScope is an intuitive Kubernetes dashboard viewer getting built using flutter designed to offer comprehensive insights into the health, performance, and resource utilization of clusters.",
      projectImage: <HandPlatter />,
      projectUrl: null,
    },
    {
      projectName: "Automated System (On Going)",
      projectDescription:
        "Exploring IoT-based home automation solutions utilizing Arduino and Raspberry Pi platforms to enhance connectivity, monitoring, and control within residential environments.",
      projectImage: <CircuitBoard />,
      projectUrl: null,
    },
  ];
  return (
    <Card>
      <div className="m-2">
        <Typography variant="h3" fontWeight="medium">
          Projects
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((item, index) => {
          return (
            <Card key={index} cardBackground={CardBackground.secondary}>
              <div>
                <span className="text-lg">{item.projectImage}</span>
              </div>
              <Typography variant="h3" fontWeight="bold">
                {item.projectName}
              </Typography>
              <p> {item.projectDescription} </p>
              <p>
                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    className="text-blue-500"
                  >
                    Repo
                  </a>
                )}
              </p>
            </Card>
          );
        })}
      </div>
    </Card>
  );
}

export default Projects;
