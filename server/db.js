// create the connection with the database
import mysql from "mysql";


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mikaela2003*",
    database: "blog"
})

db.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database!');
    }
  });