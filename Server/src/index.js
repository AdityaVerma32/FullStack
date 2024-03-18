import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv  from 'dotenv';


dotenv.config({
    path: './env'
})

connectDB().then(
    ()=>{
        app.on("error",(error)=>{
            console.log("ERRR index/src : ",error);
            throw error;
        })
        app.listen(process.env.PORT||8080,()=>{
            console.log("Server connected and listening on port " + process.env.PORT)
        })
    }
).catch((err)=>{
    console.log("Server Connection Failed ", err)
});