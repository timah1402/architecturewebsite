"use client";

import React, { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  name: string;
  cloudinaryFolder: string;
  description: string;
  thumbnailImage: string; // First image to show as thumbnail
  imageCount: number;
}

interface ProjectGalleryProps {
  projects: Project[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesList, setImagesList] = useState<string[]>([]);
  const [thumbnails, setThumbnails] = useState<{ [key: string]: string }>({});
  const [imageCounts, setImageCounts] = useState<{ [key: string]: number }>({});

  // Function to get all images from a Cloudinary folder
  const getProjectImages = async (folder: string) => {
    try {
      const response = await fetch(
        `/api/cloudinary-images?folder=${folder}`
      );
      const data = await response.json();
      return data.images || [];
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  };

  // Fetch thumbnails (first image) and count for each project on mount
  useEffect(() => {
    const fetchThumbnails = async () => {
      const thumbs: { [key: string]: string } = {};
      const counts: { [key: string]: number } = {};

      for (const project of projects) {
        const images = await getProjectImages(project.cloudinaryFolder);
        if (images.length > 0) {
          thumbs[project.id] = images[0];
          counts[project.id] = images.length;
        }
      }

      setThumbnails(thumbs);
      setImageCounts(counts);
    };

    fetchThumbnails();
  }, [projects]);

  const openProject = async (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    const images = await getProjectImages(project.cloudinaryFolder);
    setImagesList(images);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setImagesList([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === imagesList.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imagesList.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const thumbnail = thumbnails[project.id];
          const imageCount = imageCounts[project.id] || 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative bg-gray-200">
                  {thumbnail ? (
                    <CldImage
                      src={thumbnail}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      Chargement...
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  {imageCount > 0 && (
                    <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      {imageCount} photo{imageCount > 1 ? "s" : ""}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal for viewing all project images */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div
              className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {imagesList.length > 0 ? (
                <>
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative w-full h-full"
                  >
                    <CldImage
                      src={imagesList[currentImageIndex]}
                      alt={`${selectedProject.name} - Image ${
                        currentImageIndex + 1
                      }`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </motion.div>

                  {imagesList.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                      >
                        <ChevronLeft size={32} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                      >
                        <ChevronRight size={32} />
                      </button>

                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                        {currentImageIndex + 1} / {imagesList.length}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="text-white text-xl">Chargement...</div>
              )}
            </div>

            <div className="absolute top-4 left-4 text-white">
              <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
              <p className="text-sm opacity-75">{selectedProject.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
