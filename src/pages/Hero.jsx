import { useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import "./Hero.css";

const stacks = ["React", "Node.js", "Flutter", "UI/UX"];

export default function Hero() {
  const [activeStack, setActiveStack] = useState("React");

  return (
    <section className="hero" id="hero">
      <div className="hero-annotation top-left">
        [ PORTFOLIO SERIES NO.1 ] [ 2026 ]
      </div>

      <div className="hero-bg">
        <div className="hero-glow glow-1" />
        <div className="hero-glow glow-2" />
        <div className="hero-glow glow-3" />
        <div className="hero-grid-lines" />
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-label">
            SOFTWARE DEVELOPER · FRONTEND SPECIALIST · UI/UX ENTHUSIAST
          </p>
          <h1 className="hero-title">
            <span className="hero-title-line">PRATHAM</span>
            <span className="hero-title-line accent-line">SHRESTHA</span>
          </h1>

          <div className="hero-selectors">
            <div className="selector-group">
              <span className="selector-label">ROLE</span>
              <div className="selector-tags">
                <span className="tag active">DEVELOPER</span>
                <span className="tag">DESIGNER</span>
                <span className="tag">BUILDER</span>
              </div>
            </div>
            <div className="selector-group">
              <span className="selector-label">STACK</span>
              <div className="selector-tags">
                {stacks.map((s) => (
                  <span
                    key={s}
                    className={`tag ${activeStack === s ? "active" : ""}`}
                    onClick={() => setActiveStack(s)}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-cta-row">
            <a href="#projects" className="cta-btn">
              <span className="cta-arrow">↗</span>
              <span className="cta-text">
                <span className="cta-sub">AVAILABLE FOR WORK</span>
                <span className="cta-main">VIEW PROJECTS</span>
              </span>
            </a>
            <a href="#contact" className="cta-btn cta-btn--ghost">
              <span className="cta-arrow">✉</span>
              <span className="cta-text">
                <span className="cta-sub">GET IN TOUCH</span>
                <span className="cta-main">CONTACT ME</span>
              </span>
            </a>
            <a
              href="file:///C:/Users/Pratham/Downloads/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--accent"
            >
              <span className="cta-arrow">↓</span>
              <span className="cta-text">
                <span className="cta-sub">DOWNLOAD</span>
                <span className="cta-main">RESUME</span>
              </span>
            </a>
          </div>
        </div>

        {/* ── Spline 3D robot showcase ── */}
        <div className="hero-right spline-right">
          <div className="spline-showcase">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="hero-annotation bottom-right">
        [ PROTOCOL / KATHMANDU NPL.01 ]
      </div>

      <div className="scroll-hint">
        <span>SCROLL</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}
