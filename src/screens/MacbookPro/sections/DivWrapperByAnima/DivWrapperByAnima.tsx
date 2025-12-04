"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = ()=> {
  // Project data for completed projects
  const completedProjects = [
    { id: 1, title: "Projet Monsieur Mbow", image: "/2-5.png" },
    { id: 2, title: "Projet R+1 Diourbel", image: "/bb-1.png" },
    { id: 3, title: "Projet Cité du Futur", image: "/10-1.png" },
    {
      id: 4,
      title: "Projet Pathe P2",
      image: "/whatsapp-image-2024-12-02---22-18-06-f010785d-1.png",
    },
    {
      id: 5,
      title: "P5",
      image: "/whatsapp-image-2024-12-02---22-18-07-cc0b3549-1.png",
    },
    { id: 6, title: "Projet Mr Diallo Thiès", image: "/image-2-1.png" },
    {
      id: 7,
      title: "Mosquee",
      image: "/whatsapp-image-2024-12-02---22-18-06-6faf3967-1.png",
    },
    {
      id: 8,
      title: "P1",
      image: "/whatsapp-image-2024-12-02---22-18-04-6c38ce2e-1.png",
    },
    {
      id: 9,
      title: "P3",
      image: "/whatsapp-image-2024-12-02---22-18-06-3a42b280-1.png",
    },
    {
      id: 10,
      title: "P4",
      image: "/whatsapp-image-2024-12-02---22-18-07-ce8e0c35-1.png",
    },
  ];

  // Project data for ongoing projects
  const ongoingProjects = [
    { id: 1, title: "Mosquee de Kaolack", image: "/2-6.png" },
    { id: 2, title: "Bambilor Villa  R+1", image: "/h-1.png" },
    { id: 3, title: "Projet M. Fall 02", image: "/image-3---photo-1.png" },
    { id: 4, title: "Projet M. Fall 01", image: "/r-3-2---photo-1.png" },
  ];

  // Project card component with modern design
  const ProjectCard = ({ title, image }: { title: string; image: string }) => (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col group"
    >
      <Card className="w-full rounded-2xl overflow-hidden border-none shadow-xl bg-white">
        <CardContent className="p-0">
          <div className="w-full h-[380px] overflow-hidden relative">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
              alt={title}
              src={image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-bold text-white text-2xl drop-shadow-lg">
                {title}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Completed Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-[#db703e] to-[#0800ff] bg-clip-text text-transparent">
              Nos Réalisations
            </span>
          </h2>
          <p className="text-center text-gray-600 text-xl mb-12">
            Des projets achevés avec excellence et passion
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {completedProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                image={project.image}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Ongoing Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-[#0800ff] to-[#db703e] bg-clip-text text-transparent">
              Projets en Cours
            </span>
          </h2>
          <p className="text-center text-gray-600 text-xl mb-12">
            L'avenir se construit aujourd'hui
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ongoingProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                image={project.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
