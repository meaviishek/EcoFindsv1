import dotenv from "dotenv";
import connectDB from "./db/connect.js"

import { app,server } from "./app.js";


dotenv.config();

connectDB().then(()=>{
    server.listen(process.env.PORT||8082,()=>{
        console.log(`Server is running at port: ${process.env.PORT} ✅`);
    });
    app.on("Error",(error)=>{
        console.log(error)
    })
}).catch((err)=>{
    console.log("Connection Failed:",err);
})
