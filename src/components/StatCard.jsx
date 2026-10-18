// A reusable component: one design, many uses with different props.
export default function StatCard({ label, value, change }) {
  const hasChange = change !== undefined;
  const isUp = change > 0;

  return (
    <section className="card stat">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {hasChange && (
        <div className="stat-change">
          {isUp ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
        </div>
      )}
    </section>
  );
}
