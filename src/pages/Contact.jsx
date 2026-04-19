import { useState } from "react";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import "./Contact.css";

const contactInfo = [
  {
    label: "Email",
    value: "officialblade007@gmail.com",
    href: "mailto:officialblade007@gmail.com",
  },
  { label: "Phone", value: "9867059367", href: "tel:9867059367" },
  {
    label: "GitHub",
    value: "github.com/shresthanikhil16",
    href: "https://github.com/shresthanikhil16",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pratham-shrestha",
    href: "https://linkedin.com/in/pratham-shrestha",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-bg">
        <div className="contact-shader-bg">
          <ShaderAnimation />
        </div>
        <div className="closing-glow" />
      </div>

      <div className="contact-inner">
        <div className="contact-left" data-animate="left">
          <p className="section-eyebrow">[ CONTACT ]</p>
          <h2 className="closing-title">
            <span>LET'S BUILD</span>
            <span>SOMETHING</span>
            <span className="accent-stroke">GREAT</span>
          </h2>

          <div className="contact-info-list">
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-info-row"
              >
                <span className="contact-info-label">
                  [ {c.label.toUpperCase()} ]
                </span>
                <span className="contact-info-value">{c.value}</span>
                <span className="contact-info-arrow">→</span>
              </a>
            ))}
          </div>

          <div className="social-links" style={{ marginTop: "32px" }}>
            <a
              href="https://github.com/shresthanikhil16"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GH
            </a>
            <a
              href="https://linkedin.com/in/pratham-shrestha"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LI
            </a>
            <a href="mailto:officialblade007@gmail.com" className="social-link">
              ✉
            </a>
          </div>
        </div>

        <div className="contact-right" data-animate="right" data-delay="2">
          {sent ?
            <div className="contact-success">
              <div className="success-icon">✓</div>
              <p className="success-title">MESSAGE SENT</p>
              <p className="success-sub">I'll get back to you soon.</p>
            </div>
          : <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label className="form-label" htmlFor="name">
                  [ NAME ]
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="email">
                  [ EMAIL ]
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="message">
                  [ MESSAGE ]
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="closing-cta"
                style={{ width: "100%", cursor: "pointer" }}
              >
                SEND MESSAGE →
              </button>
            </form>
          }
        </div>
      </div>

      <p className="closing-footer">
        © 2026 PRATHAM SHRESTHA · ALL RIGHTS RESERVED · BUILT WITH REACT
      </p>
    </section>
  );
}
