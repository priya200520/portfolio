import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="navbar">
    <a href="#" class="logo">Priya<span>.</span></a>

    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="home" class="hero-section">
      <div class="hero-content">
        <p class="intro">HELLO, I'M</p>
        <h1>Priya</h1>
        <h2>Frontend Developer <span>& Python AI Enthusiast</span></h2>

        <p class="hero-text">
          I build responsive web applications and explore AI-powered
          solutions using Python, LangChain and Streamlit.
        </p>

        <div class="hero-buttons">
          <a href="#projects" class="btn primary">View My Work</a>
          <a href="https://github.com/priya200520" target="_blank" class="btn secondary">
            GitHub
          </a>
        </div>
      </div>

      <div class="hero-card">
        <div class="code-window">
          <div class="window-dots">
            <span></span><span></span><span></span>
          </div>
          <pre><code>const developer = {
  name: "Priya",
  skills: [
    "React",
    "Python",
    "LangChain",
    "Streamlit"
  ],
  passion: "Building cool things 🚀"
};</code></pre>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <p class="section-tag">ABOUT ME</p>
      <h2>Turning ideas into digital experiences.</h2>
      <p>
        I am a Computer Science Engineering student with experience in
        frontend web development and Python-based applications. I enjoy
        building practical projects and continuously learning new technologies.
      </p>
    </section>

    <section id="skills" class="section">
      <p class="section-tag">MY SKILLS</p>
      <h2>Technologies I work with.</h2>

      <div class="skills-grid">
        <div class="skill-card">HTML</div>
        <div class="skill-card">CSS</div>
        <div class="skill-card">JavaScript</div>
        <div class="skill-card">React.js</div>
        <div class="skill-card">Python</div>
        <div class="skill-card">Firebase</div>
        <div class="skill-card">LangChain</div>
        <div class="skill-card">Streamlit</div>
        <div class="skill-card">Git & GitHub</div>
      </div>
    </section>

    <section id="projects" class="section">
      <p class="section-tag">FEATURED PROJECTS</p>
      <h2>Things I've built.</h2>

      <div class="projects-grid">
        <article class="project-card">
          <p class="project-number">01</p>
          <h3>Pet Sitting Platform</h3>
          <p>
            A responsive pet care platform with booking, blog and contact
            pages, built with React and Firebase.
          </p>
          <div class="project-tech">
            <span>React</span>
            <span>Firebase</span>
            <span>Firestore</span>
          </div>
        </article>

        <article class="project-card">
          <p class="project-number">02</p>
          <h3>Python & AI Applications</h3>
          <p>
            Exploring AI-powered applications using Python, LangChain
            and Streamlit.
          </p>
          <div class="project-tech">
            <span>Python</span>
            <span>LangChain</span>
            <span>Streamlit</span>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <p class="section-tag">GET IN TOUCH</p>
      <h2>Let's build something together.</h2>
      <p>I'm open to internships, entry-level opportunities and exciting projects.</p>

      <a href="https://github.com/priya200520" target="_blank" class="btn primary">
        Visit My GitHub
      </a>
    </section>
  </main>
`