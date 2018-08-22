import React, { Component } from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import Favorites from '../Favorites/Favorites';
import { Navbar } from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import People from '../../helper';
import './App.css';
import { peopleDataFetcher, planetDataFetcher } from '../../api-helper';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: []
    };
  }

  componentDidMount = async () => {
    const people = await peopleDataFetcher()
    this.setState({ people })
    const planets = await planetDataFetcher()
    this.setState({ planets })
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="header-title">SwapiBox</h1>
        </div>
        <Navbar />
        <Sidebar />
        <CardContainer />
        <Favorites />
      </div>
    );
  }
}
