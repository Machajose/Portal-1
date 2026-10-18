// Props: data passed IN from the parent component (App).
export default function WelcomeCard({ firstName, stage }) {
  return (
    <section className="card welcome">
      <div className="welcome-row">
        <div className="avatar">
          <svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
          </svg>
        </div>
        <div>
          <div className="eyebrow">🎓 STUDENT PORTAL</div>
          <h1>Welcome back, {firstName}</h1>
          <p className="muted">Always stay updated through your student portal</p>
        </div>
      </div>
      <span className="pill">✓ Current Stage: {stage}</span>
    </section>
  );
}
