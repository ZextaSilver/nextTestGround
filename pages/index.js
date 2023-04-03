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
            Want to know more about me? check{' '}
            <Link href = "/posts/aboutMe">here</Link>
            
          </p>
        </section>
      </div>
    </Layout>
  )
}
