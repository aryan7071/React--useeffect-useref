import React, { useEffect } from 'react';

const Navbar1 = ({ color }) => {
  // Case1- run on every render
  useEffect(() => {
  alert("HEy i will run on every render")
})

// Case2- run only on first render
useEffect(() => {
  alert("Welcome to the page, This is the first render")
}, [])

// Case2- run only on first render
useEffect(() => {
  alert("Hey i am running because color was changed")
}, [color])

  return (
    <div>
      I am navbar of {color} color hehehe..
    </div>
  );
};

export default Navbar1;
