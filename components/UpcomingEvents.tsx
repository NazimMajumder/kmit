import { upcomingEvents } from "@app/data/upcoming-events";
import Image from "next/image";
import React from "react";

type Props = {};

export const UpcomingEvents = (props: Props) => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-10 flex flex-col items-center gap-10">
        <h2 className="text-center text-3xl font-bold text-sun-400">
          Upcoming Events
        </h2>
        <div className="flex tablet:flex-col items-center justify-center gap-8 px-28 tablet:px-5">
          {upcomingEvents.map(({ id, title, description, image }) => (
            <EventsCard
              key={id}
              src={image}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type EventsCardProps = {
  src: string;
  title: string;
  description: string;
};
const EventsCard = ({ src, title, description }: EventsCardProps) => (
  <div className="flex flex-col gap-2 p-2">
    <div className="relative w-full h-72 min-w-48 mb-5">
      <Image src={src} alt="event-images" fill style={{ objectFit: "cover" }} />
    </div>
    <h2 className="text-lg font-medium">{title}</h2>
    <p className="text-sm">{description}</p>
  </div>
);
