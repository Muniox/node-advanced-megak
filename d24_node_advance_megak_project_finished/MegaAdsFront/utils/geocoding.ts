interface Address {
    lat: number;
    lon: number;
}

export const geocode = async (address: string): Promise<Address> => {
    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const geoData = await geoRes.json();
    console.log(geoData);

    const lat = parseFloat(geoData[0].lat);
    const lon = parseFloat(geoData[0].lon);
    return {lat, lon};
};