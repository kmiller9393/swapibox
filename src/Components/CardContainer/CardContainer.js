import React from 'react';
import { Card } from '../Card/Card.js';

export const CardContainer = ({ selectedGroup }) => {
  const groupData = selectedGroup.map((item, index) => (
    <Card {...item} key={index} />
  ));

  return <div className="card-container">{groupData}</div>;
};
