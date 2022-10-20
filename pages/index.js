import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";

import { getSortedPostsData } from '../lib/posts';
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Maksym. I’m a HTML-coder and Frontend-developer from Ukraine. You can contact me on skype @msbibko.</p>
        <p>
          This is a sample website on{' '}
          <a href="https://nextjs.org">Next.js</a>, created with <a href="https://nextjs.org/learn/foundations/about-nextjs">this tutorial</a>
          <br/>
          I just got 820 points✨ on https://nextjs.org/learn via @vercel 
        </p>
        <>
          <Link href="/posts/first-post">
            <a>Check here my first Post.</a>
          </Link>
        </>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
