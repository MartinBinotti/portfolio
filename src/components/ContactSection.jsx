function ContactSection() {
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

            <form className="contact-form" id="contactForm">
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Name"
                  data-placeholder-en="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email"
                  data-placeholder-en="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Subject"
                  data-placeholder-en="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-input form-textarea"
                  rows="5"
                  placeholder="Message"
                  data-placeholder-en="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                <span data-text-en="Send Message">Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
