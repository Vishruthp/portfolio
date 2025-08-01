import React from "react";
import Image from "next/image";
import { AvatarSize, AvatarSizeKey } from "../types";

type SkillProps = {
  size: AvatarSizeKey;
  skillType: SkillType;
};

export enum SkillType {
  Github = "/assets/github.svg",
  Angular = "/assets/angular.png",
  Arduino = "/assets/adruino.png",
  Couch = "/assets/couch.png",
  Docker = "/assets/docker.png",
  React = "/assets/react.png",
  DotNet = "/assets/net.png",
  NextJs = "/assets/next.svg",
  MongoDB = "/assets/mongodb.png",
  NodeJs = "/assets/nodejs.png",
  Kubernetes = "/assets/kubernetes.png",
  Postgres = "/assets/postgresql.svg",
  Redis = "/assets/redis.png",
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
    />
  );
}

export default Skill;
