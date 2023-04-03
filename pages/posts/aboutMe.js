import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';

export default function AboutMe()
{
	return(
		<Layout children>
			<Head>
				<title>About Me {siteTitle}</title>
			</Head>
			
			<h1>
				About Me
			</h1>

			<p>
				A game programmer and software engineer.
			I can speak both English and Mandarin. My expertise lies in developing Unity games
			and applications that are both fun and functional. I am passionate about creating
			innovative solutions that solve real-world problems.
			</p>
		</Layout>
	);

}

