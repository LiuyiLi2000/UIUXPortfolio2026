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
  const isStackRow = rowClass.includes("case-stack-row");

  return (
    <div className="case-gallery-block">
      <div className="case-gallery-header">
        <h3>{title}</h3>
        {caption && <p className="case-gallery-caption">{caption}</p>}
      </div>

      <div
        className={classes}
        style={
          isStackRow
            ? {
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }
            : isDeviceRow
            ? {
                display: "flex",
                alignItems: "flex-start",
                gap: "1.5rem",
                overflowX: "auto",
              }
            : {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }
        }
      >
        {images.map((src, index) => (
          <figure
            key={index}
            className="case-image-wrapper"
            style={
              isStackRow
                ? {
                    width: "100%",
                    margin: 0,
                  }
                : undefined
            }
          >
            <img
              src={src}
              alt={`${title} screen ${index + 1}`}
              loading="lazy"
              style={
                isStackRow
                  ? {
                      width: "100%",
                      display: "block",
                    }
                  : undefined
              }
            />
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
      <nav className="case-nav">
        <Link to="/" className="case-back-link">
          ← Back to Work
        </Link>
        <span className="case-tag">FinTech · High-Density UI · 2026</span>
      </nav>

      <header className="case-hero">
        <p className="case-kicker">DEX TRADING INTERFACE</p>

        <h1 className="case-title">
          Reducing cognitive load in a high-density trading interface.
        </h1>

        <p className="case-intro">
          This project explores a trading interface where users need to read
          charts, monitor live market data, and place orders within the same
          screen. The focus was on improving clarity across dense information,
          reducing interaction errors, and preserving layout stability during
          critical actions.
        </p>

        <div className="case-challenge-box">
          <div className="case-challenge-item">
            <span className="case-label">The Friction</span>
            <p>
              Traders need to monitor charts, order books, and execution panels
              simultaneously. In this kind of interface, visual overload, unclear
              feedback, or layout shifts during error states can slow decisions
              and increase the risk of mistakes.
            </p>
          </div>

          <div className="case-challenge-item">
            <span className="case-label">Design Response</span>
            <p>
              I focused on spatial stability — keeping the interface anchored
              during state changes — while adapting the interaction flow across
              desktop, tablet, and mobile layouts.
            </p>
          </div>
        </div>

        <div className="case-meta-grid">
          <div>
            <h3>Role</h3>
            <p>Product Designer</p>
            <p className="case-small">
              Interface logic · Responsive architecture
            </p>
          </div>

          <div>
            <h3>Focus</h3>
            <p>Error prevention, data density, and state-driven interaction</p>
          </div>

          <div>
            <h3>Timeline</h3>
            <p>Self-initiated · 2025–2026</p>
          </div>
        </div>
      </header>

      <section className="case-content">
        <div className="case-section">
          <div className="case-text-block">
            <h2>Design principles</h2>
            <p>
              Designing for trading is not just about fitting more data onto the
              screen. It is about helping users move from information to action
              without losing context. This interface was built around three
              principles:
            </p>
          </div>

          <div
            className="case-principles-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              margin: "2rem 0",
            }}
          >
            <div className="principle-card">
              <h4
                style={{
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                1. Spatial Stability
              </h4>
              <p className="case-small">
                Error messages do not push surrounding UI. Fixed-height regions
                help keep critical controls, especially the primary action area,
                in a predictable position.
              </p>
            </div>

            <div className="principle-card">
              <h4
                style={{
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                2. Chromatic Intent
              </h4>
              <p className="case-small">
                Red and green are reserved for directional actions. The rest of
                the interface uses a restrained neutral scale to reduce noise
                and make action states more legible.
              </p>
            </div>

            <div className="principle-card">
              <h4
                style={{
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                3. Density Control
              </h4>
              <p className="case-small">
                On smaller screens, secondary information is deprioritized so
                the primary flow — reading price, placing an order, and
                confirming action — stays intact.
              </p>
            </div>
          </div>
        </div>

        <div className="case-section">
          <div className="case-text-block">
            <h2>Key design decisions</h2>
            <p>
              Beyond the overall layout, several interaction decisions shaped
              how the interface supports clarity and risk awareness during use.
            </p>
          </div>

          <div className="case-columns">
            <div>
              <h4>Keep action regions stable during errors</h4>
              <p>
                Error feedback appears within fixed interface regions instead of
                expanding the layout. This reduces visual disruption and helps
                users recover without re-orienting themselves.
              </p>
            </div>

            <div>
              <h4>Separate reading from acting</h4>
              <p>
                The chart, order form, and supporting market data are grouped
                into distinct regions so users can scan information without
                losing the primary action path.
              </p>
            </div>

            <div>
              <h4>Preserve hierarchy across breakpoints</h4>
              <p>
                Responsive behavior is not just stacking content. Each breakpoint
                keeps the same decision logic while adjusting density, order,
                and interaction priority for the available space.
              </p>
            </div>
          </div>
        </div>

        <div className="case-section">
          <div className="case-text-block">
            <h2>Desktop layout</h2>
            <p>
              The desktop view uses a three-region structure: chart, order form,
              and market data. This keeps price context visible while allowing
              order placement without forcing users to switch views.
            </p>
          </div>

          <GalleryGroup
            title="Primary trading states"
            caption="Buy → Sell → Error states shown in sequence. The layout remains stable while directional actions and feedback change."
            images={desktopImages}
            rowClass="case-stack-row"
          />
        </div>

        <div className="case-section bg-gray-50">
          <div className="case-text-block">
            <h2>Responsive behavior</h2>
            <p>
              As screen size decreases, the interface shifts from side-by-side
              comparison to prioritized vertical flow. The goal was to preserve
              the same decision structure while reducing density for tablet and
              mobile use.
            </p>
          </div>

          <GalleryGroup
            title="Tablet layout"
            caption="The interface reorganizes into a stacked structure that keeps the chart prominent while preserving access to trading actions and supporting data."
            images={tabletImages}
            rowClass="case-device-row tablet-row"
          />

          <GalleryGroup
            title="Mobile interaction flow"
            caption="The mobile layout prioritizes a single-column sequence focused on price context, action entry, and confirmation, with secondary data moved lower in the flow."
            images={phoneImages}
            rowClass="case-device-row phone-row"
          />
        </div>
      </section>

      <footer className="case-footer">
        <div className="case-reflection">
          <h2>Next steps & edge cases</h2>

          <div className="case-columns">
            <div>
              <h4>Dynamic slippage indicators</h4>
              <p className="case-small">
                A next step would be exploring how risk feedback could surface
                before submission, so users can better understand trade impact
                before confirming an order.
              </p>
            </div>

            <div>
              <h4>Accessibility</h4>
              <p className="case-small">
                The red/green action model should be audited for color-vision
                deficiencies, with iconography or additional cues added to
                reinforce directional meaning.
              </p>
            </div>
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