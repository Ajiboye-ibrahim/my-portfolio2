import React from "react";
import githubb from "../assets/icons8-github-50.svg";
import linkedin from "../assets/icons8-linkedin-50.svg";
import twitter from "../assets/icons8-twitter-50.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-500">
          &copy; {year} Ajiboye Ibrahim. All rights reserved.
        </p>
        <p className="font-bold text-gray-500">Open to Work.</p>
        <div className="flex flex-row underline underline-offset-1 space-x-6 mt-4 justify-center md:justify-end">
          <a
            href="https://github.com/Ajiboye-ibrahim"
            className="hover:text-blue-400 transition-colors"
          >
            <img src={githubb} alt="Github" className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/ibrahim-ajiboye-492958231">
            <img src={linkedin} alt="Github" className="w-8 h-8" />
          </a>
          <a href="https://x.com/Ibsquad1">
            <img src={twitter} alt="Github" className="w-8 h-8" />
          </a>
        </div>
        <hr className=" text-gray-600 mx-5 my-5" />
        <div className="text-center my-1">
          <a href="" className="opacity-15">
            privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
