import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';


export default function Projects()
{
	return(
		<Layout>
			<Head>
          		<title>Projects {siteTitle}</title>
        	</Head>
			<p>
				Here are the projects I made in the past.
			</p>
		</Layout>
	);

}

