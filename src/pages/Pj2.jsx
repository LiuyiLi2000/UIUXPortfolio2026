// src/pages/Pj2.jsx
import { Link } from "react-router-dom";

import Img01 from "../assets/Pj2/01_Drip_Home.png";
import Img02 from "../assets/Pj2/02_Drip_About.png";
import Img03 from "../assets/Pj2/03_Drip_Blog.png";
import Img04 from "../assets/Pj2/04_Drip_Support.png";
import Img05 from "../assets/Pj2/05_Drip_Products.png";

// 和 Lumi 一样的分组组件
function GalleryGroup({ title, caption, images }) {
  return (
    <div className="case-gallery-block">
      <h3>{title}</h3>
      {caption && <p className="case-gallery-caption">{caption}</p>}
      <div className="case-gallery-row">
        {images.map((src, index) => (
          <figure key={index} className="case-image-wrapper">
            <img src={src} alt={`${title} screen ${index + 1}`} />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Pj2() {
  // 每张长图当作一个分组
  const homeImages = [Img01];
  const aboutImages = [Img02];
  const storiesImages = [Img03];
  const supportImages = [Img04];
  const shopImages = [Img05];

  return (
    <article className="case-page">
      {/* 顶部回到 Work */}
      <div className="case-breadcrumb">
        <Link to="/" className="case-back-link">
          ← Back to Work
        </Link>
        <span className="case-tag">Case Study · Webflow Implementation</span>
      </div>

      {/* Hero / 基本介绍 */}
      <header className="case-hero">
        <p className="case-subtitle">
          Drip Café — Cozy Coffee E-commerce Experience
        </p>
        <h1 className="case-title">
          Designing a warm, editorial coffee brand presence — built in Webflow.
        </h1>

        <p className="case-intro">
          Drip Café is a concept roastery that explores how a neighborhood café
          could translate its coziness, rituals, and community spirit into a
          digital experience. This project designs and implements a small but
          complete site in Webflow, covering the full journey from discovering
          the brand to browsing beans and finding support.
        </p>

        {/* Meta 信息 */}
        <div className="case-meta-grid">
          <div>
            <h2>Role</h2>
            <p>UI/UX designer · Visual design · Webflow implementation</p>
          </div>
          <div>
            <h2>Scope</h2>
            <ul>
              <li>Home — brand & hero storytelling</li>
              <li>About — origin story & our team</li>
              <li>Coffee Stories — journal article layout</li>
              <li>Support — FAQ, shipping, returns & contact</li>
              <li>Shop Beans — product catalog</li>
            </ul>
          </div>
          <div>
            <h2>Timeline &amp; Type</h2>
            <p>Self-initiated concept · 2025 · Webflow build</p>
          </div>
        </div>
      </header>

      {/* Project Overview */}
      <section className="case-section">
        <h2>⭐ Project Overview</h2>
        <p>
          The goal of Drip Café was to design a small-brand e-commerce
          experience that feels personal, calm, and story-driven. Rather than
          behaving like a generic storefront, the site leans into ritual and
          atmosphere — the slow mornings, hand-brewed cups, and people behind
          the bar.
        </p>
        <p>
          Each page is structured with warm neutrals, soft typography, and
          simple grids. The design balances storytelling (Home, About, Coffee
          Stories) with practical flows (Support, Shop Beans), while keeping the
          Webflow build clean and maintainable.
        </p>
      </section>

      {/* Design Goals */}
      <section className="case-section">
        <h2>Design Goals</h2>
        <div className="case-columns">
          <ul>
            <li>
              Build a warm, editorial brand experience instead of a typical
              transactional shop.
            </li>
            <li>
              Use photography and soft color to capture café textures — ceramics,
              steam, light, and shared tables.
            </li>
            <li>
              Provide clear structure for different content types: brand story,
              journal posts, support content, and product catalog.
            </li>
            <li>
              Keep layouts scannable and responsive so browsing feels light,
              even on small screens.
            </li>
          </ul>
          <ul>
            <li>
              Make Webflow sections reusable, so future stories or products can
              be added without redesign.
            </li>
            <li>
              Maintain consistent spacing, type rhythm, and card styles across
              all five pages.
            </li>
            <li>
              Give support content a calm, reassuring tone to reduce friction
              for new customers.
            </li>
            <li>
              Treat the shop as a curated set of offerings, not an overwhelming
              catalog.
            </li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="case-section">
        <h2>Process</h2>
        <p>
          I started by mapping the core flows a visitor might take: landing on
          the Home page from a social link, reading the brand story, browsing
          beans, looking up shipping details, or following a Coffee Story from
          an email. Each flow suggested a slightly different hierarchy and tone.
        </p>
        <p>
          After defining the visual direction — warm, grounded, and lightly
          editorial — I designed page-level layouts in Figma and then rebuilt
          them in Webflow. The implementation uses reusable sections and CMS
          structures so that Coffee Stories or product cards can scale while the
          overall experience stays consistent.
        </p>
      </section>

      {/* Visual Showcase */}
      <section className="case-section">
        <h2>Visual Showcase</h2>
        <p className="case-section-intro">
          Page-level screens exported from Webflow, showing how Drip Café
          balances storytelling, structure, and commerce across the experience.
        </p>

        <GalleryGroup
          title="01 · Home — Brand introduction & warm hero"
          caption="The home page sets the tone with gentle color, soft shadows, and photography focused on cozy, everyday rituals. Featured sections highlight key benefits and invite visitors to explore further."
          images={homeImages}
        />

        <GalleryGroup
          title="02 · About — Our Story & Our Team"
          caption="The About page introduces Drip Café’s origin story and values, supported by warm lifestyle imagery. A simple team grid adds a human layer to the brand and makes the roastery feel approachable."
          images={aboutImages}
        />

        <GalleryGroup
          title="03 · Coffee Stories — Journal article"
          caption="A long-form Coffee Stories layout designed to feel like a slow Sunday read. Hierarchy, spacing, and imagery are tuned for readability, extending the brand voice beyond pure marketing pages."
          images={storiesImages}
        />

        <GalleryGroup
          title="04 · Support — FAQ, shipping, returns & reach-out"
          caption="Support information is organized into FAQ accordions and clearly separated sections for shipping, returns, policy, and contact. The layout and language aim to reduce uncertainty and build trust."
          images={supportImages}
        />

        <GalleryGroup
          title="05 · Shop Beans — Product catalog"
          caption="The Shop Beans page presents core offerings — beans and brewing essentials — in a clean, card-based grid. The structure is intentionally minimal so product photography and naming carry most of the character."
          images={shopImages}
        />
      </section>

      {/* Tools */}
      <section className="case-section">
        <h2>Tools</h2>
        <ul className="case-tools-list">
          <li>Figma — Layout exploration and UI design</li>
          <li>Webflow — Implementation, interactions, and CMS setup</li>
          <li>Photoshop / AI imagery — Product and lifestyle visual refinement</li>
          <li>Notion — Content planning and brand narrative drafts</li>
        </ul>
      </section>

      {/* About & Next steps */}
      <section className="case-section case-section-split">
        <div>
          <h2>About this project</h2>
          <p>
            Drip Café is a self-initiated exploration into small-brand e-commerce
            and Webflow implementation. It is scoped to feel realistic for an
            independent roastery, while still allowing room for future features
            like subscriptions or seasonal campaigns.
          </p>
        </div>
        <div>
          <h2>What I’d explore next</h2>
          <p>
            Next steps could include a subscription flow for regular deliveries,
            richer filtering for Coffee Stories, and A/B testing on product
            cards and CTAs to better balance storytelling with conversion.
          </p>
        </div>
      </section>
    </article>
  );
}