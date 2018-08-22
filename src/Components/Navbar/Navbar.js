import React from 'react';

export const Navbar = ({ setContainerView }) => {
  const handleClick = e => {
    setContainerView(e.target.title);
  };

  return (
    <div className="navbar">
      <fieldset>
        <a onClick={handleClick} class="glowBtn" title="people">
          People
        </a>
        <a onClick={handleClick} class="glowBtn" title="planets">
          Planets
        </a>
        <a onClick={handleClick} class="glowBtn" title="vehicles">
          Vehicles
        </a>
      </fieldset>
    </div>
  );
};
