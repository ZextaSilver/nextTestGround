import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Main {siteTitle}</title>
        </Head>


        <p>
          Bowen
        </p>

        <p>
          A game programmer and software engineer. I can speak both English and Mandarin. 
          My expertise lies in developing Unity games and applications that are both fun and functional. 
          I am passionate about creating innovative solutions that solve real-world problems.
        </p>

        <section className = {utilStyles.headingMd}>
          
          <p>
            <Link href = "/posts/projects">My Projects</Link>
          </p>
          
        </section>
      </div>
    </Layout>
  )
}
