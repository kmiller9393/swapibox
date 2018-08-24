import React from 'react';
import PropTypes from 'prop-types';

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

const { number, func } = PropTypes;
Favorites.propTypes = {
  setContainerView: func,
  numberOfFavorites: number
}
