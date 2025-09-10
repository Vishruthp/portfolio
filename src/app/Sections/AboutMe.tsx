"use client"
import Skill, { SkillType } from "@/common_components/Skill/Skill";
import { Typography } from "@/common_components/Typography/Typography";
import React from "react";

function AboutMe() {
  const mySkills = [
    {
      skillName: "Dotnet",
      skillType: SkillType.DotNet,
    },
    {
      skillName: "Angular",
      skillType: SkillType.Angular,
    },
    {
      skillName: "React",
      skillType: SkillType.React,
    },
    {
      skillName: "NextJs",
      skillType: SkillType.NextJs,
    },
    {
      skillName: "Docker",
      skillType: SkillType.Docker,
    },
    {
      skillName: "Kubernetes",
      skillType: SkillType.Kubernetes,
    },
    {
      skillName: "Postgres",
      skillType: SkillType.Postgres,
    },
    {
      skillName: "Redis",
      skillType: SkillType.Redis,
    },
  ];

  return (
    <div>
      <div>
        <Typography variant="h3" fontWeight="medium">
          About Me
        </Typography>
        <p>
          Seasoned Software Developer with a strong background of 8 years in
          developing high-quality web, cross-platform applications and
          microservices using diverse technologies such as Angular, React, .Net
          Core, Flutter, NextJs, Postgres, and Redis. Experienced in leveraging
          industry-standard tools like Visual Studio, VS Code, Android Studio,
          XCode, Git, TFS, Docker and Kubernetes.
        </p>
        <br />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row p-2 bg-white rounded-full gap-2 items-center">
          <Typography variant="h5" fontWeight="medium" className="text-black">
            Skills
          </Typography>
          {mySkills.map((item, index) => {
            return <Skill key={index} skillType={item.skillType} size="md" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
