import React, { useState, useEffect } from 'react';
import { getPostById } from '../../api/api';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(id); // Fetch post by ID
        console.log(response.data);  // Log the response to check data
        setPost(response.data);      // Set post data
      } catch (error) {
        console.error('Error fetching post details:', error); // Log any errors
      }
    };
    fetchPost(); // Call the function to fetch the post details
  }, [id]); // Effect runs when the `id` changes

  return post ? (
    <div>
      <h2>Post Details</h2>
      <h3>{post.content}</h3>
      <img src={post.imageURL} alt="Post" />
      <p>Created by: {post.user.firstName} {post.user.lastName}</p>
      <p>City: {post.city.cityName}</p>
      <p>Created on: {post.createDay}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default PostDetail;
