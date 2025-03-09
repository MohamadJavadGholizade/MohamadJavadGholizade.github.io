import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, categoryIcons } from '../data/projects';

const Projects = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
        </motion.div>

        <div className="border-t border-purple-500/30 my-12"></div>
        {Object.entries(projects).map(([category, categoryProjects], categoryIndex) => (
          <React.Fragment key={category}>
            {/* Add separator, but NOT before the first category */}
            {categoryIndex !== 0 && (
              <div className="relative my-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-purple-500/50"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-gray-900 px-4 text-gray-400 text-xl uppercase">{category}</span>
                </div>
              </div>
            )}

            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center space-x-3 mb-8">
                {categoryIcons[category as keyof typeof categoryIcons] &&
                  React.createElement(categoryIcons[category as keyof typeof categoryIcons], {
                    className: "h-6 w-6 text-purple-500",
                  })}

                <h2 className="text-2xl font-bold text-white">{category} Projects</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/20"
                  >
                    {/* Main Project Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.mainImage}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                      {/* Project Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-800/80 rounded-md text-xs text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preview Images */}
                    <div className="grid grid-cols-3 gap-2 p-2">
                      {project.previewImages.map((img, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + imgIndex * 0.1 }}
                          className="relative aspect-video rounded-lg overflow-hidden"
                        >
                          <img
                            src={img}
                            alt={`${project.title} preview ${imgIndex + 1}`}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>

                    <div className="p-4">
                      <Link
                        to={`/projects/${project.id}`}
                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors duration-200"
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;