import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <BrowserRouter>
      <main className="overflow-x-hidden font-body">
        <Navbar />
        <Hero />
        <AboutMe />
        <Project />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;

