import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { LinkedinIcon } from 'next-share';

const name = 'Bowen Zhao';
export const siteTitle = '| Bowen Zhao';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="../images/kirby.png" />
      </Head>
      
      <header className={styles.header}>
        <Link href = "/">Main Page</Link>
        <Link href = "/posts/aboutMe">About Me</Link>
      </header>

      <main>{children}
      

      </main>

      <footer className = {styles.footer}>
        <Link href = "https://www.linkedin.com/in/bowen-zhao-656743218/">LinkedIn</Link>
        <Link href = "https://github.com/ZextaSilver">Github</Link>
        <Link href = "mailto:zbw1020@gmail.com">Email</Link>

      </footer>
    </>
  );
}
