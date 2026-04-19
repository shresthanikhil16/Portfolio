import {
  ContainerScroll,
  ScrollHeader,
  ScrollCard,
} from "@/components/ui/container-scroll-animation";
import "./Showcase.css";

const showcaseProjects = [
  { id: "01", name: "UrbanNest", cat: "FULL STACK", color: "#4a7fa5" },
  { id: "02", name: "GuildEngine", cat: "FRONTEND", color: "#5b9e8a" },
  { id: "03", name: "LugaHub", cat: "FULL STACK", color: "#7a6a9e" },
];

export default function Showcase() {
  return (
    <div className="showcase-section" data-animate>
      <ContainerScroll
        titleComponent={
          <div className="showcase-heading">
            <p className="section-eyebrow">[ SHOWCASE ]</p>
            <h2 className="section-title">
              PROJECTS AT
              <br />
              <span className="accent-stroke">A GLANCE →</span>
            </h2>
          </div>
        }
      >
        {/* Faux project dashboard inside the 3D card */}
        <div className="showcase-card-inner">
          <div className="showcase-card-topbar">
            <span className="showcase-dot" style={{ background: "#ff5f57" }} />
            <span className="showcase-dot" style={{ background: "#febc2e" }} />
            <span className="showcase-dot" style={{ background: "#28c840" }} />
            <span className="showcase-card-title">PORTFOLIO · PROJECTS</span>
          </div>

          <div className="showcase-card-body">
            {showcaseProjects.map((p) => (
              <div className="showcase-proj-row" key={p.id}>
                <span
                  className="showcase-proj-accent"
                  style={{ background: p.color }}
                />
                <span className="showcase-proj-id">{p.id}</span>
                <span className="showcase-proj-name">{p.name}</span>
                <span className="showcase-proj-cat">{p.cat}</span>
                <span className="showcase-proj-arrow">→</span>
              </div>
            ))}

            <div className="showcase-stat-row">
              <div className="showcase-stat">
                <span className="showcase-stat-n">3+</span>
                <span className="showcase-stat-l">Projects</span>
              </div>
              <div className="showcase-stat">
                <span className="showcase-stat-n">85%</span>
                <span className="showcase-stat-l">Avg Proficiency</span>
              </div>
              <div className="showcase-stat">
                <span className="showcase-stat-n">2026</span>
                <span className="showcase-stat-l">Active</span>
              </div>
            </div>

            <div className="showcase-bar-section">
              {[
                { label: "React / Next.js", pct: 90 },
                { label: "Node.js / Express", pct: 85 },
                { label: "UI/UX Design", pct: 88 },
              ].map((b) => (
                <div className="showcase-bar-row" key={b.label}>
                  <span className="showcase-bar-label">{b.label}</span>
                  <div className="showcase-bar-track">
                    <div
                      className="showcase-bar-fill"
                      style={{ width: `${b.pct}%`, background: "#4a9eca" }}
                    />
                  </div>
                  <span className="showcase-bar-pct">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
