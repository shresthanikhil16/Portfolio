import { useEffect, useRef } from "react";
import "./About.css";
import design2 from '../assets/images/design2.jpg';

const pillars = [
  {
    label: "Frontend",
    items: "React, TypeScript, Tailwind, Framer Motion, Next.js",
  },
  {
    label: "Backend",
    items: "Node.js, FastAPI, MongoDB, RESTful APIs",
  },
  {
    label: "Principles",
    items: "UX-first, performance, accessibility, maintainability",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let ticking = false;
    const speed = 0.15; // lower = slower background movement

    const update = () => {
      const rect = el.getBoundingClientRect();
      const offset = rect.top * speed;
      el.style.setProperty("--parallax-y", `${-offset}px`);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="about background-design2" id="about">
      <div className="about-bg-text" aria-hidden="true">
        ABOUT
      </div>

      <div className="about-inner">
        <div className="about-left" data-animate="left">
          <p className="section-eyebrow">[ ABOUT ME ]</p>
          <h2 className="about-heading">
            A BRIEF
            <br />
            <span className="accent-stroke">PROFILE</span>
          </h2>
          <p className="about-body">
            I craft performant, accessible, and beautiful web experiences with a
            focus on delightful interactions and clean architecture.
          </p>

          <div className="about-pillars">
            {pillars.map((p, i) => (
              <div
                className="about-pillar"
                key={p.label}
                data-animate
                data-delay={i + 3}
              >
                <span className="pillar-label">
                  [ {p.label.toUpperCase()} ]
                </span>
                <p className="pillar-items">{p.items}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right" data-animate="right">
          <div className="about-card">
            <div className="about-card-glow" />
            <div className="about-card-initials">PS</div>
            <div className="about-card-name">Pratham Shrestha</div>
            <div className="about-card-role">Software Developer</div>
            <div className="about-card-divider" />
            <div className="about-card-tags">
              <span className="card-tag">Frontend Specialist</span>
              <span className="card-tag">UI/UX Enthusiast</span>
              <span className="card-tag">MERN Stack</span>
              <span className="card-tag">Flutter</span>
            </div>
            <div className="about-card-location">📍 Kathmandu, Nepal</div>
          </div>

          <div className="manifesto-right" data-animate data-delay="5">
            <p className="for-those">
              FOR THOSE WHO
              <br />
              SHIP, NOT FOR
              <br />
              THE CROWD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
