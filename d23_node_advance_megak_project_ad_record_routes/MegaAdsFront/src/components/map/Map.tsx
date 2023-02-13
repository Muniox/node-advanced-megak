import React, { useContext, useEffect } from 'react';
import './Map.pcss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { SearchContext } from '../../context/searchContext';

export const Map = () => {
    const {search} = useContext(SearchContext);

    useEffect(() => {
        console.log('Make request to search for', search);
    },[search]);

    return (
        <div className="map">
            <h1>Search for: {search}</h1>
            <MapContainer center={[50.2655229,18.9938733]} zoom={20}>
                <TileLayer 
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[50.2655229,18.9938733]}>
                    <Popup>
                        <h2>IT.focus</h2>
                        <p>Super firma programistyczna!</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};