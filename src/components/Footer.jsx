function Footer() {
  return (
    <>
<footer className="main-footer">
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-text-wrapper">
                    <p className="footer-text">
                        <span className="footer-copyright">(c) 2026 Martin Augusto Binotti</span>
                        <span className="footer-divider">|</span>
                        <span className="footer-built">Built with passion and code</span>
                    </p>
                    <p className="footer-author">
                        <span className="footer-by-text" data-text-en="by">by</span>
                        <a href="https://www.linkedin.com/in/mart%C3%ADn-augusto-binotti-29ab77186/" target="_blank" rel="noopener noreferrer" className="footer-author-link">
                            <i className="fas fa-code"></i>
                            <span>Martin Augusto Binotti</span>
                        </a>
                    </p>
                </div>
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/mart%C3%ADn-augusto-binotti-29ab77186/" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/martinbinotti" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:martin.binotti@gmail.com" className="footer-social-link" title="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;


