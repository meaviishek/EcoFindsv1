import mongoose from "mongoose";
import { Db_Name } from "../constants.js";

const connectDB =async ()=>{
    try{
        console.log(`🔍 Connecting to: ${process.env.MongoDB_URI}/${Db_Name}`);
        const connectionInstance = await mongoose.connect(`${process.env.MongoDB_URI}`, {
            dbName: `${Db_Name}`,
            useNewUrlParser: true,
            useUnifiedTopology: true
          
        });

        console.log(`✅ Database Connected Successfully!`);
        console.log(`🖥️ DB Name: ${connectionInstance.connection.name}`);
        console.log(`📌 DB Host: ${connectionInstance.connection.host}`);

    }catch(err){
        console.log("❌ Connection Failed:", err);
        process.exit(1);
    }
}

export default connectDB;