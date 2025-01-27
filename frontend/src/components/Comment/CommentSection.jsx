import React, { useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Comment from './Comment';

const CommentSection = ({ postId, currentUserId }) => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter(comment => comment.commentID !== commentId));
  };

  return (
    <div>
      <CommentList postId={postId} />
      <AddComment postId={postId} onAddComment={handleAddComment} />
      {comments.map(comment => (
        <Comment
          key={comment.commentID}
          comment={comment}
          currentUserId={currentUserId}
          onDelete={handleDeleteComment}
        />
      ))}
    </div>
  );
};

export default CommentSection;