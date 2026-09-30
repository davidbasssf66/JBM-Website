import { useState } from "react";

const PROBLEMS = [
  {
    num: "01",
    title: "Reconciling employer remittances by hand",
    flag: false,
    body: (
      <>
        <p><strong>Contribution Engine</strong> ingests employer remittance files (EDI, CSV, or bank feed) and auto-matches against expected hours and rates, flagging only true exceptions for staff review.</p>
        <div className="clip">10s clip — auto-match batch run</div>
      </>
    ),
  },
  {
    num: "02",
    title: "Chasing delinquent contributions across funds",
    flag: true,
    body: (
      <>
        <p><strong>Delinquency Tracking</strong> ages every open balance automatically, generates the notice letters your fund counsel already approved, and hands collections a single aging report instead of five spreadsheets.</p>
        <div className="clip">12s clip — aging report + notice trigger</div>
      </>
    ),
  },
  {
    num: "03",
    title: 'Answering "am I vested?" forty times a week',
    flag: false,
    body: (
      <>
        <p>The <strong>Participant Portal</strong> shows real-time vesting status, hours banked, and dependent coverage — so staff answer plan design questions, not balance lookups.</p>
        <div className="clip">8s clip — participant self-service view</div>
      </>
    ),
  },
  {
    num: "04",
    title: "Producing the audit package every trustee dreads",
    flag: false,
    body: (
      <>
        <p><strong>Reporting & Compliance</strong> keeps a standing audit trail on every transaction, and exports the schedules your auditor and Form 5500 preparer ask for on day one — not week three.</p>
        <div className="clip">14s clip — one-click audit export</div>
      </>
    ),
  },
];

export default function Problems() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" id="platform">
      <div className="wrap">
        <div className="section-head">
          <h2>The week, in your words.</h2>
          <p>Every row below is something a fund office actually said to us before switching. Click one to see the module that ends it.</p>
        </div>

        <div id="ledger-list">
          {PROBLEMS.map((problem, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={problem.num}
                className={`ledger-row${isOpen ? " open" : ""}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="ledger-row-head">
                  <span className={`num${problem.flag ? " flag" : ""}`}>{problem.num}</span>
                  <h3>{problem.title}</h3>
                  <span className="chevron" aria-hidden="true">+</span>
                </div>
                <div className="ledger-row-body">
                  <div className="ledger-row-body-inner">{problem.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
