import Card, { CardBackground } from "@/common_components/Card/Card";
import { Typography } from "@/common_components/Typography/Typography";
import { BotMessageSquare, Boxes, KeyRound, Magnet } from "lucide-react";
import React from "react";

function Projects() {
  const projects = [
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
      projectUrl: "https://github.com/Vishruthp/convobuddy",
    },
    {
      projectName: "KubeScope",
      projectDescription:
        "KubeScope is an advanced and intuitive Kubernetes dashboard viewer built using flutter meticulously designed to offer comprehensive insights into the health, performance, and resource utilization of your clusters.",
      projectImage: <Boxes />,
      projectUrl: "https://github.com/Vishruthp/kubescope",
    },
    {
      projectName: "BreezeC#App",
      projectDescription: "Server with breeze apis and mcp",
      projectImage: <Magnet />,
      projectUrl: "https://github.com/Vishruthp/BreezeAppCSharp",
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
                <a href={item.projectUrl} className="color-blue-500">
                  Project
                </a>
              </p>
            </Card>
          );
        })}
      </div>
    </Card>
  );
}

export default Projects;
