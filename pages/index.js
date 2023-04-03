import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <div>
        <Head>
          <title>Main {siteTitle}</title>
        </Head>
        <section className = {utilStyles.headingMd}>
          <p>
            Welcome, good to see you here
          </p>
          <p>
            <Link href = "/posts/aboutMe">More About Me?</Link>
          </p>
        </section>
      </div>
    </Layout>
  )
}
