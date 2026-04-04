import sleepMartFinal from "../assets/Marketing/sleepmart.mp4";
import sleepMartInitial from "../assets/Marketing/sleepmart-b.mp4";

import univisionProfile from "../assets/Marketing/univision-profile.png";
import univisionBalenciaga1 from "../assets/Marketing/univision-balenciaga-1.png";
import univisionBalenciaga2 from "../assets/Marketing/univision-balenciaga-2.png";
import univisionMiumiu1 from "../assets/Marketing/univision-miumiu-1.png";
import univisionMiumiu2 from "../assets/Marketing/univision-miumiu-2.png";

import univisionStoryInfo from "../assets/Marketing/univision-story-info.jpg";
import univisionStoryPolicy1 from "../assets/Marketing/univision-story-policy-1.jpg";
import univisionStoryRepair from "../assets/Marketing/univision-story-repair.jpg";
import univisionStoryFaq1 from "../assets/Marketing/univision-story-faq-1.jpg";

export default function VisualMarketing() {
  const base = import.meta.env.BASE_URL;

  const playVideo = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) video.play().catch(() => {});
  };

  const stopVideo = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <main className="case-page">
      <div className="case-breadcrumb">
        <a className="case-back-link" href={`${base}`}>
          ← Back Home
        </a>
        <span className="case-tag">Visual & Marketing Work</span>
      </div>

      <section className="case-hero">
        <p className="case-subtitle">Performance Marketing & Visual Systems</p>
        <h1 className="case-title">
          Conversion-oriented campaign visuals for e-commerce and retail
        </h1>
        <p className="case-intro">
          A selected body of work focused on campaign clarity, conversion
          support, and fast message recognition across retail and social
          channels. Rather than treating marketing visuals as decoration, this
          work approaches design as a performance layer: what gets noticed
          first, what communicates value fastest, and what reduces friction in
          the path to action.
        </p>
      </section>

      <section className="case-section">
        <h2>Featured Campaign</h2>
        <p className="case-section-intro">
          A seasonal promotional direction developed for a retail sales moment,
          balancing urgency with product trust so the offer could attract
          attention without weakening purchase confidence.
        </p>

        <div className="vm-feature-card">
          <div
            className="vm-video-shell"
            onMouseEnter={playVideo}
            onMouseLeave={stopVideo}
          >
            <video
              className="vm-feature-video"
              src={sleepMartFinal}
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="vm-hover-hint">Hover to preview</div>
          </div>

          <div className="vm-feature-copy">
            <h3>Designing for conversion without losing product credibility</h3>
            <p>
              The challenge was not only to make a promotion visible, but to
              preserve confidence in the product being sold. In discount-led
              retail, urgency can capture attention quickly, but when the sales
              layer overwhelms the product, the message becomes louder rather
              than more persuasive. This direction was designed to keep the
              offer immediate while maintaining the bed as the visual anchor of
              the ad.
            </p>

            <div className="vm-points">
              <div className="vm-point">
                <span className="vm-point-label">Test objective</span>
                <p>
                  Explore how much promotional dominance a campaign visual can
                  carry before product clarity starts to drop and the ad begins
                  to feel like a generic sale announcement rather than a
                  product-led conversion asset.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Design response</span>
                <p>
                  Reduced competing accents and used hierarchy, spacing, and CTA
                  placement to keep the offer immediately legible while allowing
                  the product to stay recognizable at first glance.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Conversion rationale</span>
                <p>
                  The final direction intentionally trades a small amount of
                  visual aggression for stronger clarity, better product trust,
                  and faster message understanding—more useful in a real
                  conversion environment than simply making the design louder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <h2>Goal & Performance Approach</h2>

        <div className="vm-context-grid vm-context-grid-2">
          <div className="vm-context-card">
            <h3>Goal</h3>
            <p>
              Create a campaign visual that communicates the promotion
              immediately, keeps the product credible, and supports faster
              purchase-oriented decision-making in a promotion-heavy retail
              context.
            </p>
          </div>

          <div className="vm-context-card">
            <h3>Approach</h3>
            <ul className="vm-bullet-list">
              <li>Prioritized product visibility before decorative intensity</li>
              <li>Used pricing hierarchy to support fast scanning</li>
              <li>Reduced non-essential accents that diluted message order</li>
              <li>Kept CTA and offer readable without collapsing product trust</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section">
        <h2>A/B Direction Test: Promotion-heavy vs Product-first</h2>
        <p className="case-section-intro">
          Two motion directions were explored to evaluate which composition more
          effectively balanced urgency, product trust, and conversion clarity.
        </p>

        <div className="vm-ab-grid">
          <article className="vm-ab-card">
            <div className="vm-ab-top">
              <span className="vm-ab-label">Version A</span>
              <span className="vm-ab-badge">Promotion-heavy</span>
            </div>

            <div
              className="vm-video-shell vm-video-shell-sm"
              onMouseEnter={playVideo}
              onMouseLeave={stopVideo}
            >
              <video
                className="vm-ab-video"
                src={sleepMartInitial}
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="vm-hover-hint">Hover to preview</div>
            </div>

            <div className="vm-ab-copy">
              <p>
                This version pushes urgency harder, using stronger contrast and
                more dominant discount framing to capture attention quickly.
              </p>
              <ul className="vm-bullet-list">
                <li>Promotional messaging takes visual priority</li>
                <li>Typography is often registered before the product</li>
                <li>Attention capture is fast, but product authority weakens</li>
                <li>Higher urgency signal, lower product-first trust</li>
              </ul>
            </div>
          </article>

          <article className="vm-ab-card">
            <div className="vm-ab-top">
              <span className="vm-ab-label">Version B</span>
              <span className="vm-ab-badge">Product-first</span>
            </div>

            <div
              className="vm-video-shell vm-video-shell-sm"
              onMouseEnter={playVideo}
              onMouseLeave={stopVideo}
            >
              <video
                className="vm-ab-video"
                src={sleepMartFinal}
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="vm-hover-hint">Hover to preview</div>
            </div>

            <div className="vm-ab-copy">
              <p>
                The final direction reduces promotional dominance so the product
                remains the anchor, allowing the offer to support conversion
                rather than overpower comprehension.
              </p>
              <ul className="vm-bullet-list">
                <li>Product presence is stronger and easier to trust</li>
                <li>Offer and product reinforce each other instead of competing</li>
                <li>Cleaner hierarchy supports faster scanning</li>
                <li>Better suited for conversion-focused retail messaging</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="vm-text-block">
          <h3>Why Version B supports conversion better</h3>
          <p>
            Version A captures urgency more aggressively, but the sales layer
            starts to dominate before users fully register what is being sold.
            Version B improves message order: product first, offer second, CTA
            third. That sequencing reduces decision friction, keeps the ad more
            trustworthy, and creates a more commercially usable balance between
            attention and persuasion.
          </p>
        </div>
      </section>

      <section className="case-section">
        <h2>Social Content System for Retail Engagement</h2>
        <p className="case-section-intro">
          Instagram content designed not only as visual promotion, but as a
          mixed channel for brand presentation, customer education, and repeated
          service communication in a retail setting.
        </p>

        <div className="vm-feature-card vm-social-overview-card">
          <div className="vm-image-shell">
            <img
              src={univisionProfile}
              alt="Uni Vision Instagram profile and highlights"
              className="vm-social-overview-image"
            />
          </div>

          <div className="vm-feature-copy">
            <h3>Designing Instagram as both a marketing and service layer</h3>
            <p>
              Instead of treating Instagram as a purely promotional feed, this
              work reframed the channel into two performance functions: feed
              content that shaped brand perception and supported product
              desirability, and Story Highlights that externalized repeated
              customer questions around store information, repair, policy, and
              insurance.
            </p>

            <div className="vm-points">
              <div className="vm-point">
                <span className="vm-point-label">Channel challenge</span>
                <p>
                  The account needed to support multiple luxury eyewear brands
                  while also helping users find practical store information in a
                  format that could be scanned quickly on mobile.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">System strategy</span>
                <p>
                  Built the channel as a hybrid content system: feed posts for
                  attraction and brand tone, Highlights for utility, repeated
                  questions, and lower-friction information access.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Business value</span>
                <p>
                  This reduced dependence on direct messages for basic
                  questions, making the account more useful as a lightweight
                  retail support surface rather than only a posting stream.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <h2>Feed Directions: Brand tone across different labels</h2>
        <p className="case-section-intro">
          Product posts were designed to shift tone depending on the label being
          featured while staying commercially legible and usable in a retail
          marketing context.
        </p>

        <div className="vm-social-feed-grid">
          <article className="vm-social-feed-card">
            <div className="vm-social-feed-images vm-social-feed-images-2">
              <div className="vm-gallery-card">
                <img
                  src={univisionBalenciaga1}
                  alt="Balenciaga feed design 1"
                  className="vm-gallery-preview vm-social-post-preview"
                />
              </div>
              <div className="vm-gallery-card">
                <img
                  src={univisionBalenciaga2}
                  alt="Balenciaga feed design 2"
                  className="vm-gallery-preview vm-social-post-preview"
                />
              </div>
            </div>

            <div className="vm-text-block">
              <h3>Balenciaga</h3>
              <p>
                A colder and more restrained direction, using tighter structure
                and a muted visual tone to preserve sharp brand identity while
                keeping the product central and easy to read.
              </p>
              <ul className="vm-bullet-list">
                <li>Minimal layout reinforces brand restraint</li>
                <li>Product remains central rather than overly stylized</li>
                <li>Caption and visual tone support a more controlled signal</li>
                <li>Commercial readability is preserved inside a fashion-led layout</li>
              </ul>
            </div>
          </article>

          <article className="vm-social-feed-card">
            <div className="vm-social-feed-images vm-social-feed-images-2">
              <div className="vm-gallery-card">
                <img
                  src={univisionMiumiu1}
                  alt="Miu Miu feed design 1"
                  className="vm-gallery-preview vm-social-post-preview"
                />
              </div>
              <div className="vm-gallery-card">
                <img
                  src={univisionMiumiu2}
                  alt="Miu Miu feed design 2"
                  className="vm-gallery-preview vm-social-post-preview"
                />
              </div>
            </div>

            <div className="vm-text-block">
              <h3>Miu Miu</h3>
              <p>
                A softer and more layered direction with stronger styling cues,
                allowing promotional messaging to feel lighter and more
                fashion-led without losing scan speed or product readability.
              </p>
              <ul className="vm-bullet-list">
                <li>More expressive composition and softer visual rhythm</li>
                <li>Brand tone shifts without losing product clarity</li>
                <li>Promotional cues stay visible inside a styled layout</li>
                <li>Supports desirability while remaining retail-usable</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="vm-text-block">
          <h3>What this feed work demonstrates</h3>
          <p>
            The value here is not only visual polish, but controlled adaptation:
            changing layout tone, hierarchy, and emphasis depending on the brand
            while still keeping the post useful for retail visibility, product
            recognition, and quick user understanding.
          </p>
        </div>
      </section>

      <section className="case-section">
        <h2>Story Highlights: Structuring repeated customer information</h2>
        <p className="case-section-intro">
          Story content was designed as a lightweight information system,
          turning repeated customer questions into reusable assets that remain
          accessible through Highlights.
        </p>

        <div className="vm-story-layout">
          <div className="vm-story-feature">
            <div className="vm-gallery-card vm-story-feature-card">
              <img
                src={univisionProfile}
                alt="Instagram profile with Story Highlights"
                className="vm-story-feature-image vm-story-feature-image-profile"
              />
            </div>
          </div>

          <div className="vm-story-copy">
            <h3>Using Story as a customer-service interface</h3>
            <p>
              This Story system prioritized clarity and scannability over visual
              expression. Instead of acting as temporary decoration, the assets
              were organized to surface useful store information quickly and
              reduce friction in customer communication.
            </p>

            <div className="vm-points">
              <div className="vm-point">
                <span className="vm-point-label">Information design</span>
                <p>
                  Structured content into clear categories such as info, policy,
                  repair, and FAQ so users could self-serve common questions
                  without relying entirely on staff replies.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Design trade-off</span>
                <p>
                  Visual expression was intentionally reduced in favor of
                  readability because fast understanding mattered more here than
                  stronger stylistic impact.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Operational outcome</span>
                <p>
                  By moving recurring store questions into persistent
                  highlights, Instagram became a more structured support surface
                  and a more efficient customer-facing channel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="vm-story-grid vm-story-grid-4">
          <div className="vm-gallery-card">
            <img
              src={univisionStoryInfo}
              alt="Info Story screen"
              className="vm-story-thumb"
            />
          </div>
          <div className="vm-gallery-card">
            <img
              src={univisionStoryPolicy1}
              alt="Policy Story screen"
              className="vm-story-thumb"
            />
          </div>
          <div className="vm-gallery-card">
            <img
              src={univisionStoryRepair}
              alt="Repair Story screen"
              className="vm-story-thumb"
            />
          </div>
          <div className="vm-gallery-card">
            <img
              src={univisionStoryFaq1}
              alt="FAQ Story screen"
              className="vm-story-thumb"
            />
          </div>
        </div>

        <div className="vm-text-block">
          <h3>Why this belongs in a performance-oriented portfolio</h3>
          <p>
            This work shows more than social posting. It demonstrates the
            ability to use content design to reduce repeated questions, improve
            information access, and turn a social channel into something more
            structured, useful, and operationally aware.
          </p>
        </div>
      </section>

      <section className="case-section">
        <h2>What this work demonstrates</h2>
        <div className="vm-context-grid vm-context-grid-3">
          <div className="vm-context-card">
            <h3>Performance thinking</h3>
            <p>
              Ability to design around hierarchy, scan speed, and message order
              so campaign visuals support attention and action rather than only
              visual polish.
            </p>
          </div>

          <div className="vm-context-card">
            <h3>A/B iteration mindset</h3>
            <p>
              Experience comparing alternate directions to evaluate how visual
              emphasis changes urgency, product trust, and conversion clarity.
            </p>
          </div>

          <div className="vm-context-card">
            <h3>Content systems</h3>
            <p>
              Experience building social content not only for promotion, but
              also for repeated information delivery, lower-friction access, and
              customer-facing support.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="vm-disclaimer">
          Some visuals are adapted or reconstructed based on past professional
          experience for portfolio demonstration purposes. Brand assets belong
          to their respective owners.
        </p>
      </section>
    </main>
  );
}