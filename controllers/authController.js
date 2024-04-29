import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //TODO
  console.log("DESDE REGISTRO EN AUTENTICACION");

  //VALDIATE IF THE USER EXIST
  const q = "SELECT * FROM users WHERE email=?";

  db.query(q, [req.body.email], (error, data) => {
    if (error){
        console.log(error)
        return res.status(500).json(error);

    } 
    if (data.length) return res.status(409).json("User already exist");
    //CREATE A USER
    //the pass would be encrypted
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(req.body.password, salt);
    const qi= "INSERT INTO users (username, email, password, name) VALUE (?)";
    const values = [req.body.username, req.body.email, hashedPass, req.body.name]
    // const values = [req.body.username, req.body.email, req.body.password, req.body.name]
    db.query(qi, [values], (err, data)=>{
        if(err){
            console.log(error);
            return err.status(500).json("Fail adding user to DB");
        }
        return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  //TODO
  console.log("DESDE EL LOGIN DE AUTENTICACION");
  const q = "SELECT * FROM users WHERE email=?";
  db.query(q, [req.body.email], (error, data)=>{
    if(error) return res.status(500).json(err);
    if(data.length===0) return res.status(404).json("User not found");

    const checkPass = bcrypt.compareSync(req.body.password, data[0].password);
    if(!checkPass) return res.status(400).json("Wrong Pass or User Name");

    const {password, ...others}=data[0];


    const token = jwt.sign({id:data[0].id}, "secretkey");
    console.log(others)
    res.cookie("accessToken", token, {
        httpOnly:true,
    }).status(200).json(others)

  })
};

export const logout = (req, res) => {
  //TODO
  console.log("DESDE EL LOGOUT DE AUTENTICACION");
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logged out");
};
