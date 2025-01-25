import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useSelector((state) => state.blog.blogs.find((b) => b.id === parseInt(id)));
  const navigate = useNavigate();

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default BlogDetails;
