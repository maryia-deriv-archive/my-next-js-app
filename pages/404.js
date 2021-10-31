import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import HeadLine from "../components/HeadLine";
import styles from "../styles/404.module.scss";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push('/');
    }, 3000);
    // and we clean it up on unmount:
    return () => {
      clearTimeout(timeoutId);
    }
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <HeadLine text="404" />
        <HeadLine tag="h2" text="Something is wrong..." />
      </div>
    </div>
  )
};

export default Error;