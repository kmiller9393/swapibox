import React from 'react';
import './Card.css';

export const Card = props => {
  return (
    <div className="Card">
      <h3 className="card-header">{props.name}</h3>
      <p>
        {Object.keys(props)[1]}: {Object.values(props)[1]}
      </p>
      <p>
        {Object.keys(props)[2]}: {Object.values(props)[2]}
      </p>
      <p>
        {Object.keys(props)[3]}: {Object.values(props)[3]}
      </p>
      <p>
        {Object.keys(props)[4]} {Object.values(props)[4]}
      </p>
    </div>
  );
};
