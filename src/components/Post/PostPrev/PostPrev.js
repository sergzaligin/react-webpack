import React, { useEffect } from 'react';

const PostPrev = () => {

  useEffect(()=>{
    document.title = 'Просмотр поста';
  }, []);

  return (
    <div>Анонс постов.</div>
  );
};

export default PostPrev;
