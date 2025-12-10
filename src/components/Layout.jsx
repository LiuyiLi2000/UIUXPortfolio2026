import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="page-root">
      {/* 顶部导航 */}
      <header className="site-header">
        <nav className="site-header-inner">
          {/* 左侧名字 */}
          <Link to="/" className="site-logo">
            LIUYI LI
          </Link>

          {/* 右侧导航 */}
          <div className="site-nav">
            <NavItem to="/">Work</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>
        </nav>
      </header>

      {/* 页面主体 */}
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
