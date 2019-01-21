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
      Class: 'wheeled',
      Model: 'Digger Crawler',
      Passengers: '30',
      name: 'Sand Crawler'
    };
    wrapper = shallow(
      <Card {...mockItem} favoriteItem={mockFavoriteItem} key={mockIndex} />
    );
  });

  it('should start with a death-star class', () => {
    expect(wrapper.find('button').hasClass('death-star')).toEqual(true);
  });

  it('if has property of favorite it should have class of death-star-active', () => {
    mockItem = {
      Class: 'wheeled',
      Model: 'Digger Crawler',
      Passengers: '30',
      name: 'Sand Crawler',
      favorite: true
    };
    wrapper = shallow(
      <Card {...mockItem} favoriteItem={mockFavoriteItem} key={mockIndex} />
    );
    expect(wrapper.find('button').hasClass('death-star-active')).toEqual(true);
  });

  it('Should invoke the favoriteItem method when btn clicked', () => {
    wrapper.find('.death-star').simulate('click');
    expect(mockFavoriteItem).toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
