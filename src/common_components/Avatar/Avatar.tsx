import React from 'react'
import { AvatarSize, AvatarSizeKey } from '../types';
import Image from "next/image"

type AvatarProps = {
  src: string,
  alt: string,
  size: AvatarSizeKey
  className?: string
};

function Avatar({ src, alt, size, className } : AvatarProps) {
  return (
   <Image src={src} alt={alt} width={AvatarSize[size]} className={`rounded-full ${className}`} height={AvatarSize[size]} unoptimized/>
  )
}

export default Avatar