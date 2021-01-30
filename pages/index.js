import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    I am an aspiring Full-Stack Web Developer, currently
                    learning Next.js. I am also interested in learning Gatsby
                    for static projects, and its seemless CMS compatibility.
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{' '}
                    <a href='https://nextjs.org/learn'>our Next.js tutorial</a>
                    .)
                </p>
            </section>
        </Layout>
    );
}
