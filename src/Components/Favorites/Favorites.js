import React from 'react';

export const Favorites = ({ setContainerView, numberOfFavorites }) => {
  const handleClick = e => {
    setContainerView('favorites');
  };

  return (
    <div className="favorites">
      <a class="superBtn" onClick={handleClick}>
        Favorites:
        <span> {numberOfFavorites}</span>
      </a>
    </div>
  );
};
