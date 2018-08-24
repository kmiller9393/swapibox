import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  let mockSetContainerView;
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    mockEvent = {target: { title: 'people'}, preventDefault: jest.fn()};
    mockSetContainerView = jest.fn();
    wrapper = shallow(<Navbar 
      setContainerView={mockSetContainerView}
        />)
  })

  it('should call handleClick when button is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleClick');
    wrapper.instance().forceUpdate();
    wrapper.find('fieldset').childAt(1).simulate('click', mockEvent);
    expect(spy).toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})