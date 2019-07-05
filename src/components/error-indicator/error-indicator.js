import React from 'react';
import './error-indicator.css';
import icon from './death-star-icon.png';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img className='error-icon' src={icon} alt="error icon"/>
            <div className="boom">BOOM!</div>
            <div>Something has gone terribly wrong</div>
            <div>(but we already sent droids to fix it)</div>
        </div>
    );
};

export default ErrorIndicator;