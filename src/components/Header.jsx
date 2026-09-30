import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="wrap">
        <Link to="/" className="brand" style={{ textDecoration: "none" }}>
          <span className="logo-slot" title="Logo placeholder — swap for JBM logo file">JBM</span>
          JBM Fund Solutions
        </Link>
        <div className="navlinks">
          <a href="/#platform">Platform</a>
          <a href="/#solutions">Solutions</a>
          <a href="/#why">Why Us</a>
          <a href="/#resources">Resources</a>
          <a href="/#pricing">Pricing</a>
        </div>
        <div className="navcta">
          <a href="#" className="btn-ghost btn">Log In</a>
          <a href="/#demo" className="btn btn-primary">Request a Demo</a>
        </div>
      </nav>
    </header>
  );
}
