import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = props => {


  const itemDetails = Object.keys(props).map((item, i) => {
    if (item != 'name' && item != 'favoriteItem' && item != 'favorite') {
      return <p>{Object.keys(props)[i]}: {Object.values(props)[i]}</p>
    }
  })

  return (
    <div className="Card">
      <h3 className="card-header">
        {props.name}
        <button
          className={props.favorite ? 'death-star-active' : 'death-star'}
          onClick={() => props.favoriteItem(props.name)} />
      </h3>
      {itemDetails}
    </div>
  );
};

const { array } = PropTypes
Card.propTypes = {
  props: array
}
