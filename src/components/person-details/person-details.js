import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import './person-details.css';

export default class PersonDetails extends  Component {

    swapiService = new SwapiService();

    state = {
        person: null
    };

    updatePerson() {
        const { personId } = this.props;
        if (!personId) return;

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({person});
            });

    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    render() {

        if (!this.state.person) {
            return <Spinner/>;
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
          <div className='panel details'>
              <h4 className='details-title'>{ name }</h4>
              <div className="details-img-wrap">
                  <img className="details-img" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='character' />
              </div>
              <div className="details-wrap">

                  <ul className="list-group details-info">
                      <li className="list-group-item details-info-item">
                          <span>Gender : </span>
                          <span>{ gender }</span>
                      </li>
                      <li className="list-group-item details-info-item">
                          <span>Birth Year : </span>
                          <span>{ birthYear }</span>
                      </li>
                      <li className="list-group-item details-info-item">
                          <span>Eye Color : </span>
                          <span>{ eyeColor }</span>
                      </li>
                  </ul>
              </div>
          </div>
        );
    }
}