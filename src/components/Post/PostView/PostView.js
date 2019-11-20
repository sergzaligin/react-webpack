import React, { useEffect } from 'react';

const PostView = () => {

  useEffect(()=>{
    document.title = 'Просмотр поста';
  }, []);

  return (
    <div>Пост по ид.</div>
  );
};

export default PostView;
