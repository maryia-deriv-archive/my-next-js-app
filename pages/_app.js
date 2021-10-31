import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import next from "../public/next.png";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={next}
      width={500} 
      height={350} 
      alt="rocket"
      placeholder="blur"
    />
  </Layout>
);

export default MyApp;