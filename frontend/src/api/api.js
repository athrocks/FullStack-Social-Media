import axios from 'axios';

// Set up the axios instance with your base URL
const api = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your backend URL
});

// User Management
export const getUsers = () => api.get('/users/');
export const getUserById = (id) => api.get(`/users/${id}`);
export const createUser = (userData) => api.post('/users/', userData);
export const updateUser = (id, updatedData) => api.put(`/users/${id}`, updatedData);
export const deleteUser = (id) => api.delete(`/users/${id}`);
export const searchUsers = (keyword) => api.get(`/users/search?keyword=${keyword}`);


// Post Management
export const getPosts = () => api.get('/posts/');
export const getPostById = (id) => api.get(`/posts/${id}`);
export const createPost = (postData) => api.post('/posts/', postData);
export const updatePost = (id, updatedData) => api.put(`/posts/${id}`, updatedData);
export const deletePost = (id) => api.delete(`/posts/${id}`);
export const getPostsByUser = (userId) => api.get(`/posts/users/${userId}`);
export const getUserPhotoPosts = (userId) => api.get(`/posts/users/photos/${userId}`);
export const getPhotoPosts = () => api.get('/posts/photos');


// Comment Management
export const getComments = () => api.get('/comment/');
export const addComment = (commentData) => api.post('/comment/', commentData);
export const deleteComment = (id) => api.delete(`/comment/${id}`);
export const getCommentsByUser = (userId) => api.get(`/comment/users/${userId}`);
export const getCommentsByPost = (postId) => api.get(`/comment/posts/${postId}`);

/*
// Like System (Post Likes)
export const getPostLikes = () => api.get('/likepost/');
export const createPostLike = (likeData) => api.post('/likepost/', likeData);
export const removePostLike = (likePostID) => api.delete(`/likepost/${likePostID}`);
export const getUserPostLikes = (userId) => api.get(`/likepost/users/${userId}`);
export const getPostLikesByPost = (postId) => api.get(`/likepost/posts/${postId}`);

// Like System (Comment Likes)
export const getCommentLikes = () => api.get('/likecomment/');
export const createCommentLike = (likeData) => api.post('/likecomment/', likeData);
export const removeCommentLike = (likeCommentID) => api.delete(`/likecomment/${likeCommentID}`);
export const getUserCommentLikes = (userId) => api.get(`/likecomment/users/${userId}`);
export const getCommentLikesByComment = (commentID) => api.get(`/likecomment/comment/${commentID}`);
export const getTotalCommentLikes = (commentID) => api.get(`/likecomment/totalLikes/${commentID}`);

// Follow System
export const getFollows = () => api.get('/follows/');
export const createFollow = (followData) => api.post('/follows/', followData);
export const removeFollow = (id) => api.delete(`/follows/${id}`);
export const getFollowers = (userId) => api.get(`/follows/target/${userId}`);
export const getFollowing = (userId) => api.get(`/follows/follower/${userId}`);

// Report System
export const getReports = () => api.get('/reports/');
export const createReport = (reportData) => api.post('/reports/', reportData);
export const getReportById = (reportId) => api.get(`/reports/${reportId}`);
export const updateReport = (reportId, reportData) => api.put(`/reports/${reportId}`, reportData);
export const deleteReport = (reportId) => api.delete(`/reports/${reportId}`);
export const getReportsByUser = (userId) => api.get(`/reports/users/${userId}`);
*/

// City Management
export const getCities = () => api.get('/city/');
export const createCity = (cityData) => api.post('/city/', cityData);
export const getCityById = (id) => api.get(`/city/${id}`);
export const deleteCity = (id) => api.delete(`/city/${id}`);

export default api;
