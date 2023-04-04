import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

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

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href = "/"> ← Back to home</Link>
        </div>
      )}

      <footer className = {styles.footer}>
        <Link href = "https://www.linkedin.com/in/bowen-zhao-656743218/">LinkedIn</Link>
      </footer>
    </>
  );
}
