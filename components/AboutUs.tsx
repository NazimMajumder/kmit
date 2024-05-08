import { SpaceDoodle } from "@app/components/svg/SpaceDoodle";
import Image from "next/image";
import React from "react";

type Props = {};

export const AboutUs = (props: Props) => {
  return (
    <div className="relative bg-slate-50">
      {/* <div className="left-20 top-20 z-10 flex w-96 aspect-square absolute text-slate-100 -rotate-[30deg]">
        <SpaceDoodle />
      </div> */}
      <div className="flex tablet:flex-col tablet:gap-8 items-center justify-between max-w-7xl mx-auto px-10 py-40 relative z-20 tablet:p-5">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="text-3xl font-bold tablet:text-2xl tablet:font-medium text-midnight-blue-950">{`Anwara Begum Ideal Girl's High School`}</h2>
          <p className="text-gray-800 tablet:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quasi architecto, nulla eaque dolor dolores aperiam possimus a
            pariatur expedita rerum officia, similique iste, nostrum iusto
            voluptate sapiente quisquam non consequuntur ullam esse culpa
            debitis numquam harum. Illum hic laboriosam architecto ipsa,
            nesciunt mollitia recusandae minima dolorum tenetur nisi esse
            cupiditate exercitationem dignissimos atque fugit, obcaecati,
            reiciendis quae ad vel?
          </p>
        </div>
        <div className="w-full">
          <div className="relative w-[450px] h-[540px] tablet:w-full tablet:h-[460px] rounded-xl overflow-hidden">
            <Image
              src="/about-us/about-us.jpeg"
              fill
              alt="about-us-image"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute w-full h-52 tablet:h-max bottom-0 px-8 py-14 tablet:pb-4 tablet:px-4 bg-midnight-blue-950/80 z-40 [clip-path:polygon(0_20%,_101%_0,_100%_100%,_0%_100%)]">
              <h2 className="text-sun-400 text-2xl font-bold">Our Mission</h2>
              <p className="text-white font-light leading-5 tablet:mt-1">
                {`To educate and uplift the young girls of our village, especially those with limited
                opportunities. At Anwara Begum Ideal Girl's High School, we
                believe that every girl deserves access to education, regardless
                of her background or circumstances.
              `}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
