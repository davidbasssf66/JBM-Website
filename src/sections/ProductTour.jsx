import { useState } from "react";

const TABS = [
  {
    id: "t1",
    label: "Contributions",
    screenLabel: "contributions.jbmcci.com",
    title: "Contribution Engine",
    description: "Every remittance, from every employer, reconciled against expected hours automatically — with exceptions routed to staff, not buried in a spreadsheet.",
    bullets: [
      "Bank feed + EDI + manual upload, one intake pipeline",
      "Configurable rate tables per craft, local, and effective date",
      "Exception queue with one-click resolution notes",
    ],
  },
  {
    id: "t2",
    label: "Eligibility",
    screenLabel: "eligibility.jbmcci.com",
    title: "Eligibility & Vesting",
    description: "Hours-banking rules, vesting schedules, and dependent eligibility, calculated the way your plan document actually defines them — not a generic approximation.",
    bullets: [
      "Plan-specific rule builder, no engineering ticket required",
      "Real-time recalculation as hours post",
      "Full history of every eligibility determination, timestamped",
    ],
  },
  {
    id: "t3",
    label: "Participant Portal",
    screenLabel: "portal.jbmcci.com",
    title: "Participant Self-Service Portal",
    description: "Balances, vesting status, dependent coverage, and beneficiary forms — available to participants directly, in plain language, day or night.",
    bullets: [
      'Branded to your fund, not "powered by" anyone else',
      "Secure document upload for life-event changes",
      "Cuts routine call volume without cutting service",
    ],
  },
  {
    id: "t4",
    label: "Reporting",
    screenLabel: "reporting.jbmcci.com",
    title: "Reporting & Compliance",
    description: "Standing audit trail, Form 5500 schedule exports, and board-ready reporting packages generated on demand, not assembled by hand every quarter.",
    bullets: [
      "Every transaction attributable to a user, timestamp, and source",
      "Audit package export in the format your CPA already expects",
      "Board reporting templates, editable but not from scratch",
    ],
  },
];

export default function ProductTour() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <section className="section tight" id="solutions" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="section-head">
          <h2>See the platform, not a slideshow.</h2>
          <p>Four modules, one system of record. Switch tabs to see each one in motion.</p>
        </div>

        <div className="tabbar" role="tablist" aria-label="Product tour">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`tabbtn${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {TABS.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            role="tabpanel"
            className={`tabpanel${activeTab === tab.id ? " active" : ""}`}
          >
            <div className="screen">
              <div className="glow"></div>
              <div className="label">{tab.screenLabel}</div>
            </div>
            <div className="copy">
              <h3>{tab.title}</h3>
              <p>{tab.description}</p>
              <ul>
                {tab.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
