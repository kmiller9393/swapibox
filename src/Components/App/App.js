import React, { Component } from 'react';

import { CardContainer } from '../CardContainer/CardContainer';
import { Favorites } from '../Favorites/Favorites';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';
import { peopleDataFetcher, planetDataFetcher, vehicleDataFetcher } from '../../apiCalls';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      currentView: '',
      isLoading: false
    };
  }

  favoriteItem = name => {
    const favedItem = this.state[this.state.currentView].find(item => item.name === name);
    let newArray = this.state[this.state.currentView].map(item => {
      item.name === name ? (item.favorite = !item.favorite) : undefined;
      return item;
    });
    this.setState({ [this.state.currentView]: newArray });
    if (favedItem.favorite) {
      this.setState({ favorites: [...this.state.favorites, favedItem] });
    } else {
      let newArray = this.state.favorites.filter(item => item !== favedItem);
      this.setState({ favorites: newArray });
    }
  };

  setContainerView = async endpoint => {
    switch (endpoint) {
      case 'people':
        if (!this.state.people.length) {
          const people = await peopleDataFetcher('people');
          this.setState({ people });
        }
        this.setState({ currentView: 'people' });
        break;
      case 'planets':
        if (!this.state.planets.length) {
          const planets = await planetDataFetcher('planets');
          this.setState({ planets });
        }
        this.setState({ currentView: 'planets' });
        break;
      case 'vehicles':
        if (!this.state.vehicles.length) {
          const vehicles = await vehicleDataFetcher('vehicles');
          this.setState({ vehicles, currentView: 'vehicles' });
        }
        this.setState({ currentView: 'vehicles' });
        break;
      case 'favorites':
        this.setState({ currentView: 'favorites' });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="header-title">Swapi-Box</h1>
        </div>
        <Navbar
          setContainerView={this.setContainerView}
          // currentView={this.state.currentView}
        />
        <Sidebar />
        {!this.state.currentView && (
          <div className="card-container start">Select A Category</div>
        )}
        {this.state.currentView === 'favorites' &&
          !this.state.favorites.length && (
            <div className="card-container-no-favs start">
              No Favorites To Display
            </div>
          )}
        {this.state.currentView && (
          <CardContainer
            favoriteItem={this.favoriteItem}
            selectedGroup={this.state[this.state.currentView]}
          />
        )}
        <Favorites
          setContainerView={this.setContainerView}
          numberOfFavorites={this.state.favorites.length}
        />
      </div>
    );
  }
}
