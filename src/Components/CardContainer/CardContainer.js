import React from 'react';
import { Card } from '../Card/Card.js';
import PropTypes from 'prop-types';

export const CardContainer = ({ selectedGroup, favoriteItem }) => {
  const groupData = selectedGroup.map((item, index) => (
    <Card {...item} favoriteItem={favoriteItem} key={index} />
  ));

  return <div className="card-container">{groupData}</div>;
};

const { array , func } = PropTypes;
CardContainer.propTypes = {
  selectedGroup: array,
  favoriteItem: func
}