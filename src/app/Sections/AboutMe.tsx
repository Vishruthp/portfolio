"use client"
import Skill, { SkillType } from "@/common_components/Skill/Skill";
import { Typography } from "@/common_components/Typography/Typography";
import React from "react";

function AboutMe() {
  const mySkills = [
    { skillName: "Dotnet", skillType: SkillType.DotNet },
    { skillName: "Angular", skillType: SkillType.Angular },
    { skillName: "React", skillType: SkillType.React },
    { skillName: "NextJs", skillType: SkillType.NextJs },
    { skillName: "Docker", skillType: SkillType.Docker },
    { skillName: "Kubernetes", skillType: SkillType.Kubernetes },
    { skillName: "Postgres", skillType: SkillType.Postgres },
    { skillName: "Redis", skillType: SkillType.Redis },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Typography variant="h3" fontWeight="semibold" className="text-accent-secondary">
          About Me
        </Typography>
        <p className="text-gray-400 leading-relaxed text-lg">
          Seasoned Software Developer with a strong background of <span className="text-white font-medium">{new Date().getFullYear() - 2017} years</span> in
          developing high-quality web, cross-platform applications and
          microservices using diverse technologies such as Angular, React, .Net
          Core, Flutter, NextJs, Postgres, and Redis. Experienced in leveraging
          industry-standard tools like Visual Studio, VS Code, Android Studio,
          XCode, Git, TFS, Docker and Kubernetes.
        </p>
      </div>
      
    </div>
  );
}

export default AboutMe;
