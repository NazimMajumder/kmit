"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  onClick: () => void;
};

export const Hamburger = (props: Props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    if (typeof props.onClick === "function") props.onClick();
  };
  return (
    <div className="flex flex-col gap-1.5 pointer-events-auto" onClick={toggle}>
      <div
        className={twMerge(
          "h-0.5 bg-midnight-blue-950 w-8 origin-center relative top-0 transition-all duration-300 delay-200",
          open && "rotate-45 top-2"
        )}
      ></div>
      <div
        className={twMerge(
          "h-0.5 bg-midnight-blue-950 w-8 relative transition-all duration-300 delay-200",
          open && "-ml-10 opacity-0"
        )}
      ></div>
      <div
        className={twMerge(
          "h-0.5 bg-midnight-blue-950 w-8 origin-center relative bottom-0 transition-all duration-300 delay-200",
          open && "-rotate-45 bottom-2"
        )}
      ></div>
    </div>
  );
};
