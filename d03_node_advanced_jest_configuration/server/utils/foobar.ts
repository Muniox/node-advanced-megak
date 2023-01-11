export const buildPerson = (name: string, surname: string) => {
    if (!name || !surname) {
        throw new Error('Name and surname should not be empty.');
    }

    return {
        name,
        surname,
    }
};