import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { socials } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";

function Socials() {
  return (
    <Card className="w-full max-w-4xl mx-4 sm:mx-auto">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl md:text-2xl text-center sm:text-left">
          Socials
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2 sm:p-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 place-items-center">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              className="transition-transform hover:scale-110 p-2 rounded-full hover:bg-accent"
            >
              <Image
                src={social.src}
                width={0}
                height={0}
                sizes="100vw"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                alt={`${social.link.split(".")[1]} social link`}
                priority
              />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Socials;
