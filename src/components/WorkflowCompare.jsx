import { COMPARISON_ROWS } from '../config.js';

function MetricRow({ row, variant }) {
  const label = variant === 'studio' ? row.studio : row.legacy;
  const note = variant === 'studio' ? row.studioNote : row.legacyNote;

  return (
    <div className="metric-row">
      <div>
        <span>{row.label}</span>
        <strong>{label}</strong>
      </div>
      <p>{note}</p>
    </div>
  );
}

function WorkflowCompare() {
  return (
    <section className="workflow" aria-labelledby="workflow-title">
      <div className="workflow-panel workflow-legacy" data-animate>
        <p className="section-label">LEGACY WORKFLOW</p>
        <h2 id="workflow-title">Traditional Agency</h2>
        <div className="metric-stack">
          {COMPARISON_ROWS.map((row) => (
            <MetricRow row={row} variant="legacy" key={row.label} />
          ))}
        </div>
      </div>

      <div className="workflow-panel workflow-studio" data-animate>
        <span className="studio-badge" aria-hidden="true">
          DE
        </span>
        <p className="section-label">AI PRODUCTION STUDIO</p>
        <h2>Dream Engine Studio</h2>
        <div className="metric-stack">
          {COMPARISON_ROWS.map((row) => (
            <MetricRow row={row} variant="studio" key={row.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkflowCompare;
