import {createPool} from  "mysql2/promise"

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '<3database^_^',
    database: 'mega_ads',
    namedPlaceholders: true,
    decimalNumbers: true,
});