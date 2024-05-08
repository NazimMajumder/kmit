"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { GoogleMapComponent } from "@app/components/GoogleMap";
// END: Preserve spaces to avoid auto-sorting

type Props = {};

export const GetInTouch = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-5 w-full px-20 py-10 tablet:p-5 ">
      <div className="w-full flex tablet:flex-col items-center justify-center gap-20 max-w-7xl tablet:gap-10">
        <div className="py-10 px-14 flex flex-col gap-4 bg-midnight-blue-50 rounded-lg shadow-lg shadow-slate-400/10">
          <div className="flex items-center gap-1 mb-4">
            <MapPinIcon className="w-10 h-10 text-sun-400 animate-bounce" />
            <h2 className="text-2xl font-bold shrink-0 text-midnight-blue-950">
              Get In Touch
            </h2>
          </div>
          <p>
            <strong>Address:</strong>{" "}
            <span className="text-sm font-medium">
              আনোয়ারা বেগম আদর্শ বালিকা উচ্চ বিদ্যালয় সড়ক, দক্ষিন আধার মানিক,
              ৮ নং রাধানগর ইউনিয়ন, ছাগলনাইয়া, ফেনী -৩৯০০
            </span>
          </p>
          <p>
            <strong>Email:</strong> info@abighs.org
          </p>
          <p>
            <strong>Phone:</strong> 01401456456
          </p>
        </div>
        <div className="p-2 grow w-full bg-midnight-blue-50 rounded">
          <GoogleMapComponent />
          {/* <MapContainer
            preferCanvas={true}
            center={[23.015876208821936, 91.5237706576716]}
            zoom={11}
            scrollWheelZoom={true}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[23.015876208821936, 91.5237706576716]}>
              <Popup>
                <div className="p-2">
                  <h2>{`Anwara Begum Ideal Girl's High School`}</h2>
                </div>
              </Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
    </div>
  );
};
