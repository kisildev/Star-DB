import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator";
import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    constructor() {
        super();
        this.updatePlanet();
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        //const id = 50;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
          <div className='random-planet'>
              {errorMessage}
              {spinner}
              {content}
          </div>
        );
    }
};

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
};