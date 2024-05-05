import mysql from "mysql2";


export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"INGRESA AQUI TU CONTRASEÑA",
    database:"cumi"
})