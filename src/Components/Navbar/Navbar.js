import React from 'react';

export const Navbar = ({ setContainerView }) => {
  return (
    <div className="navbar">
      <fieldset>
        <a
          onClick={e => setContainerView(e.target.title)}
          class="glowBtn"
          title="people"
        >
          People
        </a>
        <a
          onClick={e => setContainerView(e.target.title)}
          class="glowBtn"
          title="planets"
        >
          Planets
        </a>
        <a
          onClick={e => setContainerView(e.target.title)}
          class="glowBtn"
          title="vehicles"
        >
          Vehicles
        </a>
      </fieldset>
    </div>
  );
};
