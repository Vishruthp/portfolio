"use client";
import Card from "@/common_components/Card/Card";
import { Typography } from "@/common_components/Typography/Typography";
import {
  BotMessageSquare,
  CircuitBoard,
  Code,
  ExternalLink,
  HandPlatter,
  KeyRound,
  TrendingUp,
  UserPen,
} from "lucide-react";
import React from "react";

function Projects() {
  const projects = [
    {
      projectName: "Portfolio",
      projectDescription: `This portfolio is developed using Next.js and Tailwind CSS without any third-party UI libraries. It highlights my skills as a developer. The design is fully responsive and optimized for seamless viewing on both desktop and mobile devices.`,
      projectImage: <UserPen className="w-6 h-6" />,
      projectUrl: "https://github.com/Vishruthp/portfolio",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      projectName: "Convo Buddy",
      projectDescription:
        "ConvoBuddy is a local AI-powered chatbot built using Next js, leveraging the power of an Ollama instance running directly on your device.",
      projectImage: <BotMessageSquare className="w-6 h-6" />,
      projectUrl: "https://github.com/Vishruthp/convobuddy",
      tags: ["Next.js", "AI", "Ollama"]
    },
    {
      projectName: "pwdManager",
      projectDescription:
        "Simple React app and node server to get details (password,website) from the user and store it in couchdb. Crypto Algo Used aes-256-ctr",
      projectImage: <KeyRound className="w-6 h-6" />,
      projectUrl: "https://github.com/Vishruthp/pwdManager",
      tags: ["React", "Node.js", "CouchDB"]
    },
    // {
    //   projectName: "KubeScope",
    //   projectDescription:
    //     "KubeScope is an intuitive Kubernetes dashboard viewer getting built using flutter designed to offer comprehensive insights into the health of clusters.",
    //   projectImage: <HandPlatter className="w-6 h-6" />,
    //   projectUrl: null,
    //   status: "On Going",
    //   tags: ["Flutter", "Kubernetes"]
    // },
    {
      projectName: "Automated System",
      projectDescription:
        "Exploring IoT-based home automation solutions utilizing Arduino and Raspberry Pi platforms to enhance connectivity and control.",
      projectImage: <CircuitBoard className="w-6 h-6" />,
      projectUrl: null,
      status: "On Going",
      tags: ["IoT", "Arduino", "Raspberry Pi"]
    },
    {
      projectName: "Trading Bot",
      projectDescription: "ICICI Bank has a sdk called Breeze which can be used to tap into the shares apis. I am in the process of building an application which converts this api into a graphql model and add the functionality of mcp to it. This will allow users to easily access and manage their shares and equity through a simple chat interface.",
      projectImage: <TrendingUp className="w-6 h-6" />,
      projectUrl: null,
      status: "On Going",
      tags: ["Go", "AI", "Next.js", "Flutter"]
    },
  ];

  return (
    <div className="space-y-8">
      <Typography variant="h3" fontWeight="bold" className="text-white px-2">
        My Personal Projects
      </Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, index) => (
          <Card key={index} className="flex flex-col h-full border-t border-white/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent-secondary">
                {item.projectImage}
              </div>
              {item.status && (
                <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                  {item.status}
                </span>
              )}
            </div>
            
            <div className="flex-grow space-y-3">
              <Typography variant="h4" fontWeight="bold" className="text-white group-hover:text-accent-secondary transition-colors">
                {item.projectName}
              </Typography>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.projectDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-white border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {item.projectUrl && (
              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent-secondary hover:text-white transition-colors group/link"
                >
                  <Code  className="w-4 h-4" />
                  View Source
                  <ExternalLink className="w-3 h-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
