import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            JS
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-300">
          John <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Smith</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl animate-fade-in-up animation-delay-600">
          Full-Stack Developer & UI/UX Designer crafting digital experiences that make a difference
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-900">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex space-x-6 mb-16 animate-fade-in-up animation-delay-1200">
          <a href="#" className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300">
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-300 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;