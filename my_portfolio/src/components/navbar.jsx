import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-950 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-blue-300">
            Welcome to My Portfolio...
          </h1>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
