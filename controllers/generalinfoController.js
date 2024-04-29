import { db } from "../connect.js";

export const classroomsInfo = (req, res)=>{
    //TODO
    const q =`
    SELECT grado, COUNT(*) AS cantidad
    FROM classroom
    GROUP BY grado;
    `;
    const values =[];
    db.query(q, values, (error, data) => {
      if (error) {
        console.log(error);
        return error.status(500).json("Fail adding consulting class to DB");
      }
     return res.status(200).json(data);
    });
}

export const teachersroomsInfo = (req, res)=>{
    //TODO
    const q =`SELECT classroom.grado, COUNT(teachers.id) AS cantidad_profesores
    FROM teachers
    JOIN classroom  ON teachers.classroom = classroom.id
    GROUP BY classroom.grado;`;
    const values =[];
    db.query(q, values, (error, data) => {
      if (error) {
        console.log(error);
        return error.status(500).json("Fail adding consulting class to DB");
      }
     return res.status(200).json(data);
    });
}