import "./Projects.css";
import UrbannestImg from "../assets/images/Urbannest.png";
import GuidengineImg from "../assets/images/guidengine.png";
import LugahubImg from "../assets/images/Lugahub.png";

const projects = [
  {
    id: 1,
    title: "UrbanNest",
    category: "FULL STACK",
    year: "2024",
    desc: "Smart real estate platform with modern UI/UX and robust features.",
    tech: ["React", "Tailwind", "Node.js"],
    repo: "https://github.com/shresthanikhil16/UrbanNest",
    image: UrbannestImg,
  },
  {
    id: 2,
    title: "GuildEngine",
    category: "FRONTEND",
    year: "2023",
    desc: "Lightweight game engine and tooling for rapid prototyping.",
    tech: ["React", "Tailwind", "Node.js"],
    repo: "https://github.com/shresthanikhil16/GuildEngine",
    image: GuidengineImg,
  },
  {
    id: 3,
    title: "LugaHub",
    category: "FULL STACK",
    year: "2023",
    desc: "Community hub and collaboration platform with scalable backend.",
    tech: ["React", "Tailwind", "Node.js"],
    repo: "https://github.com/shresthanikhil16/LugaHub",
    image: LugahubImg,
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* ── Section header ── */}
        <div className="projects-header" data-animate>
          <div className="projects-header-text">
            <h2 className="projects-title">SELECTED WORK</h2>
            <div className="projects-header-line" />
          </div>
        </div>

        {/* ── Project rows ── */}
        <div className="projects-list">
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row"
              data-animate
              data-delay={i + 1}
            >
              <span className="project-row-num">
                {String(p.id).padStart(2, "0")}
              </span>

              <div className="project-row-thumb">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="project-row-main">
                <h3 className="project-row-title">{p.title}</h3>
                <p className="project-row-desc">{p.desc}</p>
              </div>

              <div className="project-row-meta">
                <span className="project-row-category">{p.category}</span>
                <div className="project-row-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <span className="project-row-year">{p.year}</span>
              </div>

              <span className="project-row-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
