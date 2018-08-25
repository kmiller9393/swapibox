import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import { shallow } from 'enzyme';
import { mockMovies } from '../../mockData';

describe('Sidebar', () => {
  let wrapper;

  beforeEach(() => {
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(mockMovies) })
      );
    wrapper = shallow(<Sidebar />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there is no quote', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            opening_crawl: '',
            title: '',
            episode_id: '',
            release_date: ''
          })
      })
    );
    expect(wrapper).toMatchSnapshot();
  });
});
