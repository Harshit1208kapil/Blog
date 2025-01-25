import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../store/blogSlice';

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      dispatch(deleteBlog(blog.id));
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <p><strong>Category:</strong> {blog.category}</p>
      <button onClick={() => alert('Redirecting to blog details')}>Read More</button>
      <button onClick={handleDelete} style={{ marginLeft: '10px', color: 'red' }}>
        Delete
      </button>
    </div>
  );
};

export default BlogCard;
