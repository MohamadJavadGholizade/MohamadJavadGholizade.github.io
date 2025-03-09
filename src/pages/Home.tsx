import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Gamepad2, Code2, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
//import ProfilePic from '/assets/ProfilePic.jpg';
import ProfilePic from '../assets/ProfilePic.jpg';


const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a]">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 relative"
              >
                <div className="absolute inset-0 bg-purple-500 rounded-xl blur-lg opacity-50"></div>
                <div className="relative bg-gray-900 rounded-xl p-4 border border-purple-500/30">
                  <Gamepad2 className="w-full h-full text-purple-500" />
                </div>
              </motion.div>



              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                MJ
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient">
                  Gholizade
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-lg">
                Unity Department Lead crafting next-generation XR experiences and award-winning games
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-purple-600 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative group-hover:text-purple-600 flex items-center font-medium">
                  View Projects
                  <ChevronRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/30 hover:bg-gray-800/80 transition-colors duration-200 font-medium"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-purple-500" />
                  <span className="font-semibold">XR Awards 2024</span>
                </div>
                <p className="text-sm text-gray-500">Nominee for GearMaster</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-purple-500" />
                  <span className="font-semibold">5+ Years</span>
                </div>
                <p className="text-sm text-gray-500">Professional Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            {/* Colorful background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-3xl"></div>

            {/* Original image (background) */}
            <img
              src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80"
              alt="VR Development"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
            />

            {/* Profile image with fade effect */}
            <div className="absolute inset-0 flex items-center justify-center p-10"> {/* p-10 adds padding */}
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-82 h-82 object-cover border-2 border-white rounded-lg opacity-80 transition-opacity duration-500 ease-in-out hover:opacity-80" // Adding opacity and transition effects for fade
              />
            </div>

            {/* Gradient overlay on top with fade effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
          </motion.div>



        </div>
      </div>
    </div>
  );
};

export default Home;