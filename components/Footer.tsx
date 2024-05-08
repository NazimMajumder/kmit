import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="h-96 tablet:h-max bg-midnight-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-10 py-4 flex flex-col h-full tablet:px-5">
        <div className="grid grid-cols-3 relative py-20 tablet:grid-cols-1 tablet:py-0">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl tablet:text-lg mb-2">Explore Us</h2>
              <ul>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">Events</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">Parent Club</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">LMS</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl tablet:text-lg mb-2">Quick Links</h2>
              <ul>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">Events</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">Parent Club</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">LMS</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="justify-self-end tablet:justify-self-start col-span-2 tablet:my-6">
            <h2 className="text-3xl tablet:text-2xl  mb-2">{`Let's Keep In Touch`}</h2>
            <p className="max-w-80 text-sm tablet:text-xs ">
              আনোয়ারা বেগম আদর্শ বালিকা উচ্চ বিদ্যালয় সড়ক, দক্ষিন আধার মানিক,
              ৮ নং রাধানগর ইউনিয়ন, ছাগলনাইয়া, ফেনী -৩৯০০
            </p>
            <ul className="flex items-center gap-2 mt-6 tablet:mx-auto tablet:w-fit">
              <li>
                <a
                  href="https://www.facebook.com/share/BjPXi8cmznxDRgir/?mibextid=K35XfP"
                  target="_blank"
                  className="font-light"
                >
                  <Image
                    src="/facebook-circle.svg"
                    width={24}
                    height={24}
                    alt="facebook-logo"
                    style={{ filter: "invert(100%)" }}
                  />
                </a>
              </li>
              <li>
                <a href="mailto:info@abighs.org" className="font-light">
                  <EnvelopeIcon className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="tel:01401456456" className="font-light">
                  <PhoneIcon className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-sun-400 h-[1px] w-full"></div>
        </div>
        <div className="flex items-center justify-center grow">
          <h2 className="text-center mt-4 tablet:mt-2 tablet:text-sm">
            Copyright © 2023 Anwara Begum Idel Girl&apos;s High School. All
            Rights Reserved
          </h2>
        </div>
      </div>
    </footer>
  );
};
