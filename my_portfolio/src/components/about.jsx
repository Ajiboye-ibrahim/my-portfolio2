import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <motion.div
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.07 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I am a Data Scientist and Software Engineer passionate about
                building scalable applications and solving complex problems with
                data and AI. With experience in Flask, FastAPI, and React.js, I
                develop intuitive web applications backed by robust APIs. My
                background also spans hardware engineering, giving me a unique
                perspective on bridging software with physical systems. I enjoy
                experimenting, learning new technologies, and paying attention
                to the smallest details to deliver high-quality solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                When I'm not coding you can find me exploring new technologies,
                working with electronic hardware components, contributing to
                open source projects or sharing knowledge with the developer
                community.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">8+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-950 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">What I Do</h3>
              <ul className="space-y-2">
                <li>• Data Science</li>
                <li>• Software Development</li>
                <li>• Full-Stack Web Development</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
