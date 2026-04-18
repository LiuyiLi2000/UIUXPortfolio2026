import cozyWarm1 from "../assets/AI/CozyWarm1.png";
import cozyWarm2 from "../assets/AI/CozyWarm2.png";
import cozyWarm3 from "../assets/AI/CozyWarm3.png";
import minimalBright1 from "../assets/AI/MinimalBright1.png";
import minimalBright2 from "../assets/AI/MinimalBright2.png";
import minimalBright3 from "../assets/AI/MinimalBright3.png";
import luxuryDark1 from "../assets/AI/LuxuryDark1.png";
import luxuryDark2 from "../assets/AI/LuxuryDark2.png";
import luxuryDark3 from "../assets/AI/LuxuryDark3.png";
import pipelineImg from "../assets/AI/AIPipeline.png";
import structureImg from "../assets/AI/Structure.png";

const outputGroups = [
  {
    title: "Cozy",
    intro:
      "Emotional, lifestyle-driven, focused on comfort and warmth.",
    images: [cozyWarm1, cozyWarm2, cozyWarm3],
  },
  {
    title: "Minimal",
    intro:
      "Clean, neutral, product-focused presentation.",
    images: [minimalBright1, minimalBright2, minimalBright3],
  },
  {
    title: "Luxury",
    intro:
      "High-contrast, premium perception through lighting and composition.",
    images: [luxuryDark1, luxuryDark2, luxuryDark3],
  },
];

export default function AIpipeline() {
  return (
    <main className="case-page ai-page">
      <section className="case-hero ai-hero">
        <div className="ai-hero-copy">
          <div className="case-subtitle">AI Workflow</div>
          <h1 className="case-title">AI Marketing Asset Generator</h1>

          <p className="case-intro">
            A structured system designed to transform a single creative brief
            into multiple controlled visual directions.
          </p>

          <p className="case-intro ai-hero-intro-secondary">
            Instead of producing assets manually, this workflow shifts effort
            from creation to evaluation — enabling earlier, more confident
            design decisions.
          </p>
        </div>

        <div className="ai-hero-media">
          <img
            src={cozyWarm1}
            alt="AI-generated marketing visual hero"
            className="ai-hero-image"
          />
        </div>
      </section>

      <section className="case-section">
        <h2>Problem</h2>
        <p>
          In e-commerce design, exploring visual directions early is often slow
          and costly.
        </p>
        <p>
          Even small changes in tone, lighting, or styling require rebuilding
          assets from scratch, making side-by-side comparison difficult.
        </p>
        <p>
          As a result, teams often commit to a direction too early, with
          limited exploration and low decision confidence.
        </p>
        <p>
          This limits exploration and ultimately leads to weaker design
          decisions.
        </p>
      </section>

      <section className="case-section">
        <h2>Goal</h2>
        <p>
          I reframed AI from a content generation tool into a decision-support
          system.
        </p>
        <p>The goal was not to produce final assets, but to:</p>

        <div className="vm-context-grid vm-context-grid-3">
          <div className="vm-context-card">
            <h3>01</h3>
            <p>Generate multiple directions from a single brief</p>
          </div>

          <div className="vm-context-card">
            <h3>02</h3>
            <p>Keep outputs consistent and comparable</p>
          </div>

          <div className="vm-context-card">
            <h3>03</h3>
            <p>Reduce the cost of early-stage exploration</p>
          </div>
        </div>
      </section>

      <section className="case-section">
        <h2>Structured System</h2>

        <div className="case-gallery-block ai-pipeline-block">
          <div className="case-image-wrapper ai-pipeline-image-wrap">
            <img
              src={structureImg}
              alt="Structured system defining controllable variables for AI generation"
            />
          </div>
        </div>

        <p className="ai-section-note">
          This system defines a set of controllable variables that translate
          creative intent into structured input.
        </p>
        <p className="ai-section-note">
          By standardizing how prompts are constructed, the workflow ensures
          outputs are not only generative, but structured for comparison and
          evaluation.
        </p>
        <p className="ai-section-note">
          Instead of relying on one-off prompts, the system creates a repeatable
          way to generate and assess visual directions.
        </p>
      </section>

      <section className="case-section">
        <h2>Creative Input → AI Generation → Visual Output</h2>

        <div className="case-gallery-block ai-pipeline-block">
          <div className="case-image-wrapper ai-pipeline-image-wrap">
            <img
              src={pipelineImg}
              alt="Structured AI marketing asset generation pipeline"
            />
          </div>
        </div>

        <p className="ai-section-note">
          Rather than relying on one-off prompts, I designed a structured prompt
          format to control key variables such as:
        </p>

        <ul className="vm-bullet-list">
          <li>lighting</li>
          <li>composition</li>
          <li>environment</li>
          <li>tone</li>
        </ul>

        <p className="ai-section-note">
          This allowed the system to generate consistent variations across
          directions, instead of unpredictable outputs.
        </p>
        <p className="ai-section-note">
          The focus was not realism alone, but controllability and
          comparability — enabling more reliable design evaluation.
        </p>
      </section>

      <section className="case-section">
        <h2>Design Decision Layer</h2>
        <p>
          The purpose of this workflow was not to generate a perfect image, but
          to support faster and clearer decision-making.
        </p>
        <p>By placing outputs side by side, I was able to:</p>

        <ul className="vm-bullet-list">
          <li>
            Compare positioning strategies (comfort vs minimal vs premium)
          </li>
          <li>Evaluate visual tone before committing to a direction</li>
          <li>Identify which direction aligns better with brand perception</li>
        </ul>

        <p className="ai-section-note">
          This shifts design from asset creation to direction selection.
        </p>
        <p className="ai-section-note">
          It reduces reliance on intuition and introduces a more systematic
          approach to evaluating visual directions.
        </p>
      </section>

      <section className="case-section">
        <h2>Direction Comparison</h2>
        <p>
          Each direction was intentionally designed to test a different product
          positioning:
        </p>

        <div className="vm-context-grid vm-context-grid-3">
          <div className="vm-context-card">
            <h3>Cozy</h3>
            <p>Emotional, lifestyle-driven, focused on comfort and warmth</p>
          </div>

          <div className="vm-context-card">
            <h3>Minimal</h3>
            <p>Clean, neutral, product-focused presentation</p>
          </div>

          <div className="vm-context-card">
            <h3>Luxury</h3>
            <p>High-contrast, premium perception through lighting and composition</p>
          </div>
        </div>

        <p className="ai-section-note">
          I evaluated these directions across three key dimensions: clarity of
          product presentation, emotional tone, and perceived price
          positioning.
        </p>
      </section>

      <section className="case-section">
        <h2>Output Exploration</h2>
        <p className="ai-section-note">
          Each direction explores a different balance between emotion, clarity,
          and perceived value.
        </p>
        <p className="ai-section-note">
          Together, they form a structured comparison space for evaluating
          design direction before refinement.
        </p>

        <div className="ai-output-stack">
          {outputGroups.map((group) => (
            <section key={group.title} className="ai-output-group">
              <div className="ai-output-head">
                <h3>{group.title}</h3>
                <p>{group.intro}</p>
              </div>

              <div className="ai-output-grid">
                {group.images.map((image, index) => (
                  <div key={`${group.title}-${index}`} className="ai-output-card">
                    <img
                      src={image}
                      alt={`${group.title} direction variation ${index + 1}`}
                      className="ai-output-image"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="case-section case-section-split ai-review-split">
        <div>
          <h2>What Worked</h2>
          <ul className="vm-bullet-list">
            <li>Enabled rapid exploration from a single brief</li>
            <li>Made comparison structured instead of subjective</li>
            <li>Helped define visual direction before refinement</li>
          </ul>
        </div>

        <div>
          <h2>What Didn’t</h2>
          <ul className="vm-bullet-list">
            <li>Outputs still required human judgment and selection</li>
            <li>Some results leaned toward generic AI aesthetics</li>
            <li>Difficult to enforce strict brand consistency across all outputs</li>
            <li>Not suitable for final production without refinement</li>
          </ul>
        </div>
      </section>

      <section className="case-section">
        <h2>Takeaway</h2>
        <p>
          AI did not replace design — it shifted where design thinking happens.
        </p>
        <p>
          Instead of spending time producing variations, I focused on
          evaluating them and selecting what works.
        </p>
        <p>
          This reframes AI as a tool for structured exploration, rather than
          final production.
        </p>
      </section>
    </main>
  );
}
