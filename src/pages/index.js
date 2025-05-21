import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Story Point Estimator" description="Calculate story points inside Jira, powered by Forge UI Kit.">
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Story Point Estimator</h1>
          <p className={styles.subtitle}>
            Calculate story points based on configurable parameters,<br />
            right inside Jira. Built using Forge UI Kit.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary" to="/user-guide">
              User Guide
            </Link>
            <Link className="button button--secondary" to="/admin-guide">
              Admin Guide
            </Link>
            <Link className="button button--outline button--info" to="https://your-marketplace-link" target="_blank">
              Install Now
            </Link>

          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <h3>Customizable Criteria</h3>
            <p>Tailor scoring based on team preferences and complexity factors.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Real-time Estimation</h3>
            <p>Get immediate story point feedback while creating or refining issues.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Secure & Compliant</h3>
            <p>Data stays within Jira — compliant with Atlassian Forge security models.</p>
          </div>
        </section>

        <section className={styles.links}>
          <h2>More Info</h2>
          <ul style={{ listStyleType: 'none' }}>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/dpa">Data Processing Agreement</Link></li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
