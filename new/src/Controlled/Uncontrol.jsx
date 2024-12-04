import React, { useRef } from 'react';
const Uncontrol = () => {
  const nameRef = useRef(); 

  const handleSubmit = (e) => {
    e.preventDefault();
     nameRef.current = nameRef
  };
  return (
    <form>
      <label>Name:<input type="text" ref={nameRef}/></label>
      <button type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  );
};
export default Uncontrol;
