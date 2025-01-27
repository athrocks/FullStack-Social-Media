import React from 'react';
import { deleteComment } from '../../api/api';

const DeleteComment = ({ commentId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteComment(commentId);
      onDelete(commentId);
      alert('Comment deleted successfully!');
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteComment;