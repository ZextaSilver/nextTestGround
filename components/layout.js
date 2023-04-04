import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const name = 'Bowen Zhao';
export const siteTitle = '| Bowen Zhao';

export default function Layout({ children, home }) {
  return (
    
    <>
      <main>{children}

        <Head>
          <link rel="icon" href="../images/kirby.png" />
        </Head>

        <header className={styles.header}>
          <Link href = "/">Main Page</Link>
          <Link href = "/posts/projects">Projects</Link>
        </header>

        <footer className = {styles.footer}>
          <Link href = "https://www.linkedin.com/in/bowen-zhao-656743218/"><FontAwesomeIcon icon={faLinkedin} size='2x'/></Link>
          <Link href = "https://github.com/ZextaSilver"><FontAwesomeIcon icon={faGithub} size='2x'/></Link>
          <Link href = "mailto:zbw1020@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='2x'/></Link>
        </footer>

      </main>
    </>
  );
}
