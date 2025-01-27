import React, { useEffect, useState } from 'react';
import { getComments, getCommentsByPost, getCommentsByUser } from '../../api/api';

const CommentList = ({ postId, userId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response;
        if (postId) {
          response = await getCommentsByPost(postId);
        } else if (userId) {
          response = await getCommentsByUser(userId);
        } else {
          response = await getComments();
        }
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId, userId]);

  return (
    <div>
      <h3>Comments</h3>
      {comments.map(comment => (
        <div key={comment.commentID}>
          <p>{comment.content}</p>
          <p>By: {comment.user.userName}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;