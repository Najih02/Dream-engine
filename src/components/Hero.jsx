function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-content">
        <div className="mask">
          <p className="hero-label reveal-label">AI CREATIVE STUDIO / KERALA, INDIA</p>
        </div>
        <h1 className="hero-title" id="hero-title">
          <span className="word-mask">
            <span className="reveal-word reveal-word-1">We Run the Dreams</span>
          </span>
          <span className="word-mask">
            <span className="reveal-word reveal-word-2">Precision Meets Imagination</span>
          </span>
        </h1>
        <div className="hero-actions reveal-actions">
          <a className="button-primary" href="#work" aria-label="View our work">
            View Our Work
          </a>
          <a className="button-secondary" href="#contact" aria-label="Get in touch">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
