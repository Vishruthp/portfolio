"use client"
import Card from "@/common_components/Card/Card";
import ProgressBar from "@/common_components/ProgressBar/ProgressBar";
import Skill, { SkillType } from "@/common_components/Skill/Skill";
import { Typography } from "@/common_components/Typography/Typography";
import React from "react";

type SkillData = {
  label: string;
  value: number;
  type: SkillType;
  color: "blue" | "green" | "yellow" | "red" | "accent";
};

type Category = {
  title: string;
  skills: SkillData[];
};

const skillCategories: Category[] = [
  {
    title: "Frontend Development",
    skills: [
      { label: "React", value: 90, type: SkillType.React, color: "blue" },
      { label: "NextJs", value: 85, type: SkillType.NextJs, color: "accent" },
      { label: "Angular", value: 75, type: SkillType.Angular, color: "red" },
    ],
  },
  {
    title: "Backend & Devops",
    skills: [
      { label: "DotNet Core", value: 95, type: SkillType.DotNet, color: "blue" },
      { label: "NodeJs", value: 80, type: SkillType.NodeJs, color: "green" },
      { label: "Docker", value: 85, type: SkillType.Docker, color: "blue" },
      { label: "Kubernetes", value: 70, type: SkillType.Kubernetes, color: "accent" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { label: "Postgres", value: 85, type: SkillType.Postgres, color: "accent" },
      { label: "Redis", value: 75, type: SkillType.Redis, color: "red" },
      { label: "MongoDB", value: 65, type: SkillType.MongoDB, color: "green" },
    ],
  },
];

export default function SkillsProgress() {
  return (
    <Card className="overflow-hidden">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <Typography variant="h3" fontWeight="semibold" className="text-accent-secondary">
              Technical Expertise
            </Typography>
            <p className="text-gray-500 text-sm">Specialized in building scalable applications with modern technologies.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6 p-5 transition-colors">
              <Typography variant="h6" fontWeight="bold" className="text-white uppercase tracking-widest text-[10px]">
                {category.title}
              </Typography>
              
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-1 rounded-lg bg-white/5">
                        <Skill skillType={skill.type} size="sm" />
                      </div>
                      <span className="text-sm font-medium text-white">{skill.label}</span>
                    </div>
                    {/* <ProgressBar 
                      value={skill.value} 
                      color={skill.color} 
                      showValue={false}
                    /> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
