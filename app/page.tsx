"use client";
import { Header } from "@app/components/Header";
import { HeroSlider } from "@app/components/HeroSlider";
import { AboutUs } from "@app/components/AboutUs";
import { UpcomingEvents } from "@app/components/UpcomingEvents";
import { PhotoGallery } from "@app/components/PhotoGallery";
import { Footer } from "@app/components/Footer";
import dynamic from "next/dynamic";

import { Directories } from "@app/components/Directories";

const GetInTouch = dynamic(
  () => import("@app/components/GetInTouch").then((mod) => mod.GetInTouch),
  {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col justify-between">
      <Header />
      <HeroSlider />
      <AboutUs />
      {/* <Directories /> */}
      <UpcomingEvents />
      <PhotoGallery />
      <GetInTouch />
      <Footer />
    </main>
  );
}
