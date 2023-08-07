import React from 'react';
import "./NavButton.css"

const CustomLeftNavButton = ({ onClick }) => (
  <button className="custom-left-button" onClick={onClick}>
    &lt; Previous
  </button>
);

const CustomRightNavButton = ({ onClick }) => (
  <button className="custom-right-button" onClick={onClick}>
    Next &gt;
  </button>
);

export { CustomLeftNavButton, CustomRightNavButton };
