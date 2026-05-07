import React, { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          {/* Brand */}
          <a href="#" className="navbar-brand">
            PRATHAM
          </a>

          {/* Desktop Nav */}
          <nav className="nav-links">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}

            <a href="/resume.pdf" className="resume-btn">
              Resume
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="mobile-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`bar ${open ? "open" : ""}`} />
            <span className={`bar ${open ? "open" : ""}`} />
            <span className={`bar ${open ? "open" : ""}`} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        {links.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setOpen(false)}>
            {link.name}
          </a>
        ))}

        <a href="/resume.pdf" className="resume-btn" onClick={() => setOpen(false)}>
          Download Resume
        </a>
      </div>
    </>
  );
}