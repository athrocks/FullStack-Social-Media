import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import { createPost, getCityById, getUserById} from '../../api/api';

const PostCreate = () => {
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [cityId, setCityId] = useState('');
  const [userId, setUserId] = useState('');

  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Ensure the IDs are integers
      const userIdInt = userId;
      const cityIdInt = cityId;

      // Step 1: Check if the city exists
      const cityResponse = await getCityById(cityIdInt);

      if (!cityResponse.data) {
        // If city doesn't exist, redirect to the Create City page
        console.log('City does not exist. Redirecting to Create City.');
        navigate(`/city/create`);  // Redirect with cityId as a query parameter
        return;  // Stop further execution
      }

      // Step 2: Check if the user exists
      const userResponse = await getUserById(userIdInt);
      console.log("In Step2")
      if (!userResponse.data) {
        throw new Error('User does not exist.');
      }

      // Step 3: If both user and city are valid, create the post
      const newPost = {
        content,
        imageURL,
        user: { userID: userIdInt },
        city: { cityID: cityIdInt },
        createDay: new Date().toISOString(), // Adjust the date if needed
      };
      
      const postResponse = await createPost(newPost);

      console.log('Post created:', postResponse.data);
      // You can redirect or show a success message
    } catch (error) {
      console.error('Error creating post:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="City ID"
        value={cityId}
        onChange={(e) => setCityId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostCreate;
