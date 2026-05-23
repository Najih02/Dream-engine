import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLScN_Jww27M8wR7tE1-GNaKNht9C1QM9Z41VxMuFE7uxz3HtCA/formResponse';

const GOOGLE_FORM_FIELDS = {
  name: 'entry.2005620554',
  email: 'entry.1045781291',
  phone: 'entry.1166974658',
  message: 'entry.839337160',
};

function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!values.email.trim()) nextErrors.email = 'Email is required.';
    else if (!values.email.includes('@')) nextErrors.email = 'Enter a valid email.';
    if (!values.message.trim()) nextErrors.message = 'Message is required.';
    return nextErrors;
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const formData = new FormData();
    formData.append(GOOGLE_FORM_FIELDS.name, values.name);
    formData.append(GOOGLE_FORM_FIELDS.email, values.email);
    formData.append(GOOGLE_FORM_FIELDS.phone, values.phone);
    formData.append(GOOGLE_FORM_FIELDS.message, values.message);

    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setIsSent(true);
      setValues(initialValues);
    } catch {
      setErrors({ form: 'Message could not be sent. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <p className="section-label" data-animate>
        LET'S BUILD SOMETHING
      </p>
      <h2 id="contact-title" data-animate>
        Get in Touch
      </h2>
      <div className="contact-info">
        <a href="mailto:studios.dreamengine@gmail.com" aria-label="Email Dream Engine" data-animate>
          studios.dreamengine@gmail.com
        </a>
        <a href="tel:+916282979569" aria-label="Call Dream Engine" data-animate>
          +91 6282 979 569
        </a>
        <a href="tel:+919207061851" aria-label="Call Dream Engine alternate number" data-animate>
          +91 9207 061 851
        </a>
        <a href="tel:+918590649946" aria-label="Call Dream Engine alternate number two" data-animate>
          +91 8590 649 946
        </a>
      </div>

      {isSent ? (
        <p className="success-message">Message received. We'll be in touch.</p>
      ) : (
        <form className="contact-form" onSubmit={submitForm} noValidate data-animate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={values.name}
              onChange={updateField}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={updateField}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91"
              value={values.phone}
              onChange={updateField}
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us what you want to build"
              value={values.message}
              onChange={updateField}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>
          {errors.form && <p className="form-error">{errors.form}</p>}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message →'}
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
