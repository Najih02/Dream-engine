import { ABOUT_COPY } from '../config.js';

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="section-label" data-animate>
          ABOUT
        </p>
        <h2 id="about-title" data-animate>
          An AI Studio Built for the Future of Visual Storytelling.
        </h2>
        <p className="about-body" data-animate>
          {ABOUT_COPY}
        </p>
        <div className="stat-row" data-animate>
          <span>
            <i />
            AI POWERED
          </span>
          <span>
            <i />
            PREMIUM QUALITY
          </span>
          <span>
            <i />
            VISION FIRST
          </span>
        </div>
      </div>
      <div className="about-mark" data-animate aria-hidden="true">
        DE
      </div>
    </section>
  );
}

export default About;
