import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css'
import gamefamConfig from '../../gamefam.config'

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <img src={gamefamConfig.libraryLogo} height={"135px"}></img>
      <div className="container">       
        <p className={styles.smallText}>{gamefamConfig.tagLine}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/About"
            >
            {gamefamConfig.buttonText}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={"GameFam"}
      description="This website is under the domain of GameFam<head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}