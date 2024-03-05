// create the connection with the database
// import mysql from "mysql";
// import dotenv from "dotenv";

// dotenv.config('server\src\.env');

// export const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database:process.env.DB_DATABASE
// })

// db.connect((error) => {
//     if (error) {
//       console.error('Error connecting to MySQL database:', error);
//     } else {
//       console.log('Connected to MySQL database!');
//     }
//   });

import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });

class DbConnection {
    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });
    }

    connect() {
        this.connection.connect((error) => {
            if (error) {
                console.error('Error connecting to MySQL database:', error);
            } else {
                console.log('Connected to MySQL database!');
            }
        });
    }

    getConnection() {
         return this.connection;
    }

    closeConnection() {
        this.connection.end((error) => {
            if (error) {
                console.error('Error closing connection to MySQL database:', error);
            } else {
                console.log('Connection to MySQL database closed!');
            }
        });
    }
}

export default DbConnection;