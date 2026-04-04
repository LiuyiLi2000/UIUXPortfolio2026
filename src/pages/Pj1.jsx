// src/pages/Pj1.jsx
import { Link } from "react-router-dom";

import Img01 from "../assets/Pj1/01_Lumi_Introduction_Cover.png";
import Img02 from "../assets/Pj1/02_Lumi_Project_Overview.png";
import Img03 from "../assets/Pj1/03_Lumi_Design_Goals.png";
import Img04 from "../assets/Pj1/04_Lumi_Process_Overview.png";
import Img05 from "../assets/Pj1/05_Lumi_Home_Light.png";
import Img06 from "../assets/Pj1/06_Lumi_Home_Dark.png";
import Img07 from "../assets/Pj1/07_Lumi_FreeDelivery_Light.png";
import Img08 from "../assets/Pj1/08_Lumi_FreeDelivery_Dark.png";
import Img09 from "../assets/Pj1/09_Lumi_Tech_Light.png";
import Img10 from "../assets/Pj1/10_Lumi_Tech_Dark.png";
import Img11 from "../assets/Pj1/11_Lumi_Comparison_Light.png";
import Img12 from "../assets/Pj1/12_Lumi_Comparison_Dark.png";

function GalleryGroup({ title, caption, images, highlight }) {
  return (
    <div className={`case-gallery-block ${highlight ? "case-highlight" : ""}`}>
      <div className="case-gallery-header">
        <h3>{title}</h3>
        {caption && <p className="case-gallery-caption">{caption}</p>}
      </div>

      <div className="case-gallery-row">
        {images.map((src, index) => (
          <figure key={index} className="case-image-wrapper">
            <img
              src={src}
              alt={`${title} screen ${index + 1}`}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Pj1() {
  return (
    <article className="case-page">
      <nav className="case-nav">
        <Link to="/" className="case-back-link">
          ← Back to Work
        </Link>
        <span className="case-tag">Case Study · E-commerce UX</span>
      </nav>

      <header className="case-hero">
        <p className="case-kicker">LUMI MATTRESS REDESIGN</p>

        <h1 className="case-title">
          Simplifying product decisions in a high-consideration e-commerce experience.
        </h1>

        <p className="case-intro">
          Lumi is a self-initiated redesign for a direct-to-consumer mattress
          brand. The project focused on making product information easier to
          compare, clarifying feature and pricing differences, and building a
          more consistent interface system across key browsing and decision
          points.
        </p>

        <div className="case-challenge-box">
          <div className="case-challenge-item">
            <span className="case-label">The Friction</span>
            <p>
              Mattress features, cooling technology, and tier differences were
              difficult to scan quickly, making product comparison feel heavier
              than it needed to be.
            </p>
          </div>

          <div className="case-challenge-item">
            <span className="case-label">Design Response</span>
            <p>
              I used clearer hierarchy, structured comparison patterns, and a
              more consistent visual system to support faster, more confident
              decisions.
            </p>
          </div>
        </div>

        <div className="case-meta-grid">
          <div>
            <h3>Role</h3>
            <p>UX/UI Designer</p>
            <p className="case-small">Product-focused redesign · Visual system</p>
          </div>

          <div>
            <h3>Scope</h3>
            <p>Home, technology, delivery, and comparison flows</p>
          </div>

          <div>
            <h3>Focus</h3>
            <p>
              Information hierarchy, decision clarity, and scalable interface
              patterns
            </p>
          </div>
        </div>
      </header>

      <section className="case-content">
        <div className="case-section">
          <div className="case-text-block">
            <h2>Creating a clearer foundation</h2>
            <p>
              I began with a structured audit of the experience to identify
              where users had to pause, re-read, or compare information across
              multiple sections before making a decision.
            </p>
            <p>
              The redesign was not only about refreshing the visual style. It
              was about building a more consistent layout and component
              foundation that could support both product storytelling and faster
              scanning across Light and Dark themes.
            </p>
          </div>

          <GalleryGroup
            title="System foundation"
            caption="Early project framing, redesign direction, and the visual rules used to create a more cohesive product system."
            images={[Img01, Img02, Img03, Img04]}
          />
        </div>

        <div className="case-section">
          <div className="case-text-block">
            <h2>Key design decisions</h2>
            <p className="case-section-intro">
              Beyond visual refinement, several decisions shaped how the
              experience supports faster and more confident product selection.
            </p>
          </div>

          <div className="case-columns">
            <div>
              <h4>Clarifying product differences early</h4>
              <p>
                Users needed to compare multiple mattress tiers, but key
                differences were not immediately visible. I introduced clearer
                grouping of features and structured comparison patterns so users
                could understand positioning before scrolling into details.
              </p>
            </div>

            <div>
              <h4>Making pricing and offers easier to scan</h4>
              <p>
                Pricing, discounts, and delivery information were present but
                visually fragmented. I reorganized these elements into
                consistent blocks so users could quickly evaluate value without
                piecing information together across sections.
              </p>
            </div>

            <div>
              <h4>Building consistency across pages</h4>
              <p>
                Each page originally behaved differently, which made the
                experience harder to learn. I aligned layout structure, spacing,
                and component patterns across home, product, and comparison
                pages to create a more predictable and scalable system.
              </p>
            </div>
          </div>
        </div>

        <div className="case-section">
          <div className="case-text-block">
            <h2>Making the first impression easier to process</h2>
            <p>
              The home page was redesigned to communicate core value earlier and
              reduce the effort required to understand the brand’s main product
              story.
            </p>
            <p>
              Instead of relying on dense presentation, I prioritized clearer
              visual grouping, stronger hierarchy, and more focused feature
              storytelling so users could orient themselves quickly.
            </p>
          </div>

          <div className="case-columns">
            <div>
              <h4>What changed on the home page</h4>
              <p>
                I reduced visual competition in the hero area, grouped product
                benefits into clearer content blocks, and created a more
                readable sequence from brand promise to feature explanation.
              </p>
            </div>

            <div>
              <h4>Why it matters</h4>
              <p>
                For a product category like mattresses, users need early
                reassurance before they commit attention. The revised home page
                makes the value proposition easier to grasp before users move
                into deeper product content.
              </p>
            </div>
          </div>

          <GalleryGroup
            title="Home page"
            caption="A cleaner landing experience designed to improve scanning, introduce product value earlier, and support clearer entry into the product story."
            images={[Img05, Img06]}
          />
        </div>

        <div className="case-section bg-gray-50">
          <div className="case-text-block">
            <h2>Translating technical details into clearer decisions</h2>
            <p>
              Mattress technology is important, but it can also be difficult to
              interpret. The challenge here was to present layered product
              details in a way that remained readable for quick scanners while
              still giving deeper information to users who wanted to research.
            </p>
            <p>
              I used a more structured content hierarchy and repeated interface
              patterns to make technical features easier to compare without
              overwhelming the page.
            </p>
          </div>

          <div className="case-columns">
            <div>
              <h4>What changed on the technology page</h4>
              <p>
                I reorganized technical explanations into clearer visual
                sections, separated dense content into more scannable units, and
                used repeated layout patterns to help users understand product
                construction step by step.
              </p>
            </div>

            <div>
              <h4>What changed in the comparison flow</h4>
              <p>
                I strengthened row and column hierarchy, clarified feature
                grouping, and surfaced tier differences more explicitly so users
                could compare options side by side without rereading the table.
              </p>
            </div>
          </div>

          <GalleryGroup
            title="Technology page"
            caption="Technical details reorganized into clearer visual sections so users can understand product construction without getting lost in dense explanation."
            images={[Img09, Img10]}
          />

          <GalleryGroup
            title="Comparison framework"
            caption="Comparison patterns redesigned to make product tiers, feature differences, and value signals easier to scan side by side."
            images={[Img11, Img12]}
            highlight={true}
          />
        </div>

        <div className="case-section">
          <div className="case-text-block">
            <h2>Reducing uncertainty around delivery and service</h2>
            <p>
              For high-ticket purchases, confidence does not stop at the product
              itself. Delivery, warranty, and service details also influence
              whether users feel ready to commit.
            </p>
            <p>
              This page was redesigned to make post-purchase logistics more
              visible and easier to understand, reducing unnecessary friction in
              the final stage of consideration.
            </p>
          </div>

          <div className="case-columns">
            <div>
              <h4>What changed on the delivery page</h4>
              <p>
                Delivery, warranty, and service information were pulled into a
                clearer layout with more predictable hierarchy so users could
                find practical purchase details without searching across the
                page.
              </p>
            </div>

            <div>
              <h4>Why this matters in e-commerce</h4>
              <p>
                For higher-cost purchases, logistics and service policies affect
                trust. Making these details easier to scan helps reduce
                hesitation at the point where users are deciding whether to
                move forward.
              </p>
            </div>
          </div>

          <GalleryGroup
            title="Delivery and warranty"
            caption="Shipping and service information surfaced in a more structured layout to reduce uncertainty and support purchase confidence."
            images={[Img07, Img08]}
          />
        </div>
      </section>

      <footer className="case-footer">
        <div className="case-reflection">
          <h2>Project takeaways</h2>

          <div className="case-columns">
            <p>
              <strong>Consistency supports confidence.</strong> Standardizing
              layout, spacing, and component behavior made the experience easier
              to scan and gave the product story a stronger structure across
              pages.
            </p>

            <p>
              <strong>Good e-commerce UX is decision support.</strong> In a
              category like mattresses, users need help comparing, interpreting,
              and committing — not just polished visuals.
            </p>
          </div>
        </div>

        <div className="case-final-cta">
          <Link to="/" className="p1btn p1btnPrimary">
            Back to Work
          </Link>
        </div>
      </footer>
    </article>
  );
}