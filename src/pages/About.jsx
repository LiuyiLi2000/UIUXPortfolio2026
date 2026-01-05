// src/pages/About.jsx
export default function About() {
  return (
    <main className="p2page">
      <section className="p2card">
        <p className="p2kicker">ABOUT</p>

        <h1 className="p2title">
          Product-focused UI/UX Designer with front-end implementation.
        </h1>

        <p className="p2lead">
          I work at the intersection of design and engineering, building
          trust-first web experiences under real business constraints —
          especially for e-commerce and data-heavy interfaces.
        </p>

        <div className="p2grid">
          <div className="p2panel">
            <h2 className="p2h2">What I do</h2>
            <ul className="p2list">
              <li>End-to-end product design (research → UI → handoff)</li>
              <li>Design systems, specs, and developer-friendly documentation</li>
              <li>Responsive web and interaction states (empty/error/loading)</li>
            </ul>
          </div>

          <div className="p2panel">
            <h2 className="p2h2">How I work</h2>
            <ul className="p2list">
              <li>Start with constraints: users, business, tech, timeline</li>
              <li>Make decisions traceable: “why” next to key screens</li>
              <li>Ship with clarity: redlines, tokens, component behaviors</li>
            </ul>
          </div>

          <div className="p2panel">
            <h2 className="p2h2">Tools</h2>
            <p className="p2text">
              Figma, Photoshop/Illustrator, Webflow, React + Vite, HTML/CSS,
              component workflows, GitHub Pages deployment.
            </p>
          </div>

          <div className="p2panel">
            <h2 className="p2h2">Based in</h2>
            <p className="p2text">
              Vancouver, BC · Open to UI/UX and product design opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
