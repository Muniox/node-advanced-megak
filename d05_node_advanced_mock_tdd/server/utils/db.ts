import * as mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: process.env.DBHOST || 'localhost',
    user: process.env.DBUSER || 'root',
    database: process.env.DB || 'megak_santa_gifts',
    port: process.env.DBPORT as unknown as number || 3306,
    password: process.env.DBPASSWORD || '<3database^_^',
    namedPlaceholders: true,
    decimalNumbers: true,
});

