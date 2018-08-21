import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      episode: null,
      quote: '',
      releaseDate: ''
    };
  }
  componentDidMount = () => {
    fetch(`https://swapi.co/api/films/${Math.floor(Math.random() * 7) + 1}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        const quote = response.opening_crawl;
        const title = response.title;
        const episode = response.episode_id;
<<<<<<< HEAD
        const releaseDate = response.release_date;
        this.setState({ title, episode, quote, releaseDate });
      });
=======
        this.setState({ title, episode, quote });
      })
      .catch(error => console.log('error'));
>>>>>>> Add style to favorites and navbar components
  };

  render() {
    if (!this.state.quote) return <p className="sidebar" />;
    return (
      <div className="sidebar">
        <div className="fade" />
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>Episode {this.state.episode}</p>
              <h1>{this.state.title}</h1>
            </div>
            <p className="quote">{this.state.quote}</p>
            <p>{this.state.releaseDate}</p>
          </div>
        </section>
      </div>
    );
  }
}
