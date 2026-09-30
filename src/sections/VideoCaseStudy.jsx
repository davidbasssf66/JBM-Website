export default function VideoCaseStudy({ onOpenModal }) {
  return (
    <div className="videoband">
      <div className="wrap">
        <div>
          <h2>"Audit prep went from six weeks to four days."</h2>
          <p>Dana Whitfield, Fund Administrator at Beacon Trades Trust, on moving 14,000 participants off spreadsheets and a legacy TPA system.</p>
        </div>
        <div
          className="playbox"
          role="button"
          tabIndex={0}
          onClick={() => onOpenModal("case-study")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onOpenModal("case-study");
            }
          }}
          aria-label="Play Beacon Trades Trust case study video"
        >
          <div className="playbtn"></div>
          <div className="cap">CC · 1:42 · Beacon Trades Trust case study</div>
        </div>
      </div>
    </div>
  );
}
