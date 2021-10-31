import Head from "next/head";
import HeadLine from "../../components/HeadLine";

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contacts: data },
  }
};

const Contacts = ({ contacts }) => { 
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <HeadLine text="Contacts list:" />
      <ul>
        {contacts && contacts.map(({ id, name, email }) => (
          <li key={id}><strong>{name}</strong> ({email})</li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
