// create the connection with the database
import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mikaela2003*",
    database: "blog"
})