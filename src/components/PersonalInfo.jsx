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
        <div className="icon-box">👤</div>
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
