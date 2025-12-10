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

export default function Pj1() {
  // 分组好的图片数组
  const introImages = [Img01, Img02, Img03, Img04];
  const homeImages = [Img05, Img06];
  const deliveryImages = [Img07, Img08];
  const techImages = [Img09, Img10];
  const comparisonImages = [Img11, Img12];

  return (
    <article className="case-page">
      {/* 顶部回到 Work 链接 */}
      <div className="case-breadcrumb">
        <Link to="/" className="case-back-link">
          ← Back to Work
        </Link>
        <span className="case-tag">Case Study · Brand System &amp; UX</span>
      </div>

      {/* Hero / 基本介绍 */}
      <header className="case-hero">
        <p className="case-subtitle">Lumi — Mattress Experience Redesign</p>
        <h1 className="case-title">
          A soft-tech purple brand system for a science-forward mattress
          experience.
        </h1>

        <p className="case-intro">
          Lumi is a conceptual, direct-to-consumer mattress brand exploring
          hybrid foam engineering, cooling technology, and a science-forward
          visual identity. This project redesigns four core product experience
          pages with a unified brand system, improved usability, and a modern
          soft-tech purple aesthetic across both Light and Dark Mode.
        </p>

        {/* Meta 信息：角色 / 时间 / 范围 */}
        <div className="case-meta-grid">
          <div>
            <h2>Role</h2>
            <p>UI/UX designer · Visual design · Design systems</p>
          </div>
          <div>
            <h2>Scope</h2>
            <ul>
              <li>Home Page</li>
              <li>Free Delivery Page</li>
              <li>Technology Page</li>
              <li>Mattress Comparison Page</li>
            </ul>
          </div>
          <div>
            <h2>Timeline &amp; Type</h2>
            <p>Self-initiated project · 2025</p>
          </div>
        </div>
      </header>

      {/* Section: Project Overview */}
      <section className="case-section">
        <h2>⭐ Project Overview</h2>
        <p>
          The goal of this redesign was to modernize Lumi’s visual identity and
          create a more intuitive, story-driven product experience. Each page
          was rebuilt with a consistent layout, refined hierarchy, improved
          storytelling, and an accessible experience across multiple themes.
        </p>
      </section>

      {/* Section: Design Goals */}
      <section className="case-section">
        <h2>Design Goals</h2>
        <div className="case-columns">
          <ul>
            <li>Establish a unified visual identity</li>
            <li>Standardize spacing, typography, elevation, and components</li>
            <li>Improve clarity across mattress tiers</li>
            <li>Strengthen storytelling of cooling &amp; comfort technologies</li>
          </ul>
          <ul>
            <li>Visualize airflow, adaptive layers, and micro-materials</li>
            <li>Create a clearer decision-making flow for customers</li>
            <li>Support both Light Mode and Dark Mode</li>
            <li>Ensure scalability, clarity, and premium brand polish</li>
          </ul>
        </div>
      </section>

      {/* Section: Process */}
      <section className="case-section">
        <h2>Process</h2>
        <p>
          The redesign began with an audit of Lumi’s existing pages to identify
          issues with spacing, hierarchy, and brand cohesion. Content was
          reorganized into clearer flows and a modern layout system that
          supports technical storytelling.
        </p>
        <p>
          A cohesive visual system—typography, color palette, motion direction,
          and components—was then applied across all four pages to keep the
          brand experience consistent in both Light and Dark modes.
        </p>
      </section>

      {/* Section: Visual Showcase */}
      <section className="case-section">
        <h2>Visual Showcase</h2>
        <p className="case-section-intro">
          High-fidelity screens exported from Figma. Each group pairs Light and
          Dark mode variants for the redesigned flows.
        </p>

        <GalleryGroup
          title="01–04 · Project Introduction"
          caption="Project overview, goals, and process visuals introducing Lumi’s revised brand system."
          images={introImages}
        />

        <GalleryGroup
          title="05–06 · Home Page"
          caption="Hero, product highlights, and technology storytelling in a flexible grid that works in both Light and Dark modes."
          images={homeImages}
        />

        <GalleryGroup
          title="07–08 · Free Delivery Page"
          caption="Shipping, white-glove delivery, and warranty information surfaced in a clearer, more scannable layout."
          images={deliveryImages}
        />

        <GalleryGroup
          title="09–10 · Technology Page"
          caption="Visual explanations of airflow, cooling layers, and hybrid foam engineering using a soft-tech purple aesthetic."
          images={techImages}
        />

        <GalleryGroup
          title="11–12 · Mattress Comparison Page"
          caption="Comparison tables that make it easier to understand tiers, features, and value across the Lumi line-up."
          images={comparisonImages}
        />
      </section>

      {/* Section: Tools */}
      <section className="case-section">
        <h2>Tools</h2>
        <ul className="case-tools-list">
          <li>Figma — High-fidelity UI design</li>
          <li>Photoshop &amp; Illustrator — Asset refinement</li>
          <li>AI-assisted concept visuals — Enhanced consistency</li>
          <li>GitHub — Versioning and documentation</li>
        </ul>
      </section>

      {/* Section: About & License */}
      <section className="case-section case-section-split">
        <div>
          <h2>About the Designer</h2>
          <p>
            Designed by Liuyi Li, a UI/UX &amp; visual designer based in
            Vancouver. Focused on building clean, modern, and
            storytelling-driven digital experiences.
          </p>
        </div>
        <div>
          <h2>License</h2>
          <p>
            This project is a self-initiated conceptual redesign. All visuals
            are original and may not represent any existing commercial brand.
          </p>
        </div>
      </section>
    </article>
  );
}

