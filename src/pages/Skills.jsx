import "./Skills.css";

const skills = [
  { name: "React", pct: 90 },
  { name: "React Native", pct: 85 },
  { name: "Flutter", pct: 80 },
  { name: "Framer Motion", pct: 87 },
  { name: "Tailwind CSS", pct: 92 },
  { name: "MongoDB", pct: 83 },
];

const summary =
  "Building cross-platform mobile apps with React Native & Flutter • Crafting polished web interfaces with React & Tailwind CSS • Bringing UIs to life with Framer Motion animations • Storing and querying data with MongoDB";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-section-header" data-animate>
        <p className="section-eyebrow">[ SKILLS ]</p>
        <h2 className="section-title">
          TECH STACK &amp;
          <br />
          <span className="accent-stroke">STRENGTHS</span>
        </h2>
        <p className="skills-summary">{summary}</p>
      </div>

      <div className="skills-bars-grid">
        {skills.map((skill, i) => (
          <div
            className="skill-bar-row"
            key={skill.name}
            data-animate
            data-delay={Math.min(i + 3, 15)}
          >
            <div className="skill-bar-meta">
              <span className="skill-bar-name">{skill.name}</span>
              <span className="skill-bar-pct">{skill.pct}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
