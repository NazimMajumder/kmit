"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

import { SwiperContainer, register } from "swiper/element/bundle";
import { heroBannerImages } from "@app/data/slider-data";

type Props = {};

export const HeroSlider = (props: Props) => {
  const swiperRef = useRef<SwiperContainer>(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
    };

    if (swiperRef.current) {
      // Assign it to swiper element
      Object.assign(swiperRef.current, params);

      // initialize swiper
      swiperRef.current.initialize();
    }
  }, []);
  return (
    <div className="w-full h-full">
      <div className="flex justify-center absolute inset-0 tablet:top-4 from-black/80 to-transparent from-25% to-50% tablet:from-30% tablet:to-60% bg-gradient-to-t z-20">
        <div className="flex flex-col gap-3 tablet:gap-1 h-fit w-full absolute bottom-16 tablet:bottom-0 tablet:p-5 px-10 max-w-7xl">
          <h2 className="text-4xl tablet:text-2xl text-midnight-blue-800 font-medium">
            Empowering Girls Through Education
          </h2>
          {/* <p className="text-white text-lg/6 max-w-xl">
            {`At Anwara Begum Ideal Girl's High School, we believe in unlocking
            the potential of every girl, providing quality education to those in
            need, and shaping future leaders.`}
          </p> */}
          <p className="text-white tablet:text-sm max-w-xl">
            {`At Anwara Begum Ideal Girl's High School, we are committed to
            empowering girls through education. Nestled in the heart of
            Chagolnaiya, Feni, our school serves as a beacon of hope for girls
            from surrounding villages, especially those with limited access to
            educational opportunities.`}
          </p>
          <button className="text-white hover:bg-amber-500 bg-sun-500 px-5 py-2.5 w-fit transition mt-4 tablet:mt-2">
            Learn More
          </button>
        </div>
      </div>
      <swiper-container ref={swiperRef} autoplay="true" loop="true">
        {heroBannerImages.map(({ id, alt, src }) => (
          <swiper-slide key={id}>
            <div className="relative z-0 w-full h-screen">
              {/* <Image
                src={src}
                fill
                alt={alt}
                style={{ objectFit: "cover", filter: "blur(20px)" }}
              /> */}
              <Image src={src} fill alt={alt} style={{ objectFit: "cover" }} />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};
