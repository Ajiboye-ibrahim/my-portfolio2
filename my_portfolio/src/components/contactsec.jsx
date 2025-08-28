import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.07 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Let's Work Together
          </h2>
          <p className="text-blue-100 mb-12 text-lg">
            I'm always interested in new opportunities and exciting projects
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border-1 border-amber-50 hover:shadow-lg shadow-slate-800 duration-200">
              <div className="text-2xl mb-3">📬</div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-blue-100">okikiolaajiboye203@gmail.com</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border-1 border-amber-50 hover:shadow-lg shadow-slate-800 duration-200">
              <div className="text-2xl mb-3">📠</div>
              <h3 className="text-white font-semibold mb-2">Phone Number</h3>
              <p className="text-blue-100">+234 814 548 1883</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border-1 border-amber-50 hover:shadow-lg shadow-slate-800 duration-200">
              <div className="text-2xl mb-3">🔍</div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-blue-100">OYO state, Nigeria.</p>
            </div>
          </div>
          {/* <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="mailto:okikiolaajiboye203@gmail.com"
            className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Send Message
          </a>
        </div> */}
        </motion.div>
      </div>
    </section>
  );
}
