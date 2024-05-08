"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { twMerge } from "tailwind-merge";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { Hamburger } from "@app/components/animated-icons/Hamburger";

type Props = {};

export const Header = (props: Props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollOffset = 250;

  useEffect(() => {
    const handleScroll = (e: Event) => {
      // @ts-expect-error
      setScrollTop(e?.target?.scrollingElement?.scrollTop || 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.header
      className={twMerge(
        "fixed top-0 z-50 bg-white bg-opacity-80 shadow-sm w-full backdrop-blur hover:bg-opacity-100 transition-all duration-150",
        scrollTop > scrollOffset && "bg-opacity-100 -translate-y-10"
      )}
    >
      <div className="bg-white w-full">
        <div className="bg-midnight-blue-950">
          <div className="max-w-7xl mx-auto pl-14 pr-6 flex items-center justify-between tablet:py-2 tablet:px-5 tablet:justify-center">
            <div className="flex items-center gap-5">
              <h2 className="flex items-center gap-1 text-white font-light tracking-wider">
                <EnvelopeIcon className="w-5 h-5" />
                <a href="mailto:info@abighs.org">info@abighs.org</a>
              </h2>
              <h2 className="flex text-sm items-center gap-1 text-white font-light tracking-wider">
                <PhoneIcon className="w-5 h-5" />
                <a href="tel:01401456456">01401456456</a>
              </h2>
            </div>
            <ul className="flex items-center tablet:hidden">
              <li className="px-4 py-2 hover:bg-sun-400 text-white cursor-pointer transition duration-150">
                <a>Alumni</a>
              </li>
              <li className="px-4 py-2 hover:bg-sun-400 text-white cursor-pointer transition duration-150">
                <a>Calendar</a>
              </li>
              <li className="px-4 py-2 hover:bg-sun-400 text-white cursor-pointer transition duration-150">
                <a>Portal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={twMerge(
          "relative flex items-center justify-between max-w-7xl mx-auto px-10 tablet:px-5 py-2 tablet:max-w-full tablet:mx-0",
          scrollTop > scrollOffset && "py-0"
        )}
      >
        <div className={twMerge("flex items-center gap-1")}>
          <div
            className={twMerge(
              "relative z-10 bg-transparent w-24 h-24 tablet:w-16 tablet:h-16 transition-all",
              scrollTop > scrollOffset && "w-20 h-20"
            )}
          >
            <Image
              className=""
              src="/abighs-logo-main.png"
              fill
              alt="school-logo"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col justify-center mt-2">
            <h2
              className={twMerge(
                "relative z-10 text-[20px]/5 tablet:text-base font-semibold text-midnight-blue-950 transition-all"
              )}
            >
              Anawara <span className="">Begum</span>
            </h2>
            <h4
              className={twMerge(
                "relative z-10 text-sm tablet:text-xs font-semibold text-slate-800"
              )}
            >{`Ideal Girl's High School`}</h4>
          </div>
        </div>
        <ul className="flex items-center gap-5 tablet:hidden">
          <li className="text-midnight-blue-950 font-medium hover:text-sun-500 transition">
            <a href="">Home</a>
          </li>
          <li className="text-midnight-blue-950 font-medium hover:text-sun-500 transition">
            <a href="">About Us</a>
          </li>
          <li className="text-midnight-blue-950 font-medium hover:text-sun-500 transition">
            <a href="">Admission</a>
          </li>
          <li className="text-midnight-blue-950 font-medium hover:text-sun-500 transition">
            <a href="">Contact</a>
          </li>
        </ul>
        <MobileMenu />
      </div>
    </motion.header>
  );
};

export const MobileMenu = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  return (
    <div
      className={twMerge(
        "hidden transition-all tablet:h-[calc(100dvh-40px)] tablet:w-screen tablet:absolute tablet:ml-[calc(100%-100px)] pointer-events-none tablet:flex tablet:flex-col tablet:gap-14 tablet:inset-0  tablet:z-50 tablet:p-10",
        isOpenMobileNav && "tablet:ml-0 tablet:pointer-events-auto bg-white"
      )}
    >
      <Hamburger onClick={() => setIsOpenMobileNav(!isOpenMobileNav)} />
      <ul
        className={twMerge(
          "flex flex-col items-start gap-5 text-2xl",
          !isOpenMobileNav && "hidden"
        )}
      >
        <li className="text-midnight-blue-950 font-medium hover:text-sun-500 transition">
          <a href="">Home</a>
        </li>
        <li className="text-midnight-blue-950 font-medium hover:text-sun-500 transition">
          <a href="">About Us</a>
        </li>
        <li className="text-midnight-blue-950 font-medium hover:text-sun-500 transition">
          <a href="">Admission</a>
        </li>
        <li className="text-midnight-blue-950 font-medium hover:text-sun-500 transition">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};
