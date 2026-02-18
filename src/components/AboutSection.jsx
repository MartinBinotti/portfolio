function AboutSection() {
  return (
    <>
<section id="about" className="section about-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-number">01</span>
                    <h2 className="section-title">
                        <span className="title-bracket">&lt;</span>
                        <span className="title-text" data-text-en="About Me">About Me</span>
                        <span className="title-bracket">/&gt;</span>
                    </h2>
                    <div className="section-line"></div>
                </div>
                
                <div className="about-content">
                    <div className="about-text-wrapper">
                        <div className="about-intro">
                            <p className="about-text" data-text-en="I am a Full Stack Developer focused on building and implementing web systems and e-learning platforms using PHP, Laravel, JavaScript, HTML, CSS3, MySQL/MariaDB, WordPress, VTEX and Moodle. I work across development, layout implementation, content and server management, and I apply cybersecurity best practices while continuously strengthening React, Vue.js and Python.">
                                I am a Full Stack Developer focused on building and implementing web systems and e-learning platforms using PHP, Laravel, JavaScript, HTML, CSS3, MySQL/MariaDB, WordPress, VTEX and Moodle. I work across development, layout implementation, content and server management, and I apply cybersecurity best practices while continuously strengthening React, Vue.js and Python.
                            </p>
                        </div>
                        
                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number" data-count="15">0</div>
                                <div className="stat-label" data-text-en="Projects">Projects</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number" data-count="5">0</div>
                                <div className="stat-label" data-text-en="Years Experience">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number" data-count="10">0</div>
                                <div className="stat-label" data-text-en="Happy Clients">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-image-wrapper">
                        <div className="about-image-container">
                            <div className="code-block">
                                <div className="code-line">
                                    <span className="code-keyword">const</span>
                                    <span className="code-variable">developer</span>
                                    <span className="code-operator">=</span>
                                    <span className="code-brace">&#123;</span>
                                </div>
                                <div className="code-line indent">
                                    <span className="code-property">name</span>
                                    <span className="code-operator">:</span>
                                    <span className="code-string">'Full Stack Developer'</span>
                                    <span className="code-comma">,</span>
                                </div>
                                <div className="code-line indent">
                                    <span className="code-property">skills</span>
                                    <span className="code-operator">:</span>
                                    <span className="code-bracket">[</span>
                                    <span className="code-string">'PHP'</span>
                                    <span className="code-comma">,</span>
                                    <span className="code-string">'Laravel'</span>
                                    <span className="code-comma">,</span>
                                    <span className="code-string">'React'</span>
                                    <span className="code-bracket">]</span>
                                    <span className="code-comma">,</span>
                                </div>
                                <div className="code-line indent">
                                    <span className="code-property">passion</span>
                                    <span className="code-operator">:</span>
                                    <span className="code-string">'CiberSecurity & Continuous learning'</span>
                                </div>
                                <div className="code-line">
                                    <span className="code-brace">&#125;</span>
                                    <span className="code-semicolon">;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default AboutSection;


