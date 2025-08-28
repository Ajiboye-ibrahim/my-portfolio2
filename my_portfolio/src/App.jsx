import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skillset from "./components/skillset";
import Project from "./components/projectsec";
import Contact from "./components/contactsec";
import Footer from "./components/footer";
import ContactForm from "./components/contactform";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skillset />
      <Project />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
