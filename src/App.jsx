import { useEffect, useState } from "react";
import "./styles/tokens.css";
import "./styles/utilities.css";
import "./styles/animations.css";
import "./styles/responsive.css";
import Nav from "./pages/Nav";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Showcase from "./pages/Showcase";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark",
  );

  function toggleTheme() {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      localStorage.setItem("portfolio-theme", next);
      return next;
    });
  }

  useEffect(() => {
    // Scroll-reveal observer for all [data-animate] elements
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => revealObs.observe(el));

    // Skill bar width animation (triggered when skills section enters view)
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              bar.style.width = (bar.dataset.pct || "0") + "%";
            });
            barObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    const skillsEl = document.querySelector(".skills-section");
    if (skillsEl) barObs.observe(skillsEl);

    return () => {
      revealObs.disconnect();
      barObs.disconnect();
    };
  }, []);

  return (
    <div className="portfolio" data-theme={theme}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Showcase />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
