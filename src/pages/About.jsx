// src/pages/About.jsx
export default function About() {
  return (
    <main className="p2page">
      <section className="p2card">
        <p className="p2kicker">ABOUT</p>

        {/* 核心定位：一句能被记住 */}
        <h1 className="p2title">
          Designing digital products that simplify complex decisions and support clear user actions.
        </h1>

        {/* 不讲空话，直接讲你做的“问题类型” */}
        <p className="p2lead">
          I work at the intersection of product design and implementation, focusing on
          e-commerce experiences and high-density interfaces where users need to
          understand information quickly and make confident decisions.
        </p>

        <div className="p2grid">

          {/* WHAT YOU DESIGN（替代泛化“what I do”） */}
          <div className="p2panel">
            <h2 className="p2h2">What I design</h2>
            <ul className="p2list">
              <li>E-commerce flows that reduce friction in product comparison and checkout</li>
              <li>High-density interfaces that improve clarity in complex decision environments</li>
              <li>UI systems that translate cleanly into implementation</li>
            </ul>
          </div>

          {/* HOW YOU WORK（更 product / engineering） */}
          <div className="p2panel">
            <h2 className="p2h2">How I work</h2>
            <ul className="p2list">
              <li>Start with real constraints: users, business goals, and technical limits</li>
              <li>Break down complex flows into clear, structured decisions</li>
              <li>Design with implementation in mind, not just visual output</li>
            </ul>
          </div>

          {/* TOOLS（强调 design → code） */}
          <div className="p2panel">
            <h2 className="p2h2">Tools & workflows</h2>
            <p className="p2text">
              Figma, Photoshop, Illustrator, Webflow, React, Vite, HTML/CSS,
              and component-based front-end workflows.
            </p>
          </div>

          {/* BASE + personality（保留但收敛） */}
          <div className="p2panel">
            <h2 className="p2h2">Based in</h2>
            <p className="p2text">
              Vancouver, BC. Open to product design, UI/UX, and hybrid design-engineering roles.
            </p>

            <p className="p2text italic">
              Outside of work, I spend time figure skating and staying active year-round.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}