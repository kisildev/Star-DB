import React, { Component } from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ListItem from "../list-item";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import StarshipDetails from "../starship-details";

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedItem: 4
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        return (
            <div className='app'>
                Here will be Star DB App!
                <Header />
                <RandomPlanet />
                <div className="details-wrap">
                    <ListItem onItemSelected={this.onPersonSelected} />
                    <PersonDetails personId={this.state.selectedItem} />
                </div>
                <PlanetDetails />
                <StarshipDetails />
            </div>
        );
    }
}

