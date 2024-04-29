import mysql from "mysql2";


export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"INGRESAR AQUÍ TU CONTRASEÑA",
    database:"INGRESAR AQUÍ TU BASE DE DATOS"
})