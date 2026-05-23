import { ADVANTAGES } from '../config.js';

function Advantage() {
  return (
    <section className="advantage" aria-labelledby="advantage-title">
      <div className="advantage-copy">
        <p className="section-label" data-animate>
          THE AI ADVANTAGE
        </p>
        <h2 id="advantage-title" data-animate>
          Why brands are switching to AI production.
        </h2>
        <div className="advantage-list">
          {ADVANTAGES.map((item) => (
            <article className="advantage-item" key={item.number} data-animate>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="advantage-visual" data-animate aria-label="AI production studio preview">
        <div className="studio-screen">
          <div className="screen-top">
            <span />
            <span />
            <span />
          </div>
          <div className="screen-grid">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="camera-line" />
          <div className="timeline">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="turnaround-card">
          <span>PRODUCTION WINDOW</span>
          <strong>72HR TURNAROUND GUARANTEED</strong>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
