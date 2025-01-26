import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPostById, updatePost } from '../../api/api'; // Import API calls

const PostUpdate = () => {
  const { id } = useParams(); // Get the 'id' from the URL params
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [cityId, setCityId] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    if (!id) {
      console.error('Post ID is missing');
      return;
    }

    const fetchPost = async () => {
      try {
        const response = await getPostById(id); // Fetch post by ID
        if (response.data) {
          setContent(response.data.content);
          setImageURL(response.data.imageURL);
          setCityId(response.data.city.cityID);  // Set city ID
          setUserId(response.data.user.userID);
        }
      } catch (error) {
        console.error('Error fetching post:', error.message);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!id) {
      console.error("Post ID is missing, cannot update");
      return;
    }

    try {
      const userIdInt = userId;
      const cityIdInt = cityId;

      // Check the values before updating
      console.log('Updating post with:', { content, imageURL, cityIdInt, userIdInt });

      const newPost = {
        content,
        imageURL,
        user: { userID: userIdInt },
        city: { cityID: cityIdInt }, // Ensure the cityId is correctly added here
        createDay: new Date().toISOString(), // Adjust the date if needed
      };

      const postResponse = await updatePost(id, newPost); // Update the post
      console.log('Post updated:', postResponse.data);
      navigate(`/posts/${id}`); // Redirect to the post page after update
    } catch (error) {
      console.error('Error updating post:', error.message);
    }
  };

  if (!id) {
    return <div>Post ID is missing or invalid</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Post</h2>
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
      <button type="submit">Update Post</button>
    </form>
  );
};

export default PostUpdate;
