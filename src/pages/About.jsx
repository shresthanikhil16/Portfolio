import "./About.css";
import quoteImg from "../assets/images/quote.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* ── Section header ── */}
        <div className="about-header" data-animate>
          <div className="about-header-text">
            <h2 className="about-title">ABOUT</h2>
            <div className="about-header-line" />
          </div>
        </div>

        {/* ── Main row: bio left + image right ── */}
        <div className="about-body-row">
          <div className="about-bio" data-animate="left">
            <p>
              I&apos;m Pratham Shrestha — a software developer based in
              Kathmandu, Nepal. I craft performant, accessible, and beautiful
              web experiences with a focus on delightful interactions and clean
              architecture.
            </p>
            <p>
              My work sits at the intersection of design and engineering,
              building interfaces that are both visually compelling and
              technically sound.
            </p>
            <a
              href="mailto:prathamshrestha@email.com"
              className="about-email-link"
            >
              prathamshrestha@email.com ↗
            </a>

            <div className="about-location">
              <span className="location-dot" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Quote image */}
          <div className="about-image-panel" data-animate="right">
            <img src={quoteImg} alt="" className="about-quote-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
