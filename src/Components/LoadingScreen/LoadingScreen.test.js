import React from 'react';
import { shallow } from 'enzyme';

import { LoadingScreen } from './LoadingScreen';

describe('LoadingScreen', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<LoadingScreen />);
    expect(wrapper).toMatchSnapshot();
  });

});