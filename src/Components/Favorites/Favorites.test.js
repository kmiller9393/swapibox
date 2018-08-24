import React from 'react';
import { shallow } from 'enzyme';

import { Favorites } from './Favorites';

describe('Favorites', () => {
  let wrapper;
  let mockSetContainerView
  let mockNumberOfFavorites

  beforeEach(() => {
    mockSetContainerView = jest.fn();
    mockNumberOfFavorites = 1;
    wrapper = shallow(<Favorites
      setContainerView={mockSetContainerView}
      numberOfFavorites={mockNumberOfFavorites}
    />);
  })

  it('should call handleClick when btn is clicked', () => {
    wrapper.find('.superBtn').simulate('click');
    expect(handleClick).toHaveBeenCalled();
  })

  it('should call setContainerView when handleClick is called', () => {
    wrapper.instance().handleClick();
    expect(mockSetContainerView).toHaveBeenCalled();
    expect(mockSetContainerView).toHaveBeenCalledWith('favorites');
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});