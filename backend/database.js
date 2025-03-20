import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { config } from "./src/config.js";

//const URI = "";

mongoose.connect(config.db.URI);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("DB is connected");
});

connection.on("disconnected", () => {
    console.log("DB is disconnected");
});

connection.on("error", (error) => {
    console.log("Error found"+ error);
});