import React, {SyntheticEvent, useState} from 'react';
import './AddFrom.pcss';
import {Btn} from '../common/Btn';
import {geocode} from '../../../utils/geocoding';

export const AddForm = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: ''
    });

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try{
        const {lat, lon} = await geocode(form.address);

            const res = await fetch(`http://localhost:3001/ad`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                }),
            });
            const data = await res.json();
            setId(data.id);

        } finally {
            setLoading(false);
        }

    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <h2>Trwa dodawanie ogłoszenia...</h2>;
    }

    if (id) {
       return <h2>Twoje ogłoszenie &quot;{form.name}&quot;,zostało poprawnie dodane do serwisu pod ID: {id}</h2>;
    }

    return (
        <form action="" className="add-form" onSubmit={saveAd}>
            <h1>Dodawanie ogłoszenia</h1>
            <p>
                <label htmlFor="name">
                    Nazwa: <br/>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        maxLength={99}
                        required
                        value={form.name}
                        onChange={e => updateForm('name', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label htmlFor="description">
                    Opis: <br/>
                    <textarea
                        name="description"
                        id="description"
                        maxLength={999}
                        value={form.description}
                        onChange={e => updateForm('description', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label htmlFor="price">
                    Cena: <br/>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        maxLength={99}
                        value={form.price}
                        onChange={e => updateForm('price', Number(e.target.value))}
                    /> <br/>
                    <small>Pozostaw zero w polu, aby nie wyświetlać ceny</small>
                </label>
            </p>
            <p>
                <label htmlFor="url">
                    Adres URL: <br/>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        maxLength={99}
                        value={form.url}
                        onChange={e => updateForm('url', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label htmlFor="address">
                    Adres fizyczny na mapie: <br/>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        maxLength={99}
                        required
                        value={form.address}
                        onChange={e => updateForm('address', e.target.value)}
                    />
                </label>
            </p>
            <Btn text="Zapisz"/>
        </form>
    );
};


