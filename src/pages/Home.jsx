// src/pages/Home.jsx
import heroImg from "../assets/hero.png";
import dexImg from "../assets/Trade_Buy_Desktop.png";
import heroImg2 from "../assets/hero2.png";

export default function Home() {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="p1home">
      {/* HERO：上字下图（白底） */}
      <section className="p1hero">
        <p className="p1kicker">Portfolio 2026</p>

        <h1 className="p1title">
          Designing <strong className="p1em">trust-first</strong> D2C experiences
          <br />
          <span className="p1muted">
            under real <strong className="p1em">business constraints</strong>.
          </span>
        </h1>

        <p className="p1sub">E-commerce · Shipping, specs and decision flows</p>

        {/* 如果你 CSS 里没有 .p1deviceWrap，也没关系；这个 div 不会影响布局 */}
        <div className="p1deviceWrap">
          <img className="p1device" src={heroImg2} alt="Lumi hero preview" />
        </div>

        <div className="p1ctaRow">
          <a className="p1btn p1btnPrimary" href={`${base}lumi`}>
            View Lumi Case Study <span className="p1arrow">›</span>
          </a>
        </div>
      </section>

      {/* 下方两张卡 */}
      <section className="p1below">
        {/* 左：DEX */}
        <article className="p1card">
          <header className="p1cardHead">
            <h2 className="p1cardTitle">Crypto Trading Platform</h2>
            <p className="p1cardMeta">FinTech · Cryptocurrency</p>
          </header>

          {/* ✅ 修复：只保留一层 .p1media */}
          <div className="p1media">
            <img
              className="p1mediaImg"
              src={dexImg}
              alt="DEX Trading Interface — Buy state (Desktop)"
            />
          </div>

          <div className="p1cardFoot">
            <a className="p1btn p1btnGhost p1btnFull" href={`${base}project-three`}>
              View Case Study <span className="p1arrow">›</span>
            </a>
          </div>
        </article>

        {/* 右：Additional Selected Work */}
        {/* ✅ 加上 p1cardRight，让右卡更“沉一点”更平衡 */}
        <article className="p1card p1cardRight">
          <header className="p1cardHead">
            <h2 className="p1cardTitle">Additional Selected Work</h2>
            <p className="p1cardMeta">Case studies & experiments</p>
          </header>

          <div className="p1list">
            <a className="p1row" href={`${base}drip-cafe`}>
              <span>Drip Café — Concept Coffee E-commerce</span>
              <span className="p1rowArrow">›</span>
            </a>

            <a
              className="p1row"
              href="https://liuyili2000.github.io/Portfolio2025Web/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Front-end & interaction experiments</span>
              <span className="p1rowArrow">↗</span>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
