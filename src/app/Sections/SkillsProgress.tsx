"use client"
import Card from "@/common_components/Card/Card";
import ProgressBar from "@/common_components/ProgressBar/ProgressBar";
import Skill, { SkillType } from "@/common_components/Skill/Skill";
import { Typography } from "@/common_components/Typography/Typography";

export default function SkillsProgress() {
  return (
    <Card className="bg-black-500">
      <Typography variant="h4" fontWeight="semibold">
        Skills Progress{" "}
      </Typography>
      <div className="flex flex-row justify-center items-center gap-4 mt-5">
        <div className="w-50 flex flex-col gap-2">
          <ProgressBar
            
            label="NextJs"
            value={70}
            color="blue"
          />
          <ProgressBar
          
            label="React"
            value={85}
            color="blue"
          />
          <ProgressBar
          
            label="Docker"
            value={65}
            color="green"
          />
          <ProgressBar
          
            label="Kubernetes"
            value={50}
            color="yellow"
          />
        </div>
        <div className="w-50 flex flex-col gap-2">
          <ProgressBar label="Testing (Jest, MS Test)" value={50} color="red" />
          <ProgressBar
         
            label="Postgres"
            value={65}
            color="green"
          />
          <ProgressBar
           
            label="Redis"
            value={40}
            color="yellow"
          />
          <ProgressBar
          
            label="DotNet"
            value={90}
            color="green"
          />
        </div>
      </div>
    </Card>
  );
}
