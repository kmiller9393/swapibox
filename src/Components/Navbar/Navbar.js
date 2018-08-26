import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      selected: ''
    };
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({ selected: event.target.title });
    this.props.setContainerView(event.target.title);
  };

  render() {
    const { selected } = this.state;
    return (
      <div className="navbar">
        <fieldset>
          <a
            onClick={this.handleClick}
            className={selected === 'people' ? 'glowBtn-active' : 'glowBtn'}
            title="people">People
          </a>
          <a
            onClick={this.handleClick}
            className={selected === 'planets' ? 'glowBtn-active' : 'glowBtn'}
            title="planets">Planets
          </a>
          <a
            onClick={this.handleClick}
            className={selected === 'vehicles' ? 'glowBtn-active' : 'glowBtn'}
            title="vehicles">Vehicles
          </a>
        </fieldset>
      </div>
    );
  }
}

Navbar.propTypes = {
  setContainerView: PropTypes.func.isRequired
};