import Head from "next/head";
import HeadLine from "../components/HeadLine";
import styles from '../styles/Home.module.scss';

const Home = () => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <HeadLine text="Maryia's Next.js App" />
  </div>
);

export default Home;