import React from 'react';
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';
import Home from './Home';

const Body = ({ home, sethome, selectedBlogId, setSelectedBlogId }) => {
  if (selectedBlogId) {
    return <BlogDetails blogId={selectedBlogId} setSelectedBlogId={setSelectedBlogId} />;
  }

  if (!home) {
    return <CreateBlog sethome={sethome} />;
  }
  return <Home sethome={sethome} setSelectedBlogId={setSelectedBlogId} />;
};

export default Body;
