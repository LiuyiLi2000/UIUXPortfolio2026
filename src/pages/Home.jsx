// src/pages/Home.jsx
import heroImg2 from "../assets/hero2.png";
import gameImg from "../assets/game-cover.png";
import dexImg from "../assets/Trade_Buy_Desktop.png";
import marketingImg from "../assets/marketing-cover.png";

export default function Home() {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="p1home">
      <section className="p1hero">
        <p className="p1kicker">Portfolio 2026</p>

        <h1 className="p1title">
          Designing <strong className="p1em">trust-first</strong> D2C experiences
          <br />
          <span className="p1muted">
            under real <strong className="p1em">business constraints</strong>.
          </span>
        </h1>

        <p className="p1sub">
          E-commerce · Shipping, specs and decision flows
        </p>

        <div className="p1ctaRow">
          <a className="p1btn p1btnPrimary" href={`${base}lumi`}>
            View Lumi Case Study <span className="p1arrow">›</span>
          </a>
        </div>

        <div className="p1deviceWrap">
          <img className="p1device" src={heroImg2} alt="Lumi hero preview" />
        </div>
      </section>

      <section className="p1below">
        

        <article className="p1card">
          <header className="p1cardHead">
            <h2 className="p1cardTitle">Crypto Trading Platform</h2>
            <p className="p1cardMeta">FinTech · Cryptocurrency</p>
          </header>

          <div className="p1media">
            <img
              className="p1mediaImg"
              src={dexImg}
              alt="DEX Trading Interface — Buy state (Desktop)"
            />
          </div>

          <div className="p1cardFoot">
            <a
              className="p1btn p1btnGhost p1btnFull"
              href={`${base}project-three`}
            >
              View Case Study <span className="p1arrow">›</span>
            </a>
          </div>
        </article>
        
        <article className="p1card">
          <header className="p1cardHead">
            <h2 className="p1cardTitle">Interactive Experience</h2>
            <p className="p1cardMeta">Unity · Gameplay flow · System feedback</p>
          </header>

          <div className="p1media">
            <img
              className="p1mediaImg"
              src={gameImg}
              alt="Interactive Unity game preview"
            />
          </div>

          <div className="p1cardFoot">
            <a
              className="p1btn p1btnGhost p1btnFull"
              href={`${base}Game`}
            >
              View Case Study <span className="p1arrow">›</span>
            </a>
          </div>
        </article>

        <article className="p1card">
          <header className="p1cardHead">
            <h2 className="p1cardTitle">Visual &amp; Marketing</h2>
            <p className="p1cardMeta">
              E-commerce campaigns · Retail visuals · Brand promotion
            </p>
          </header>

          <div className="p1media">
            <img
              className="p1mediaImg"
              src={marketingImg}
              alt="Marketing and visual design preview"
            />
          </div>

          <div className="p1cardFoot">
            <a
              className="p1btn p1btnGhost p1btnFull"
              href={`${base}VisualMarketing`}
            >
              View Work <span className="p1arrow">›</span>
            </a>
          </div>
        </article>

        <article className="p1card p1cardRight">
          <header className="p1cardHead">
            <h2 className="p1cardTitle">Other Work</h2>
            <p className="p1cardMeta">Web project and front-end work</p>
          </header>

          <div className="p1list">
            <a className="p1row" href={`${base}drip-cafe`}>
              <span>Drip Café — Concept Coffee E-commerce</span>
              <span className="p1rowArrow">›</span>
            </a>

            <a
              className="p1row"
              href="https://liuyili2000.github.io/CodePortfolio/"
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