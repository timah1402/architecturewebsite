"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectGallery } from "../../../../components/ProjectGallery";

const projects = [
  {
    id: "filmera",
    name: "Filmera",
    cloudinaryFolder: "filmera",
    description: "Projet résidentiel moderne",
    thumbnailImage: "", // Will be fetched automatically
    imageCount: 0, // Will be updated when images are fetched
  },
  {
    id: "mr-cisse",
    name: "Résidence Mr Cissé",
    cloudinaryFolder: "mr-cisse",
    description: "Villa de standing",
    thumbnailImage: "",
    imageCount: 0,
  },
  {
    id: "mr-niang",
    name: "Résidence Mr Niang",
    cloudinaryFolder: "mr-niang",
    description: "Construction contemporaine",
    thumbnailImage: "",
    imageCount: 0,
  },
  {
    id: "mr-soumare",
    name: "Résidence Mr Soumaré",
    cloudinaryFolder: "mr-soumare",
    description: "Architecture moderne",
    thumbnailImage: "",
    imageCount: 0,
  },
  {
    id: "mr-youm",
    name: "Résidence Mr Youm",
    cloudinaryFolder: "mr-youm",
    description: "Projet haut de gamme",
    thumbnailImage: "",
    imageCount: 0,
  },
  {
    id: "mr-mbow",
    name: "Résidence Mr Mbow",
    cloudinaryFolder: "mr-mbow",
    description: "Villa familiale",
    thumbnailImage: "",
    imageCount: 0,
  },
];

export const FrameByAnima = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#db703e] to-[#0800ff] bg-clip-text text-transparent">
              Nos Réalisations
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Découvrez nos projets de construction et rénovation
          </p>
        </motion.div>

        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
};
