import React, { Component } from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import Favorites from '../Favorites/Favorites';
import { Navbar } from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';
import {
  peopleDataFetcher,
  planetDataFetcher,
  vehicleDataFetcher
} from '../../apiCalls';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: []
    };
  }

  setContainerView = async endpoint => {
    switch (endpoint) {
      case 'people':
        const people = await peopleDataFetcher('people');
        this.setState({ people });
        break;
      case 'planets':
        const planets = await planetDataFetcher('planets');
        this.setState({ planets });
        break;
      case 'vehicles':
        const vehicles = await vehicleDataFetcher('vehicles');
        this.setState({ vehicles });
        break;
      default:
      //loading screen code here;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="header-title">SwapiBox</h1>
        </div>
        <Navbar setContainerView={this.setContainerView} />
        <Sidebar />
        <CardContainer />
        <Favorites />
      </div>
    );
  }
}
