// src/pages/Contact.jsx
export default function Contact() {
  return (
    <main className="p2page">
      <section className="p2card">
        <p className="p2kicker">CONTACT</p>

        <h1 className="p2title">Let’s build something thoughtful.</h1>

        <p className="p2lead">
          If you’re hiring, collaborating, or want to chat about product design
          and front-end implementation — feel free to reach out.
        </p>

        <div className="p2ctaRow">
          <a className="p2btn p2btnPrimary" href="mailto:liliuyi1224@gmail.com">
            Email me <span className="p2arrow">›</span>
          </a>

          <a
            className="p2btn p2btnGhost"
            href="https://www.linkedin.com/in/liuyi-li/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span className="p2arrow">↗</span>
          </a>

          <a
            className="p2btn p2btnGhost"
            href="https://github.com/LiuyiLi2000"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span className="p2arrow">↗</span>
          </a>
        </div>

        <div className="p2note">
          <p className="p2noteTitle">Quick note</p>
          <p className="p2noteText">
            For best results, include a short context + link to the role/project
            you’re referring to.
          </p>
        </div>
      </section>
    </main>
  );
}
