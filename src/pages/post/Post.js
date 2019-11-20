import React, { useEffect } from 'react';

import PostView from '../../components/Post/PostView/PostView';

const Post = () => {

  useEffect(()=>{
    document.title = 'Просмотр поста';
  }, []);

  return <PostView />;

};

export default { component: Post, title: 'Просмотр поста' };
