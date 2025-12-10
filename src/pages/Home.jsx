// src/pages/Home.jsx
export default function Home() {
  return (
    <div
      style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "40px 24px 80px",
      }}
    >
      {/* 顶部介绍 */}
      <section style={{ marginBottom: "32px" }}>
        <p
          style={{
            fontSize: "14px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "8px",
          }}
        >
          Portfolio 2026
        </p>
        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            margin: 0,
            maxWidth: "640px",
          }}
        >
          Content-focused UI/UX designer & front-end developer crafting calm,
          visually balanced experiences.
        </h1>
        <p
          style={{
            marginTop: "16px",
            maxWidth: "520px",
            fontSize: "14px",
            color: "var(--text-muted)",
          }}
        >
          I design brand-driven interfaces and implement them in code.
        </p>
      </section>

      {/* Expertise strip：三条能力标签 */}
      <section
        style={{
          marginBottom: "36px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          fontSize: "12px",
          color: "var(--text-muted)",
        }}
      >
        <Pill>UX systems & flows</Pill>
        <Pill>Brand & visual direction</Pill>
        <Pill>React / Webflow implementation</Pill>
      </section>

      {/* Case Study 卡片区 */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <ProjectCard
          label="Case study · Brand system & UX"
          title="Lumi — Mattress Brand System & E-commerce UX"
          description="End-to-end brand system, information architecture, and high-fidelity flows for a science-forward mattress brand."
          to="/lumi"
          tag="Real client work"
        />

        <ProjectCard
          label="Case study · Webflow implementation"
          title="Drip Café — Concept Coffee E-commerce"
          description="Concept brand and Webflow build exploring clean product storytelling, landing layout, and interactions."
          to="/drip-cafe"
          tag="Concept · Webflow"
        />

        <ProjectCard
          label="Case study · In progress"
          title="Project Three — 2026"
          description="A third case study focused on product UX — structure and layout defined; content in progress."
          to="/project-three"
          tag="Work in progress"
        />
      </section>

      {/* About strip under cards */}
<section className="home-about">
  <div className="home-about-left">
    <h3>About</h3>
    <p>
      I enjoy making interfaces feel calm, legible, and intentional while balancing visual
      systems with the practical details of shipping front-end. Currently based in
      Vancouver and open to roles that sit between product design and implementation.
    </p>
  </div>

  <div className="home-about-right">
    <div className="home-about-label">Currently open to</div>
    <p className="home-about-roles">
      UI/UX designer · Front-end / UI engineer · Hybrid roles
    </p>
    <p className="home-about-location">
      Vancouver · Remote (Canada-friendly time zones)
    </p>
  </div>
</section>

    </div>
  );
}

function Pill({ children }) {
  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "999px",
        border: "1px solid rgba(148,163,184,0.6)",
        background: "rgba(255,255,255,0.7)",
      }}
    >
      {children}
    </span>
  );
}

function ProjectCard({ label, title, description, to, tag }) {
  return (
    <a
      href={to}
      style={{
        display: "block",
        padding: "22px 22px 20px",
        borderRadius: "var(--radius-lg)",
        background: "var(--bg-elevated)",
        boxShadow: "var(--shadow-soft)",
        border: "1px solid rgba(148,163,184,0.15)",
        transition:
          "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow =
          "0 22px 55px rgba(15,23,42,0.12)";
        e.currentTarget.style.borderColor = "rgba(71,85,105,0.35)";
        e.currentTarget.style.background = "rgba(255,255,255,0.98)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-soft)";
        e.currentTarget.style.borderColor = "rgba(148,163,184,0.15)";
        e.currentTarget.style.background = "var(--bg-elevated)";
      }}
    >
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          margin: 0,
          marginBottom: "10px",
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontSize: "18px",
          lineHeight: 1.3,
          margin: 0,
          marginBottom: "10px",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: "13px",
          color: "var(--text-muted)",
          margin: 0,
          marginBottom: "16px",
        }}
      >
        {description}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          color: "var(--text-muted)",
        }}
      >
        <span
          style={{
            padding: "3px 8px",
            borderRadius: "999px",
            border: "1px solid rgba(148,163,184,0.6)",
          }}
        >
          {tag}
        </span>
        <span>View case study →</span>
      </div>
    </a>
  );
}
