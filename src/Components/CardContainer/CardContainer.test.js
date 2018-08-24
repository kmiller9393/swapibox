import React from 'react';
import { shallow } from 'enzyme';

import { CardContainer } from './CardContainer';

describe('CardContainer', () => {
  let mockSelectedGroup;
  let mockFavoriteItem;
  let wrapper;
  let favoriteItem;

  beforeEach(() => {
    mockSelectedGroup = [{
      Class: "wheeled",
      Model: "Digger Crawler",
      Passengers: "30",
      name: "Sand Crawler"}]
    mockFavoriteItem = jest.fn();
    wrapper = shallow(<CardContainer selectedGroup={mockSelectedGroup} favoriteItem={mockFavoriteItem}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})