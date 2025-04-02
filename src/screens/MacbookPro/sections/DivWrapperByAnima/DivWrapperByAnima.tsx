import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
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

  // Project card component
  const ProjectCard = ({ title, image }: { title: string; image: string }) => (
    <div className="flex flex-col">
      <Card className="w-full rounded-[10px_10px_0px_0px] overflow-hidden border-0">
        <CardContent className="p-0">
          <div className="w-full h-[422px] bg-[#0800ff] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt={title}
              src={image}
            />
          </div>
        </CardContent>
      </Card>
      <div className="w-full h-[69px] bg-[#ffae00] flex items-center px-3.5">
        <div className="font-['Inter',Helvetica] font-bold text-[#f8f8f8] text-2xl">
          {title}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#f8f8f8] py-8 px-4">
      <div className="container mx-auto">
        {/* Completed Projects Section */}
        <h2 className="text-[32px] font-['Inter',Helvetica] font-bold mb-8">
          <span className="text-[#db703e]">Nos</span>
          <span className="text-[#0800ff]"> réalisations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {completedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>

        {/* Ongoing Projects Section */}
        <h2 className="text-[32px] font-['Inter',Helvetica] font-bold mb-8">
          <span className="text-[#db703e]">Nos projets</span>
          <span className="text-[#0800ff]"> en cours</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
