import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/images/Background.jpg";
import "./Hero.css";

export default function Hero() {
  const ref = useRef(null);
  const [isSticky, setIsSticky] = useState(true);
  const [useHeroBackground, setUseHeroBackground] = useState(() => {
    try {
      return window.innerWidth < 900;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Observe hero intersection for sticky behavior on large screens
    const obs = new IntersectionObserver(
      ([entry]) => {
        const isLarge = window.innerWidth >= 900;
        setIsSticky(entry.isIntersecting && isLarge);
      },
      { threshold: 0.06 },
    );
    obs.observe(el);

    // Keep track of viewport size to toggle using the hero background
    const onResize = () => {
      const small = window.innerWidth < 900;
      setUseHeroBackground(small);
      if (small) setIsSticky(false);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // initialize
    onResize();

    return () => {
      obs.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      className={`hero ${useHeroBackground ? "hero--bg" : ""}`}
      id="hero"
      ref={ref}
      style={useHeroBackground ? { backgroundImage: `url(${heroImg})` } : undefined}
    >
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
        style={useHeroBackground ? { display: "none" } : { backgroundImage: `url(${heroImg})` }}
        role="img"
        aria-label="Pratham Shrestha workspace"
      />
    </section>
  );
}
