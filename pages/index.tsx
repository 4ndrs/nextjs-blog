import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const Home = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>
        Hello, I'm <strong>Mabel</strong>. I don't want to do anything that
        involves work. You can check my profile{" "}
        <a href="https://anidb.net/character/126072">here</a>.
      </p>
      <p>
        (This is a sample website - you'll be building a site like this on{" "}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
      </p>
    </section>
  </Layout>
);

export default Home;
