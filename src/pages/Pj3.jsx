// src/pages/Pj3.jsx
import { Link } from "react-router-dom";

import BuyDesktop from "../assets/Pj3/Trade_Buy_Desktop.png";
import SellDesktop from "../assets/Pj3/Trade_Sell_Desktop.png";
import ErrorDesktop from "../assets/Pj3/Trade_Error_Desktop.png";

import BuyTablet from "../assets/Pj3/Trade_Buy_Tablet.png";
import SellTablet from "../assets/Pj3/Trade_Sell_Tablet.png";
import ErrorTablet from "../assets/Pj3/Trade_Error_Tablet.png";

import BuyPhone from "../assets/Pj3/Trade_Buy_Phone.png";
import SellPhone from "../assets/Pj3/Trade_Sell_Phone.png";
import ErrorPhone from "../assets/Pj3/Trade_Error_Phone.png";

function GalleryGroup({ title, caption, images, rowClass = "" }) {
  const classes = ["case-gallery-row", rowClass].filter(Boolean).join(" ");
  const isDeviceRow = rowClass.includes("case-device-row");

  return (
    <div className="case-gallery-block">
      <h3>{title}</h3>
      {caption ? <p className="case-gallery-caption">{caption}</p> : null}

      <div
        className={classes}
        // 关键：device row 必须是 flex，否则你那些 flex/scroll 样式都不会生效
        style={
          isDeviceRow
            ? { display: "flex", alignItems: "flex-start" }
            : undefined
        }
      >
        {images.map((src, index) => (
          <figure key={index} className="case-image-wrapper">
            <img src={src} alt={`${title} screen ${index + 1}`} />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Pj3() {
  const desktopImages = [BuyDesktop, SellDesktop, ErrorDesktop];
  const tabletImages = [BuyTablet, SellTablet, ErrorTablet];
  const phoneImages = [BuyPhone, SellPhone, ErrorPhone];

  return (
    <article className="case-page">
      {/* 顶部回到 Work */}
      <div className="case-breadcrumb">
        <Link to="/" className="case-back-link">
          ← Back to Work
        </Link>
        <span className="case-tag">Case Study · Trading UI &amp; Responsive</span>
      </div>

      {/* Hero */}
      <header className="case-hero">
        <p className="case-subtitle">DEX Trading Interface — Trade Page</p>
        <h1 className="case-title">
          A responsive crypto trading interface focused on clarity, speed, and
          error prevention.
        </h1>

        <p className="case-intro">
          This project explores the design of a decentralized exchange (DEX)
          trading interface, emphasizing clear decision-making, safe order
          placement, and responsive layouts across desktop, tablet, and mobile
          devices. The interface prioritizes visual hierarchy, interaction
          states, and layout stability in high-attention trading scenarios.
        </p>

        {/* Meta 信息 */}
        <div className="case-meta-grid">
          <div>
            <h2>Role</h2>
            <p>UI/UX designer · Product design · Interaction design</p>
          </div>

          <div>
            <h2>Scope</h2>
            <ul>
              <li>Trading Page (Buy / Sell)</li>
              <li>Order Form &amp; Error States</li>
              <li>Order Book &amp; Market Stats</li>
              <li>Responsive layouts (Desktop, Tablet, Mobile)</li>
            </ul>
          </div>

          <div>
            <h2>Timeline &amp; Type</h2>
            <p>Self-initiated product design · 2025</p>
          </div>
        </div>
      </header>

      {/* Project Overview */}
      <section className="case-section">
        <h2>⭐ Project Overview</h2>
        <p>
          The goal of this project was to design a clear, responsive crypto
          trading interface that balances dense financial information with
          usability and safety.
        </p>
        <p>
          The focus was placed on core trading interactions — placing Buy and
          Sell orders, understanding market context, and handling errors — while
          ensuring layout stability and clarity across different devices.
          Special attention was given to interaction states and error handling
          to reduce cognitive load during high-pressure decision making.
        </p>
      </section>

      {/* Design Goals */}
      <section className="case-section">
        <h2>Design Goals</h2>
        <div className="case-columns">
          <ul>
            <li>Create a clear and intuitive order placement flow</li>
            <li>Differentiate Buy and Sell actions through intentional color usage</li>
            <li>Prevent critical user errors with clear feedback and validation</li>
            <li>Maintain layout stability during interaction and error states</li>
          </ul>
          <ul>
            <li>Design responsive layouts for desktop, tablet, and mobile</li>
            <li>Ensure scannability and hierarchy in data-dense interfaces</li>
            <li>Support fast decision making without visual overload</li>
            <li>Keep components reusable and consistent across breakpoints</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="case-section">
        <h2>Process</h2>
        <p>
          The design process began with reviewing existing crypto trading
          interfaces to identify common usability challenges, particularly
          around order forms, visual density, and error handling.
        </p>
        <p>
          The layout was structured around three primary regions: price chart,
          order form, and market data, allowing users to place trades without
          losing market context. Interaction states — Buy, Sell, and Error —
          were explored early to ensure visual consistency and clarity.
        </p>
        <p>
          Instead of expanding layouts during error states, errors were surfaced
          in a way that preserves spatial stability, reducing disruption during
          critical trading actions. Responsive layouts were then adapted for
          tablet and mobile to maintain usability across screen sizes.
        </p>
      </section>

      {/* Visual Showcase */}
      <section className="case-section">
        <h2>Visual Showcase</h2>
        <p className="case-section-intro">
          High-fidelity screens exported from Figma. The set demonstrates Buy,
          Sell, and Error states across Desktop, Tablet, and Mobile layouts.
        </p>

        <GalleryGroup
          title="01–03 · Desktop — Buy / Sell / Error states"
          caption="Primary trading layout with chart as the visual center, supported by order placement, order book, and market stats. Error handling preserves layout stability."
          images={desktopImages}
        />

        <GalleryGroup
          title="04–06 · Tablet — Responsive stacking & density control"
          caption="The layout reorganizes into a vertical flow while keeping chart-first hierarchy."
          images={tabletImages}
          rowClass="case-device-row tablet-row"
        />

        <GalleryGroup
          title="07–09 · Mobile — Touch-friendly, single-column flow"
          caption="The single-column layout prioritizes chart and order form, with market data below."
          images={phoneImages}
          rowClass="case-device-row phone-row"
        />
      </section>

      {/* Tools */}
      <section className="case-section">
        <h2>Tools</h2>
        <ul className="case-tools-list">
          <li>Figma — Layout, component design, and interaction states</li>
          <li>Design system thinking — Reusable patterns and responsive variants</li>
          <li>Prototyping — State exploration (Buy / Sell / Error)</li>
        </ul>
      </section>

      {/* About & Next steps */}
      <section className="case-section case-section-split">
        <div>
          <h2>About this project</h2>
          <p>
            This is a self-initiated UI exploration of a DEX trading interface.
            The scope focuses on the trade page experience and key states, with
            an emphasis on hierarchy, safety, and responsive behavior.
          </p>
        </div>
        <div>
          <h2>What I’d explore next</h2>
          <p>
            Next steps could include a full chart UI (indicators, depth view,
            drawing tools), additional order types (Limit / Market / Stop-Limit),
            and a dark mode theme with accessibility checks.
          </p>
        </div>
      </section>
    </article>
  );
}
