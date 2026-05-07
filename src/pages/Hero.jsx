import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/images/Background.jpg";
import "./Hero.css";

export default function Hero() {
  const ref = useRef(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsSticky(entry.isIntersecting),
      { threshold: 0.06 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hero" id="hero" ref={ref}>
      {/* ── Left content ── */}
      <div className="hero-left">
        <h1 className="hero-title" data-animate="left">
          <span className="hero-title-first">PRATHAM</span>
          <span className="hero-title-last">SHRESTHA</span>
        </h1>
        <p className="hero-role" data-animate="left" data-delay="2">
          Software Developer
        </p>

        <div className="hero-cta-row" data-animate="left" data-delay="3">
          <a
            href="file:///C:/Users/Pratham/Downloads/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--outline"
          >
            Resume
          </a>
          <a href="#projects" className="cta-btn cta-btn--fill">
            Portfolio
          </a>
        </div>

        <div className="hero-socials" data-animate="left" data-delay="4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            f
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            href="https://www.instagram.com/prathamstha88/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            ◎
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            𝒫
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            𝕏
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            ✆
          </a>
        </div>
      </div>

      {/* ── Right photo (fixed/sticky on wide screens) ── */}
      <div
        className={`hero-photo ${isSticky ? "hero-photo--fixed" : ""}`}
        data-animate="right"
      >
        <img src={heroImg} alt="Pratham Shrestha workspace" />
      </div>
    </section>
  );
}
