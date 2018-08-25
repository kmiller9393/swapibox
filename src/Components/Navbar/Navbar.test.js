import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  let mockSetContainerView;
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    mockEvent = { target: { title: 'people' }, preventDefault: jest.fn() };
    mockSetContainerView = jest.fn();
    wrapper = shallow(<Navbar setContainerView={mockSetContainerView} />);
  });

  it('should call handleClick when a category button is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleClick');
    wrapper.instance().forceUpdate();
    wrapper
      .find('fieldset')
      .childAt(1)
      .simulate('click', mockEvent);
    expect(spy).toHaveBeenCalled();
  });

  it('should match the snapshot if no category is selected', () => {
    wrapper.setState({ selected: '' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if people is selected', () => {
    wrapper.setState({ selected: 'people' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if planets is selected', () => {
    wrapper.setState({ selected: 'planets' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if vehicles is selected', () => {
    wrapper.setState({ selected: 'vehicles' });
    expect(wrapper).toMatchSnapshot();
  });
});
