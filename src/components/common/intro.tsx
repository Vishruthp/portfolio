"use client";
import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { strengths } from "@/constants/constants";
import Link from "next/link";
import { init } from "ityped";

function Intro() {
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        strings: ["a gamer", "a designer", "a developer", "an inventor"],
      });
    }
  }, []);
  return (
    <Card className="w-full max-w-4xl mx-4 sm:mx-auto p-2 sm:p-4 md:p-6">
      <CardContent className="p-0 sm:p-2">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
            <AvatarImage src="./assets/profile.png" alt="Profile" />
          </Avatar>
          <div className="flex flex-col space-y-3 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Hi, <span className="text-white-500">Vishruth here</span>
            </h1>
            <div className="space-y-2">
              <h4 className="text-sm sm:text-base md:text-lg font-medium leading-none">
                <span className="text-green-500" ref={textRef}></span>
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Trying to contribute to open source and learn new things.
              </p>
              <Link
                href="mailto:vishrutppatil@gmail.com"
                className="text-sm sm:text-base text-sky-600 hover:text-sky-700 transition-colors"
              >
                vishrutppatil@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm sm:text-base font-extrabold">My Strengths</p>
          <Separator className="my-4" />
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 items-center justify-items-center">
            {strengths.map((strength, index) => (
              <Avatar
                key={index}
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <AvatarImage src={strength} alt={`Strength ${index + 1}`} />
              </Avatar>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Intro;
