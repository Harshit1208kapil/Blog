import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../blogSlice';

const CreateBlog = ({ sethome }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: [],
    status: 'Draft',
    publishedDate: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title || formData.title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters long.';
    }
    if (!formData.description || formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters long.';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required.';
    }
    if (formData.status === 'Published' && !formData.publishedDate) {
      newErrors.publishedDate = 'Published date is required for published blogs.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    dispatch(
      addBlog({
        id: Date.now(),
        ...formData,
      })
    );
    sethome(true);
    alert('Blog created successfully!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create Blog</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
        {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateBlog;
