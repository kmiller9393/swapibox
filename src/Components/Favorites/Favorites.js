import React from 'react';
import PropTypes from 'prop-types';

export const Favorites = ({ setContainerView, numberOfFavorites }) => {
  return (
    <div className="favorites">
      <a className="superBtn" onClick={() => setContainerView('favorites')}>
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
};
