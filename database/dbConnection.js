import mongoose from 'mongoose';
import validator from "validator";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "community"
    })
    .then(() => {
        console.log("connected to database")
    })
    .catch((err) => {
        console.log(`error ${err}`);
    }) 
}