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
        <p className="case-subtitle">Selected Marketing Work</p>
        <h1 className="case-title">
          Conversion-oriented campaign visuals for e-commerce and retail
        </h1>
        <p className="case-intro">
          A focused selection of marketing work centered on product visibility,
          promotional clarity, and fast message recognition. Rather than
          treating campaign graphics as decoration, this work approaches visual
          design as a decision-making tool: what users notice first, what they
          understand next, and what helps them act faster.
        </p>
      </section>

      <section className="case-section">
        <h2>Featured Campaign</h2>
        <p className="case-section-intro">
          A seasonal promotional direction developed for a retail sales moment,
          with attention to hierarchy, urgency, and product trust.
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
            <h3>Designing for urgency without losing product credibility</h3>
            <p>
              The challenge was not simply to make the sale more visible, but to
              prevent the promotion from overpowering the product. In
              discount-led retail, urgency can drive attention quickly, but if
              the product becomes secondary, the ad loses credibility. This
              direction was designed to keep the sales message immediate while
              preserving the bed as the main object being sold.
            </p>

            <div className="vm-points">
              <div className="vm-point">
                <span className="vm-point-label">Core problem</span>
                <p>
                  High-contrast pricing cues and promotional graphics can create
                  fast attention, but they also risk turning the layout into a
                  sale announcement rather than a product ad.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Design response</span>
                <p>
                  Reduced competing visual elements and used scale, spacing, and
                  CTA placement to keep the offer legible without collapsing the
                  product into background decoration.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Decision</span>
                <p>
                  The final direction intentionally softened some promotional
                  dominance in order to restore product trust, making the piece
                  more commercially usable rather than only louder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <h2>Context & Approach</h2>

        <div className="vm-context-grid vm-context-grid-2">
          <div className="vm-context-card">
            <h3>Goal</h3>
            <p>
              Create a campaign visual that communicates the sale immediately,
              keeps the product recognizable, and supports quick decision-making
              in a promotion-heavy retail context.
            </p>
          </div>

          <div className="vm-context-card">
            <h3>Approach</h3>
            <ul className="vm-bullet-list">
              <li>Prioritized product visibility before decorative intensity</li>
              <li>Strengthened pricing hierarchy through contrast and scale</li>
              <li>Removed competing accents that weakened fast scanning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section">
        <h2>Iteration: Promotion-heavy vs Product-first</h2>
        <p className="case-section-intro">
          Two motion directions were explored to test how much visual weight
          should be given to the discount message versus the product itself.
        </p>

        <div className="vm-ab-grid">
          <article className="vm-ab-card">
            <div className="vm-ab-top">
              <span className="vm-ab-label">Initial direction</span>
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
                This version captured urgency faster, using stronger contrast
                and more dominant sale language to make the promotion feel more
                immediate.
              </p>
              <ul className="vm-bullet-list">
                <li>Discount messaging takes visual priority</li>
                <li>Typography is read before the product is registered</li>
                <li>The ad feels louder, but product credibility drops</li>
              </ul>
            </div>
          </article>

          <article className="vm-ab-card">
            <div className="vm-ab-top">
              <span className="vm-ab-label">Final direction</span>
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
                The final direction reduced promotional dominance so the product
                could carry more authority, even if that meant a slightly less
                aggressive urgency signal.
              </p>
              <ul className="vm-bullet-list">
                <li>Product presence is stronger and easier to trust</li>
                <li>Offer and product support each other instead of competing</li>
                <li>Cleaner hierarchy improves readability at speed</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="vm-text-block">
          <h3>Why the final direction works better</h3>
          <p>
            The initial version achieves stronger attention capture, but at the
            cost of product credibility: users can recognize the sale before
            they understand what is being sold. The final version keeps the
            promotion visible while re-establishing the product as the anchor of
            the composition, which makes the overall message clearer and more
            commercially persuasive.
          </p>
        </div>
      </section>

      <section className="case-section">
        <h2>Social Content System for Retail Engagement</h2>
        <p className="case-section-intro">
          Instagram content designed not only as visual promotion, but as an
          ongoing channel for brand presentation, customer education, and
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
            <h3>Designing Instagram as both marketing and service layer</h3>
            <p>
              Instead of treating Instagram as a purely promotional feed, this
              work reframed the channel into two layers: product posts that
              shaped brand perception, and Story Highlights that externalized
              repeated customer questions around store info, repair, policy, and
              insurance.
            </p>

            <div className="vm-points">
              <div className="vm-point">
                <span className="vm-point-label">Challenge</span>
                <p>
                  The account needed to support multiple luxury eyewear brands
                  while also answering practical questions in a format users
                  could scan quickly on mobile.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Strategy</span>
                <p>
                  Built the channel as a hybrid content system: feed content for
                  tone and desirability, and highlight content for repeated
                  service information and lower-friction access.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Business value</span>
                <p>
                  This reduced reliance on direct messages for basic questions,
                  allowing the account to function as a lightweight retail
                  communication layer rather than only a posting stream.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <h2>Feed Directions: Brand tone across different labels</h2>
        <p className="case-section-intro">
          Product posts were designed to shift tone depending on the brand
          being featured, while keeping the content commercially legible and
          aligned with retail selling goals.
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
                A colder and more restrained direction, using cleaner structure
                and a muted visual tone to support a sharper and more precise
                brand identity.
              </p>
              <ul className="vm-bullet-list">
                <li>Minimal layout reinforces brand restraint</li>
                <li>Product stays central rather than overly stylized</li>
                <li>Caption tone supports a more controlled fashion signal</li>
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
                A softer and more layered composition with stronger styling cues,
                allowing promotional messaging to feel lighter and more
                fashion-led without losing readability.
              </p>
              <ul className="vm-bullet-list">
                <li>More expressive composition and softer visual rhythm</li>
                <li>Brand tone shifts without losing product readability</li>
                <li>Promotional cues stay visible inside a styled layout</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="vm-text-block">
          <h3>What this feed work demonstrates</h3>
          <p>
            The value here is not only visual polish, but brand adaptability:
            changing layout tone, pacing, and emphasis depending on the label,
            while still keeping the post commercially useful and easy to
            understand.
          </p>
        </div>
      </section>

      <section className="case-section">
        <h2>Story Highlights: Structuring repeated customer information</h2>
        <p className="case-section-intro">
          Story content was designed as a lightweight information system,
          turning repeated customer questions into reusable assets that could
          remain accessible through Highlights.
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
              The Story system prioritized clarity and scannability over visual
              expression. Instead of behaving like temporary decoration, these
              assets made practical store information easier to revisit and
              reduced friction in customer communication.
            </p>

            <div className="vm-points">
              <div className="vm-point">
                <span className="vm-point-label">Information design</span>
                <p>
                  Organized content into clear categories such as info, policy,
                  repair, and FAQ so users could find answers without depending
                  entirely on staff replies.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Trade-off</span>
                <p>
                  Visual expression was intentionally reduced in favor of
                  readability, because speed of understanding mattered more here
                  than brand drama.
                </p>
              </div>

              <div className="vm-point">
                <span className="vm-point-label">Operational value</span>
                <p>
                  By moving basic store questions into persistent highlights,
                  Instagram became a more useful support surface for everyday
                  retail interactions.
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
          <h3>Why this matters in a marketing portfolio</h3>
          <p>
            This work shows more than social posting. It demonstrates the
            ability to use content design to support operations, reduce repeated
            questions, and turn a social channel into something more structured,
            useful, and business-aware.
          </p>
        </div>
      </section>

      <section className="case-section">
        <h2>What this work demonstrates</h2>
        <div className="vm-context-grid vm-context-grid-3">
          <div className="vm-context-card">
            <h3>Campaign thinking</h3>
            <p>
              Ability to design with urgency, hierarchy, and message order in
              mind rather than treating campaign graphics as purely decorative.
            </p>
          </div>

          <div className="vm-context-card">
            <h3>Brand adaptability</h3>
            <p>
              Comfort shifting visual language across different labels while
              preserving product clarity, retail readability, and campaign
              purpose.
            </p>
          </div>

          <div className="vm-context-card">
            <h3>Content systems</h3>
            <p>
              Experience using social content not only for promotion, but also
              for repeated information delivery and customer-facing support.
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