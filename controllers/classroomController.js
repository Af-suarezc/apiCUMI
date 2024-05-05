import { db } from "../connect.js";

export const roomController = (req, res)=>{
    //TODO
    const selectedOption = req.params.grado;
    console.log('Opción seleccionada:', selectedOption);
    const q ="SELECT id,classname,grado FROM classroom WHERE grado = ?";
    const values = [selectedOption];
    db.query(q, values, (error, data) => {
      if (error) {
        console.log(error);
        return error.status(500).json("Fail adding consulting class to DB");
      }
      if(data.length===0) return res.status(500).json("Grado not found");
     return res.status(200).json(data);
    });
}


export const registerClassRoom = (req, res) => {
  //TODO
  console.log("DESDE REGISTRO DE CLASE");
  const q =
    "INSERT INTO classroom (classname, horario, grado) VALUES (?, ?, ?);";
  const values = [
    req.body.classname,
    req.body.horario,
    req.body.grado
  ];
  db.query(q, values, (error, data) => {
    if (error) {
      console.log(error);
      return error.status(500).json("Fail adding user to DB");
    }
    return res.status(200).json("Se Ha Creado el Registro De La Clase Con Éxito!");
  });
};
