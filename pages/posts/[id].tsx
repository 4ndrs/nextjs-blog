import Layout from "../../components/layout";

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
    {postData.title}
    <br />
    {postData.id}
    <br />
    {postData.date}
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
);

export default Post;
