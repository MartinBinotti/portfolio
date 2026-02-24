import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const INITIAL_FORM = {
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
  company: '',
};

function ContactSection() {
  const formRef = useRef(null);
  const formStartTimeRef = useRef(Date.now());
  const lastSubmitTimeRef = useRef(0);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');
  const [errorType, setErrorType] = useState('send');
  const isSpanish = document.documentElement.lang === 'es';

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timeoutId = window.setTimeout(() => {
        setStatus('idle');
      }, 4500);
      return () => window.clearTimeout(timeoutId);
    }
    return undefined;
  }, [status]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setErrorType('send');

    const now = Date.now();
    const elapsed = now - formStartTimeRef.current;
    const cooldownElapsed = now - lastSubmitTimeRef.current;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || !formRef.current) {
      setErrorType('config');
      setStatus('error');
      return;
    }

    if (formData.company.trim() !== '' || elapsed < 3000 || cooldownElapsed < 15000) {
      setErrorType('spam');
      setStatus('error');
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus('success');
      lastSubmitTimeRef.current = now;
      formStartTimeRef.current = Date.now();
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error('EmailJS sendForm failed:', error);
      setErrorType('send');
      setStatus('error');
    }
  };

  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-number">05</span>
            <h2 className="section-title">
              <span className="title-bracket">&lt;</span>
              <span className="title-text" data-text-en="Contact">
                Contact
              </span>
              <span className="title-bracket">/&gt;</span>
            </h2>
            <div className="section-line"></div>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4 className="contact-label" data-text-en="Email">
                    Email
                  </h4>
                  <a href="mailto:martin.binotti@gmail.com" className="contact-value">
                    martin.binotti@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4 className="contact-label" data-text-en="Phone">
                    Phone
                  </h4>
                  <a href="tel:+34662677067" className="contact-value">
                    +34 662 677 067
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="contact-details">
                  <h4 className="contact-label" data-text-en="LinkedIn">
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/mart%C3%ADn-augusto-binotti-29ab77186/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    linkedin.com/in/martin-augusto-binotti-29ab77186
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="contact-details">
                  <h4 className="contact-label" data-text-en="GitHub">
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/martinbinotti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    github.com/martinbinotti
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" id="contactForm" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  className="form-input"
                  placeholder={isSpanish ? 'Nombre' : 'Name'}
                  data-placeholder-en="Name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  required
                  maxLength={120}
                />
                <input type="hidden" name="user_name" value={formData.from_name} readOnly />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  className="form-input"
                  placeholder={isSpanish ? 'Correo' : 'Email'}
                  data-placeholder-en="Email"
                  value={formData.from_email}
                  onChange={handleInputChange}
                  required
                  maxLength={180}
                />
                <input type="hidden" name="user_email" value={formData.from_email} readOnly />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder={isSpanish ? 'Asunto' : 'Subject'}
                  data-placeholder-en="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  maxLength={180}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  className="form-honeypot"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.company}
                  onChange={handleInputChange}
                  aria-hidden="true"
                />
                <textarea
                  name="message"
                  className="form-input form-textarea"
                  rows="5"
                  placeholder={isSpanish ? 'Mensaje' : 'Message'}
                  data-placeholder-en="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={3000}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'loading'}>
                <span data-text-en="Send Message">
                  {status === 'loading'
                    ? isSpanish
                      ? 'Enviando...'
                      : 'Sending...'
                    : isSpanish
                      ? 'Enviar mensaje'
                      : 'Send Message'}
                </span>
                <i className="fas fa-paper-plane"></i>
              </button>

              {status === 'success' && (
                <div className="form-status-card success" role="status" aria-live="polite">
                  <span className="form-status-icon" aria-hidden="true">
                    <i className="fas fa-circle-check"></i>
                  </span>
                  <p className="form-status">
                    {isSpanish
                      ? 'Mensaje enviado correctamente. Te respondere pronto.'
                      : 'Message sent successfully. I will reply soon.'}
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="form-status-card error" role="alert" aria-live="assertive">
                  <span className="form-status-icon" aria-hidden="true">
                    <i className="fas fa-triangle-exclamation"></i>
                  </span>
                  <p className="form-status">
                    {errorType === 'spam'
                      ? isSpanish
                        ? 'No se pudo validar el envio. Espera unos segundos e intentalo de nuevo.'
                        : 'The request could not be validated. Wait a few seconds and try again.'
                      : errorType === 'config'
                        ? isSpanish
                          ? 'Falta configurar EmailJS. Revisa las variables de entorno.'
                          : 'EmailJS is not configured. Check environment variables.'
                        : isSpanish
                          ? 'No se pudo enviar el mensaje. Intentalo de nuevo.'
                          : 'Unable to send message. Please try again.'}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
