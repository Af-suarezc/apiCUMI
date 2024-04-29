// const Express = require("express");
import Express  from "express";
const app= Express();

//project routes
import authRoute  from "./routes/auth.js"
import roomRoute  from "./routes/classroom.js"
import teachersRoute  from "./routes/teachers.js"
import generalData from "./routes/generalinfo.js"
//node packages
import cookieParser from "cookie-parser";
import cors from "cors";


//middlewares
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true);
    next();
})
app.use(Express.json());
app.use(cors(
   {origin:"http://localhost:5173"}
)); //here we add our localhost
app.use(cookieParser());



app.use("/api/auth", authRoute);

app.use("/api/room", roomRoute);

app.use("/api/teachers", teachersRoute);

//endpoint for general info about the state of the db
app.use("/api/info", generalData);

app.listen(8080, ()=>{
   console.log("Hola Aquí");
})
