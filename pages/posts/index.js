import Head from "next/head";
import Link from "next/link";
import HeadLine from "../../components/HeadLine";

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts: data },
  }
};

const Posts = ({ posts }) => { 
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <HeadLine text="Posts:" />
      <ul>
        {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;