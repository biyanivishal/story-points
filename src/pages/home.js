import React from 'react';
import Layout from '@theme/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <Layout title="Home" description="My React Resume with Docusaurus">
      <main style={{ padding: '2rem' }}>
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>Hello, I'm Jane Doe</h1>
          <p>Full Stack Developer | UI/UX Enthusiast</p>
          <div style={{ marginTop: '1rem' }}>
            <a href="https://github.com/" style={{ margin: '0 1rem' }}>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com/" style={{ margin: '0 1rem' }}>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </section>

        <section>
          <h2>About Me</h2>
          <p>
            Passionate developer with experience in building web apps using
            React, Node.js, and modern technologies. I love solving problems and
            designing beautiful, user-friendly interfaces.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Skills</h2>
          <ul>
            <li>React, Next.js</li>
            <li>Node.js, Express</li>
            <li>PostgreSQL, MongoDB</li>
            <li>Figma, TailwindCSS</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Portfolio Website:</strong> A personal website to showcase
              my work.
            </li>
            <li>
              <strong>Task Tracker:</strong> A full-stack app to manage tasks
              and projects.
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
