import { db } from "../connect.js";

export const registerTeacher = (req, res) => {
  //TODO
  console.log("DESDE REGISTRO DE PROFESOR");
  const { name, lastname, email, age, profession, classroomid } = req.body;
  if (!name || !lastname || !email || !age || !profession || !classroomid) {
    return res.status(400).json({ message: "Todos los campos son obligatorios." });
  }
  const q = "INSERT INTO teachers (name, lastname, email, age, profession, classroom) VALUES (?, ?, ?, ?, ?, ?);";
  const values = [req.body.name, req.body.lastname, req.body.email, req.body.age, req.body.profession, req.body.classroomid];
  db.query(q, values, (error, data) => {
    if(error){
      console.log(error);
      return err.status(500).json("Fail adding user to DB");
    }
    return res.status(200).json("Se ha creado registro en profesores");
  });
};

export const deleteTeacher = (req, res) => {
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

