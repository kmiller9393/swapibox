import React, { Component } from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import { Favorites } from '../Favorites/Favorites';
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
      vehicles: [],
      favorites: [],
      currentView: '',
      isLoading: false
    };
  }

  favoriteItem = name => {
    const favedItem = this.state[this.state.currentView].find(
      item => item.name === name
    );
    let newArray = this.state[this.state.currentView].map(item => {
      item.name === name ? (item.favorite = !item.favorite) : undefined;
      return item;
    });
    this.setState({ [this.state.currentView]: newArray });

    if (favedItem.favorite) {
      this.setState({ favorites: [...this.state.favorites, favedItem] });
    } else {
      let newArray = this.state[this.state.currentView].filter(
        item => item != favedItem
      );
      this.setState({ favorites: newArray });
    }
  };

  setContainerView = async endpoint => {
    switch (endpoint) {
      case 'people':
        const people = await peopleDataFetcher('people');
        this.setState({ people, currentView: 'people' });
        break;
      case 'planets':
        const planets = await planetDataFetcher('planets');
        this.setState({ planets, currentView: 'planets' });
        break;
      case 'vehicles':
        const vehicles = await vehicleDataFetcher('vehicles');
        this.setState({ vehicles, currentView: 'vehicles' });
        break;
      case 'favorites':
        this.setState({ vehicles, currentView: 'favorites' });
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
        <Navbar setContainerView={this.setContainerView} />
        <Sidebar />
        {!this.state.currentView && (
          <div className="card-container start">Select A Category</div>
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
