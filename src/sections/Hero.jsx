export default function Hero({ onOpenModal }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Fund administration software</div>
          <h1>Run your Taft-Hartley fund like the system of record it deserves.</h1>
          <p className="lead">
            Contribution reconciliation, eligibility, and reporting for multiemployer pension
            and health funds — built for the audit, not just the dashboard.
          </p>
          <div className="hero-actions">
            <a href="#demo" className="btn btn-primary">Request a demo</a>
            <a
              href="#"
              className="btn btn-ghost"
              onClick={(event) => {
                event.preventDefault();
                onOpenModal("overview");
              }}
            >
              Watch a 2-minute overview
            </a>
          </div>
          <div className="trust-note">
            <span><span className="dot"></span>SOC 2 Type II</span>
            <span><span className="dot"></span>ERISA-aware audit trail</span>
            <span><span className="dot"></span>99.98% uptime, trailing 12mo</span>
          </div>
        </div>

        <div className="mockcard" aria-hidden="true">
          <div className="mock-head">
            <div className="title">Contribution Reconciliation — March remittances</div>
            <div className="status"><span className="pulse"></span> Live matching</div>
          </div>
          <div className="mockrow">
            <div>Employer</div><div>Reported</div><div>Expected</div><div>Status</div>
          </div>
          <div className="mockrow">
            <div>Local 219 Electrical Co.</div><div className="amt">$18,204.00</div><div className="amt">$18,204.00</div><div><span className="tag matched">matched</span></div>
          </div>
          <div className="mockrow">
            <div>Riverbend Contracting</div><div className="amt">$9,410.50</div><div className="amt">$9,410.50</div><div><span className="tag matched">matched</span></div>
          </div>
          <div className="mockrow">
            <div>Harbor Steel LLC</div><div className="amt">$4,020.00</div><div className="amt">$4,375.00</div><div><span className="tag overdue">overdue</span></div>
          </div>
          <div className="mockrow">
            <div>Cross-County Mech.</div><div className="amt">$22,118.75</div><div className="amt">$22,118.75</div><div><span className="tag matched">matched</span></div>
          </div>
          <div className="mock-foot">
            <span>112 of 114 employers reconciled</span>
            <span><b>$1.86M</b> processed this cycle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
