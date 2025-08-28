import React from "react";
import { ReactTyped } from "react-typed";
import myprofile from "../assets/myprofile1.jpg";

export default function Hero() {
  return (
    <section className="pt-22 pb-20 px-4 bg-gradient-to-br from-gray-950 to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="w-32 h-32 mx-auto mb-8 rounded-full p-[3px] bg-gradient-to-r from-blue-500 to-purple-600 
                        transition-transform duration-300 shadow-lg shadow-blue-500/50 hover:scale-105"
        >
          <img
            src={myprofile}
            alt="Ibrahim's picture"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
          Hi, I'm{" "}
          <span className="text-5xl font-serif text-blue-400">Ibrahim.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          A passionate{" "}
          <ReactTyped
            strings={[
              "data scientist.",
              "software engineer.",
              "web developer.",
              "AI/ML enthusiast.",
            ]}
            typeSpeed={70}
            backSpeed={80}
            backDelay={800}
            loop
          />
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-gradient-to-br from-gray-500 to-blue-400 text-white px-8 py-3 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="font-bold border-2 border-white text-white px-8 py-3 rounded-lg 
            hover:bg-blue-300 hover:text-gray-800 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
