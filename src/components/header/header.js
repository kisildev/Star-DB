import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div>Logo</div>
                <nav>
                    <ul>
                        <li>Planets</li>
                        <li>People</li>
                        <li>Starships</li>
                    </ul>
                </nav>
            </header>
        );
    }
}