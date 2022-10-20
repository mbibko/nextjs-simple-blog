import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from "next/head";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({postData}) {
  return <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <h1>{postData.title}</h1>
    <p>{postData.date}</p>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>;
}
