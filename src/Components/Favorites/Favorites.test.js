import React from 'react';
import { shallow, mount } from 'enzyme';

import { Favorites } from './Favorites';

describe('Favorites', () => {
  let wrapper;
  let mockSetContainerView;
  let mockNumberOfFavorites;
  let mockEvent = {target: { title: 'favorites'}, preventDefault: jest.fn()};

  beforeEach(() => {
    mockSetContainerView = jest.fn();
    mockNumberOfFavorites = 1;
    wrapper = shallow(<Favorites
      setContainerView={mockSetContainerView}
      numberOfFavorites={mockNumberOfFavorites}
    />);
  });

  it('should call handleClick when btn is clicked', () => {
    
    wrapper.find('a').simulate('click');
    expect(mockSetContainerView).toHaveBeenCalledWith('favorites');

  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});