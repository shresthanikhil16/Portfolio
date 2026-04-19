import { useState } from "react";
import "./Projects.css";
import UrbannestImg from "../assets/images/Urbannest.png";
import GuidengineImg from "../assets/images/guidengine.png";
import LugahubImg from "../assets/images/Lugahub.png";

const projects = [
  {
    id: 1,
    title: "UrbanNest",
    category: "FULL STACK",
    desc: "Smart real estate platform with modern UI/UX and robust features.",
    tech: ["React", "Tailwind", "Node.js"],
    repo: "https://github.com/shresthanikhil16/UrbanNest",
    image: UrbannestImg,
    accent: "#4a7fa5",
    bg: "#0d1e2e",
  },
  {
    id: 2,
    title: "GuildEngine",
    category: "FRONTEND",
    desc: "Lightweight game engine and tooling for rapid prototyping.",
    tech: ["React", "Tailwind", "Node.js"],
    repo: "https://github.com/shresthanikhil16/GuildEngine",
    image: GuidengineImg,
    accent: "#5b9e8a",
    bg: "#0d2420",
  },
  {
    id: 3,
    title: "LugaHub",
    category: "FULL STACK",
    desc: "Community hub and collaboration platform with scalable backend.",
    tech: ["React", "Tailwind", "Node.js"],
    repo: "https://github.com/shresthanikhil16/LugaHub",
    image: LugahubImg,
    accent: "#7a6a9e",
    bg: "#150f25",
  },
];

const filters = ["ALL", "FULL STACK", "FRONTEND"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered =
    activeFilter === "ALL" ? projects : (
      projects.filter((p) => p.category === activeFilter)
    );

  return (
    <section className="projects" id="projects">
      <div className="section-header" data-animate>
        <div className="section-header-left">
          <p className="section-eyebrow">[ PROJECTS ]</p>
          <h2 className="section-title">
            SELECTED
            <br />
            <span className="accent-stroke">WORK →</span>
          </h2>
        </div>
        <div className="section-header-right">
          <div className="section-meta">
            <span>[ SELECTED WORK ]</span>
            <span>[ CASE STUDIES ]</span>
            <span>[ OPEN SOURCE ]</span>
          </div>
          <div className="filter-bar">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured project */}
      <div className="featured-project" data-animate data-delay="2">
        <div
          className="featured-img"
          style={{
            backgroundImage: `url(${projects[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="featured-glow"
            style={{ background: projects[0].accent }}
          />
          <span className="featured-label">{projects[0].title}™</span>
          <a
            href={projects[0].repo}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-link"
          >
            ↗
          </a>
        </div>
        <div className="featured-info">
          <p className="proj-category">{projects[0].category}</p>
          <h3 className="proj-title">{projects[0].title}</h3>
          <p className="proj-desc">{projects[0].desc}</p>
          <div className="proj-tech-tags">
            {projects[0].tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
          <a
            href={projects[0].repo}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-cta"
          >
            VIEW REPO →
          </a>
        </div>
      </div>

      {/* Project grid */}
      <div className="project-grid">
        {filtered.slice(1).map((p, i) => (
          <div
            className="project-card"
            key={p.id}
            data-animate="scale"
            data-delay={i + 3}
          >
            <div
              className="card-img"
              style={{
                backgroundImage: `url(${p.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card-glow" style={{ background: p.accent }} />
              <div className="card-num">{String(p.id).padStart(2, "0")}</div>
            </div>
            <div className="card-body">
              <p className="proj-category">{p.category}</p>
              <h4 className="proj-name">{p.title}</h4>
              <p className="proj-stack-text">{p.desc}</p>
              <div className="proj-tech-tags small">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="card-footer-row">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-repo-link"
                >
                  View Repo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
