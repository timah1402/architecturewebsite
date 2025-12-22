"use client";

import React from "react";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { ElementByAnima } from "./sections/ElementByAnima/ElementByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";
import Footer from "./sections/Footer/Footer";
import { CldImage } from "next-cloudinary";

export const MacbookPro = () => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full overflow-hidden">
        {/* Navigation et section d'accueil */}
        <ElementByAnima />

        <CldImage
          src="my-uploaded-image" // This is the Public ID from Cloudinary
          width="500"
          height="500"
          crop={{
            type: "auto",
            source: true,
          }}
        />
        {/* Sections avec IDs pour le défilement */}
        <div id="projets">
          <FrameByAnima />
        </div>

        <div id="services">
          <FrameWrapperByAnima />
        </div>

        <div id="a-propos">
          <DivWrapperByAnima />
        </div>

        <div id="contact">
          <OverlapWrapperByAnima />
        </div>
      </div>
    </div>
  );
};
