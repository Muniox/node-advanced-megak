import React, { SyntheticEvent, useContext, useState } from 'react';
import './Header.pcss';
import { Btn } from '../common/Btn';
import { SearchContext } from '../../context/searchContext';

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    return (
        <header>
            <h1>
                <span>Mega</span> Ogłoszenia
            </h1>
            <Btn text='dodaj ogłoszenie'/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input 
                type='text'
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                />
                <Btn text='Szukaj'/>
            </form>
        </header>
    );
};