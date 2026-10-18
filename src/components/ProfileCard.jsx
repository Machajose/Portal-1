export default function ProfileCard({ student }) {
  return (
    <section className="card profile-card">
      <h1 className="center">{student.name}</h1>
      <p className="center muted big">{student.regNo}</p>
      <div className="center">
        <span className="pill">{student.semester}</span>
      </div>

      <h3 className="section-title">🎓 Academic Info</h3>
      <p><strong>Program Code:</strong> <span className="green">{student.programCode}</span></p>
      <p><strong>Programme Name:</strong> {student.programmeName}</p>
      <p><strong>Campus:</strong> {student.campus}</p>
    </section>
  );
}
