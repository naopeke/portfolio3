"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "It's me !!",
    designation: "From Osaka, Japan",
    image:
      "https://i.postimg.cc/mDVpvgh3/56b3e757-9025-4fb6-9dde-8d615f75161a.jpg",
  },
];
 
export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

