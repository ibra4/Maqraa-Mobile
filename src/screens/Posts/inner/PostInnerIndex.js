import React from 'react';
import InnerLayout from '../../../components/InnerLayout';
import PostInner from './PostInner';
import posts from '../../../dummy/posts.json';

function PostInnerIndex({route}) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const post = posts.filter(item => item.id == route.params.state.postId)[0];
    setData(post);
    setLoading(false);
  }, []);

  return (
    <InnerLayout title={data?.title} loading={loading}>
      <PostInner data={data} />
    </InnerLayout>
  );
}

export default PostInnerIndex;
