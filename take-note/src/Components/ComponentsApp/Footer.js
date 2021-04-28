import React from 'react';
import take from '../../image/take.png';
import '../ComponentsApp/Footer.css';

export const Footer = () => {
    return (
        <footer>
            <img className="logo" src={take} alt="take"></img>
        </footer>
    )
}