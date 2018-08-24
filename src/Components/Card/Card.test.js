import React from 'react';
import { shallow } from 'enzyme';

import { Card } from './Card';

describe('Card', () => {
  let mockItem;
  let mockFavoriteItem;
  let mockIndex;
  let wrapper;

  beforeEach(() => {
    mockIndex = 1;
    mockFavoriteItem = jest.fn();
    mockItem = {
      Class: "wheeled",
      Model: "Digger Crawler",
      Passengers: "30",
      name: "Sand Crawler"}
    wrapper = shallow(<Card {...mockItem} favoriteItem={mockFavoriteItem} key={mockIndex} />)
  })

  it('Should invoke the favoriteItem method when btn clicked', () => {
    // const spy = jest.spyOn(wrapper.instance(), 'handleClick');
    // const mockEvent = {target: { id: 'SPECIAL EDUCATION'}};
    // wrapper.instance().forceUpdate();
    wrapper.find('.death-star').simulate('click');
    expect(mockFavoriteItem).toHaveBeenCalled();

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})