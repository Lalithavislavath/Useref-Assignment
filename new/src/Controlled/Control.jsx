import React, { useState } from 'react';
const Control = () => {
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value); 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <label>Name:<input type="text" value={name} onChange={handleChange} /></label>
      <button type="submit" onSubmit={handleSubmit}>Submit</button>
      <p>Input:{name}</p>
    </form>
  );
};
export default Control;
