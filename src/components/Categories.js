import React, { useState } from 'react';

const Categories = () => {
  const [status, setStatus] = useState(false);

  const handleButtonClick = () => {
    setStatus(!status);
  };

  return (
    <div>
      <h2>Categories</h2>
      <button type="button" onClick={handleButtonClick}>
        {status ? 'Status is true' : 'Status is false'}
      </button>
    </div>
  );
};

export default Categories;
