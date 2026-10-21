export default function WelcomeCard({ firstName, stage }) {
  return (
    <section className="card welcome">
      <div className="welcome-row">
        <div className="avatar">
          <svg viewBox="0 0 24 24" width="72" height="72" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
          </svg>
        </div>
        <div>
          <div className="eyebrow">
            <svg className="cap-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m2 9 10-5 10 5-10 5L2 9Z" />
              <path d="M6 11v5c3.4 2.5 8.6 2.5 12 0v-5M22 9v6" />
              <path d="m20 15 2 1.5-2 1.5" />
            </svg>
            STUDENT PORTAL
          </div>
          <h1>Welcome back, {firstName}</h1>
          <p className="muted">Always stay updated through your student portal</p>
        </div>
      </div>
      <span className="pill">✓&nbsp; Current Stage: {stage}</span>
    </section>
  );
}
