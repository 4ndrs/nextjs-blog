import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";

import utilStyles from "../../styles/utils.module.css";
import { getAllPostIds, getPostData } from "../../lib/posts";

type Path = ReturnType<typeof getAllPostIds>[number];

export const getStaticProps = async ({ params }: Path) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

type PostProps = { postData: Awaited<ReturnType<typeof getPostData>> };

const Post = ({ postData }: PostProps) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>

    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>

      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
);

export default Post;
