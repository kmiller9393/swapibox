import React, { Component } from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import Favorites from '../Favorites/Favorites';
import { Navbar } from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    const peopleUrl = `https://swapi.co/api/people/`;
    const peopleData = fetch(peopleUrl)
      .then(response => response.json())
      .then(data => data);
    console.log(peopleData);
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
