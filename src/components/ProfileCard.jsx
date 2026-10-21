export default function ProfileCard({ student }) {
  return (
    <section className="card profile-card">
      <h1 className="center">{student.name}</h1>
      <p className="center muted big">{student.regNo}</p>
      <div className="center"><span className="pill">{student.semester}</span></div>

      <h3 className="section-title academic-title">
        <svg className="academic-cap" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m2 9 10-5 10 5-10 5L2 9Z" />
          <path d="M6 11v5c3.4 2.5 8.6 2.5 12 0v-5M22 9v6" />
          <path d="m20 15 2 1.5-2 1.5" />
        </svg>
        Academic Info
      </h3>
      <p><strong>Program Code:</strong> <span className="green">{student.programCode}</span></p>
      <p><strong>Programme Name:</strong> {student.programmeName}</p>
      <p><strong>Campus:</strong> {student.campus}</p>
    </section>
  );
}
