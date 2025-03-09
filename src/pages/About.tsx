import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Brain, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              With 5 years of professional experience in Unity game development, I've had the
              privilege of working on diverse projects ranging from mobile games to enterprise
              VR applications. My passion lies in creating immersive experiences that push
              the boundaries of interactive entertainment.
            </p>
            <p className="text-gray-300 text-lg">
              I specialize in developing games and applications across multiple platforms,
              including VR, AR, and XR. My expertise extends to multiplayer game development,
              optimization, and implementing monetization strategies.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
              alt="Developer Setup"
              className="relative rounded-lg shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Game Development",
                description: "Expert in Unity and C# development with strong understanding of game architecture"
              },
              {
                icon: Brain,
                title: "XR Development",
                description: "Specialized in creating immersive VR/AR/XR experiences"
              },
              {
                icon: Users,
                title: "Multiplayer",
                description: "Experience with networking, real-time synchronization, and multiplayer systems"
              },
              {
                icon: Award,
                title: "Optimization",
                description: "Proficient in performance optimization and memory management"
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-800 rounded-lg border border-purple-500/20"
              >
                <skill.icon className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;