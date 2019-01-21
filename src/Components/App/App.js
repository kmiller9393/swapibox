import React, { Component } from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import { Favorites } from '../Favorites/Favorites';
import Navbar from '../Navbar/Navbar';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
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
    const { currentView, favorites } = this.state;
    const favedItem = this.state[currentView].find(item => item.name === name);
    let newArray = this.state[currentView].map(item => {
      item.name === name ? (item.favorite = !item.favorite) : '';
      return item;
    });
    this.setState({ [currentView]: newArray });
    if (favedItem.favorite) {
      this.setState({ favorites: [...favorites, favedItem] });
    } else {
      let newArray = favorites.filter(item => item !== favedItem);
      this.setState({ favorites: newArray });
    }
  };

  setContainerView = async endpoint => {
    const { people, planets, vehicles } = this.state;

    try {
      this.setState({ isLoading: true });
      switch (endpoint) {
        case 'people':
          if (!people.length) {
            const people = await peopleDataFetcher('people');
            this.setState({ people });
          }
          this.setState({ currentView: 'people', isLoading: false });
          break;
        case 'planets':
          if (!planets.length) {
            const planets = await planetDataFetcher('planets');
            this.setState({ planets });
          }
          this.setState({ currentView: 'planets', isLoading: false });
          break;
        case 'vehicles':
          if (!vehicles.length) {
            const vehicles = await vehicleDataFetcher('vehicles');
            this.setState({ vehicles, currentView: 'vehicles' });
          }
          this.setState({ currentView: 'vehicles', isLoading: false });
          break;
        default:
          this.setState({ currentView: 'favorites', isLoading: false });
          break;
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { currentView, favorites, isLoading } = this.state;

    return (
      <div className="container">
        <div className="header">
          <h1 className="header-title">Swapi-Box</h1>
        </div>
        <Navbar setContainerView={this.setContainerView} />
        <Sidebar />
        {!isLoading && !currentView && (
          <div className="card-container start">Select A Category</div>
        )}
        {!isLoading && currentView === 'favorites' && !favorites.length && (
          <div className="card-container-no-favs start">
            No Favorites To Display
          </div>
        )}
        {!isLoading && currentView && (
          <CardContainer
            favoriteItem={this.favoriteItem}
            selectedGroup={this.state[currentView]}
          />
        )}
        {isLoading && <LoadingScreen />}
        <Favorites
          setContainerView={this.setContainerView}
          numberOfFavorites={favorites.length}
        />
      </div>
    );
  }
}
