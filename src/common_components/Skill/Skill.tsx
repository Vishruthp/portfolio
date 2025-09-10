import React from "react";
import Image from "next/image";
import { AvatarSize, AvatarSizeKey } from "../types";

type SkillProps = {
  size: AvatarSizeKey;
  skillType: SkillType;
};

export enum SkillType {
  Github = "/portfolio/assets/github.svg",
  Angular = "/portfolio/assets/angular.png",
  Arduino = "/portfolio/assets/adruino.png",
  Couch = "/portfolio/assets/couch.png",
  Docker = "/portfolio/assets/docker.png",
  React = "/portfolio/assets/react.png",
  DotNet = "/portfolio/assets/net.png",
  NextJs = "/portfolio/assets/next.svg",
  MongoDB = "/portfolio/assets/mongodb.png",
  NodeJs = "/portfolio/assets/nodejs.png",
  Kubernetes = "/portfolio/assets/kubernetes.png",
  Postgres = "/portfolio/assets/postgresql.svg",
  Redis = "/portfolio/assets/redis.png",
}

function Skill({ size, skillType }: SkillProps) {
  const altText = skillType
    .replace(/^\/|\.svg$|\.png$/g, "")
    .replace(/([A-Z])/g, " $1")
    .trim();
  return (
    <Image
      src={skillType}
      alt={altText}
      width={AvatarSize[size]}
      height={AvatarSize[size]}
      unoptimized
    />
  );
}

export default Skill;
