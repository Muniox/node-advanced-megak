import { createContext } from 'react';

export const SearchContext = createContext({
    search: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setSearch: (s: string) => {},
});