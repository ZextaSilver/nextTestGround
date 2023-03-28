import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>My Website</title>
      </Head>
      <section className = {utilStyles.headingMd}>
        <p>
          [Hi there, I'm Bowen, I'm a game programmer and software engineer.
          I can speak both English and Mandarin. My expertise lies in developing Unity games
          and applications that are both fun and functional. I am passionate about creating
          innovative solutions that solve real-world problems.]
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
          <a href = "https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
