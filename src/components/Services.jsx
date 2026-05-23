import { SERVICES } from '../config.js';

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services-header">
        <p className="section-label" data-animate>
          WHAT WE DO
        </p>
        <h2 id="services-title" data-animate>
          Services
        </h2>
      </div>
      <div className="services-grid">
        {SERVICES.map((service, index) => (
          <article className="service-card" key={service.title} data-animate>
            <span className="service-check" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{service.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
