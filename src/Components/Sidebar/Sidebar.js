import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      episode: '',
      quote: '',
      releaseDate: ''
    };
  }

  componentDidMount = async () => {
    const episodeNumber = Math.floor(Math.random() * 7) + 1;
    const result = await fetch(`https://swapi.co/api/films/${episodeNumber}`);
    const response = await result.json();
    const { opening_crawl, episode_id, release_date } = response;
    const quote = opening_crawl;
    const title = response.title;
    const episode = episode_id;
    const releaseDate = release_date;
    this.setState({ title, episode, quote, releaseDate });
  };

  render() {
    const { quote, episode, title, releaseDate } = this.state;
    if (!quote) return <p className="sidebar" />;
    return (
      <div className="sidebar">
        <div className="fade" />
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>Episode {episode}</p>
              <h1>{title}</h1>
            </div>
            <p className="quote">{quote}</p>
            <p>{releaseDate}</p>
          </div>
        </section>
      </div>
    );
  }
}
