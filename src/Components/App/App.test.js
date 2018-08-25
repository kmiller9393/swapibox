import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  peopleDataFetcher,
  planetDataFetcher,
  vehicleDataFetcher
} from '../../apiCalls';
import { mockAppPerson, mockAppPlanets, mockAppVehicles } from '../../mockData';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockPerson;
  let mockPerson2;

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockPerson = [
      {
        name: 'Luke Skywalker',
        favorite: false
      }
    ];
    mockPerson2 = [
      {
        name: 'Luke Skywalker',
        favorite: true
      }
    ];
  });

  it('matches the snapshot on load', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches the snapshot when there are favorites', () => {
    wrapper.setState({ currentView: 'favorites' });
    expect(wrapper).toMatchSnapshot();
  });

  it('matches the snapshot when the currentView has a value other than favorites', () => {
    wrapper.setState({ currentView: 'planets' });
    expect(wrapper).toMatchSnapshot();
  });

  it('favoriteItem puts the current card in favorites', () => {
    wrapper.setState({ currentView: 'people' });
    wrapper.setState({ people: mockPerson });
    wrapper.instance().favoriteItem('Luke Skywalker');
    expect(wrapper.state('favorites')).toEqual(mockPerson2);
  });

  it('favoriteItem should remove an item from favorites if it already exists', () => {
    wrapper.setState({ currentView: 'people' });
    wrapper.setState({ people: mockPerson });
    wrapper.instance().favoriteItem('Luke Skywalker');
    wrapper.instance().favoriteItem('Luke Skywalker');
    expect(wrapper.state('favorites')).toEqual([]);
  });

  it('setContainerView should call peopleDataFetcher when passed in a string of people', async () => {
    await wrapper.instance().setContainerView('people');
    expect(wrapper.state('people')).toEqual(mockAppPerson);
  });

  it('setContainerView should call planetDataFetcher when passed in a string of people', async () => {
    await wrapper.instance().setContainerView('planets');
    expect(wrapper.state('planets')).toEqual(mockAppPlanets);
  });

  it('setContainerView should call vehicleDataFetcher when passed in a string of people', async () => {
    await wrapper.instance().setContainerView('vehicles');
    expect(wrapper.state('vehicles')).toEqual(mockAppVehicles);
  });

  it('setContainerView should change state to currentView of favorites', async () => {
    await wrapper.instance().setContainerView('favorites');
    expect(wrapper.state('currentView')).toEqual('favorites');
  });
});
