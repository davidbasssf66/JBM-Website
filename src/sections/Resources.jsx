const RESOURCES = [
  {
    kicker: "Guide",
    title: "The Delinquent Employer Playbook",
    description: "A step-by-step notice and escalation sequence fund counsel has already reviewed.",
  },
  {
    kicker: "Webinar",
    title: "Form 5500 season without the fire drill",
    description: "What to automate before your next audit cycle, and what to leave to your CPA.",
  },
  {
    kicker: "Case study",
    title: "How Ironbridge cut call volume 38%",
    description: "Self-service portal adoption among a mostly non-desk workforce.",
  },
];

export default function Resources() {
  return (
    <section className="section" id="resources">
      <div className="wrap">
        <div className="section-head">
          <h2>Recent from the fund office</h2>
          <p>Notes on delinquency, compliance, and running a leaner back office.</p>
        </div>
      </div>
      <div className="wrap" style={{ padding: 0 }}>
        <div className="res-grid">
          {RESOURCES.map((resource) => (
            <div className="res-card" key={resource.title}>
              <div className="kicker">{resource.kicker}</div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
