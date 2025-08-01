import React from 'react'
import { AvatarSize, AvatarSizeKey } from '../types';
import Image from "next/image"

type AvatarProps = {
  src: string,
  alt: string,
  size: AvatarSizeKey
};

function Avatar({ src, alt, size } : AvatarProps) {
  return (
   <Image src={src} alt={alt} width={AvatarSize[size]} className='rounded-full' height={AvatarSize[size]}/>
  )
}

export default Avatar