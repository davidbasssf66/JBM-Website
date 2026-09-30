import DemoForm from "../components/DemoForm.jsx";

export default function DemoSection() {
  return (
    <section className="demo" id="demo">
      <div className="wrap">
        <div>
          <div className="eyebrow">Request a demo</div>
          <h2 style={{ marginTop: 12 }}>Bring us your current setup. We'll show you what changes.</h2>
          <p style={{ color: "var(--slate)", marginTop: 12 }}>
            15 minutes, no slide deck — we start by asking how your fund handles reconciliation and reporting today.
          </p>

          <DemoForm />
        </div>

        <div className="expect">
          <h3>What happens after you submit</h3>
          <div className="expect-step">
            <span className="n">01</span>
            <p><strong>Same-day acknowledgment</strong> — an email confirming we received it, no auto-drip sales sequence.</p>
          </div>
          <div className="expect-step">
            <span className="n">02</span>
            <p><strong>A specialist reviews your fund type</strong> before the call, so we're not asking you to explain multiemployer basics.</p>
          </div>
          <div className="expect-step">
            <span className="n">03</span>
            <p><strong>15-minute call</strong>, current-setup first, product second — you decide if a longer demo is worth your board's time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
