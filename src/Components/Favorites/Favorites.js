import React from 'react';

export const Favorites = ({setContainerView}) => {

  const handleClick = e => {
    setContainerView('favorites');
  };
  return (
  <div className="favorites">
    <a class='superBtn' onClick={handleClick}>Favorites
    
      </a>
  </div>
  )
}
