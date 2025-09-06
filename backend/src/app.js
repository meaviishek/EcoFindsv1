import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import user from "./routes/user/userroutes.js"
import { createServer } from "http";
import productRoutes from "./routes/product/productRoutes.js";


import passport from "passport";

const app=express()
const server =createServer(app);
app.use(passport.initialize());


app.use(cors({
    origin:true,
    credentials:true,
    exposeHeaders:["set-cookie"]
}
));

app.set("trust proxy",true)
app.use(express.json());
app.use(express.static("/public"));
app.use(cookieParser());
app.use(passport.initialize());

app.get("/",(req,res)=>{
    res.send({status:"started"});

})

app.use("/api/user/",user);
app.use("/api/products",productRoutes);



export {app,server};
