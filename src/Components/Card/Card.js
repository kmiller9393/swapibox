import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = props => {
  const itemDetails = Object.keys(props).map((item, index) => {
    if (
      item !== 'name' &&
      item !== 'favoriteItem' &&
      item !== 'favorite' &&
      Object.values(props)[index] !== ''
    ) {
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

const { array } = PropTypes;
Card.propTypes = {
  props: array
};
