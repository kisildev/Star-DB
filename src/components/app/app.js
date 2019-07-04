import React, { Component } from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import StarshipDetails from "../starship-details";

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                Here will be Star DB App!
                <Header />
                <RandomPlanet />
                <PersonDetails />
                <PlanetDetails />
                <StarshipDetails />
            </div>
        );
    }
}

