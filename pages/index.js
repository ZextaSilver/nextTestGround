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
            2
          </p>
          <p>
            3
          </p>
          <p>
            4
          </p>
          <p>
            5
          </p>
          <p>
            6
          </p>
          <p>
            7
          </p>
          <p>
            8
          </p>
          <p>
            9
          </p>
          <p>
            10
          </p>
          <p>
            11
          </p>
          <p>
            12
          </p>
          <p>
            <Link href = "/posts/projects">More About Me?</Link>
          </p>
          <p>
            13
          </p>
          <p>
            14
          </p>
          <p>
            15
          </p>
          <p>
            16
          </p>
          
          
        </section>
      </div>
    </Layout>
  )
}
