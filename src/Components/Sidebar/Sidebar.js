import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      quote: ''
    }
  }
  componentDidMount = () => {
    fetch(`https://swapi.co/api/films/${Math.floor(Math.random() * (7)) + 1}`)
    .then(response => response.json())
    .then(response => {
      const quote = response.opening_crawl;
      this.setState({ quote });
      })
    };

  render() {
    return (
    <div className="sidebar">{this.state.quote}
    </div>
    );
  }
}