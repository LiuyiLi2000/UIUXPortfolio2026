import heroImg2 from "../assets/hero2.png";
import gameImg from "../assets/game-cover.png";
import dexImg from "../assets/DexCover.png";

export default function Home() {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="p1home">

      {/* --- HERO --- */}
      <section className="p1hero">
        <div className="p1kickerWrap">
          <span className="p1kicker">Hybrid Product Designer</span>
          <span className="p1kickerDivider">/</span>
          <span className="p1kicker">Design Engineer</span>
        </div>

        {/* ❗改1：收掉“假大空”，变成“能落地的问题” */}
        <h1 className="p1title">
          Designing systems that <strong className="p1em text-gradient">simplify complex decisions</strong>
          <br />
          <span className="p1muted">
            and support fast, confident user actions.
          </span>
        </h1>

        {/* ❗改2：去掉“growth空话”，变具体 */}
        <p className="p1sub max-w-2xl">
          Focused on <strong>e-commerce experiences</strong>, <strong>high-density interfaces</strong>, and
          bridging design with real implementation constraints.
        </p>

        <div className="p1ctaRow">
          {/* ❗改3：CTA更像真实行为 */}
          <a className="p1btn p1btnPrimary" href={`${base}lumi`}>
            View Case Study <span className="p1arrow">→</span>
          </a>

          <a className="p1btn p1btnSecondary" href={`${base}AI`}>
            View AI Workflow
          </a>
        </div>

        <div className="p1deviceWrap">
          <img className="p1device hero-shadow" src={heroImg2} alt="Lumi e-commerce system" />
        </div>
      </section>


      {/* --- SELECTED WORK --- */}
      <section id="selected-work" className="p1below p1belowMain">

        {/* --- FinTech --- */}
        <article className="p1card p1cardFeature">
          <header className="p1cardHead">
            <div className="p1tag">Product Logic</div>

            <h2 className="p1cardTitle">
              FinTech: High-Density Trading Terminal
            </h2>

            {/* ❗改4：从“总结句” → “真实用户问题” */}
            <p className="p1cardMeta">
              Traders needed to monitor charts, order books, and execution panels simultaneously,
              creating high cognitive load and slowing down decision-making.
            </p>
          </header>

          <div className="p1media">
            <img className="p1mediaImg" src={dexImg} alt="Trading interface" />
          </div>

          <div className="p1cardFoot">
            <a className="p1btn p1btnGhost" href={`${base}project-three`}>
              View Case Study <span className="p1arrow">›</span>
            </a>
          </div>
        </article>


        {/* --- Game UI --- */}
        <article className="p1card p1cardFeature">
          <header className="p1cardHead">
            <div className="p1tag">Interaction Systems</div>

            <h2 className="p1cardTitle">
              Gaming: Unity-based UI Framework
            </h2>

            {/* ❗改5：去掉“工程话术”，换成人类行为 */}
            <p className="p1cardMeta">
              Players lacked clear feedback during key interactions (pause, restart, navigation),
              making system states harder to understand.
            </p>
          </header>

          <div className="p1media">
            <img className="p1mediaImg" src={gameImg} alt="Game UI system" />
          </div>

          <div className="p1cardFoot">
            <a className="p1btn p1btnGhost" href={`${base}Game`}>
              View Breakdown <span className="p1arrow">›</span>
            </a>
          </div>
        </article>
      </section>


      {/* --- LAB --- */}
      <section className="p1archive bg-gray-50/50 rounded-3xl p-12 mt-24">
        <div className="p1archiveHead mb-12">
          <h2 className="p1archiveTitle text-3xl">Design Engineering Lab</h2>

          {/* ❗改6：去掉“实验味”，更职业 */}
          <p className="p1archiveMeta text-gray-500">
            Selected work across front-end implementation, narrative commerce, and visual systems.
          </p>
        </div>

        <div className="p1archiveList">

          <a className="p1archiveItem group" href="https://liuyili2000.github.io/CodePortfolio/" target="_blank">
            <div className="p1archiveContent">
              <span className="p1archiveLabel group-hover:text-indigo-600">
                Production Implementation (React)
              </span>
              <span className="p1archiveDesc">
                Functional components and interactive prototypes built with React and modern UI frameworks.
              </span>
            </div>
            <span className="p1archiveArrow">Code ↗</span>
          </a>

          <a className="p1archiveItem group" href={`${base}drip-cafe`}>
            <div className="p1archiveContent">
              <span className="p1archiveLabel group-hover:text-indigo-600">
                Narrative Commerce Study
              </span>
              <span className="p1archiveDesc">
                Exploring how storytelling-driven UX supports product understanding in e-commerce.
              </span>
            </div>
            <span className="p1arrow">View ›</span>
          </a>

          <a className="p1archiveItem group" href={`${base}VisualMarketing`}>
            <div className="p1archiveContent">
              <span className="p1archiveLabel group-hover:text-indigo-600">
                Brand & Visual Exploration
              </span>
              <span className="p1archiveDesc">
                Visual systems and campaign assets for digital-first retail brands.
              </span>
            </div>
            <span className="p1arrow">View ›</span>
          </a>

        </div>
      </section>

    </main>
  );
}
