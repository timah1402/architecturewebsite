import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the service data for mapping
const services = [
  {
    id: 1,
    title: "Constructions neuves",
    description: "Maison individuelle, immeubles, bâtiments industriels",
    image: "/construction-1.png",
    alt: "Construction",
  },
  {
    id: 2,
    title: "Rénovations",
    description: "Mise aux normes, agrandissement, réhabilitation",
    image: "/innovations-1.png",
    alt: "Innovations",
  },
  {
    id: 3,
    title: "Promotion immobilière",
    description: "Vente de terrains, d'appartements et de villa déjà construis",
    image: "/promotion-imm-1.png",
    alt: "Promotion imm",
  },
];

export const FrameWrapperByAnima = ()=> {
  return (
    <section className="relative w-full py-16 px-8 bg-[#f8f8f8]">
      <div className="max-w-[1574px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col">
              <Card className="rounded-[20px] overflow-hidden border-none">
                <CardContent className="p-0">
                  <div className="relative h-[507px] w-full">
                    <img
                      className="w-full h-full object-cover"
                      alt={service.alt}
                      src={service.image}
                    />
                  </div>
                </CardContent>
              </Card>
              <h2 className="mt-4 font-['Inter',Helvetica] font-bold text-[#db703e] text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 font-['Inter',Helvetica] font-normal text-black text-2xl">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
