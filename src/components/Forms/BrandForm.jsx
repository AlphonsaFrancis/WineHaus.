import React, { useState } from 'react';
import './forms.css';

const AddBrandForm = () => {
  const [brandData, setBrandData] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBrandData({ ...brandData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Category data:', brandData);
  };

  return (
    <div className="form-container">
      <h3>Add New Category</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="head">
            <span>Category Details</span>
          </div>
          
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={brandData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={brandData.description}
            onChange={handleInputChange}
            required
          />

          <div className="form-actions">
            <button type="submit" className="save-btn">Save Category</button>
            <button type="reset" className="cancel-btn">Cancel</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddBrandForm;