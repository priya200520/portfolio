import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="navbar">
    <h2 class="logo">Priya<span>.</span></h2>

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
          <a href="https://github.com/priya200520" target="_blank" class="btn secondary">GitHub</a>
        </div>
      </div>

      <div class="hero-card">
        <pre><code>
const developer = {
  name: "Priya",
  skills: [
    "React",
    "Python",
    "LangChain",
    "Streamlit"
  ]
};
        </code></pre>
      </div>
    </section>

    <section id="about" class="section">
      <p class="section-tag">ABOUT ME</p>
      <h2>Turning ideas into digital experiences.</h2>
      <p>
        I am a Computer Science Engineering student with experience in frontend
        web development and Python-based applications.
      </p>
    </section>

    <section id="skills" class="section">
      <p class="section-tag">MY SKILLS</p>
      <h2>Technologies I work with.</h2>

      <div class="skills-grid">
        <div>HTML</div>
        <div>CSS</div>
        <div>JavaScript</div>
        <div>React.js</div>
        <div>Python</div>
        <div>Firebase</div>
        <div>LangChain</div>
        <div>Streamlit</div>
        <div>Git & GitHub</div>
      </div>
    </section>

    <section id="projects" class="section">
      <p class="section-tag">PROJECTS</p>
      <h2>Things I've built.</h2>

      <div class="projects-grid">
        <div class="project-card">
          <h3>🐶 Pet Sitting Platform</h3>
          <p>
            A responsive pet care platform with booking, blog and contact pages.
          </p>
          <p>React • Firebase • Firestore</p>
        </div>

        <div class="project-card">
          <h3>🤖 AI Applications</h3>
          <p>
            AI-powered applications built while exploring modern Python tools.
          </p>
          <p>Python • LangChain • Streamlit</p>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <p class="section-tag">GET IN TOUCH</p>
      <h2>Let's build something together.</h2>
      <a href="https://github.com/priya200520" target="_blank" class="btn primary">
        Visit My GitHub
      </a>
    </section>
  </main>
`