import React from "react";
import { motion } from "framer-motion";

export default function project() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl underline underline-offset-1 font-bold text-center text-gray-800 mb-12">
          Some of My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "my Portfolio Website",
              description:
                "Responsive portfolio built with modern web technologies",
              tech: ["React", "Tailwindcss", "Vite", "flask"],
              image: "💼",
            },
            {
              title: "Weather Dashboard",
              description:
                "Real-time weather information with beautiful visualizations",
              tech: ["JavaScript", "API", "CSS"],
              image: "🌤️",
            },
            {
              title: "Chat Application",
              description: "Real-time messaging app with user authentication",
              tech: ["Socket.io", "React", "Flask"],
              image: "💬",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.07 }}
            >
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all "
              >
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex space-x-3">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View Demo
                </button>
                <button className="text-gray-600 hover:text-gray-800 font-medium">
                  GitHub
                </button>
              </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
