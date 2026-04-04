// src/pages/Game.jsx
import { Link } from "react-router-dom";

import gameHero from "../assets/Game/game-play-positioning.png";
import gameIntro from "../assets/Game/game-intro.png";
import gameTiming from "../assets/Game/game-play-timing.png";
import gameCutscene from "../assets/Game/game-cutscene.png";

import loseDetectedA from "../assets/Game/game-lose-detected-a.png";
import loseDetectedB from "../assets/Game/game-lose-detected-b.png";
import loseMissA from "../assets/Game/game-lose-miss-a.png";
import loseMissB from "../assets/Game/game-lose-miss-b.png";

import gamePause from "../assets/Game/game-pause.png";
import gameWin from "../assets/Game/game-win.png";

export default function Game() {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="case-page game-case-page">
      <nav className="case-nav">
        <Link to="/" className="case-back-link">
          ← Back to Work
        </Link>
        <span className="case-tag">Interactive · System Design · 2026</span>
      </nav>

      <header className="case-hero">
        <p className="case-kicker">FINN’S FART FRENZY</p>

        <h1 className="case-title">
          Designing a rule-based stealth interaction system from a simple comedic mechanic
        </h1>

        <p className="case-intro">
          This project started from a deliberately humorous idea, but the core
          challenge was to turn it into a structured interaction system. The
          experience is built around a clear loop: approach, evaluate
          visibility, commit at the right moment, and resolve the outcome
          through readable feedback.
        </p>

        <div className="case-meta-grid">
          <div>
            <h3>Role</h3>
            <p>Interaction Designer</p>
          </div>

          <div>
            <h3>Focus</h3>
            <p>Gameplay loop, failure states, timing feedback, system UI</p>
          </div>

          <div>
            <h3>Context</h3>
            <p>Unity-based interaction prototype</p>
          </div>
        </div>

        <div className="game-cta-row" style={{ marginTop: "2rem" }}>
          <a
            href="https://liuyili2000.itch.io/finns-fart-frenzy"
            target="_blank"
            rel="noopener noreferrer"
            className="p1btn p1btnPrimary"
            style={{ textDecoration: "none" }}
          >
            ▶ Play on Itch.io
          </a>
        </div>
      </header>

      <section className="case-section">
        <div
          className="game-video-container"
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "12px",
            background: "#000",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src="https://www.youtube.com/embed/H9sfmWenfL8"
            title="Gameplay Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="case-section">
        <div className="case-text-block">
          <h2>The core interaction loop</h2>
          <p>
            The interaction is structured around a four-stage loop:{" "}
            <strong>Approach → Evaluate → Commit → Resolve</strong>. Each stage
            introduces a clear decision point, so player actions feel
            intentional rather than accidental.
          </p>
        </div>

        <div
          className="game-card-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <div
            className="game-card"
            style={{
              padding: "1.5rem",
              background: "var(--bg-secondary)",
              borderRadius: "8px",
            }}
          >
            <h4 style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              Visibility & positioning
            </h4>
            <p className="case-small">
              Players need to read the environment before acting. Success
              depends on where they stand and whether they remain unnoticed.
            </p>
          </div>

          <div
            className="game-card"
            style={{
              padding: "1.5rem",
              background: "var(--bg-secondary)",
              borderRadius: "8px",
            }}
          >
            <h4 style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              Timing & commitment
            </h4>
            <p className="case-small">
              The interaction includes a narrow moment to act. This creates a
              point of commitment, turning a simple input into a risk-based
              decision.
            </p>
          </div>

          <div
            className="game-card"
            style={{
              padding: "1.5rem",
              background: "var(--bg-secondary)",
              borderRadius: "8px",
            }}
          >
            <h4 style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              Clear success and failure rules
            </h4>
            <p className="case-small">
              The rules are strict and readable: either the player succeeds
              under the right conditions or fails for a clear reason. That
              clarity makes the loop easy to understand and replay.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-text-block">
          <h2>Gameplay flow & visual feedback</h2>
        </div>

        <div
          className="game-visual-flow"
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <figure>
            <img
              src={gameIntro}
              className="game-full-image"
              style={{ width: "100%", borderRadius: "12px" }}
              alt="Level introduction screen"
            />
            <figcaption className="game-caption">
              Level introduction: establishing the goal and the rule set before
              the player acts.
            </figcaption>
          </figure>

          <div
            className="game-two"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
          >
            <img
              src={gameHero}
              style={{ width: "100%", borderRadius: "8px" }}
              alt="Gameplay positioning state"
            />
            <img
              src={gameTiming}
              style={{ width: "100%", borderRadius: "8px" }}
              alt="Gameplay timing state"
            />
          </div>

          <p className="case-small" style={{ textAlign: "center" }}>
            Positioning and timing work together: players must first judge where
            they can act, then decide when to commit.
          </p>
        </div>
      </section>

      <section
        className="case-section bg-gray-50"
        style={{ padding: "4rem 2rem", margin: "4rem -2rem" }}
      >
        <div className="case-text-block">
          <h2>Action feedback</h2>
          <p>
            A successful action triggers a cutscene transition that makes the
            outcome feel deliberate and resolved. This exaggeration is part of
            the tone, but it also serves a functional role: confirming that the
            player’s choice has been locked in and completed.
          </p>
        </div>

        <img
          src={gameCutscene}
          className="game-full-image"
          style={{ width: "100%", borderRadius: "12px", marginTop: "2rem" }}
          alt="Cutscene transition feedback"
        />
      </section>

      <section className="case-section">
        <div className="case-text-block">
          <h2>Failure states as instruction</h2>
          <p>
            Failure is not just punishment in this system. Each failure state
            communicates a different rule violation, helping the player adjust
            behavior on the next attempt.
          </p>
        </div>

        <div
          className="failure-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          <div>
            <h4>Detected: visibility breach</h4>
            <div
              className="game-two-stacked"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                margin: "1rem 0",
              }}
            >
              <img
                src={loseDetectedA}
                style={{ width: "100%", borderRadius: "8px" }}
                alt="Detected failure state A"
              />
              <img
                src={loseDetectedB}
                style={{ width: "100%", borderRadius: "8px" }}
                alt="Detected failure state B"
              />
            </div>
            <p className="case-small">
              Being noticed invalidates the attempt immediately and reinforces
              the stealth rule.
            </p>
          </div>

          <div>
            <h4>Missed: positioning error</h4>
            <div
              className="game-two-stacked"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                margin: "1rem 0",
              }}
            >
              <img
                src={loseMissA}
                style={{ width: "100%", borderRadius: "8px" }}
                alt="Missed target failure state A"
              />
              <img
                src={loseMissB}
                style={{ width: "100%", borderRadius: "8px" }}
                alt="Missed target failure state B"
              />
            </div>
            <p className="case-small">
              Missing the target teaches that spatial precision matters as much
              as timing.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-text-block">
          <h2>System UI & loop closure</h2>
        </div>

        <div
          className="game-ui-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginTop: "1rem",
          }}
        >
          <div>
            <img
              src={gamePause}
              style={{ width: "100%", borderRadius: "8px" }}
              alt="Pause menu UI"
            />
            <p className="case-small">
              Pause state: allows interruption without breaking the player’s
              understanding of the current loop.
            </p>
          </div>

          <div>
            <img
              src={gameWin}
              style={{ width: "100%", borderRadius: "8px" }}
              alt="Win state UI"
            />
            <p className="case-small">
              Win state: closes the loop clearly and rewards successful
              execution with a readable endpoint.
            </p>
          </div>
        </div>
      </section>

      <footer className="case-footer">
        <div className="case-reflection">
          <h2>Design reflection</h2>
          <div className="case-columns">
            <p>
              <strong>Comedy still needs structure.</strong> The theme is playful,
              but the interaction only works because the rules are strict and the
              outcomes are easy to read.
            </p>
            <p>
              <strong>Failure teaches the system.</strong> The two loss conditions
              do more than end the game — they explain what the player misunderstood
              and make the next attempt more informed.
            </p>
          </div>
        </div>

        <div className="case-final-cta">
          <Link to="/" className="p1btn p1btnPrimary">
            Back to Work
          </Link>
        </div>
      </footer>
    </main>
  );
}