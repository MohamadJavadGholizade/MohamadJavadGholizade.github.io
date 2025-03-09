import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link to navigate within the app

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-20">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link 
            to="/contact" 
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <p className="mt-4 text-center text-gray-400">
          © {new Date().getFullYear()} MJ Scenario. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
