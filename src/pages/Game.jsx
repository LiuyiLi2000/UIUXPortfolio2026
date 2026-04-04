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

      <div className="case-breadcrumb">
        <a className="case-back-link" href={`${base}`}>← Back Home</a>
        <span className="case-tag">Interactive / Game Design</span>
      </div>

      {/* HERO */}
      <section className="case-hero">
        <p className="case-subtitle">Interaction System Design</p>

        <h1 className="case-title">
          Turning a humorous mechanic into a rule-based stealth interaction system
        </h1>

        <p className="case-intro">
          Finn’s Fart Frenzy began as a deliberately absurd idea, but the goal of the
          project was not humor alone. The challenge was to structure that idea into a
          clear interaction system where players must read space, manage risk, and act
          within tight timing constraints. The final experience is built around a simple
          but strict loop: approach, evaluate, commit, and resolve — with failure states
          that teach the rules rather than punish the player.
        </p>

        <div className="game-cta-row">
          <a
            href="https://liuyili2000.itch.io/finns-fart-frenzy"
            target="_blank"
            rel="noopener noreferrer"
            className="game-play-btn"
          >
            ▶ Play the Game
          </a>
        </div>
      </section>

      {/* TRAILER（弱化） */}
      <section className="case-section">
        <iframe
          className="game-video"
          src="https://www.youtube.com/embed/H9sfmWenfL8"
          title="Game Trailer"
        />
      </section>

      {/* HERO GAMEPLAY */}
      <section className="case-section">
        <img src={gameHero} className="game-full-image" />
      </section>

      {/* OVERVIEW */}
      <section className="case-section">
        <h2>Project Overview</h2>

        <div className="game-card-grid">
          <div className="game-card">
            <h3>Objective</h3>
            <p>
              Approach the target undetected and trigger the action at the correct moment.
            </p>
          </div>

          <div className="game-card">
            <h3>Success Condition</h3>
            <p>
              The action must land on the target while remaining unseen.
            </p>
          </div>

          <div className="game-card">
            <h3>Failure Conditions</h3>
            <p>
              The player fails if the action misses or if they are detected at any point.
            </p>
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="case-section">
        <h2>Core Interaction Systems</h2>

        <div className="game-card-grid">
          <div className="game-card">
            <h3>Visibility</h3>
            <p>
              Players constantly evaluate whether they are exposed. This creates tension
              before any action is taken.
            </p>
          </div>

          <div className="game-card">
            <h3>Proximity</h3>
            <p>
              The mechanic only works within a precise spatial range, forcing deliberate positioning.
            </p>
          </div>

          <div className="game-card">
            <h3>Timing</h3>
            <p>
              The action must be triggered at the right moment, introducing risk and commitment.
            </p>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="case-section">
        <h2>Gameplay Flow</h2>

        <img src={gameIntro} className="game-full-image" />

        <div className="game-two">
          <img src={gameHero} className="game-full-image" />
          <img src={gameTiming} className="game-full-image" />
        </div>
      </section>

      {/* CUTSCENE */}
      <section className="case-section">
        <h2>Action Feedback</h2>

        <img src={gameCutscene} className="game-full-image" />

        <p className="game-caption">
          The cut scene exaggerates the action and confirms commitment, turning a simple input into a clear event.
        </p>
      </section>

      {/* FAILURE */}
      <section className="case-section">
        <h2>Failure States</h2>

        <div className="game-card">
          <h3>Detected</h3>

          <div className="game-two">
            <img src={loseDetectedA} />
            <img src={loseDetectedB} />
          </div>

          <p>
            Being noticed invalidates the attempt, reinforcing the stealth constraint.
          </p>
        </div>

        <div className="game-card">
          <h3>Missed Target</h3>

          <div className="game-two">
            <img src={loseMissA} />
            <img src={loseMissB} />
          </div>

          <p>
            Missing the target reinforces precision and positioning.
          </p>
        </div>
      </section>

      {/* UI */}
      <section className="case-section">
  <h2>System UI</h2>

  <div className="game-ui-grid">
    <div className="game-ui-block">
      <img src={gamePause} className="game-full-image" />
      <p className="game-ui-caption">
        Pause allows interruption without breaking the loop, supporting retry behavior.
      </p>
    </div>

    <div className="game-ui-block">
      <img src={gameWin} className="game-full-image" />
      <p className="game-ui-caption">
        The result screen closes the loop and encourages replay.
      </p>
    </div>
  </div>
</section>

    </main>
  );
}