"use client";

import React from "react";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const FrameWrapperByAnima = ()=> {
  return (
    <section className="relative w-full py-20 px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-[1574px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#db703e] to-[#0800ff] bg-clip-text text-transparent">
              Nos Services
            </span>
          </h2>
          <p className="text-xl text-gray-600">Excellence et innovation dans chaque projet</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="flex flex-col group"
            >
              <Card className="rounded-3xl overflow-hidden border-none shadow-xl hover-lift bg-white relative">
                <CardContent className="p-0">
                  <div className="relative h-[450px] w-full overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                      alt={service.alt}
                      src={service.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardContent>
              </Card>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 font-bold text-[#db703e] text-3xl md:text-4xl"
              >
                {service.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-3 text-gray-700 text-lg md:text-xl leading-relaxed"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
