import React, {useContext, useEffect, useState} from 'react';
import './Map.pcss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { SearchContext } from '../../context/searchContext';
import {SimpleAdEntity} from 'types';
import {SingleAd} from './SingleAd';

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] =  useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const data= await res.json();

            setAds(data);
            console.log(data);
        })();
    },[search]);

    return (
        <div className="map">
            <MapContainer center={[50.2655229,18.9938733]} zoom={20}>
                <TileLayer 
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                />
                {
                    ads.map(ad => (
                        <Marker position={[ad.lat, ad.lon]} key={ad.id}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    );
};