import { useMemo, useState } from "react";

export default function RoiCalculator() {
  const [employers, setEmployers] = useState(85);
  const [hours, setHours] = useState(60);
  const [rate, setRate] = useState(42);

  const { annualHours, annualDollars } = useMemo(() => {
    // Assume software automation recovers ~70% of manual reconciliation time
    const computedHours = Math.round(hours * 12 * 0.7);
    const computedDollars = Math.round(computedHours * rate);
    return { annualHours: computedHours, annualDollars: computedDollars };
  }, [hours, rate]);

  return (
    <section className="section" id="roi">
      <div className="wrap">
        <div className="section-head">
          <h2>What's manual reconciliation actually costing you?</h2>
          <p>Move the sliders to match your fund. This is a rough estimate, not a quote — meant to give your board a starting number.</p>
        </div>

        <div className="calc">
          <div className="calc-controls">
            <label htmlFor="s-employers">
              Contributing employers: <span className="val">{employers}</span>
            </label>
            <input
              id="s-employers"
              type="range"
              min="5"
              max="400"
              step="5"
              value={employers}
              onChange={(event) => setEmployers(Number(event.target.value))}
            />

            <label htmlFor="s-hours">
              Hours/month spent on manual reconciliation: <span className="val">{hours}</span>
            </label>
            <input
              id="s-hours"
              type="range"
              min="5"
              max="300"
              step="5"
              value={hours}
              onChange={(event) => setHours(Number(event.target.value))}
            />

            <label htmlFor="s-rate">
              Fully-loaded hourly cost of fund office staff: $<span className="val">{rate}</span>
            </label>
            <input
              id="s-rate"
              type="range"
              min="20"
              max="120"
              step="1"
              value={rate}
              onChange={(event) => setRate(Number(event.target.value))}
            />
          </div>
          <div className="calc-output">
            <div className="figure">${annualDollars.toLocaleString()}</div>
            <div className="figure-label">estimated annual staff time recovered</div>
            <div className="sub">
              ≈ <b>{annualHours.toLocaleString()}</b> hours/year currently spent on manual matching, based on your inputs.
            </div>
            <div className="sub">Funds this size typically also cut audit-prep time from weeks to days — not included above.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
