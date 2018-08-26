import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = props => {
  const itemDetails = Object.keys(props).map((item, index) => {
    if (item !== 'name' && item !== 'favoriteItem' && item !== 'favorite') {
      return (
        <p key={index}>
          {Object.keys(props)[index]}: {Object.values(props)[index]}
        </p>
      );
    }
  });

  const { name, favorite, favoriteItem } = props;
  return (
    <div className="Card">
      <h3 className="card-header">
        {name}
        <button
          className={favorite ? 'death-star-active' : 'death-star'}
          onClick={() => favoriteItem(name)}
        />
      </h3>
      {itemDetails}
    </div>
  );
};

const { array, string, bool, func } = PropTypes;
Card.propTypes = {
  props: array.isRequired,
  name: string.isRequired,
  favorite: bool,
  favoriteItem: func.isRequired
};
