import { useState } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    fund: "",
    role: "Trustee",
    size: "Under 5,000",
  });

  function updateField(field) {
    return (event) => setValues((prev) => ({ ...prev, [field]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Prototype-parity behavior only. Server-side submission, validation,
    // Turnstile, and honeypot handling are implemented in a later phase.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        id="demoConfirm"
        style={{ padding: 20, background: "var(--paper-2)", borderRadius: 4, marginTop: 16 }}
      >
        <strong>Thanks — that's in.</strong> A fund solutions specialist will reach out within one business day.
      </div>
    );
  }

  return (
    <form id="demoForm" onSubmit={handleSubmit}>
      <div className="row2">
        <div className="field">
          <label htmlFor="fname">First name</label>
          <input id="fname" required value={values.fname} onChange={updateField("fname")} />
        </div>
        <div className="field">
          <label htmlFor="lname">Last name</label>
          <input id="lname" required value={values.lname} onChange={updateField("lname")} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" type="email" required value={values.email} onChange={updateField("email")} />
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="fund">Fund or company name</label>
          <input id="fund" required value={values.fund} onChange={updateField("fund")} />
        </div>
        <div className="field">
          <label htmlFor="role">Your role</label>
          <select id="role" value={values.role} onChange={updateField("role")}>
            <option>Trustee</option>
            <option>Fund Administrator / TPA</option>
            <option>Employer / Contributing Company</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="size">Approx. participant count</label>
        <select id="size" value={values.size} onChange={updateField("size")}>
          <option>Under 5,000</option>
          <option>5,000–25,000</option>
          <option>25,000–100,000</option>
          <option>100,000+</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary" style={{ marginTop: 6 }}>
        Request a demo
      </button>
      <p className="demo-note">
        We'll never share this information. Reviewed against our{" "}
        <a href="/privacy" style={{ textDecoration: "underline" }}>privacy policy</a>.
      </p>
    </form>
  );
}
