import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div>
          <Link to="/" className="brand" style={{ color: "var(--paper)", marginBottom: 14, textDecoration: "none" }}>
            <span className="logo-slot light">JBM</span>
            JBM Fund Solutions
          </Link>
          <p style={{ color: "#9aa3b5", fontSize: "13.5px", maxWidth: "32ch" }}>
            JBM Fund Solutions — fund administration software for Taft-Hartley pension and health plans.
          </p>
        </div>
        <div>
          <h4>Platform</h4>
          <a href="/#platform">Contributions</a>
          <a href="/#platform">Eligibility</a>
          <a href="/#platform">Portal</a>
          <a href="/#platform">Reporting</a>
        </div>
        <div>
          <h4>Solutions</h4>
          <a href="/#solutions">Trustees</a>
          <a href="/#solutions">TPAs</a>
          <a href="/#solutions">Employers</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Security</a>
          <a href="#">Careers</a>
        </div>
        <div className="newsletter">
          <h4>Fund office notes, monthly</h4>
          {/* INTEGRATION NOTE: the newsletter form is intentionally isolated from the
              demo-request workflow and remains an unimplemented future integration
              (see specification sections on Privacy and Newsletter). */}
          <input type="email" placeholder="Work email" aria-label="Work email for newsletter" />
          <button
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={() => alert("Prototype only — wire to a marketing platform.")}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© 2026 JBM. Not affiliated with any specific fund named above; illustrative only.</span>
        <span>
          <Link to="/privacy" style={{ display: "inline", textDecoration: "underline" }}>Privacy</Link>
          {" · "}
          <Link to="/terms" style={{ display: "inline", textDecoration: "underline" }}>Terms</Link>
          {" · Security"}
        </span>
      </div>
    </footer>
  );
}
