import "./Education.css";

const education = [
  {
    id: 1,
    degree: "B.Sc. (Hons) in Computing",
    institution: "Softwarica College",
    affiliation: "Affiliated to Coventry University",
    learning:
      "Solid foundations in computing principles, management fundamentals, and formative schooling shaping discipline and curiosity.",
    accent: "#4a9eca",
    bg: "#0d1e2e",
  },
  {
    id: 2,
    degree: "+2 (Management)",
    institution: "Khwopa Secondary School",
    affiliation: "",
    learning:
      "Solid foundations in computing principles, management fundamentals, and formative schooling shaping discipline and curiosity.",
    accent: "#5b9e8a",
    bg: "#0d2420",
  },
  {
    id: 3,
    degree: "Schooling and SEE",
    institution: "Kathmandu University High School",
    affiliation: "",
    learning:
      "Solid foundations in computing principles, management fundamentals, and formative schooling shaping discipline and curiosity.",
    accent: "#7a6a9e",
    bg: "#150f25",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="education-header" data-animate>
        <p className="section-eyebrow">[ EDUCATION ]</p>
        <h2 className="section-title">TIMELINE</h2>
      </div>

      <div className="edu-timeline">
        {education.map((edu, i) => (
          <div
            className="edu-item"
            key={edu.id}
            data-animate="left"
            data-delay={i + 2}
          >
            <div className="edu-connector">
              <div className="edu-dot" style={{ background: edu.accent }} />
              {i < education.length - 1 && <div className="edu-line" />}
            </div>
            <div
              className="edu-card"
              style={{ borderColor: edu.accent + "40" }}
            >
              <div
                className="edu-card-glow"
                style={{ background: edu.accent }}
              />
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              {edu.affiliation && (
                <p className="edu-affiliation">{edu.affiliation}</p>
              )}
              <div className="edu-divider" />
              <p className="edu-learning">
                <span className="edu-learning-label">Key learnings: </span>
                {edu.learning}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
