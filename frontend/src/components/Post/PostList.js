import React, { useState, useEffect } from 'react';
import { getPosts } from '../../api/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts(); // Fetch all posts
        console.log(response.data);  // Log the response to check data
        setPosts(response.data);     // Set posts data
      } catch (error) {
        console.error('Error fetching posts:', error); // Log any errors
      }
    };
    fetchPosts(); // Call the function to fetch posts
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.postID}>
            <h3>{post.content}</h3>
            <p>{post.city.cityName}</p>
            <img src={post.imageURL} alt={post.content} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

