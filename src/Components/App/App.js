import React, { Component } from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import Favorites from '../Favorites/Favorites';
import { Navbar } from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import People from '../../helper';
import './App.css';
import { peopleDataFetcher } from '../../api-helper';


export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {

    const people = await peopleDataFetcher()

    // have all of the apis needed in an array and resolve all of them based on their endpoint (people vehicles planets)


    // use the api for people and return an array of objects with all the needed data

    // use the api for planets and return an array of objects with all the needed data
    // use the api for vehicles and return an array of objects with all the needed data



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
