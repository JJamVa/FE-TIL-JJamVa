import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className='container'>
        <h1 className='hero__title'>JJamVa's TIL</h1>
        <p className='hero__title__2'>
          ඞ {'\u00A0'}I'm Imposter{'\u00A0'} ඞ
        </p>
        <div className={styles.buttons}>
          <Link className='button button--primary button--lg' to='/docs/frontend/intro'>
            Let's Among Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />

      <main className={styles.imgs}>
        {/* https://gifsec.com/among-us-gifs/ */}
        <img
          src='
          https://gifsec.com/wp-content/uploads/2022/09/among-us-gif-13.gif'
        />
      </main>
    </Layout>
  );
}
