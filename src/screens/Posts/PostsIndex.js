import React from 'react';
import Layout from '../../components/Layout';
import Posts from './Posts';

import posts from '../../dummy/posts.json'

function PostsIndex() {
  return (
    <Layout title="المنشورات">
      <Posts posts={posts} />
    </Layout>
  );
}

export default PostsIndex;
