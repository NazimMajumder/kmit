"use client";
import { useState, useEffect } from "react";
import { Lightbox } from "@app/components/Lightbox";
import { galleryImages } from "@app/data/gallery-images";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

export const PhotoGallery = (props: Props) => {
  const [lightboxImageSrc, setLightboxImageSrc] = useState({
    src: "",
    index: -1,
  });
  const limit = 12;
  const sliderSettings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleClose = () => {
    setLightboxImageSrc({
      src: "",
      index: -1,
    });
  };
  const handleOpenLightBox = (src: string, index: number) => {
    setLightboxImageSrc({ src, index });
  };
  const handleNext = () => {
    const nextItemIndex =
      lightboxImageSrc.index + 1 > limit ? 0 : lightboxImageSrc.index + 1;
    const nextItem = galleryImages.find(
      (item, index) => index === nextItemIndex
    );
    if (nextItem)
      setLightboxImageSrc({ src: nextItem?.src, index: nextItemIndex });
  };
  const handlePrev = () => {
    const prevItemIndex =
      lightboxImageSrc.index - 1 < 0 ? limit - 1 : lightboxImageSrc.index - 1;
    const prevItem = galleryImages.find(
      (item, index) => index === prevItemIndex
    );
    if (prevItem)
      setLightboxImageSrc({ src: prevItem?.src, index: prevItemIndex });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleClose);
    return () => {
      document.removeEventListener("scroll", handleClose);
    };
  }, []);

  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl px-10 pt-10 mx-auto text-center">
        <h2 className="text-midnight-blue-950 text-3xl font-bold mb-2">
          Photo Gallery
        </h2>
        <p className="max-w-3xl mx-auto text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia
          id, minima mollitia possimus error. Perferendis, accusamus. Sit
          suscipit adipisci impedit quaerat qui perspiciatis numquam quia
          aliquid corporis ducimus sint voluptatem corrupti laboriosam
          aspernatur, dicta ratione quis harum autem animi eveniet id nulla vel
          nobis?
        </p>
      </div>
      <div className="px-64 py-32 w-full h-full grid grid-cols-4 gap-5 tablet:hidden">
        {galleryImages
          .filter((_, index) => index < limit)
          .map(({ id, src }, index) => (
            <div
              key={id}
              className="w-full aspect-square bg-red-100 relative rounded-md overflow-hidden group"
              onClick={() => handleOpenLightBox(src, index)}
            >
              <Image
                src={src}
                fill
                alt="gallery-image"
                style={{ objectFit: "cover" }}
                className="origin-center group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
      </div>
      <div className="px-64 py-32 w-full h-full hidden tablet:p-5 tablet:block">
        <Slider {...sliderSettings}>
          {galleryImages
            .filter((_, index) => index < limit)
            .map(({ id, src }, index) => (
              <div
                key={id}
                className="w-full aspect-square bg-red-100 relative rounded-md overflow-hidden group"
                onClick={() => handleOpenLightBox(src, index)}
              >
                <Image
                  src={src}
                  fill
                  alt="gallery-image"
                  style={{ objectFit: "cover" }}
                  className="origin-center group-hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
        </Slider>
      </div>
      <Lightbox
        src={lightboxImageSrc.src}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
