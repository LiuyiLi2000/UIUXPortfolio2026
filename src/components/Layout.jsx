import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="page-root">
      <header className="site-header">
        <nav className="site-header-inner">
          <Link to="/" className="site-logo" onClick={() => setOpen(false)}>
            LIUYI LI
          </Link>

          {/* 桌面导航（保留） */}
          <div className="site-nav site-nav-desktop">
            <NavItem to="/">Work</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>

          {/* 移动端：Work + Menu */}
          <div className="site-nav site-nav-mobile">
            <NavItem to="/" onClick={() => setOpen(false)}>Work</NavItem>

            <button
              className="site-menu-btn"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div className={`site-menu ${open ? "is-open" : ""}`}>
          <NavLink to="/about" className="site-menu-item" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className="site-menu-item" onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          <div className="site-menu-sep" />

          <a className="site-menu-item" href="mailto:liliuyi1224@gmail.com">Email</a>
          <a className="site-menu-item" href="https://www.linkedin.com/in/liuyi-li/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="site-menu-item" href="https://github.com/LiuyiLi2000" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <main className="page-main">{children}</main>

      {/* Footer */}
      <footer className="site-footer">
  <div className="site-footer-inner">
    {/* 左侧：版权 + 一句 summary */}
    <div className="footer-left">
      <span className="footer-meta">
        © {new Date().getFullYear()} Liuyi Li. All rights reserved.
      </span>
      <span className="footer-tagline">
        Content-focused UI/UX design · Front-end development.
      </span>
    </div>

    {/* 右侧：链接 + 地点 */}
    <div className="footer-right">
      <div className="footer-links">
        <a href="mailto:liliuyi1224@gmail.com">Email</a>
        <a
          href="https://www.linkedin.com/in/liuyi-li/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/LiuyiLi2000"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="footer-meta footer-meta-right">
        <span>Based in Vancouver</span>
        <span>Built with React &amp; Vite</span>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontWeight: 500,
        color: isActive ? "#111827" : "var(--text-muted)",
        borderBottom: isActive ? "1px solid #111827" : "1px solid transparent",
        paddingBottom: "2px",
      })}
    >
      {children}
    </NavLink>
  );
}
