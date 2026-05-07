import "./Comments.css";

const comments = [
  {
    name: "Suraj Guvaju",
    role: "Full Stack Team Lead",
    text: "Pratham consistently delivers robust front-end solutions and collaborates closely with the backend team to ship features on time. His code is clean, well-documented, and easy to maintain.",
    time: "May 2026",
  },
  {
    name: "Sugam Ghising",
    role: "Backend Developer",
    text: "Working with Pratham improved our API integrations and performance. He communicates clearly and proactively handles edge-cases — backend-friendly engineer.",
    time: "April 2026",
  },
  {
    name: "Suvash Aryal",
    role: "CEO, Geek Tech Solutions",
    text: "Pratham has been instrumental in delivering quality products for our clients. He is thoughtful, professional, and delivery-focused — a trusted partner.",
    time: "May 2026",
  },
];

export default function Comments() {
  return (
    <section className="comments" id="comments">
      <div className="comments-container">
        <div className="comments-header" data-animate>
          <span className="comments-index">04</span>
          <div className="comments-header-text">
            <h2 className="comments-title">WHAT COLLEAGUES SAY</h2>
            <div className="comments-header-line" />
          </div>
        </div>

        <div className="comments-list">
          {comments.map((c, i) => (
            <article
              key={c.name}
              className="comment-card"
              data-animate
              data-delay={i + 1}
            >
              <div className="comment-avatar">
                {c.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="comment-body">
                <p className="comment-text">“{c.text}”</p>
                <div className="comment-meta">
                  <span className="comment-name">{c.name}</span>
                  <span className="comment-role">{c.role}</span>
                  <span className="comment-time">{c.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
