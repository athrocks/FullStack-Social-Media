import React from 'react';
import DeleteComment from './DeleteComment';

const Comment = ({ comment, currentUserId, onDelete }) => {
  const isOwner = comment.user.userID === currentUserId;

  return (
    <div>
      <p>{comment.content}</p>
      <p>By: {comment.user.userName}</p>
      {isOwner && (
        <DeleteComment commentId={comment.commentID} onDelete={onDelete} />
      )}
    </div>
  );
};

export default Comment;