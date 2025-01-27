import React, { useState } from 'react';
import { addComment, getUsers, getPosts } from '../../api/api'; // Import necessary API functions

const AddComment = () => {
  const [userID, setUserID] = useState('');
  const [postID, setPostID] = useState('');
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setError('');

    // Validate inputs
    if (!userID || !postID || !content) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      // Check if User ID exists
      const userResponse = await getUsers(userID);
      if (!userResponse.data) {
        setError('User ID does not exist.');
        return;
      }

      // Check if Post ID exists
      const postResponse = await getPosts(postID);
      if (!postResponse.data) {
        setError('Post ID does not exist.');
        return;
      }

      // Prepare the payload
      const payload = {
        post: {
          postID: parseInt(postID, 10), // Ensure postID is a number
        },
        user: {
          userID: userID, // Use the provided userID
        },
        content: content,
        imageURL: imageURL || null, // Optional field
      };

      // Add the comment
      const commentResponse = await addComment(payload);
      console.log('Comment added successfully:', commentResponse.data);

      // Clear form fields
      setUserID('');
      setPostID('');
      setContent('');
      setImageURL('');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to add comment. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Comment</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            placeholder="Enter User ID"
            required
          />
        </div>
        <div>
          <label>Post ID:</label>
          <input
            type="text"
            value={postID}
            onChange={(e) => setPostID(e.target.value)}
            placeholder="Enter Post ID"
            required
          />
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your comment"
            required
          />
        </div>
        <div>
          <label>Image URL (optional):</label>
          <input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Enter Image URL"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddComment;