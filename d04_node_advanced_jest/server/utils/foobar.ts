export const buildPerson = (name: string, surname: string) => {
    if (!name || !surname) {
        throw new Error('Name and surname should not be empty.');
    }

    return {
        name,
        surname,
    }
};

export const getMyBodyTemperature = () :number => Math.random() * (45 - 33) + 33;