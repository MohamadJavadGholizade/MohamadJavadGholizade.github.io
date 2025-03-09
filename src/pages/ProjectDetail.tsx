import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Code2, Layers, Cpu } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the project
  const project = Object.values(projects)
    .flat()
    .find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-2xl font-bold text-red-500">Project not found</h1>
        <Link to="/projects" className="text-purple-500 hover:text-purple-400 mt-4 inline-block">
          Back to Projects
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-purple-500 hover:text-purple-400 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
              {project.category}
            </span>
            <div className="flex gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-400">{project.description}</p>
        </motion.div>

        {/* Image Gallery with Video Support */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 relative aspect-video rounded-xl overflow-hidden group"
        >
          {currentImageIndex === 0 ? (
            // If the first "image" is the video, embed the YouTube video
            <div className="relative w-full h-full">
              <iframe
                className="w-full h-full pointer-events-auto relative z-10"
                src={project.videoUrl} // Each project now has its own video
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            // Otherwise, show the regular image
            <img
              src={project.gallery[currentImageIndex]}
              alt={`${project.title} gallery ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              style={{ height: 'calc(100% * 1.5)' }} // Set the height 1.5 times the original height
            />
          )}

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              style={{ zIndex: 20, pointerEvents: 'auto' }} // Ensure pointer-events: auto for the buttons
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              style={{ zIndex: 20, pointerEvents: 'auto' }} // Ensure pointer-events: auto for the buttons
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            {/* Dotted Thumbnail Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 rounded-full z-20">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Thumbnail Navigation (dotted) */}
        <div className="mb-4 flex gap-2 justify-center">
          {/* Button for the Video */}
          <button
            onClick={() => setCurrentImageIndex(0)} // Set to 0 for the video
            className={`w-24 h-16 rounded-md transition-colors ${currentImageIndex === 0 ? 'bg-purple-500' : 'bg-white/50'}`}
          >
            <span className="text-sm text-center">Video</span>
          </button>

          {/* Regular Thumbnail Buttons (Rectangular Shape) */}
          {project.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-24 h-16 border-white/50 bg-gray-800 text-white transition-colors ${index === currentImageIndex ? 'border-4 border-purple-500' : ''
                }`}
            >
              <img
                src={project.gallery[index]}
                alt={`${project.title} gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </button>
          ))}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Code2 className="h-6 w-6 text-purple-500" />
              Project Overview
            </h2>
            <div className="prose prose-invert">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Features & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Layers className="h-6 w-6 text-purple-500" />
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Cpu className="h-6 w-6 text-purple-500" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors duration-200"
          >
            Discuss This Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
