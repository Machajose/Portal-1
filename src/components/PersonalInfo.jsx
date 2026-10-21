function Field({ label, value }) {
  return (
    <div className="field">
      <div className="field-label">{label}</div>
      <div className="field-value">{value}</div>
    </div>
  );
}

export default function PersonalInfo({ student }) {
  return (
    <section className="card personal">
      <div className="personal-header">
        <div className="icon-box" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
          </svg>
        </div>
        <div>
          <h2>Personal Information</h2>
          <p className="muted">Your registered contact details</p>
        </div>
      </div>
      <Field label="ID/PASSPORT" value={student.idNumber} />
      <Field label="GENDER" value={student.gender} />
      <Field label="DATE OF BIRTH" value={student.dob} />
      <Field label="PHONE NUMBER" value={student.phone} />
      <Field label="EMAIL ADDRESS" value={student.email} />
    </section>
  );
}
