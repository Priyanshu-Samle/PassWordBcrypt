import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { error } from "console";
import route from "./Route/userRoute.js";

const app = express();

app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT
const URL = process.env.MONGO_URL

mongoose.connect(URL).then((req,res)=>{
    app.listen(PORT,()=>{
        console.log("Db connection is successfull");
    })
    
}).catch((error)=>{
     console.log(error);
})

app.use("/api/database",route)