import React from 'react';

const NovelCard = ({ novel, currentUser }) => {
  return (
    <div>
      <p>{novel.title}</p>
      {novel.user !== currentUser ? <p>by {novel.user.name}</p> : ""}
      <p>{novel.summary}</p>
    </div>
  );
}

export default NovelCard;
