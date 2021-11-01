import HeadLine from "./HeadLine";

const PostInfo = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <HeadLine tag="h3" text="Empty post" />;
  }

  return (
    <>
      <HeadLine tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
