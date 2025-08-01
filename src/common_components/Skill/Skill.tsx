import React from "react";
import Image from "next/image";
import { AvatarSize, AvatarSizeKey } from "../types";

type SkillProps = {
  size: AvatarSizeKey;
  skillType: SkillType;
};

export enum SkillType {
  Github = "/github.svg",
  Angular = "/angular.png",
  Arduino = "/adruino.png",
  Couch = "/couch.png",
  Docker = "/docker.png",
  React = "/react.png",
  DotNet = "/net.png",
  NextJs = "/next.svg",
  MongoDB = "/mongodb.png",
  NodeJs = "/nodejs.png",
  Kubernetes = "/kubernetes.png",
  Postgres = "/postgresql.svg",
  Redis = "/redis.png",
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
