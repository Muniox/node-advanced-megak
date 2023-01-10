import * as mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    database: process.env.DB,
    port: process.env.DBPORT as unknown as number,
    password: process.env.DBPASSWORD,
    namedPlaceholders: true,
    decimalNumbers: true,
});

