"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
type LightboxProps = {
  open?: boolean;
  src: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export const Lightbox = ({ src, onClose, onNext, onPrev }: LightboxProps) => {
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  const handleNext = () => {
    setIsNext(true);
    if (typeof onNext === "function") onNext();
  };
  const handlePrev = () => {
    setIsNext(false);
    if (typeof onPrev === "function") onPrev();
  };

  useEffect(() => {
    if (src) {
      //   document.body.style.overflow = "hidden";
      return;
    }
    // document.body.style.overflow = "visible";
  }, [src]);

  return (
    <AnimatePresence initial={false}>
      {src && (
        <motion.div
          className="fixed z-[500] inset-0 bg-black/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute right-20 top-10 cursor-pointer tablet:right-10"
            onClick={onClose}
          >
            <XMarkIcon className="w-10 h-10 text-white" />
          </div>
          <div
            className="absolute z-50 left-20 tablet:left-0 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronLeftIcon className="w-10 h-10 text-white" />
          </div>
          <div
            className="absolute z-50 right-20 tablet:right-0 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRightIcon className="w-10 h-10 text-white" />
          </div>

          <motion.div
            key={src}
            className="w-1/2 aspect-video relative tablet:w-full "
            initial={{ x: isNext ? 500 : -500 }}
            animate={{ x: 0 }}
            exit={{ x: isNext ? -500 : 500 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Image
              src={src}
              fill
              alt="gallery-image"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
