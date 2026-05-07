import "./Skills.css";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "Flutter",
  "Node.js",
  "MongoDB",
  "FastAPI",
  "Framer Motion",
];

const personalSkills = [
  "Creativity",
  "Team Work",
  "Organisation",
  "Problem Solving",
  "Communication",
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* ── Header ── */}
        <div className="skills-header" data-animate>
          <span className="skills-index">03</span>
          <div className="skills-header-text">
            <h2 className="skills-title">TECH STACK</h2>
            <div className="skills-header-line" />
          </div>
        </div>

        {/* ── Two-column layout ── */}
        <div className="skills-body">
          {/* Tech tags */}
          <div className="skills-tags-col" data-animate="left">
            <div className="tech-grid">
              {techStack.map((t) => (
                <span className="tech-pill" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Personal + info */}
          <div className="skills-info-col" data-animate="right">
            <div className="skills-soft">
              <h3 className="skills-sub-heading">SOFT SKILLS</h3>
              <div className="skills-soft-tags">
                {personalSkills.map((s) => (
                  <span className="skills-soft-tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-availability">
              <span className="avail-dot" />
              <div>
                <p className="avail-label">AVAILABILITY</p>
                <p className="avail-status">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
