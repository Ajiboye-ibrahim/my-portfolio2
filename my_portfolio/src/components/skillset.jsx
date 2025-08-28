import React from "react";
import { motion } from "framer-motion";

export default function Skillset() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Python", icon: "🐍", level: 91 },
            { name: "Git", icon: "📦", level: 90 },
            { name: "Software Engineering", icon: "💻", level: 84 },
            { name: "Machine Learning", icon: "🤖", level: 88 },
            { name: "Data Analyis", icon: "📊", level: 88.5 },
            { name: "React", icon: "⚛️", level: 85 },
            { name: "HTML/CSS", icon: "🎨", level: 87 },
            { name: "Tailwind", icon: "💨", level: 87.5 },
            { name: "JavaScript", icon: "📜", level: 80 },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-900 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 mt-1">{skill.level}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
