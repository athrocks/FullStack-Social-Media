import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserList from "./components/User/UserList";
import UserCreate from "./components/User/UserCreate";
import UserUpdate from "./components/User/UserUpdate";
import UserDetail from "./components/User/UserDetail";

import PostList from "./components/Post/PostList";
import PostDetail from "./components/Post/PostDetail";
import PostCreate from "./components/Post/PostCreate";
import PostUpdate from "./components/Post/PostUpdate";

import CityDetail from "./components/City/CityDetail";
import CityCreate from "./components/City/CityCreate";
import CityList from "./components/City/CityList";
import CityUpdate from "./components/City/CityUpdate";

import CommentList from "./components/Comment/CommentList";
import AddComment from "./components/Comment/AddComment";
import CommentSection from "./components/Comment/CommentSection";
import Comment from "./components/Comment/Comment";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users/create" element={<UserCreate />} />
        <Route path="/users/update/:id" element={<UserUpdate />} />

        {/* Post Routes */}
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/create" element={<PostCreate />} />
        <Route path="/posts/update/:id" element={<PostUpdate />} />

        {/* City Routes */}
        <Route path="/cities" element={<CityList />} />
        <Route path="/city/new" element={<CityCreate />} />
        <Route path="/city/edit/:id" element={<CityUpdate />} />
        <Route path="/city/:id" element={<CityDetail />} />

        {/* Comment Routes */}
        <Route path="/comments" element={<CommentList />} />
        <Route path="/comments/add" element={<AddComment />} />
        <Route path="/comments/:commentId" element={<Comment />} />
        <Route path="/posts/:postId/comments" element={<CommentSection />} />


      </Routes>
    </Router>
  );
};

export default App;
