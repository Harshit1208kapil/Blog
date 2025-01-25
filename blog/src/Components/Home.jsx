import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog } from '../../blogSlice';

const Home = ({ setSelectedBlogId }) => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      dispatch(deleteBlog(id));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Home</h2>
      {blogs.length === 0 ? (
        <p>No blogs available. Create a new one!</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <p>Category: {blog.category}</p>
            <button onClick={() => setSelectedBlogId(blog.id)}>Read More</button>
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
