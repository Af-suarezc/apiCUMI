import mysql from "mysql2";


export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Andr3s1992.",
    database:"cumi"
})