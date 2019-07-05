import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {}
    };

    constructor() {
        super();
        this.updatePlanet();
    };

    onPlanetLoaded = (planet) => {
        this.setState({planet});
    };

    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    };

    render() {
        const { planet : { id, name, population, rotationPeriod, diameter } } = this.state;

        return (
          <div className='random-planet'>
              <div className="planet-img-wrap">
                  <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="planet-img"/>
              </div>
              <div className="planet-info-wrap">
                  <h4>{ name }</h4>
                  <ul className='planet-info list-group'>
                      <li className="planet-info-item list-group-item">
                          <span className="planet-info-label">Population : </span>
                          <span className="planet-info-value">{ population }</span>
                      </li>
                      <li className="planet-info-item list-group-item">
                          <span className="planet-info-label">Rotation Period : </span>
                          <span className="planet-info-value">{ rotationPeriod }</span>
                      </li>
                      <li className="planet-info-item list-group-item">
                          <span className="planet-info-label">Diameter : </span>
                          <span className="planet-info-value">{ diameter }</span>
                      </li>
                  </ul>
              </div>
          </div>
        );
    }
}