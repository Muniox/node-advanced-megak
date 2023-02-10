import React from 'react';
import './Header.pcss';
import { Btn } from '../common/Btn';

export const Header = () => (
    <header>
        <h1>
            <span>Mega</span> Ogłoszenia
        </h1>
        <Btn text='dodaj ogłoszenie'/>
        <div className="search">
            <input type="text"/>
            <Btn text='Szukaj'/>
        </div>
    </header>
);