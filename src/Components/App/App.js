import React, { Component } from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import Favorites from '../Favorites/Favorites';
import { Navbar } from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header"><h1 className='header-title'>SwapiBox</h1></div>
        <Navbar />
        <Sidebar />
        <CardContainer />
        <Favorites />
      </div>
    );
  }
}

export default App;
